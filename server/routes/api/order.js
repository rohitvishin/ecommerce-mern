const express = require('express');
const router = express.Router();
const Mongoose = require('mongoose');

// Bring in Models & Utils
const Order = require('../../models/order');
const Cart = require('../../models/cart');
const Product = require('../../models/product');
const Merchant = require('../../models/merchant');
const auth = require('../../middleware/auth');
// const mailgun = require('../../services/mailgun');
const googlemail = require('../../services/googlemail');
const store = require('../../utils/store');
const { ROLES, CART_ITEM_STATUS } = require('../../constants');
const PDFDocument = require('pdfkit');
const Logs = require('../../models/logs');

const createLog = (req, model, action, detail) => {
  try {
    const userIdentifier = (req && (req.user && req.user.email)) || (req && req.body && req.body.email) || null;
    const log = new Logs({
      user: userIdentifier,
      model,
      action,
      detail: typeof detail === 'string' ? detail : JSON.stringify(detail),
      updated: new Date()
    });
    log.save().catch(() => { });
  } catch (err) {
    // swallow logging errors to avoid interfering with API flow
  }
};
router.post('/add', auth, async (req, res) => {
  try {
    const cart = req.body.cartId;
    const total = req.body.total;
    const user = req.user._id;

    const order = new Order({
      cart,
      user,
      total
    });

    const orderDoc = await order.save();

    const cartDoc = await Cart.findById(orderDoc.cart._id).populate({
      path: 'products.product',
      populate: {
        path: 'brand'
      }
    });

    const newOrder = {
      _id: orderDoc._id,
      created: orderDoc.created,
      user: orderDoc.user,
      total: orderDoc.total,
      products: cartDoc.products
    };

    await googlemail.sendEmail(order.user.email, 'order-confirmation', newOrder);

    res.status(200).json({
      success: true,
      message: `Your order has been placed successfully!`,
      order: { _id: orderDoc._id }
    });
  } catch (error) {
    res.status(400).json({
      error: error.message || 'Your request could not be processed. Please try again.'
    });
  }
});

router.post('/checkout', auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      country,
      pincode,
      paymentMethod,
      total,
      store
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      return res
        .status(400)
        .json({ error: 'User information is required.' });
    }

    if (!address || !city || !state || !country || !pincode) {
      return res
        .status(400)
        .json({ error: 'Shipping address is required.' });
    }

    if (!paymentMethod) {
      return res
        .status(400)
        .json({ error: 'Payment method is required.' });
    }

    if (!total || total <= 0) {
      return res.status(400).json({ error: 'Invalid order total.' });
    }

    // Get user's recent cart
    const cart = await Cart.findOne({ user: userId }).sort({ created: -1 });
    if (!cart || cart.products.length === 0) {
      return res.status(400).json({ error: 'Your cart is empty.' });
    }

    // Create order
    const newOrder = {
      user: userId,
      cart: cart._id,
      total: total,
      store: store,
      address: {
        name: `${firstName} ${lastName}`,
        email: email,
        phone: phone,
        address: address,
        city: city,
        state: state,
        country: country,
        pincode: pincode
      },
      paymentMethod: paymentMethod,
      paymentStatus: 'pending'
    };
    const order = new Order(newOrder);

    await order.save();

    // TODO: Handle payment processing based on paymentMethod
    // if (paymentMethod === 'card') {
    //   // Process card payment via Stripe/Razorpay
    // } else if (paymentMethod === 'cod') {
    //   // Mark as pending payment on delivery
    // }
    // send order confirmation mail
    await googlemail.sendEmail(email, 'order-confirmation', newOrder);

    res.status(201).json({
      success: true,
      message: 'Order placed successfully.',
      order: order
    });
  } catch (error) {
    createLog(req, 'Order', 'Checkout Error', { error: error.message, stack: error.stack });
    console.error('Checkout error:', error);
    res.status(500).json({
      error: error.message || 'Your order could not be processed. Please try again.'
    });
  }
});

