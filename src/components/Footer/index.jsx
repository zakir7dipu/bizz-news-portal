import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SiteFooterLogo from "../../assets/img/logo/footer-logo.png";
import moment from "moment";
import {Link} from "react-router-dom";

function Index(props) {
    return (
        <footer className="footer-bg">
            <div className="subscribe-area pt-100 pb-80">
                <Container>
                    <div className="subscribe-separator pt-50 pb-20">
                        <Row>
                            <Col xl={2} lg={12}>
                                <div className="footer-logo mb-30">
                                    <a href="#"><img src={SiteFooterLogo} alt=""/></a>
                                </div>
                            </Col>
                            <Col xl={10} lg={12}>
                                <Row>
                                    <Col xl={7} lg={7}>
                                        <div className="subscribe-title">
                                            <h2>subscribe our newsletter</h2>
                                        </div>
                                    </Col>
                                    <Col xl={5} lg={5}>
                                        <div className="subscribe-form mb-30">
                                            <form action="#">
                                                <input type="email" placeholder="Enter your email"/>
                                                <button type="submit">
                                                    subscribe
                                                </button>
                                            </form>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="footer-bottom-area pb-70">
                <Container>
                    <Row>
                        <Col xl={4}>
                            <div className="footer-widget mb-30">
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and
                                    praising pain was born and I will give you
                                    a complete account of the system, and expound the actual teachings of the great
                                    explorer of the truth, the master-builder
                                    of human happiness.</p>
                                <div className="footer-social">
                                    <a className="facebook" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="twitter" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="instagram" href="#"><i className="fab fa-instagram"></i></a>
                                    <a className="dribbble" href="#"><i className="fab fa-dribbble"></i></a>
                                    <a className="pinterest" href="#"><i className="fab fa-pinterest-p"></i></a>
                                    <a className="google-plus" href="#"><i className="fab fa-google-plus-g"></i></a>
                                    <a className="pinterest" href="#"><i className="fab fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </Col>
                        <Col xl={8}>
                            <div className="widget-box mb-30">
                                <Row>
                                    <Col xl={3} lg={3}>
                                        <div className="footer-widget mb-30">
                                            <h3>Quick Link</h3>
                                            <ul>
                                                <li><a href="#">Politic</a></li>
                                                <li><a href="#">Travel</a></li>
                                                <li><a href="#">Study</a></li>
                                                <li><a href="#">Country</a></li>
                                                <li><a href="#">Sports</a></li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xl={3} lg={3}>
                                        <div className="footer-widget mb-30">
                                            <h3>Most Visited</h3>
                                            <ul>
                                                <li><a href="#">Latest News </a></li>
                                                <li><a href="#">Most Visited</a></li>
                                                <li><a href="#">Recent News</a></li>
                                                <li><a href="#">International</a></li>
                                                <li><a href="#">Entertainment</a></li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xl={3} lg={3}>
                                        <div className="footer-widget mb-30">
                                            <h3>About Us</h3>
                                            <ul>
                                                <li><a href="#">Feature</a></li>
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Life Style</a></li>
                                                <li><a href="#">Economic</a></li>
                                                <li><a href="#">Business</a></li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xl={3} lg={3}>
                                        <div className="footer-widget pt-50 mb-30">
                                            <ul>
                                                <li><a href="#"><i className="fas fa-video"></i> Video</a></li>
                                                <li><a href="#"><i className="fas fa-camera-retro"></i> Picture</a></li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="copyright-area pt-25 pb-25">
                <Container>
                    <Row>
                        <Col>
                            <div className="copyright text-center">
                                <p>© Copyrights {moment().format('YYYY')}. All rights reserved by <Link to="#">Bizz Solutions PLC</Link></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
}

export default Index;