import React from 'react';
import {Link, NavLink} from "react-router-dom";
import moment from "moment/moment.js";
import "moment/locale/bn.js"

import {global} from "../../../library/config.js"
import TrendyNewsLeftSkeleton from "../../UI/Skeletons/TrendyNewsLeftSkeleton.jsx";
const {base_path} = global.config

function TrendyNewsLeft({trendyNewsData}) {
    const {isLoading, data} = trendyNewsData
    return (
        <>
            {isLoading && <TrendyNewsLeftSkeleton card={3}/>}
            {!isLoading && <div className="col-20">
                {data.map(tnl=>{
                    return (
                        <div className="postbox mb-25" key={tnl.slug}>
                            <div className="postbox__thumb">
                                <NavLink to={`/article/${tnl.slug}`}>
                                    <img src={base_path+tnl.banner} alt="hero image"/>
                                </NavLink>
                            </div>
                            <div className="postbox__text pt-10">
                                <div className="postbox__text-meta pb-10">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>{moment(tnl.created_at).format('LL')}</span>
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="pr-0">
                                    <NavLink to={`/article/${tnl.slug}`}>{tnl.title}</NavLink>
                                </h4>
                            </div>
                        </div>
                    )
                })}
            </div>}
        </>
    );
}

export default TrendyNewsLeft;