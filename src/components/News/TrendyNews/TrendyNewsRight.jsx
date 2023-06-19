import React from 'react';
import {Link} from "react-router-dom";
import NewsImg12 from "../../../assets/img/trendy/sm4.jpg";
import NewsImg13 from "../../../assets/img/trendy/sm5.jpg";
import Advertisement02 from "../../Advertisement/Advertisement02.jsx";
import AdvertisementImg from "../../../assets/img/add/600x400x.jpg";
import moment from "moment/moment.js";
import "moment/locale/bn.js"

import {global} from "../../../library/config.js"
import TrendyNewsLeftSkeleton from "../../UI/Skeletons/TrendyNewsLeftSkeleton.jsx";
const {base_path} = global.config

function TrendyNewsRight({newsData}) {
    const {isLoading, data} = newsData
    return (
        <>
            {isLoading && <TrendyNewsLeftSkeleton card={3}/>}
            {!isLoading && <div className="col-20">
                {data.map(tnr=>{
                    return (
                        <div className="postbox mb-25" key={tnr.slug}>
                            <div className="postbox__thumb">
                                <Link to="#">
                                    <img src={base_path+tnr.banner} alt="hero image"/>
                                </Link>
                            </div>
                            <div className="postbox__text pt-10">
                                <div className="postbox__text-meta pb-10">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>{moment(tnr.updated_at).format('LL')}</span>
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="pr-0">
                                    <Link to="#">{tnr.title}</Link>
                                </h4>
                            </div>
                        </div>
                    )
                })}

                <div className="postbox mb-25">
                    <Advertisement02
                        image={AdvertisementImg}
                    />
                </div>
            </div>}
        </>
    );
}

export default TrendyNewsRight;