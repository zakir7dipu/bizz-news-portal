import React from 'react';
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function Top(props) {
    return (
        <div className="header__top-area black-bg">
            <div className="container">
                <Row>
                    <Col xl={6} lg={6} md={6}>
                        <div className="header__top-menu">
                            <ul>
                                <li><Link to="#">About </Link></li>
                                <li><Link to="#">Advertise</Link></li>
                                <li><Link to="#">Privacy & Policy</Link></li>
                                <li><Link to="#">Contact Us</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={6}>
                        <div className="header__social text-center text-md-right mt-10">
                            <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="#"><i className="fab fa-twitter"></i></Link>
                            <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                            <Link to="#"><i className="fab fa-google-plus-g"></i></Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Top;