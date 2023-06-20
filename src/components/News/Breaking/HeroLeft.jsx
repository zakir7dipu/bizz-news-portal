import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {Col} from "react-bootstrap";
import {global} from "../../../library/config.js"
import {isMobile} from 'react-device-detect';
import HeroLeftSkeleton from "../../UI/Skeletons/HeroLeftSkeleton.jsx";
const {base_path} = global.config

function HeroLeft({newsData}) {
    const {isLoading, data} = newsData
    return (
        <>
            {isLoading && <HeroLeftSkeleton/>}
            {!isLoading && data.map(news=>{
                return (
                    <Col lg={6} md={12} key={news.slug}>
                        <div className="hero pos-relative mb-30">
                            <div className="hero__thumb" data-overlay="dark-gradient">
                                {isMobile && <NavLink to={`/article/${news.slug}`}><img src={base_path+news.banner} alt="hero image"/></NavLink>}
                                {!isMobile && <NavLink to={`/article/${news.slug}`}><img src={base_path+news.banner} alt="hero image" style={{width:'595px',height:'350px',objectFit:'cover',objectPosition:'center'}}/></NavLink>}
                            </div>
                            <div className="hero__text">
                                <span className="post-cat mb-10"><NavLink to={`/collection/${news.category?.slug}`}>{news.category.name}</NavLink></span>
                                <h3 className="pr-100"><NavLink to={`/article/${news.slug}`}>{news.title}</NavLink></h3>
                            </div>
                        </div>
                    </Col>
                )
            })}

        </>
    );
}

export default HeroLeft;