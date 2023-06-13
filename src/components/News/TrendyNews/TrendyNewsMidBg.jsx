import React from 'react';
import {Link} from "react-router-dom";
import moment from "moment/moment.js";
import "moment/locale/bn.js"

import {global} from "../../../library/config.js"
const {base_path} = global.config

function TrendyNewsMidBg({newsData}) {
    const {isLoading, data} = newsData
    return (
        <>
            {!isLoading && <div className="col-40">
                {data.map(tnmbg=>{
                    return (
                        <div className="postbox mb-25" key={tnmbg.slug}>
                            <div className="postbox__thumb">
                                <Link to="#">
                                    <img src={base_path+tnmbg.banner} alt="hero image"/>
                                </Link>
                                <span className="post-cat post-absolute">
                                        <Link to="#">{tnmbg.category.name}</Link>
                                    </span>
                            </div>
                            <div className="postbox__text pt-10">
                                <div className="postbox__text-meta pb-10">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>{moment(tnmbg.updated_at).format('LL')}</span>
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="title-16 pr-0">
                                    <Link to="#">{tnmbg.title}</Link>
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