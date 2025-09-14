import React from 'react';
import {Link, NavLink} from "react-router-dom";
import moment from "moment/moment.js";
import "moment/locale/bn.js"

import {global} from "../../../library/config.js"
import TrendyNewsMidBgSkeleton from "../../UI/Skeletons/TrendyNewsMidBgSkeleton.jsx";
const {base_path} = global.config

function TrendyNewsMidBg({newsData}) {
    const {isLoading, data} = newsData
    return (
        <>
            {isLoading && <TrendyNewsMidBgSkeleton card={2} />}
            {!isLoading && <div className="col-40">
                {data.map(tnmbg=>{
                    return (
                        <div className="postbox mb-25" key={tnmbg.slug}>
                            <div className="postbox__thumb">
                                <NavLink to={`/article/${tnmbg.slug}`}>
                                    <img src={base_path+tnmbg.banner} alt="hero image"/>
                                </NavLink>
                                <span className="post-cat post-absolute">
                                        <NavLink to={`/collection/${tnmbg.category?.slug}`}>{tnmbg.category.name}</NavLink>
                                    </span>
                            </div>
                            <div className="postbox__text pt-10">
                                <div className="postbox__text-meta pb-10">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>{moment(tnmbg.created_at).format('LL')}</span>
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="title-16 pr-0">
                                    <NavLink to={`/article/${tnmbg.slug}`}>{tnmbg.title}</NavLink>
                                </h4>
                            </div>
                        </div>
                    )
                })}

            </div>}
        </>
    );
}

export default TrendyNewsMidBg;