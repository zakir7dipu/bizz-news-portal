import React, {useEffect, useRef} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {extraInfoAction, searchModelAction} from "../../features/MeanuBar/MenuSlice.js";

function HeaderMenu(props) {
    const dispatch = useDispatch();
    const stickyRefer = useRef()
    useEffect(() => {
        document.querySelector("[aria-current=page]").parentElement.className = "active";

        window.addEventListener('scroll',(e)=>{
            if(document.body.getBoundingClientRect().top < 245){
                stickyRefer.current.classList.remove('sticky')
            } else {
                stickyRefer.current.className = 'sticky'
            }
        });
    })

    return (
        <div ref={stickyRefer} className="header__menu-area black-bg header-sticky">
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className="header__right-icon f-right mt-17">
                            <Link to="#" onClick={e => {
                                e.preventDefault()
                                dispatch(searchModelAction(true))
                            }}>
                                <i className="fas fa-search"></i>
                            </Link>
                            <Link className="info-bar" to="#" onClick={e => {
                                e.preventDefault()
                                dispatch(extraInfoAction(true))
                            }}>
                                <i className="fas fa-bars"></i>
                            </Link>
                        </div>
                        <div className="header__menu f-left">
                            <nav id="mobile-menu">
                                <ul>
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="politic.html">News</NavLink></li>
                                    <li><NavLink to="tech.html">Tech</NavLink></li>
                                    <li><NavLink to="lifestyle.html">Enterteinment</NavLink></li>
                                    <li><NavLink to="lifestyle.html">Lifestyle</NavLink></li>
                                    <li><NavLink to="blog-standard.html">Blog</NavLink>
                                        <ul className="submenu">
                                            <li><Link to="blog-3-column.html">BLog 3 Column</Link></li>
                                            <li><Link to="blog-standard.html">BLog Sidebar</Link></li>
                                            <li><Link to="post-details.html">BLog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="portfolio-full.html">Portfolio</NavLink>
                                        <ul className="submenu">
                                            <li><Link to="portfolio-box.html">Portfolio Box</Link></li>
                                            <li><Link to="portfolio-full.html">Portfolio Box</Link></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="#">Pages</NavLink>
                                        <ul className="submenu">
                                            <li><Link to="contact.html">Contact</Link></li>
                                            <li><Link to="lifestyle.html">Lifestyle</Link>
                                            </li>
                                            <li><Link to="politic.html">Politic</Link></li>
                                            <li><Link to="tech.html">Technology</Link></li>
                                            <li><Link to="post-details.html">Post Details</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="mobile-menu"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderMenu;