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
                                This Return and Refund Policy outlines the conditions under which
                                customers may request returns or refunds for purchases made through
                                <strong> [zostore.in]</strong>.
                            </p>

                            <p>
                                Since <strong>[zostore.in]</strong> operates as a marketplace,
                                individual merchants may manage product returns and refunds based on
                                their store policies.
                            </p>

                            <section className="mb-4">
                                <h4>1. Return Eligibility</h4>

                                <p>Customers may request a return if:</p>

                                <ul>
                                    <li>The product received is damaged or defective</li>
                                    <li>The product received is incorrect</li>
                                    <li>The product does not match the product description</li>
                                </ul>

                                <p>
                                    Return requests must typically be submitted within
                                    <strong> 7days</strong> of delivery depending on the
                                    merchant's policy.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>2. Non-Returnable Items</h4>

                                <p>The following items may not be eligible for returns:</p>

                                <ul>
                                    <li>Used or damaged products caused by the customer</li>
                                    <li>Digital products or downloadable content</li>
                                    <li>Personalized or custom-made items</li>
                                    <li>Items marked as non-returnable by the merchant</li>
                                </ul>
                            </section>

                            <section className="mb-4">
                                <h4>3. Return Process</h4>

                                <p>To request a return:</p>

                                <ul>
                                    <li>Contact the merchant through the platform</li>
                                    <li>Provide order details and reason for return</li>
                                    <li>Submit images if the product is damaged or incorrect</li>
                                </ul>

                                <p>
                                    The merchant will review the request and provide instructions for
                                    returning the item if the request is approved.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>4. Refund Process</h4>

                                <p>
                                    Once the returned product is received and verified by the
                                    merchant, refunds may be processed.
                                </p>

                                <p>Refunds may be issued through:</p>

                                <ul>
                                    <li>Original payment method</li>
                                    <li>Store credit (if applicable)</li>
                                </ul>

                                <p>
                                    Refund processing times may vary depending on the payment
                                    provider and banking systems.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>5. Shipping Costs</h4>

                                <p>
                                    Return shipping costs may be covered by the merchant if the
                                    product is defective, damaged, or incorrect.
                                </p>

                                <p>
                                    If the return is requested for other reasons, the customer may be
                                    responsible for return shipping costs.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>6. Platform Role</h4>

                                <p>
                                    <strong>[zostore.in]</strong> provides the technology platform
                                    connecting merchants and customers.
                                </p>

                                <p>
                                    While we may assist in dispute resolution, the final return or
                                    refund decision is typically made by the merchant according to
                                    their policies.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>7. Disputes</h4>

                                <p>
                                    If a return or refund dispute arises, customers may contact the
                                    platform support team for assistance.
                                </p>

                                <p>
                                    The platform may review the case and attempt to facilitate a fair
                                    resolution.
                                </p>
                            </section>

                            <section>
                                <h4>8. Contact Us</h4>

                                <p>If you have questions about returns or refunds, please contact:</p>

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