/**
 *
 * AboutUs
 *
 */

import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const AboutUs = () => {
    return (
        <div className="about-page">
            <Container>
                <Row>
                    <Col lg="10" className="mx-auto">
                        <div className="about-content">

                            <h1 className="mb-4">About Us</h1>

                            <p className="lead">
                                <strong>zostore</strong> — by legends, for legends.
                            </p>

                            <section className="mb-4">
                                <h4>Who We Are</h4>
                                <p>
                                    Welcome to zostore — your go-to online store for
                                    high-quality products at great prices. We're passionate
                                    about bringing you a carefully curated selection of products
                                    that combine style, quality, and value. From everyday
                                    essentials to standout finds, we've got something for
                                    everyone.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>Our Mission</h4>
                                <p>
                                    Our mission is to make online shopping simple, enjoyable,
                                    and accessible. We believe you deserve a seamless shopping
                                    experience — from browsing to checkout to delivery. Every
                                    product in our store is selected with care, so you can shop
                                    with confidence knowing you're getting the best.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>What We Offer</h4>
                                <p>
                                    At zostore, we're committed to delivering an exceptional
                                    shopping experience. Here's what sets us apart:
                                </p>
                                <ul>
                                    <li>A curated collection of high-quality products</li>
                                    <li>Competitive prices and regular deals</li>
                                    <li>Fast, reliable shipping and easy returns</li>
                                    <li>Dedicated customer support to help you every step of the way</li>
                                </ul>
                            </section>

                            <section className="mb-4">
                                <h4>Why Shop With Us?</h4>
                                <p>
                                    We know you have plenty of options when it comes to online
                                    shopping. At zostore, we stand out by putting our customers
                                    first. We handpick every product, offer hassle-free returns,
                                    and provide friendly support whenever you need it. Your
                                    satisfaction is our top priority.
                                </p>
                            </section>

                            <section>
                                <h4>Get in Touch</h4>
                                <p>
                                    Have a question about an order, a product, or just want to
                                    say hello? We'd love to hear from you:
                                </p>
                                <p>
                                    Email: mail@zostore.in
                                </p>
                            </section>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;