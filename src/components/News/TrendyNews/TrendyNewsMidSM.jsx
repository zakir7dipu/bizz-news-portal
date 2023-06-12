import React from 'react';
import {Link} from "react-router-dom";
import NewsImg6 from "../../../assets/img/trendy/xs/xs-1.jpg";
import NewsImg7 from "../../../assets/img/trendy/xs/xs-2.jpg";
import NewsImg8 from "../../../assets/img/trendy/xs/xs-3.jpg";
import NewsImg9 from "../../../assets/img/trendy/xs/xs-4.jpg";
import NewsImg10 from "../../../assets/img/trendy/xs/xs-5.jpg";
import NewsImg11 from "../../../assets/img/trendy/xs/xs-6.jpg";

function TrendyNewsMidSm(props) {
    return (
        <div className="col-20 d-md-none d-xl-block">
            <div className="post__small mb-30">
                <div className="post__small-thumb f-left">
                    <Link to="#">
                        <img src={NewsImg6} alt="hero image"/>
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
            <div className="post__small mb-30">
                <div className="post__small-thumb f-left">
                    <Link to="#">
                        <img src={NewsImg7} alt="hero image"/>
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
            <div className="post__small mb-30">
                <div className="post__small-thumb f-left">
                    <Link to="#">
                        <img src={NewsImg8} alt="hero image"/>
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
            <div className="post__small mb-30">
                <div className="post__small-thumb f-left">
                    <Link to="#">
                        <img src={NewsImg9} alt="hero image"/>
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
            <div className="post__small mb-30">
                <div className="post__small-thumb f-left">
                    <Link to="#">
                        <img src={NewsImg10} alt="hero image"/>
                    </Link>
                </div>
                <div className="post__small-text fix pl-10">
                                    <span className="sm-cat">
                                        <Link to="#">Politic</Link>
                                    </span>
                    <h4 className="title-13 pr-0">
                        <Link to="#">New Season Tiets Seat Optional.</Link>
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
            <div className="post__small mb-30">
                <div className="post__small-thumb f-left">
                    <Link to="#">
                        <img src={NewsImg11} alt="hero image"/>
                    </Link>
                </div>
                <div className="post__small-text fix pl-10">
                                    <span className="sm-cat">
                                        <Link to="#">Study</Link>
                                    </span>
                    <h4 className="title-13 pr-0">
                        <Link to="#">For Marilyn St Any Place Can Be..</Link>
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
            {/*<div className="post-btn mb-30">*/}
            {/*    <Link to="#" className="btn btn-border">view more</Link>*/}
            {/*</div>*/}
        </div>
    );
}

export default TrendyNewsMidSm;