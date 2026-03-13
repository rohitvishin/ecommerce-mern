/**
 *
 * ReturnRefundPolicy
 *
 */

import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const ReturnRefundPolicy = () => {
    return (
        <div className="refund-policy-page">
            <Container>
                <Row>
                    <Col lg="10" className="mx-auto">
                        <div className="refund-content">

                            <h1 className="mb-4">Return & Refund Policy</h1>

                            <p>
                                At <strong>zostore.in</strong>, we want you to be completely
                                satisfied with your purchase. If something isn't right, we're
                                here to help. Please read our return and refund policy below.
                            </p>

                            <section className="mb-4">
                                <h4>1. Return Eligibility</h4>

                                <p>You may request a return if:</p>

                                <ul>
                                    <li>The product received is damaged or defective</li>
                                    <li>You received the wrong item</li>
                                    <li>The product does not match the description on our website</li>
                                    <li>You are not satisfied with the product (subject to conditions below)</li>
                                </ul>

                                <p>
                                    Return requests must be raised within
                                    <strong> 7 days</strong> of delivery. Items must be unused,
                                    in their original packaging, and with all tags intact.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>2. Non-Returnable Items</h4>

                                <p>The following items are not eligible for returns:</p>

                                <ul>
                                    <li>Products that have been used, washed, or altered</li>
                                    <li>Innerwear, swimwear, and personal hygiene products</li>
                                    <li>Personalized or custom-made items</li>
                                    <li>Gift cards and downloadable products</li>
                                    <li>Items marked as "Final Sale" or "Non-Returnable" on the product page</li>
                                </ul>
                            </section>

                            <section className="mb-4">
                                <h4>3. How to Request a Return</h4>

                                <p>To initiate a return:</p>

                                <ol>
                                    <li>Log in to your account and go to your Orders</li>
                                    <li>Select the item you wish to return and choose a reason</li>
                                    <li>Upload photos if the product is damaged or incorrect</li>
                                    <li>Submit your request</li>
                                </ol>

                                <p>
                                    Our team will review your request and respond within
                                    <strong> 2–3 business days</strong>. Once approved, we will
                                    arrange a pickup or provide return shipping instructions.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>4. Refund Process</h4>

                                <p>
                                    Once we receive and inspect the returned item, your refund
                                    will be processed within <strong>5–7 business days</strong>.
                                </p>

                                <p>Refunds will be issued to:</p>

                                <ul>
                                    <li>Your original payment method (credit/debit card, UPI, net banking, etc.)</li>
                                    <li>Store credit or wallet (if you prefer a faster refund)</li>
                                </ul>

                                <p>
                                    Please note that your bank may take an additional 3–5 business
                                    days to reflect the refund in your account.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>5. Exchanges</h4>

                                <p>
                                    We currently do not offer direct exchanges. If you'd like a
                                    different size, colour, or product, please return the original
                                    item and place a new order.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>6. Shipping Costs</h4>

                                <p>
                                    If the return is due to a defective, damaged, or incorrect
                                    item, we will cover the return shipping costs.
                                </p>

                                <p>
                                    For all other returns (e.g., change of mind), a shipping fee
                                    may be deducted from your refund amount.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>7. Cancellations</h4>

                                <p>
                                    Orders can be cancelled before they are shipped. Once an order
                                    has been dispatched, it cannot be cancelled — you may request a
                                    return after delivery instead.
                                </p>

                                <p>
                                    Refunds for cancelled orders will be processed within
                                    <strong> 3–5 business days</strong> to your original payment method.
                                </p>
                            </section>

                            <section>
                                <h4>8. Contact Us</h4>

                                <p>
                                    If you have any questions about returns, refunds, or need help
                                    with an order, please reach out to us:
                                </p>

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

export default ReturnRefundPolicy;