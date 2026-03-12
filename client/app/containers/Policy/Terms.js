/**
 *
 * TermsAndConditions
 *
 */

import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const TermsAndConditions = () => {
    return (
        <div className="terms-page">
            <Container>
                <Row>
                    <Col lg="10" className="mx-auto">
                        <div className="terms-content">

                            <h1 className="mb-4">Terms and Conditions</h1>

                            <p>
                                Welcome to <strong>[zostore.in]</strong>. These Terms and Conditions
                                govern your use of our platform and services. By accessing or using
                                our platform, you agree to comply with these Terms.
                            </p>

                            <section className="mb-4">
                                <h4>1. Introduction</h4>
                                <p>
                                    <strong>[zostore.in]</strong> is an online marketplace that
                                    enables independent merchants to create their own stores and sell
                                    products directly to customers.
                                </p>
                                <p>
                                    By using our services, you acknowledge that you have read,
                                    understood, and agree to these Terms and Conditions.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>2. Definitions</h4>
                                <ul>
                                    <li><strong>Platform:</strong> The website and services provided by [zostore.in].</li>
                                    <li><strong>Merchant:</strong> A seller listing products on the platform.</li>
                                    <li><strong>Customer:</strong> A user purchasing products.</li>
                                    <li><strong>User:</strong> Anyone accessing or using the platform.</li>
                                </ul>
                            </section>

                            <section className="mb-4">
                                <h4>3. Marketplace Nature</h4>
                                <p>
                                    [zostore.in] acts solely as a technology platform connecting
                                    merchants and customers. We do not manufacture, store, or control
                                    the products listed by merchants.
                                </p>
                                <p>
                                    All transactions are conducted between the merchant and the
                                    customer.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>4. Merchant Responsibilities</h4>
                                <ul>
                                    <li>Provide accurate product information</li>
                                    <li>Maintain lawful and compliant business practices</li>
                                    <li>Fulfill customer orders promptly</li>
                                    <li>Comply with applicable laws and regulations</li>
                                </ul>
                            </section>

                            <section className="mb-4">
                                <h4>5. Customer Responsibilities</h4>
                                <ul>
                                    <li>Provide accurate personal and delivery information</li>
                                    <li>Use the platform lawfully</li>
                                    <li>Respect merchant policies and guidelines</li>
                                </ul>
                            </section>

                            <section className="mb-4">
                                <h4>6. Payments</h4>
                                <p>
                                    Payments may be processed through third-party payment gateways.
                                    The platform is not responsible for payment gateway errors or
                                    delays.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>7. Merchant Payouts</h4>
                                <p>
                                    Merchant payouts may be processed after successful order
                                    completion. Processing time may vary depending on payment
                                    providers.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>8. Prohibited Activities</h4>
                                <ul>
                                    <li>Selling illegal or restricted products</li>
                                    <li>Fraudulent or deceptive practices</li>
                                    <li>Attempting to disrupt the platform</li>
                                    <li>Violating intellectual property rights</li>
                                </ul>
                            </section>

                            <section className="mb-4">
                                <h4>9. Intellectual Property</h4>
                                <p>
                                    All platform content including design, branding, and software is
                                    owned by <strong>[zostore.in]</strong>. Unauthorized use is
                                    prohibited.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>10. Limitation of Liability</h4>
                                <p>
                                    [zostore.in] shall not be liable for product quality,
                                    merchant disputes, delivery delays, or payment gateway failures.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>11. Changes to Terms</h4>
                                <p>
                                    We reserve the right to update these Terms at any time. Continued
                                    use of the platform constitutes acceptance of the revised Terms.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>12. Governing Law</h4>
                                <p>
                                    These Terms shall be governed by the laws of India. Any disputes
                                    shall be subject to the jurisdiction of the courts in
                                    <strong> Mumbai</strong>.
                                </p>
                            </section>

                            <section>
                                <h4>13. Contact</h4>
                                <p>
                                    If you have any questions regarding these Terms, please contact:
                                </p>
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

export default TermsAndConditions;