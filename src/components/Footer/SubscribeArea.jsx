import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useInternalLink} from "../../library/helper.js";
import {Link} from "react-router-dom";

function SubscribeArea({logo}) {
    return (
        <div className="subscribe-area pt-100 pb-80">
            <Container>
                <div className="subscribe-separator pt-50 pb-20">
                    <Row>
                        <Col xl={2} lg={12}>
                            <div className="footer-logo mb-30">
                                <Link to="/"><img src={logo && useInternalLink(logo)} alt="" style={{width: '120px'}}/></Link>
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
    );
}

export default SubscribeArea;