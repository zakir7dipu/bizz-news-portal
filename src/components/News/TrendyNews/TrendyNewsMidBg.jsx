import React from 'react';
import {Link} from "react-router-dom";
import NewsImg4 from "../../../assets/img/trendy/lg1.jpg";
import NewsImg5 from "../../../assets/img/trendy/lg2.jpg";

function TrendyNewsMidBg(props) {
    return (
        <div className="col-40">
            <div className="postbox mb-25">
                <div className="postbox__thumb">
                    <Link to="#">
                        <img src={NewsImg4} alt="hero image"/>
                    </Link>
                    <span className="post-cat post-absolute">
                                        <Link to="#">politic</Link>
                                    </span>
                </div>
                <div className="postbox__text pt-10">
                    <div className="postbox__text-meta pb-10">
                        <ul>
                            <li>
                                <i className="fas fa-calendar-alt"></i>
                                <span>01 Sep 2018</span>
                            </li>
                            <li>
                                <i className="far fa-comment"></i>
                                <span>(03)</span>
                            </li>
                        </ul>
                    </div>
                    <h4 className="title-16 pr-0">
                        <Link to="#">Trump’s Inaccurate Claims About High ways the world, Immigration and
                            Beyoncé.</Link>
                    </h4>
                </div>
            </div>

            <div className="postbox mb-25">
                <div className="postbox__thumb">
                    <Link to="#">
                        <img src={NewsImg5} alt="hero image"/>
                    </Link>
                    <span className="post-cat post-absolute">
                                        <Link to="#">travel</Link>
                                    </span>
                </div>
                <div className="postbox__text pt-10">
                    <div className="postbox__text-meta pb-10">
                        <ul>
                            <li>
                                <i className="fas fa-calendar-alt"></i>
                                <span>01 Sep 2018</span>
                            </li>
                            <li>
                                <i className="far fa-comment"></i>
                                <span>(03)</span>
                            </li>
                        </ul>
                    </div>
                    <h4 className="title-16 pr-0">
                        <Link to="#">Moving From Buyer to Seller, Major League Soccer Revenue In The World
                            Wide Claims About.</Link>
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default TrendyNewsMidBg;