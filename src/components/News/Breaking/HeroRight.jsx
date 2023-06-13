import React from 'react';
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {global} from "../../../library/config.js"
import {isMobile} from 'react-device-detect';
const {base_path} = global.config

function HeroRight({newsData}) {
    const {isLoading, data} = newsData
    return (
        <Col lg={6} md={12}>
            <Row>
                {!isLoading && data.map(news=>{
                    return (
                        <Col lg={6} md={6} key={news.slug}>
                            <div className="hero pos-relative mb-30">
                                <div className="hero__thumb" data-overlay="dark-gradient">
                                    <Link to="#">
                                        {isMobile && <img src={base_path+news.banner} alt="hero image"/>}
                                        {!isMobile && <img src={base_path+news.banner} alt="hero image" style={{width:'283px', height:'159px',objectFit:'cover',objectPosition:'center'}}/>}
                                    </Link>
                                </div>
                                <div className="hero__text hero__text-small">
                                    <span className="post-cat mb-10">
                                        <Link to="#">{news.category.name}</Link>
                                    </span>
                                    <h3 className="pr-0">
                                        <Link to="#">{news.title}</Link>
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