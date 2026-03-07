/*
 *
 * Checkout
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';
import Input from '../../components/Common/Input';
import Checkbox from '../../components/Common/Checkbox';
import Button from '../../components/Common/Button';

const Checkout = ({
    checkoutFormData,
    formErrors,
    checkoutChange,
    placeOrder,
    cartItems,
    cartTotal,
    shopName
}) => {
    const handleSubmit = event => {
        event.preventDefault();
        checkoutFormData.total = cartTotal;
        checkoutFormData.store = shopName;
        console.log('Place Order action dispatched with formData:', checkoutFormData);
        placeOrder();
    };
    return (
        <div className='checkout'>
            <form onSubmit={handleSubmit} noValidate>
                <Row>
                    <Col xs='12' lg='8'>
                        <section className='checkout-section'>
                            <h3>User Information</h3>
                            <Row>
                                <Col xs='12' md='6'>
                                    <Input
                                        type='text'
                                        label='First Name'
                                        name='firstName'
                                        value={checkoutFormData.firstName}
                                        placeholder={'Please Enter Your First Name'}
                                        error={formErrors.firstName}
                                        onInputChange={(name, value) => checkoutChange(name, value)}
                                    />
                                </Col>
                                <Col xs='12' md='6'>
                                    <Input
                                        type='text'
                                        label='Last Name'
                                        name='lastName'
                                        placeholder={'Please Enter Your Last Name'}
                                        value={checkoutFormData.lastName}
                                        error={formErrors.lastName}
                                        onInputChange={(name, value) => checkoutChange(name, value)}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col xs='12' md='6'>
                                    <Input
                                        type='text'
                                        placeholder={'Please Enter Your Email'}
                                        label='Email'
                                        name='email'
                                        value={checkoutFormData.email}
                                        error={formErrors.email}
                                        onInputChange={(name, value) => checkoutChange(name, value)}
                                    />
                                </Col>
                                <Col xs='12' md='6'>
                                    <Input
                                        type='text'
                                        label='Phone'
                                        name='phone'
                                        placeholder={'Please Enter Your Phone Number'}
                                        value={checkoutFormData.phone}
                                        error={formErrors.phone}
                                        onInputChange={(name, value) => checkoutChange(name, value)}
                                    />
                                </Col>
                            </Row>
                        </section>

                        <section className='checkout-section'>
                            <h3>Shipping Address</h3>
                            <Row>
                                <Col xs='12'>
                                    <Input
                                        type='text'
                                        label='Address'
                                        name='address'
                                        value={checkoutFormData.address}
                                        placeholder={'Please Enter Your Shipping Address'}
                                        error={formErrors.address}
                                        onInputChange={(name, value) => checkoutChange(name, value)}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col xs='12' md='6'>
                                    <Input
                                        type='text'
                                        label='City'
                                        name='city'
                                        value={checkoutFormData.city}
                                        placeholder={'Please Enter Your City'}
                                        error={formErrors.city}
                                        onInputChange={(name, value) => checkoutChange(name, value)}
                                    />
                                </Col>
                                <Col xs='12' md='6'>
                                    <Input
                                        type='text'
                                        label='State'
                                        name='state'
                                        value={checkoutFormData.state}
                                        placeholder={'Please Enter Your State'}
                                        error={formErrors.state}
                                        onInputChange={(name, value) => checkoutChange(name, value)}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col xs='12' md='6'>
                                    <Input
                                        type='text'
                                        label='Country'
                                        name='country'
                                        value={checkoutFormData.country}
                                        placeholder={'Please Enter Your Country'}
                                        error={formErrors.country}
                                        onInputChange={(name, value) => checkoutChange(name, value)}
                                    />
                                </Col>
                                <Col xs='12' md='6'>
                                    <Input
                                        type='text'
                                        label='Pincode'
                                        name='pincode'
                                        value={checkoutFormData.pincode}
                                        placeholder={'Please Enter Your Pincode'}
                                        error={formErrors.pincode}
                                        onInputChange={(name, value) => checkoutChange(name, value)}
                                    />
                                </Col>
                            </Row>
                        </section>

                        <section className='checkout-section'>
                            <h3>Payment Method</h3>
                            <Row>
                                <Col xs='12'>
                                    <Checkbox
                                        label='Cash on Delivery'
                                        name='paymentMethod'
                                        value='cod'
                                        checked={checkoutFormData.paymentMethod === 'cod'}
                                        onCheckboxChange={() => checkoutChange('paymentMethod', 'cod')}
                                    />
                                </Col>
                                <Col xs='12'>
                                    <Checkbox
                                        label='Credit / Debit Card'
                                        name='paymentMethod'
                                        value='card'
                                        checked={checkoutFormData.paymentMethod === 'card'}
                                        onCheckboxChange={() => checkoutChange('paymentMethod', 'card')}
                                    />
                                </Col>
                            </Row>

                            {checkoutFormData.paymentMethod === 'card' && (
                                <Row>
                                    <Col xs='12'>
                                        <Input
                                            type='text'
                                            label='Card Number'
                                            name='cardNumber'
                                            value={checkoutFormData.cardNumber}
                                            error={formErrors.cardNumber}
                                            onInputChange={(name, value) => checkoutChange(name, value)}
                                        />
                                    </Col>
                                    <Col xs='12' md='6'>
                                        <Input
                                            type='text'
                                            label='Expiry'
                                            name='expiry'
                                            value={checkoutFormData.expiry}
                                            error={formErrors.expiry}
                                            onInputChange={(name, value) => checkoutChange(name, value)}
                                        />
                                    </Col>
                                    <Col xs='12' md='6'>
                                        <Input
                                            type='password'
                                            label='CVV'
                                            name='cvv'
                                            value={checkoutFormData.cvv}
                                            error={formErrors.cvv}
                                            onInputChange={(name, value) => checkoutChange(name, value)}
                                        />
                                    </Col>
                                </Row>
                            )}
                        </section>

                        <div className='checkout-actions'>
                            <Button type='submit' variant='primary' text='Place Order' />
                        </div>
                    </Col>

                    <Col xs='12' lg='4'>
                        <aside className='order-summary checkout-section'>
                            <h3>Order Summary</h3>

                            {cartItems && cartItems.length > 0 ? (
                                cartItems.map((item, index) => (
                                    <div
                                        key={item._id || item.id || `${item.name}-${index}`}
                                        className='order-summary-item'
                                    >
                                        <p>{item.name}</p>
                                        <p>Qty: {item.quantity}</p>
                                        <p>Sub Total: ${item.price}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No items in cart.</p>
                            )}

                            <hr />
                            <h4>Total: ${cartTotal}</h4>
                        </aside>
                    </Col>
                </Row>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    const checkoutState = state?.checkout || {};
    const cartState = state?.cart || {};
    return {
        shopName: state?.shop?.shopName || '',
        checkoutFormData: checkoutState.checkoutFormData,
        formErrors: checkoutState.formErrors || {},
        cartItems: cartState.cartItems || [],
        cartTotal: cartState.cartTotal || 0,
    };
};


export default connect(mapStateToProps, actions)(Checkout);