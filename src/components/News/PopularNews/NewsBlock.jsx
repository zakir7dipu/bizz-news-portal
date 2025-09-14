import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {global} from "../../../library/config.js"
import moment from "moment/moment.js";

const {base_path, default_token} = global.config;

function NewsBlock({metaInfo}) {
    const {slug, title, banner, category, created_at} = metaInfo
    return (
        <div className="post__small mb-20">
            <div className="post__small-thumb f-left">
                <NavLink to={`/article/${slug}`}>
                    <img src={base_path + banner} alt="hero image"
                         style={{width: '90px', height: '76px', objectFit: 'cover', objectPosition: 'center'}}/>
                </NavLink>
            </div>
            <div className="post__small-text fix pl-10">
                            <span className="sm-cat">
                                <NavLink to={`/collection/${category.slug}`}>{category.name}</NavLink>
                            </span>
                <h4 className="title-13 pr-0">
                    <NavLink to={`/article/${slug}`}>{title}</NavLink>
                </h4>
                <div className="post__small-text-meta">
                    <ul>
                        <li>
                            <i className="fas fa-calendar-alt"></i>
                            <span>{moment(created_at).format('LL')}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NewsBlock;