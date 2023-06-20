import React, {useEffect} from 'react';
import {Col, Row} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import {goToExternalLink} from "../../library/helper.js";
import {useDispatch, useSelector} from "react-redux";
import {getAllPages} from "../../features/Page/PageSlice.js";

function Top({socialLinkData}) {
    const {facebook, instagram, linkedin, skype, twitter} = socialLinkData;
    const {isLoading,pages} = useSelector(state => state.pageState);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllPages())
    },[dispatch]);

    return (
        <div className="header__top-area black-bg">
            <div className="container">
                <Row>
                    <Col xl={6} lg={6} md={6}>
                        <div className="header__top-menu">
                            {!isLoading &&  <ul>
                                {pages.map(page=>
                                    <li key={page.id}>
                                        <NavLink to={`/page/${page.slug}`}>{page.name}</NavLink>
                                    </li>
                                )}
                                <li><Link to="contact-us">Contact Us</Link></li>
                            </ul>}
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