// search orders api
router.get('/search', auth, async (req, res) => {
  try {
    const { search } = req.query;

    if (!Mongoose.Types.ObjectId.isValid(search)) {
      return res.status(200).json({
        orders: []
      });
    }

    let ordersDoc = null;

    if (req.user.role === ROLES.Admin) {
      ordersDoc = await Order.find({
        _id: Mongoose.Types.ObjectId(search)
      }).populate({
        path: 'cart',
        populate: {
          path: 'products.product',
          populate: {
            path: 'brand'
          }
        }
      });
    } else {
      const user = req.user._id;
      ordersDoc = await Order.find({
        _id: Mongoose.Types.ObjectId(search),
        user
      }).populate({
        path: 'cart',
        populate: {
          path: 'products.product',
          populate: {
            path: 'brand'
          }
        }
      });
    }

    ordersDoc = ordersDoc.filter(order => order.cart);

    if (ordersDoc.length > 0) {
      const newOrders = ordersDoc.map(o => {
        return {
          _id: o._id,
          total: parseFloat(Number(o.total.toFixed(2))),
          created: o.created,
          products: o.cart?.products
        };
      });

      let orders = newOrders.map(o => store.caculateTaxAmount(o));
      orders.sort((a, b) => b.created - a.created);
      res.status(200).json({
        orders
      });
    } else {
      res.status(200).json({
        orders: []
      });
    }
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

// fetch orders api
router.get('/', auth, async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const ordersDoc = await Order.find()
      .sort('-created')
      .populate({
        path: 'cart',
        populate: {
          path: 'products.product',
          populate: {
            path: 'brand'
          }
        }
      })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Order.countDocuments();
    const orders = store.formatOrders(ordersDoc);

    res.status(200).json({
      orders,
      totalPages: Math.ceil(count / limit),
      currentPage: Number(page),
      count
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

// fetch my orders api
router.get('/storeOrder', auth, async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const store = req.query.store;
    const ordersDoc = await Order.find({ store: store })
      .sort('-created')
      .populate({
        path: 'cart',
        populate: {
          path: 'products.product',
          populate: {
            path: 'brand'
          }
        }
      })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Order.countDocuments({ store: store });
    const orders = store.formatOrders(ordersDoc);

    res.status(200).json({
      orders,
      totalPages: Math.ceil(count / limit),
      currentPage: Number(page),
      count
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});
// fetch my orders api
router.get('/me', auth, async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    if (req.user.role === ROLES.Merchant) {
      const merchantId = req.user.merchant;
      const storeName = await Merchant.findById(merchantId).select('brandName');
      const query = { store: storeName.brandName };
      const ordersDoc = await Order.find(query)
        .sort('-created')
        .populate({
          path: 'cart',
          populate: {
            path: 'products.product',
            populate: {
              path: 'brand'
            }
          }
        })
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
      const count = await Order.countDocuments(query);
      const orders = store.formatOrders(ordersDoc);
      res.status(200).json({
        orders,
        totalPages: Math.ceil(count / limit),
        currentPage: Number(page),
        count
      });
    } else {
      const user = req.user._id;
      const query = { user };
      const ordersDoc = await Order.find(query)
        .sort('-created')
        .populate({
          path: 'cart',
          populate: {
            path: 'products.product',
            populate: {
              path: 'brand'
            }
          }
        })
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
      const count = await Order.countDocuments(query);
      const orders = store.formatOrders(ordersDoc);
      res.status(200).json({
        orders,
        totalPages: Math.ceil(count / limit),
        currentPage: Number(page),
        count
      });
    }




  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

// fetch order api
router.get('/:orderId', auth, async (req, res) => {
  try {
    const orderId = req.params.orderId;

    let orderDoc = null;

    if (req.user.role === ROLES.Admin || req.user.role === ROLES.Merchant) {
      orderDoc = await Order.findOne({ _id: orderId }).populate({
        path: 'cart',
        populate: {
          path: 'products.product',
          populate: {
            path: 'brand'
          }
        }
      });
    } else {
      const user = req.user._id;
      orderDoc = await Order.findOne({ _id: orderId, user }).populate({
        path: 'cart',
        populate: {
          path: 'products.product',
          populate: {
            path: 'brand'
          }
        }
      });
    }

    if (!orderDoc || !orderDoc.cart) {
      return res.status(404).json({
        message: `Cannot find order with the id: ${orderId}.`
      });
    }

    let order = {
      _id: orderDoc._id,
      total: orderDoc.total,
      created: orderDoc.created,
      totalTax: 0,
      products: orderDoc?.cart?.products,
      cartId: orderDoc.cart._id,
      customer: orderDoc.address ? orderDoc.address : null,
    };

    order = store.caculateTaxAmount(order);

    res.status(200).json({
      order
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

// generate invoice PDF for an order
router.get('/:orderId/invoice', auth, async (req, res) => {
  try {
    const orderId = req.params.orderId;

    let orderDoc = null;

    if (req.user.role === ROLES.Admin) {
      orderDoc = await Order.findOne({ _id: orderId }).populate({
        path: 'cart',
        populate: {
          path: 'products.product',
          populate: {
            path: 'brand'
          }
        }
      });
    } else {
      const user = req.user._id;
      orderDoc = await Order.findOne({ _id: orderId, user }).populate({
        path: 'cart',
        populate: {
          path: 'products.product',
          populate: {
            path: 'brand'
          }
        }
      });
    }

    if (!orderDoc || !orderDoc.cart) {
      return res.status(404).json({
        message: `Cannot find order with the id: ${orderId}.`
      });
    }

    let order = {
      _id: orderDoc._id,
      total: orderDoc.total,
      created: orderDoc.created,
      totalTax: 0,
      products: orderDoc?.cart?.products,
      cartId: orderDoc.cart._id
    };

    order = store.caculateTaxAmount(order);

    const doc = new PDFDocument({ size: 'A4', margin: 50 });

    res.setHeader('Content-disposition', `attachment; filename=invoice-${order._id}.pdf`);
    res.setHeader('Content-type', 'application/pdf');

    doc.pipe(res);

    const fmt = v => `$${Number(v || 0).toFixed(2)}`;

    // Store name (from product.store if available)
    const storeName = orderDoc.store || 'Store';

    // Header
    doc.fontSize(18).text(storeName, { align: 'left' });
    doc.fontSize(12).text('Invoice', { align: 'right' });
    doc.moveDown();

    // Order meta
    doc.fontSize(10).text(`Order #: ${order._id}`);
    doc.text(`Date: ${new Date(order.created).toLocaleString()}`);
    doc.moveDown();

    // Customer details (prefer order.address)
    doc.fontSize(12).text('Bill To:');
    if (orderDoc.address) {
      const a = orderDoc.address;
      if (a.name) doc.text(a.name);
      if (a.email) doc.text(a.email);
      if (a.phone) doc.text(a.phone);
      const addr = [a.address, a.city, a.state, a.country, a.pincode]
        .filter(Boolean)
        .join(', ');
      if (addr) doc.text(addr);
    } else if (order.user && order.user.email) {
      doc.text(order.user.email);
    }

    doc.moveDown();

    // Items table header
    doc.fontSize(12).text('Items', { underline: true });
    doc.moveDown(0.5);

    const tableTop = doc.y;
    const itemX = 50;
    const qtyX = 330;
    const priceX = 380;
    const totalX = 460;

    doc.fontSize(10).text('Product', itemX, tableTop);
    doc.text('Qty', qtyX, tableTop);
    doc.text('Price', priceX, tableTop);
    doc.text('Total', totalX, tableTop);

    doc.moveDown(0.5);

    // Items
    if (order.products && order.products.length > 0) {
      let y = doc.y;
      order.products.forEach(item => {
        const product = item.product || {};
        const name = product.name || product.title || 'Product';
        const qty = item.quantity || 1;
        const price = item.price || product.price || 0;
        const lineTotal = Number((price * qty).toFixed(2));

        doc.fontSize(10).text(name, itemX, y, { width: 260 });
        doc.text(String(qty), qtyX, y);
        doc.text(fmt(price), priceX, y);
        doc.text(fmt(lineTotal), totalX, y);

        y += 18;
      });

      doc.moveTo(itemX, y + 4).lineTo(totalX + 80, y + 4).stroke();
      doc.y = y + 12;
    }

    // Totals
    const subtotal = Number(order.total ? Number(order.total).toFixed(2) : 0);
    if (order.totalTax) {
      doc.fontSize(10).text(`Subtotal: ${fmt(subtotal)}`, { align: 'right' });
      doc.text(`Tax: ${fmt(order.totalTax)}`, { align: 'right' });
    } else {
      doc.fontSize(10).text(`Subtotal: ${fmt(subtotal)}`, { align: 'right' });
    }

    const total = Number(order.totalWithTax ? Number(order.totalWithTax).toFixed(2) : subtotal);
    doc.fontSize(12).text(`Total: ${fmt(total)}`, { align: 'right' });

    doc.end();
  } catch (error) {
    console.error('Invoice generation error:', error);
    res.status(500).json({
      error: 'Invoice could not be generated. Please try again.'
    });
  }
});

router.delete('/cancel/:orderId', auth, async (req, res) => {
  try {
    const orderId = req.params.orderId;

    const order = await Order.findOne({ _id: orderId });
    const foundCart = await Cart.findOne({ _id: order.cart });

    increaseQuantity(foundCart.products);

    await Order.deleteOne({ _id: orderId });
    await Cart.deleteOne({ _id: order.cart });

    res.status(200).json({
      success: true
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

router.put('/status/item/:itemId', auth, async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const orderId = req.body.orderId;
    const cartId = req.body.cartId;
    const status = req.body.status || CART_ITEM_STATUS.Cancelled;

    const foundCart = await Cart.findOne({ 'products._id': itemId });
    const foundCartProduct = foundCart.products.find(p => p._id == itemId);

    await Cart.updateOne(
      { 'products._id': itemId },
      {
        'products.$.status': status
      }
    );

    if (status === CART_ITEM_STATUS.Cancelled) {
      await Product.updateOne(
        { _id: foundCartProduct.product },
        { $inc: { quantity: foundCartProduct.quantity } }
      );

      const cart = await Cart.findOne({ _id: cartId });
      const items = cart.products.filter(
        item => item.status === CART_ITEM_STATUS.Cancelled
      );

      // All items are cancelled => Cancel order
      if (cart.products.length === items.length) {
        // notify customer about full order cancellation
        try {
          const orderDoc = await Order.findById(orderId).select('address');
          console.log(orderDoc);
          if (orderDoc && orderDoc.address) {
            await googlemail.sendEmail(
              orderDoc.address.email,
              'item-cancelled',
              process.env.CLIENT_URL,
              { order: orderDoc, item: foundCartProduct }
            );
          }
        } catch (err) {
          console.error('Email error:', err);
        }

        await Order.deleteOne({ _id: orderId });
        await Cart.deleteOne({ _id: cartId });

        return res.status(200).json({
          success: true,
          orderCancelled: true,
          message: `${req.user.role === ROLES.Admin ? 'Order' : 'Your order'
            } has been cancelled successfully`
        });
      }
      // send mail to customer about order cancellation of this item
      try {
        const orderDoc = await Order.findById(orderId).populate('user');
        let productDoc = null;
        try {
          productDoc = await Product.findById(foundCartProduct.product);
        } catch (e) {
          // ignore
        }
        if (orderDoc && orderDoc.user && orderDoc.user.email) {
          await googlemail.sendEmail(
            orderDoc.user.email,
            'item-cancelled',
            process.env.CLIENT_URL,
            { order: orderDoc, item: { ...foundCartProduct.toObject ? foundCartProduct.toObject() : foundCartProduct, product: productDoc } }
          );
        }
      } catch (err) {
        console.error('Email error:', err);
      }

      return res.status(200).json({
        success: true,
        message: 'Item has been cancelled successfully!'
      });
    }
    // sent mail to customer about item status update
    try {
      const orderDoc = await Order.findById(orderId).populate('user');
      let productDoc = null;
      try {
        productDoc = await Product.findById(foundCartProduct.product);
      } catch (e) {
        // ignore
      }
      if (orderDoc && orderDoc.user && orderDoc.user.email) {
        await googlemail.sendEmail(
          orderDoc.user.email,
          'item-status-update',
          process.env.CLIENT_URL,
          { order: orderDoc, item: { ...foundCartProduct.toObject ? foundCartProduct.toObject() : foundCartProduct, product: productDoc }, status }
        );
      }
    } catch (err) {
      console.error('Email error:', err);
    }

    res.status(200).json({
      success: true,
      message: 'Item status has been updated successfully!'
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

const increaseQuantity = products => {
  let bulkOptions = products.map(item => {
    return {
      updateOne: {
        filter: { _id: item.product },
        update: { $inc: { quantity: item.quantity } }
      }
    };
  });

  Product.bulkWrite(bulkOptions);
};

module.exports = router;
