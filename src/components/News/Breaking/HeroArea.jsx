import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Hero1 from "../../../assets/img/hero/part1/hero1.jpg"
import Hero2 from "../../../assets/img/hero/part1/hero2.jpg"
import Hero3 from "../../../assets/img/hero/part1/hero3.jpg"
import {Link} from "react-router-dom";

function HeroArea(props) {
    return (
        <section className="hero-area">
            <Container>
                <Row>
                    <Col lg={6} md={12}>
                        <div className="hero pos-relative mb-30">
                            <div className="hero__thumb" data-overlay="dark-gradient">
                                <Link to="#"><img src={Hero1} alt="hero image"/></Link>
                            </div>
                            <div className="hero__text">
                                <span className="post-cat mb-10"><Link to="#">politics</Link></span>
                                <h3 className="pr-100"><Link to="#">Woman fights for life after car hits two at netball
                                    courts</Link></h3>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="hero pos-relative mb-30">
                            <div className="hero__thumb" data-overlay="dark-gradient">
                                <Link to="#">
                                    <img src={Hero2} alt="hero image"/>
                                </Link>
                            </div>
                            <div className="hero__text hero__text-small">
                                    <span className="post-cat mb-10">
                                        <Link to="#">fashion</Link>
                                    </span>
                                <h3 className="pr-0">
                                    <Link to="#">Hamels solid in debut as cubs throttle pirates world.</Link>
                                </h3>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="hero pos-relative mb-30">
                            <div className="hero__thumb" data-overlay="dark-gradient">
                                <Link to="#">
                                    <img src={Hero3} alt="hero image"/>
                                </Link>
                            </div>
                            <div className="hero__text hero__text-small">
                                    <span className="post-cat mb-10">
                                        <Link to="#">fashion</Link>
                                    </span>
                                <h3 className="pr-0">
                                    <Link to="#">Must be solid in debut as cubs throttle pirates world.</Link>
                                </h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
);
}

export default HeroArea;