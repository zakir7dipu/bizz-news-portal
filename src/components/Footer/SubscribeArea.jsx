import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {subscriptionHandler, useInternalLink} from "../../library/helper.js";
import {Link} from "react-router-dom";
import {global} from "../../library/config.js";

function SubscribeArea({logo}) {
    const [email, setEmail] = useState();
    const {default_token} = global.config;

    const handleRequest = (e) => {
        e.preventDefault();
        let data = {
            email: email,
            token: default_token
        }
        subscriptionHandler(data)
        setEmail('');
    }

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
                                        <form onSubmit={handleRequest}>
                                            <input name="email" type="email" placeholder="Enter your email"
                                                   value={email}
                                                   onChange={(e) => setEmail(e.target.value)}/>
                                            <button type="submit">
                                                Subscribe
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