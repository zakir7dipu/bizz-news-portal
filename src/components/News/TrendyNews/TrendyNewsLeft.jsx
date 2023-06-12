import React from 'react';
import {Link} from "react-router-dom";
import NewsImg1 from "../../../assets/img/trendy/sm1.jpg";
import NewsImg2 from "../../../assets/img/trendy/sm2.jpg";
import NewsImg3 from "../../../assets/img/trendy/sm3.jpg";

function TrendyNewsLeft(props) {
    return (
        <div className="col-20">
            <div className="postbox mb-25">
                <div className="postbox__thumb">
                    <Link to="#">
                        <img src={NewsImg1} alt="hero image"/>
                    </Link>
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
                    <h4 className="pr-0">
                        <Link to="#">Paul Manafort’s Accountant Testifies She Helped Alter Financial
                            Documents</Link>
                    </h4>
                </div>
            </div>
            <div className="postbox mb-25">
                <div className="postbox__thumb">
                    <Link to="#">
                        <img src={NewsImg2} alt="hero image"/>
                    </Link>
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
                    <h4 className="pr-0">
                        <Link to="#">Rina Sawayama Is Not the Asian Britney Spears</Link>
                    </h4>
                </div>
            </div>
            <div className="postbox mb-25">
                <div className="postbox__thumb">
                    <Link to="#">
                        <img src={NewsImg3} alt="hero image"/>
                    </Link>
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
                    <h4 className="pr-0">
                        <Link to="#">Receiving the Summer Sols tice the Swedish Way</Link>
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default TrendyNewsLeft;