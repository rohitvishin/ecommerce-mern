/**
 *
 * ShippingPolicy
 *
 */

import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const ShippingPolicy = () => {
    return (
        <div className="shipping-policy-page">
            <Container>
                <Row>
                    <Col lg="10" className="mx-auto">
                        <div className="shipping-content">

                            <h1 className="mb-4">Shipping Policy</h1>

                            <p>
                                This Shipping Policy explains how orders placed through
                                <strong> [zostore.in]</strong> are processed and delivered.
                                As a marketplace platform, individual merchants are responsible
                                for shipping and fulfilling their orders.
                            </p>

                            <section className="mb-4">
                                <h4>1. Order Processing</h4>

                                <p>
                                    Once an order is placed, the merchant will process the order
                                    within a reasonable time period.
                                </p>

                                <ul>
                                    <li>Orders are typically processed within <strong>1–3 business days</strong></li>
                                    <li>Processing time may vary depending on the merchant</li>
                                    <li>Orders are not processed on weekends or public holidays</li>
                                </ul>
                            </section>

                            <section className="mb-4">
                                <h4>2. Shipping Methods</h4>

                                <p>
                                    Merchants may use third-party logistics providers or their own
                                    delivery methods to ship products.
                                </p>

                                <p>Common shipping partners may include:</p>

                                <ul>
                                    <li>Courier services</li>
                                    <li>Local delivery partners</li>
                                    <li>Merchant managed delivery</li>
                                </ul>
                            </section>

                            <section className="mb-4">
                                <h4>3. Shipping Charges</h4>

                                <p>
                                    Shipping charges may vary depending on the merchant, product,
                                    delivery location, and shipping method selected.
                                </p>

                                <p>
                                    The applicable shipping charges will be displayed at checkout
                                    before completing the purchase.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>4. Delivery Time</h4>

                                <p>Estimated delivery times may vary depending on location:</p>

                                <ul>
                                    <li>Local deliveries: 2–5 business days</li>
                                    <li>Domestic deliveries: 3–10 business days</li>
                                </ul>

                                <p>
                                    Delivery timelines are estimates and may vary due to logistics
                                    issues, weather conditions, or other unforeseen factors.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>5. Order Tracking</h4>

                                <p>
                                    When available, merchants may provide tracking details once the
                                    order has been shipped.
                                </p>

                                <p>
                                    Customers can use the tracking information to monitor the status
                                    of their delivery.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>6. Delays or Delivery Issues</h4>

                                <p>
                                    While merchants aim to deliver orders on time, delays may occur
                                    due to:
                                </p>

                                <ul>
                                    <li>Courier delays</li>
                                    <li>Incorrect shipping address</li>
                                    <li>High order volumes</li>
                                    <li>External circumstances beyond control</li>
                                </ul>

                                <p>
                                    Customers are encouraged to contact the merchant or platform
                                    support if delivery issues arise.
                                </p>
                            </section>

                            <section>
                                <h4>8. Contact Us</h4>

                                <p>If you have questions regarding shipping, please contact:</p>

                                <p>Email: mail@zostore.in</p>

                                <p>Website: https://zostore.in</p>
                            </section>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ShippingPolicy;