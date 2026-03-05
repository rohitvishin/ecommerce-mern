/**
 *
 * PrivacyPolicy
 *
 */

import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-page">
            <Container>
                <Row>
                    <Col lg="10" className="mx-auto">
                        <div className="privacy-content">

                            <h1 className="mb-4">Privacy Policy</h1>

                            <p>
                                This Privacy Policy describes how <strong>[zostore.in]</strong>
                                ("Blue Leaf","Platform", "we", "us", "our") collects, uses, and protects your
                                personal information when you use our website and services.
                            </p>

                            <p>
                                By using our platform, you agree to the practices described in this
                                Privacy Policy.
                            </p>

                            <section className="mb-4">
                                <h4>1. Information We Collect</h4>

                                <p>We may collect the following types of information:</p>

                                <ul>
                                    <li>Personal information such as name, email address, and phone number</li>
                                    <li>Shipping and billing addresses</li>
                                    <li>Payment information processed through third-party gateways</li>
                                    <li>Merchant business information</li>
                                    <li>Order and transaction details</li>
                                    <li>Device and browser information</li>
                                </ul>
                            </section>

                            <section className="mb-4">
                                <h4>2. How We Use Your Information</h4>

                                <p>Your information may be used to:</p>

                                <ul>
                                    <li>Process orders and payments</li>
                                    <li>Enable merchants to fulfill customer orders</li>
                                    <li>Provide customer support</li>
                                    <li>Improve platform performance and user experience</li>
                                    <li>Prevent fraud and unauthorized activity</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            </section>

                            <section className="mb-4">
                                <h4>3. Sharing of Information</h4>

                                <p>We may share information with:</p>

                                <ul>
                                    <li>Merchants to enable order fulfillment</li>
                                    <li>Payment gateway providers for processing transactions</li>
                                    <li>Service providers assisting with platform operations</li>
                                    <li>Authorities when required by law</li>
                                </ul>

                                <p>
                                    We do not sell or rent personal information to third parties.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>4. Payment Information</h4>

                                <p>
                                    Payments are processed through secure third-party payment
                                    gateways. The platform does not store full card or banking
                                    details.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>5. Cookies and Tracking</h4>

                                <p>
                                    We may use cookies and similar technologies to improve user
                                    experience, analyze traffic, and remember preferences.
                                </p>

                                <p>
                                    Users may disable cookies in their browser settings, but some
                                    platform features may not function properly.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>6. Data Security</h4>

                                <p>
                                    We implement reasonable security measures to protect user data
                                    against unauthorized access, alteration, or disclosure.
                                </p>

                                <p>
                                    However, no internet transmission is completely secure and we
                                    cannot guarantee absolute security.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>7. Merchant Responsibilities</h4>

                                <p>
                                    Merchants may receive customer information necessary to fulfill
                                    orders. Merchants must use this information solely for order
                                    processing and must not misuse or share customer data.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>8. User Rights</h4>

                                <p>Users may request to:</p>

                                <ul>
                                    <li>Access their personal information</li>
                                    <li>Correct inaccurate information</li>
                                    <li>Delete their account where applicable</li>
                                </ul>
                            </section>

                            <section className="mb-4">
                                <h4>9. Changes to Privacy Policy</h4>

                                <p>
                                    We may update this Privacy Policy periodically. Continued use of
                                    the platform after changes constitutes acceptance of the updated
                                    policy.
                                </p>
                            </section>

                            <section>
                                <h4>10. Contact Us</h4>

                                <p>If you have questions regarding this Privacy Policy, contact:</p>

                                <p>
                                    Email: mail@zostore.in
                                </p>

                                <p>
                                    Website: https://zostore.in
                                </p>
                            </section>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PrivacyPolicy;