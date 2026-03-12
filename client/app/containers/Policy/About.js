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
                                    zostore is a modern ecommerce platform built for ambitious
                                    entrepreneurs who refuse to let technical barriers stand in
                                    the way of their vision. We believe that every entrepreneur
                                    deserves a powerful, distraction-free online presence —
                                    without spending months navigating complex setups and
                                    configurations.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>Our Mission</h4>
                                <p>
                                    Our mission is simple — to offer done-for-you online stores
                                    that cut through months of process and setup, so you can
                                    focus on what truly matters: growing your business. We handle
                                    the technical complexity, so you can channel your energy into
                                    building your brand and serving your customers.
                                </p>
                            </section>

                            <section className="mb-4">
                                <h4>What We Offer</h4>
                                <p>
                                    zostore is designed to open up a wide range of online
                                    opportunities for entrepreneurs who are ready to grow. Our
                                    platform provides:
                                </p>
                                <ul>
                                    <li>A hassle-free, ready-to-launch online store</li>
                                    <li>Zero technical complexity — we take care of the hard parts</li>
                                    <li>A distraction-free environment to manage and scale your business</li>
                                    <li>Tools and support to help you reach more customers</li>
                                </ul>
                            </section>

                            <section className="mb-4">
                                <h4>Why zostore?</h4>
                                <p>
                                    Starting an online business shouldn't require months of
                                    planning, development, and troubleshooting. At zostore, we
                                    eliminate those hurdles entirely. Whether you're a first-time
                                    seller or a seasoned merchant, our platform is built to get
                                    you online faster, smarter, and with confidence.
                                </p>
                            </section>

                            <section>
                                <h4>Get in Touch</h4>
                                <p>
                                    Have questions or want to learn more about how zostore can
                                    help you launch your online store? Reach out to us:
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