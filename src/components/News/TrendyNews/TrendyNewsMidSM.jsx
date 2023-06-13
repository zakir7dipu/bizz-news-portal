import React from 'react';
import {Link} from "react-router-dom";
import moment from "moment/moment.js";
import "moment/locale/bn.js"

import {global} from "../../../library/config.js"
const {base_path} = global.config

function TrendyNewsMidSm({newsData}) {
    const {isLoading, data} = newsData
    return (
        <>
            {!isLoading && <div className="col-20">
                {data.map(tnms=>{
                    return (
                        <div className="postbox mb-25" key={tnms.slug}>
                            <div className="postbox__thumb">
                                <Link to="#">
                                    <img src={base_path+tnms.banner} alt="hero image"/>
                                </Link>
                            </div>
                            <div className="postbox__text pt-10">
                                <div className="postbox__text-meta pb-10">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>{moment(tnms.updated_at).format('LL')}</span>
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="pr-0">
                                    <Link to="#">{tnms.title}</Link>
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