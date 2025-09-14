import React from 'react';
import {Link, NavLink} from "react-router-dom";
import moment from "moment/moment.js";
import "moment/locale/bn.js"

import {global} from "../../../library/config.js"
import TrendyNewsLeftSkeleton from "../../UI/Skeletons/TrendyNewsLeftSkeleton.jsx";
const {base_path} = global.config

function TrendyNewsMidSm({newsData}) {
    const {isLoading, data} = newsData
    return (
        <>
            {isLoading && <TrendyNewsLeftSkeleton card={3}/>}
            {!isLoading && <div className="col-20">
                {data.map(tnms=>{
                    return (
                        <div className="postbox mb-25" key={tnms.slug}>
                            <div className="postbox__thumb">
                                <NavLink to={`/article/${tnms.slug}`}>
                                    <img src={base_path+tnms.banner} alt="hero image"/>
                                </NavLink>
                            </div>
                            <div className="postbox__text pt-10">
                                <div className="postbox__text-meta pb-10">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>{moment(tnms.created_at).format('LL')}</span>
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="pr-0">
                                    <NavLink to={`/article/${tnms.slug}`}>{tnms.title}</NavLink>
                                </h4>
                            </div>
                        </div>
                    )
                })}

            </div>}
        </>
    );
}

export default TrendyNewsMidSm;