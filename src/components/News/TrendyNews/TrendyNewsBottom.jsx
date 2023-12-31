import React from 'react';
import {Col, Row} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import moment from "moment/moment.js";
import "moment/locale/bn.js"

import {global} from "../../../library/config.js"
import TrendyNewsBottomSkeleton from "../../UI/Skeletons/TrendyNewsBottomSkeleton.jsx";
const {base_path} = global.config

function TrendyNewsBottom({newsData}) {
    const {isLoading, data} = newsData
    return (
        <Row>
            {isLoading && <TrendyNewsBottomSkeleton card={8}/>}
            {!isLoading && data.map(tnb=>{
                return (
                    <Col xl={3} ld={3} md={6} sm={12} key={tnb.slug}>
                        <div className="postbox mb-25">
                            <div className="postbox__thumb">
                                <NavLink to={`/article/${tnb.slug}`}>
                                    <img src={base_path+tnb.banner} alt="hero image"/>
                                </NavLink>
                            </div>
                            <div className="postbox__text pt-10">
                                <div className="postbox__text-meta pb-10">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>{moment(tnb.updated_at).format('LL')}</span>
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="pr-0">
                                    <NavLink to={`/article/${tnb.slug}`}>{tnb.title}</NavLink>
                                </h4>
                            </div>
                        </div>
                    </Col>
                )
            })}

        </Row>
    );
}

export default TrendyNewsBottom;