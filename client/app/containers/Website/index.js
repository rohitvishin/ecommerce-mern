import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Button,
    Collapse
} from "reactstrap";
import Footer from "../../components/Common/Footer";
const Website = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="homepage pb-5" style={{ background: "#f8f9fc" }}>

            <Container fluid className="pt-5 px-lg-5" style={{ background: "#f8f9fc", fontSize: "16px" }}>

                {/* HERO */}
                <Row className="justify-content-center mb-5">
                    <Col xs="12" lg="10">
                        <div
                            className="rounded-4 p-5 text-center"
                            style={{
                                background: "linear-gradient(135deg, #ffffff 0%, #f1f3ff 100%)",
                                border: "1px solid #eceef5"
                            }}
                        >
                            <h1 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
                                Stop Managing Orders in DMs. Start Selling Like a Brand.
                            </h1>

                            <p className="text-muted mb-4 fs-5">
                                Automate payments, shipping & WhatsApp orders — beautifully and effortlessly.
                            </p>

                            <div>
                                <Link to="/signup">
                                    <Button
                                        color="primary"
                                        size="lg"
                                        className="rounded-pill px-5 me-3"
                                    >
                                        Start Free Trial
                                    </Button>
                                </Link>


                                <Link to="/zostore/" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        outline
                                        color="dark"
                                        size="lg"
                                        className="rounded-pill px-5"
                                    >
                                        View Demo
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* WHY CHOOSE US */}
                <Row className="mb-5">
                    <Col xs="12" className="text-center mb-4">
                        <h2 className="fw-bold">Why Choose Us</h2>
                        <p className="text-muted">
                            Designed for modern home entrepreneurs
                        </p>
                    </Col>

                    {[
                        "Instagram & WhatsApp First Platform",
                        "Done-For-You Store Setup",
                        "Integrated Payments & Shipping",
                        "Mobile-First Dashboard"
                    ].map((item, index) => (
                        <Col xs="12" md="6" lg="3" key={index} className="mb-4">
                            <div
                                className="rounded-4 p-4 h-100 text-center"
                                style={{
                                    background: "#ffffff",
                                    border: "1px solid #eef0f6"
                                }}
                            >
                                <h6 className="fw-semibold mb-2">{item}</h6>
                                <p className="text-muted small mb-0">
                                    Built to simplify your online selling journey.
                                </p>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* FEATURES */}
                <Row className="mb-5">
                    <Col xs="12" className="text-center mb-4">
                        <h2 className="fw-bold">Features</h2>
                    </Col>

                    <Col xs="12">
                        <div
                            className="rounded-4 p-5"
                            style={{
                                background: "#ffffff",
                                border: "1px solid #eceef5"
                            }}
                        >
                            <Row>
                                {[
                                    "Instant Online Store",
                                    "Secure Payment Gateway",
                                    "Integrated Shipping",
                                    "WhatsApp Automation",
                                    "Simple Analytics",
                                    "Custom Domain Support"
                                ].map((feature, index) => (
                                    <Col xs="12" md="4" key={index} className="mb-4">
                                        <div>
                                            <h6 className="fw-semibold">{feature}</h6>
                                            <p className="text-muted small mb-0">
                                                Everything you need to grow confidently.
                                            </p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>

                {/* PRICING */}
                <Row className="mb-5">
                    <Col xs="12" className="text-center mb-4">
                        <h2 className="fw-bold">Pricing</h2>
                    </Col>

                    {[
                        {
                            title: "Starter",
                            price: (
                                <>
                                    Free <span style={{ textDecoration: "line-through", opacity: 0.6 }}>₹49</span>
                                </>
                            ),
                            features: [
                                "Up to 5 products",
                                "Free SSL",
                                "Free hosting",
                                "Free store link",
                                "Integrated payment gateway",
                                "Unlimited orders",
                                "Platform fee 4%",
                                "Support"
                            ]
                        },
                        {
                            title: "Champion",
                            price: (
                                <>
                                    ₹199 <span style={{ textDecoration: "line-through", opacity: 0.6 }}>₹299</span>
                                </>
                            ),
                            highlight: true,
                            features: [
                                "Up to 200 products",
                                "Free SSL",
                                "Free hosting",
                                "Free store link",
                                "Integrated payment gateway",
                                "Unlimited orders",
                                "Platform fee 2.5%",
                                "Support"
                            ]
                        },
                        {
                            title: "Legend",
                            price: "Coming Soon",
                            features: [
                                "Custom domain",
                                "Up to 500 products",
                                "Free SSL",
                                "Free hosting",
                                "Free store link",
                                "Integrated payment gateway",
                                "Unlimited orders",
                                "Platform fee 2%",
                                "Support"
                            ]
                        }
                    ].map((plan, index) => (
                        <Col xs="12" md="4" key={index} className="mb-4">
                            <div
                                className="rounded-4 p-5 text-center h-100 d-flex flex-column"
                                style={{
                                    background: plan.highlight
                                        ? "linear-gradient(135deg, #5f6af5, #7b84ff)"
                                        : "#ffffff",
                                    color: plan.highlight ? "#ffffff" : "#000000",
                                    border: plan.highlight ? "none" : "1px solid #eceef5"
                                }}
                            >
                                <h6 className="fw-semibold">{plan.title}</h6>

                                <h3 className="my-3 fw-bold">{plan.price}</h3>

                                <ul
                                    className={`list-unstyled text-start mt-3 flex-grow-1 ${plan.highlight ? "opacity-75" : "text-muted"
                                        }`}
                                >
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="mb-2">
                                            • {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    color={plan.highlight ? "light" : "primary"}
                                    className="rounded-pill px-4 mt-3"
                                >
                                    {plan.title === "Legend" ? "Coming Soon" : "Choose Plan"}
                                </Button>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* FAQ */}
                <Row>
                    <Col xs="12" lg="8" className="mx-auto">
                        <div
                            className="rounded-4 p-5"
                            style={{
                                background: "#ffffff",
                                border: "1px solid #eceef5"
                            }}
                        >
                            <h3 className="fw-bold text-center mb-4">
                                Frequently Asked Questions
                            </h3>

                            {[
                                {
                                    q: "Do I need technical knowledge?",
                                    a: "No, we help you with complete setup."
                                },
                                {
                                    q: "Do I need my own payment gateway?",
                                    a: "No, payments are integrated and settled directly."
                                },
                                {
                                    q: "How does shipping work?",
                                    a: "You can generate shipping labels and schedule pickups easily."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="mb-3">
                                    <Button
                                        color="link"
                                        className="text-decoration-none fw-semibold p-0"
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        {faq.q}
                                    </Button>
                                    <Collapse isOpen={openFAQ === index}>
                                        <p className="text-muted mt-2 mb-0">{faq.a}</p>
                                    </Collapse>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
                <Footer />
            </Container>
        </div>
    );
};

export default Website;