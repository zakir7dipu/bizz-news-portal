import React from 'react';
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {goToExternalLink} from "../../library/helper.js";

function Top({socialLinkData}) {
    const {facebook, instagram, linkedin, skype, twitter} = socialLinkData
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
                            {facebook && <Link to="#" onClick={e=>{
                                e.preventDefault()
                                goToExternalLink(facebook)
                            }}><i className="fab fa-facebook-f"></i></Link>}

                            {instagram && <Link to="#" onClick={e=>{
                                e.preventDefault()
                                goToExternalLink(instagram)
                            }}><i className="fab fa-instagram"></i></Link>}

                            {twitter && <Link to="#" onClick={e=>{
                                e.preventDefault()
                                goToExternalLink(twitter)
                            }}><i className="fab fa-twitter"></i></Link>}

                            {linkedin && <Link to="#" onClick={e=>{
                                e.preventDefault()
                                goToExternalLink(linkedin)
                            }}><i className="fab fa-linkedin-in"></i></Link>}

                            {skype && <Link to="#" onClick={e=>{
                                e.preventDefault()
                                goToExternalLink(skype)
                            }}><i className="fab fa-skype"></i></Link>}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Top;