import React from 'react';
import {Link} from "react-router-dom";
import NewsImg12 from "../../../assets/img/trendy/sm4.jpg";
import NewsImg13 from "../../../assets/img/trendy/sm5.jpg";
import Advertisement02 from "../../Advertisement/Advertisement02.jsx";
import AdvertisementImg from "../../../assets/img/add/600x400x.jpg";

function TrendyNewsRight(props) {
    return (
        <div className="col-20 ">
            <div className="postbox mb-25">
                <div className="postbox__thumb">
                    <Link to="#">
                        <img src={NewsImg12} alt="hero image"/>
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
                        <img src={NewsImg13} alt="hero image"/>
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
                <Advertisement02
                    image={AdvertisementImg}
                />
            </div>
        </div>
    );
}

export default TrendyNewsRight;