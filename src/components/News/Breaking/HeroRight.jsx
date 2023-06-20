import React from 'react';
import {Col, Row} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import {global} from "../../../library/config.js"
import {isMobile} from 'react-device-detect';
import HeroRightSkeleton from "../../UI/Skeletons/HeroRightSkeleton.jsx";
const {base_path} = global.config

function HeroRight({newsData}) {
    const {isLoading, data} = newsData
    return (
        <Col lg={6} md={12}>
            {isLoading && <HeroRightSkeleton card={4}/>}
            <Row>
                {!isLoading && data.map(news=>{
                    return (
                        <Col lg={6} md={6} key={news.slug}>
                            <div className="hero pos-relative mb-30">
                                <div className="hero__thumb" data-overlay="dark-gradient">
                                    <NavLink to={`/article/${news.slug}`}>
                                        {isMobile && <img src={base_path+news.banner} alt="hero image"/>}
                                        {!isMobile && <img src={base_path+news.banner} alt="hero image" style={{width:'283px', height:'159px',objectFit:'cover',objectPosition:'center'}}/>}
                                    </NavLink>
                                </div>
                                <div className="hero__text hero__text-small">
                                    <span className="post-cat mb-10">
                                        <NavLink to={`/collection/${news.category?.slug}`}>{news.category.name}</NavLink>
                                    </span>
                                    <h3 className="pr-0">
                                        <NavLink to={`/article/${news.slug}`}>{news.title}</NavLink>
                                    </h3>
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </Col>
    );
}

export default HeroRight;