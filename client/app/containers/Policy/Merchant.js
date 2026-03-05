/**
 *
 * MerchantAgreement
 *
 */

import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const MerchantAgreement = () => {
    return (
        <div className="merchant-agreement-page">
            <Container>
                <Row>
                    <Col lg="10" className="mx-auto">
                        <div className="agreement-content">

                            <h1 className="mb-4">Merchant Agreement</h1>

                            <p>
                                This Merchant Agreement ("Agreement") is entered into between
                                <strong> [zostore.in] </strong> ("Blue Leaf","Platform", "we", "us", "our")
                                and the merchant ("Merchant", "Seller", "you") who registers and
                                uses the platform to sell products or services.
                            </p>

                            <p>
                                By creating a merchant account, you agree to comply with this
                                Merchant Agreement.
                            </p>

                            <section className="mb-4">
                                <h4>1. Merchant Account</h4>
                                <p>
                                    Merchants must provide accurate and complete information during
                                    registration including business details, contact information,
                                    and payment details.
                                </p>

                                <ul>
                                    <li>You are responsible for maintaining account security</li>
                                    <li>You must not create multiple fraudulent accounts</li>
                                    <li>You must keep your information updated</li>
                                </ul>
                            </section>

                            <section className="mb-4">
                                <h4>2. Product Listings</h4>
                                <p>
                                    Merchants are responsible for all product listings on their store.
                                </p>

                                <ul>
                                    <li>Product descriptions must be accurate</li>
                                    <li>Images must represent the actual product</li>
                                    <li>Pricing must be transparent</li>
                                    <li>Inventory must be maintained accurately</li>
                                </ul>

                                <p>
                                    The platform reserves the right to remove listings that violate
                                    policies or applicable laws.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>3. Order Fulfillment</h4>

                                <p>Merchants agree to:</p>

                                <ul>
                                    <li>Process and ship orders promptly</li>
                                    <li>Provide accurate shipping information</li>
                                    <li>Handle returns and customer support</li>
                                    <li>Ensure proper packaging and delivery</li>
                                </ul>

                                <p>
                                    Merchants are responsible for delays or failed deliveries caused
                                    by incorrect handling or logistics.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>4. Payments and Fees</h4>

                                <p>
                                    Payments from customers may be processed through third-party
                                    payment gateways integrated with the platform.
                                </p>

                                <ul>
                                    <li>The platform may charge a service or commission fee</li>
                                    <li>Transaction fees may apply</li>
                                    <li>Payout timelines depend on payment gateway processing</li>
                                </ul>

                                <p>
                                    The merchant is responsible for applicable taxes including GST.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>5. Merchant Payouts</h4>

                                <p>
                                    Payouts to merchants may be processed after successful order
                                    confirmation or delivery.
                                </p>

                                <p>
                                    The platform may temporarily hold funds in cases including:
                                </p>

                                <ul>
                                    <li>Customer disputes</li>
                                    <li>Fraud prevention</li>
                                    <li>Policy violations</li>
                                </ul>
                            </section>

                            <section className="mb-4">
                                <h4>6. Prohibited Products</h4>

                                <p>Merchants must not sell products that are illegal or restricted.</p>

                                <ul>
                                    <li>Illegal goods</li>
                                    <li>Counterfeit products</li>
                                    <li>Weapons or hazardous materials</li>
                                    <li>Products violating intellectual property rights</li>
                                </ul>
                            </section>

                            <section className="mb-4">
                                <h4>7. Customer Disputes</h4>

                                <p>
                                    Merchants are responsible for resolving customer disputes
                                    regarding:
                                </p>

                                <ul>
                                    <li>Product quality</li>
                                    <li>Returns and refunds</li>
                                    <li>Shipping issues</li>
                                </ul>

                                <p>
                                    The platform may assist in dispute resolution but is not liable
                                    for merchant obligations.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>8. Intellectual Property</h4>

                                <p>
                                    Merchants grant the platform permission to use product images,
                                    descriptions, and branding for marketing and display purposes
                                    within the platform.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>9. Account Suspension</h4>

                                <p>The platform may suspend or terminate merchant accounts for:</p>

                                <ul>
                                    <li>Fraudulent activity</li>
                                    <li>Policy violations</li>
                                    <li>Customer complaints</li>
                                    <li>Illegal product listings</li>
                                </ul>
                            </section>

                            <section className="mb-4">
                                <h4>10. Limitation of Liability</h4>

                                <p>
                                    The platform acts only as a technology provider connecting
                                    merchants and customers. The platform shall not be liable for:
                                </p>

                                <ul>
                                    <li>Product quality or safety</li>
                                    <li>Merchant business losses</li>
                                    <li>Shipping delays</li>
                                    <li>Payment gateway errors</li>
                                </ul>
                            </section>

                            <section className="mb-4">
                                <h4>11. Changes to Agreement</h4>

                                <p>
                                    The platform reserves the right to modify this agreement at any
                                    time. Continued use of the platform constitutes acceptance of
                                    updated terms.
                                </p>
                            </section>

                            <section>
                                <h4>12. Governing Law</h4>

                                <p>
                                    This agreement shall be governed by the laws of India. Any
                                    disputes shall fall under the jurisdiction of courts in
                                    <strong> Mumbai</strong>.
                                </p>
                            </section>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MerchantAgreement;