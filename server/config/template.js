exports.resetEmail = (host, resetToken) => {
  const message = {
    subject: 'Reset Password',
    text:
      `${'You are receiving this because you have requested to reset your password for your account.\n\n' +
      'Please click on the following link, or paste this into your browser to complete the process:\n\n'}${host}/reset-password/${resetToken}\n\n` +
      `If you did not request this, please ignore this email and your password will remain unchanged.\n`
  };

  return message;
};

exports.confirmResetPasswordEmail = () => {
  const message = {
    subject: 'Password Changed',
    text:
      `You are receiving this email because you changed your password. \n\n` +
      `If you did not request this change, please contact us immediately.`
  };

  return message;
};

exports.merchantSignup = (host, { resetToken, email }) => {
  const message = {
    subject: 'Merchant Registration',
    text: `${'Congratulations! Your application has been accepted. Please complete your Merchant account signup by clicking on the link below. \n\n' +
      'Please click on the following link, or paste this into your browser to complete the process:\n\n'}${host}/merchant-signup/${resetToken}?email=${email}\n\n`
  };

  return message;
};

exports.merchantWelcome = (host, name) => {
  const message = {
    subject: 'Merchant Registration',
    text:
      `Hi ${name}! Congratulations! Your application for merchant account has been accepted. \n\n` +
      `Your store link is ${host}/${name}\n\n` +
      `Please sign in with your login credentials and you will be able to see your store dashboard.`
  };

  return message;
};

exports.productActivatedEmail = (host, productName) => {
  const message = {
    subject: 'Product Activated',
    text:
      `Hi! Your product ${productName.name} has been activated by admin and is now live on your store. \n\n` +
      `Your product link ${host}/product/${productName.slug} \n\n`
  };

  return message;
};
exports.signupEmail = (host, name) => {
  const message = {
    subject: `Account Registration - ${name.storeId}`,
    text: `Hi ${name.firstName} ${name.lastName}! Thank you for creating an account with us!. \n\n` +
      `Please click on the following link, or paste this into your browser to browse the products:\n\n` +
      `${host}/${name.storeId}\n\n` +
      `If you did not request this, please ignore this email and your account will remain unchanged.\n`
  };

  return message;
};

exports.newsletterSubscriptionEmail = () => {
  const message = {
    subject: 'Newsletter Subscription',
    text:
      `You are receiving this email because you subscribed to our newsletter. \n\n` +
      `If you did not request this change, please contact us immediately.`
  };

  return message;
};

exports.contactEmail = () => {
  const message = {
    subject: 'Contact Us',
    text: `We received your message! Our team will contact you soon. \n\n`
  };

  return message;
};

exports.merchantApplicationEmail = (host) => {
  const message = {
    subject: `Sell on ${host}`,
    text: `We received your request! Our team will contact you soon. \n\n`
  };

  return message;
};

exports.merchantDeactivateAccount = (host, name) => {
  const message = {
    subject: `Merchant account on ${host}`,
    text:
      `Your ${name} merchant account has been disabled. \n\n` +
      `Please contact admin to request access again.`
  };

  return message;
};

exports.orderConfirmationEmail = order => {
  const message = {
    subject: `Order Confirmation ${order._id}`,
    text:
      `Hi ${order.address.name}! Thank you for your order!. \n\n` +
      `We've received your order and will contact you as soon as your package is shipped. \n\n`
  };

  return message;
};

exports.itemCancellationEmail = (host, { order, item }) => {
  const itemName = item && (item.name || (item.product && (item.product.name || item.product.title))) || 'an item';
  const message = {
    subject: `Item Cancelled - Order ${order._id}`,
    text:
      `Hi ${order.address && order.address.name ? order.address.name : ''}!\n\n` +
      `We wanted to let you know that ${itemName} from your order ${order._id} has been cancelled.\n\n` +
      `If you have any questions, please contact us.`
  };

  return message;
};

exports.itemStatusUpdateEmail = (host, { order, item, status }) => {
  const itemName = item && (item.name || (item.product && (item.product.name || item.product.title))) || 'an item';
  const message = {
    subject: `Item Status Updated - Order ${order._id}`,
    text:
      `Hi ${order.address && order.address.name ? order.address.name : ''}!\n\n` +
      `The status of ${itemName} in your order ${order._id} has been updated to: ${status}.\n\n` +
      `If you have any questions, please contact us.`
  };

  return message;
};
