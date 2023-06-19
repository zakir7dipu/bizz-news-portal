import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import {goToExternalLink} from "../../../library/helper.js";
import {useDispatch, useSelector} from "react-redux";
import {showAllCategories} from "../../../features/Category/CategorySlice.js";

function Index({contact, socialLinkData, description}) {
    const {address, email, mobile, website} = contact;
    const {facebook, instagram, linkedin, skype, twitter} = socialLinkData;
    const {isLoading, categories, errorMessage} = useSelector(state => state.category)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(showAllCategories)
    },[dispatch])

    return (
        <div className="footer-bottom-area pb-70">
            <Container>
                <Row>
                    <Col xl={4}>
                        <div className="footer-widget mb-30">
                            <p>{description}</p>
                            <div className="footer-social">
                                {facebook && <Link className="facebook" to="#" onClick={e=>{
                                    e.preventDefault()
                                    goToExternalLink(facebook)
                                }}><i className="fab fa-facebook-f"></i></Link>}

                                {instagram && <Link className="instagram" to="#" onClick={e=>{
                                    e.preventDefault()
                                    goToExternalLink(instagram)
                                }}><i className="fab fa-instagram"></i></Link>}

                                {twitter && <Link className="twitter" to="#" onClick={e=>{
                                    e.preventDefault()
                                    goToExternalLink(twitter)
                                }}><i className="fab fa-twitter"></i></Link>}

                                {linkedin && <Link className="linkedin" to="#" onClick={e=>{
                                    e.preventDefault()
                                    goToExternalLink(linkedin)
                                }}><i className="fab fa-linkedin-in"></i></Link>}

                                {skype && <Link className="skype" to="#" onClick={e=>{
                                    e.preventDefault()
                                    goToExternalLink(skype)
                                }}><i className="fab fa-skype"></i></Link>}
                            </div>
                        </div>
                    </Col>
                    <Col xl={8}>
                        <div className="widget-box mb-30">
                            <Row>
                                <Col xl={4} lg={4}>
                                    <div className="footer-widget mb-30">
                                        <h3>Quick Link</h3>
                                        {!isLoading &&  <ul>
                                            {categories.map(cat=><li key={cat.id}><NavLink to={`/collection/${cat.slug}`}>{cat.name}</NavLink></li>)}
                                        </ul>}
                                    </div>
                                </Col>
                                <Col xl={4} lg={4}>
                                    <div className="footer-widget mb-30">
                                        <h3>About Us</h3>
                                        <ul>
                                            <li><Link to="#">About</Link></li>
                                            <li><Link to="#">Advertise</Link></li>
                                            <li><Link to="#">Privacy &amp; Policy</Link></li>
                                            <li><Link to="#">Contact Us</Link></li>
                                        </ul>

                                    </div>
                                </Col>
                                <Col xl={4} lg={4}>
                                    <div className="footer-widget mb-30">
                                        <h3>Contact</h3>
                                        <ul>
                                            <li><Link to="#"><i className="fas fa-map-marker-alt"></i>&nbsp;{address}</Link> </li>
                                            <li><Link to="#"><i className="fas fa-envelope"></i>&nbsp;{email}</Link></li>
                                            <li><Link to="#"><i className="fas fa-mobile-alt"></i>&nbsp;{mobile}</Link></li>
                                            <li><Link to="/"><i className="fas fa-globe"></i>&nbsp;{website}</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Index;