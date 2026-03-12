/*
 *
 * Checkout
 *
 */

import React from 'react';
import { Row, Col } from 'reactstrap';

const Checkout = () => {
    return (
        <div className='checkout'>
            <form noValidate>
                <Row>
                    <Col xs='12' lg='8'>
                        <section className='checkout-section'>
                            <h3>User Information</h3>
                            <Row>
                                <Col xs='12' md='6'>
                                    <label>First Name</label>
                                    <input type='text' name='firstName' placeholder='Please Enter Your First Name' />
                                </Col>
                                <Col xs='12' md='6'>
                                    <label>Last Name</label>
                                    <input type='text' name='lastName' placeholder='Please Enter Your Last Name' />
                                </Col>
                            </Row>

                            <Row>
                                <Col xs='12' md='6'>
                                    <label>Email</label>
                                    <input type='text' name='email' placeholder='Please Enter Your Email' />
                                </Col>
                                <Col xs='12' md='6'>
                                    <label>Phone</label>
                                    <input type='text' name='phone' placeholder='Please Enter Your Phone Number' />
                                </Col>
                            </Row>
                        </section>

                        <section className='checkout-section'>
                            <h3>Shipping Address</h3>
                            <Row>
                                <Col xs='12'>
                                    <label>Address</label>
                                    <input type='text' name='address' placeholder='Please Enter Your Shipping Address' />
                                </Col>
                            </Row>

                            <Row>
                                <Col xs='12' md='6'>
                                    <label>City</label>
                                    <input type='text' name='city' placeholder='Please Enter Your City' />
                                </Col>
                                <Col xs='12' md='6'>
                                    <label>State</label>
                                    <input type='text' name='state' placeholder='Please Enter Your State' />
                                </Col>
                            </Row>

                            <Row>
                                <Col xs='12' md='6'>
                                    <label>Country</label>
                                    <input type='text' name='country' placeholder='Please Enter Your Country' />
                                </Col>
                                <Col xs='12' md='6'>
                                    <label>Pincode</label>
                                    <input type='text' name='pincode' placeholder='Please Enter Your Pincode' />
                                </Col>
                            </Row>
                        </section>

                        <section className='checkout-section'>
                            <h3>Payment Method</h3>
                            <Row>
                                <Col xs='12'>
                                    <label>
                                        <input type='radio' name='paymentMethod' value='cod' /> Cash on Delivery
                                    </label>
                                </Col>
                                <Col xs='12'>
                                    <label>
                                        <input type='radio' name='paymentMethod' value='card' /> Credit / Debit Card
                                    </label>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs='12'>
                                    <label>Card Number</label>
                                    <input type='text' name='cardNumber' />
                                </Col>
                                <Col xs='12' md='6'>
                                    <label>Expiry</label>
                                    <input type='text' name='expiry' />
                                </Col>
                                <Col xs='12' md='6'>
                                    <label>CVV</label>
                                    <input type='password' name='cvv' />
                                </Col>
                            </Row>
                        </section>

                        <div className='checkout-actions'>
                            {/* add style to button */}
                            <button className='btn btn-primary'>Place Order</button>
                        </div>
                    </Col>

                    {/* <Col xs='12' lg='4'>
                        <aside className='order-summary checkout-section p-4'>
                            <h3>Order Summary</h3>
                            <p>No items in cart.</p>
                            <hr />
                            <h4>Total: 0 INR</h4>
                        </aside>
                    </Col> */}
                </Row>
            </form>
        </div>
    );
};

export default Checkout;