import React from 'react';
import {Link} from "react-router-dom";
import trendyHeroImage1 from "../../../assets/img/trendy/xs/xs-1.jpg";
import {global} from "../../../library/config.js"
import moment from "moment/moment.js";

const {base_path, default_token} = global.config;

function NewsBlock({metaInfo}) {
    const {slug, title, banner, category, updated_at} = metaInfo
    return (
        <div className="post__small mb-20">
            <div className="post__small-thumb f-left">
                <Link to="#">
                    <img src={base_path + banner} alt="hero image"
                         style={{width: '90px', height: '76px', objectFit: 'cover', objectPosition: 'center'}}/>
                </Link>
            </div>
            <div className="post__small-text fix pl-10">
                            <span className="sm-cat">
                                <Link to="#">{category.name}</Link>
                            </span>
                <h4 className="title-13 pr-0">
                    <Link to="#">{title}</Link>
                </h4>
                <div className="post__small-text-meta">
                    <ul>
                        <li>
                            <i className="fas fa-calendar-alt"></i>
                            <span>{moment(updated_at).format('LL')}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NewsBlock;