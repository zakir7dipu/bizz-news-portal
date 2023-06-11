import React, {useEffect} from 'react';
import SiteFooterLogo from "../../assets/img/logo/footer-logo.png"
import trendyHeroImage1 from "../../assets/img/trendy/xs/xs-1.jpg"
import trendyHeroImage2 from "../../assets/img/trendy/xs/xs-2.jpg"
import trendyHeroImage3 from "../../assets/img/trendy/xs/xs-3.jpg"
import trendyHeroImage4 from "../../assets/img/trendy/xs/xs-4.jpg"
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {extraInfoAction} from "../../features/MeanuBar/MenuSlice.js";

function Bottom(props) {
    const dispatch = useDispatch();
    const {extraInfo} = useSelector(state => state.menubar)

    return (
        <div className={`extra-info ${extraInfo && "info-open"}`}>
            <div className="close-icon">
                <button onClick={e => {
                    e.preventDefault()
                    dispatch(extraInfoAction(false))
                }}>
                    <i className="far fa-window-close"></i>
                </button>
            </div>
            <div className="header__logo">
                <Link to="/">
                    <img src={SiteFooterLogo} alt="Header Logo"/>
                </Link>
            </div>
            <div className="social-icon-right mt-30 mb-50">
                <Link to="#">
                    <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#">
                    <i className="fab fa-google-plus-g"></i>
                </Link>
                <Link to="#">
                    <i className="fab fa-instagram"></i>
                </Link>
            </div>
            <div className="side-menu mb-30">
                <ul>
                    <li>
                        <Link to="#">Home</Link>
                    </li>
                    <li>
                        <Link to="#">Features</Link>
                    </li>
                    <li>
                        <Link to="#">News</Link>
                    </li>
                    <li>
                        <Link to="#">Tech</Link>
                    </li>
                    <li>
                        <Link to="#">Enterteinment</Link>
                    </li>
                    <li>
                        <Link to="#">Lifestyle</Link>
                    </li>
                    <li>
                        <Link to="#">Review</Link>
                    </li>
                </ul>
            </div>

            <div className="side-post">
                <h3>Popular Post</h3>
                <div className="post__small mb-20">
                    <div className="post__small-thumb f-left">
                        <Link to="#">
                            <img src={trendyHeroImage1} alt="hero image"/>
                        </Link>
                    </div>
                    <div className="post__small-text fix pl-10">
                            <span className="sm-cat">
                                <Link to="#">Fashion</Link>
                            </span>
                        <h4 className="title-13 pr-0">
                            <Link to="#">Storm in aw ame home away.</Link>
                        </h4>
                        <div className="post__small-text-meta">
                            <ul>
                                <li>
                                    <i className="fas fa-calendar-alt"></i>
                                    <span>01 Sep 2018</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="post__small mb-20">
                    <div className="post__small-thumb f-left">
                        <Link to="#">
                            <img src={trendyHeroImage2} alt="hero image"/>
                        </Link>
                    </div>
                    <div className="post__small-text fix pl-10">
                            <span className="sm-cat">
                                <Link to="#">Fashion</Link>
                            </span>
                        <h4 className="title-13 pr-0">
                            <Link to="#">Good ridre urants bid farewell.</Link>
                        </h4>
                        <div className="post__small-text-meta">
                            <ul>
                                <li>
                                    <i className="fas fa-calendar-alt"></i>
                                    <span>01 Sep 2018</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="post__small mb-20">
                    <div className="post__small-thumb f-left">
                        <Link to="#">
                            <img src={trendyHeroImage3} alt="hero image"/>
                        </Link>
                    </div>
                    <div className="post__small-text fix pl-10">
                            <span className="sm-cat">
                                <Link to="#">Fashion</Link>
                            </span>
                        <h4 className="title-13 pr-0">
                            <Link to="#">Nahan dow plays Lieral lership..</Link>
                        </h4>
                        <div className="post__small-text-meta">
                            <ul>
                                <li>
                                    <i className="fas fa-calendar-alt"></i>
                                    <span>01 Sep 2018</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="post__small mb-20">
                    <div className="post__small-thumb f-left">
                        <Link to="#">
                            <img src={trendyHeroImage4} alt="hero image"/>
                        </Link>
                    </div>
                    <div className="post__small-text fix pl-10">
                            <span className="sm-cat">
                                <Link to="#">Travel</Link>
                            </span>
                        <h4 className="title-13 pr-0">
                            <Link to="#">Weinstein pushs for dismissal.</Link>
                        </h4>
                        <div className="post__small-text-meta">
                            <ul>
                                <li>
                                    <i className="fas fa-calendar-alt"></i>
                                    <span>01 Sep 2018</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bottom;