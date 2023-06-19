import React from 'react';
import {Link} from "react-router-dom";
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
                                {isMobile && <Link to="#"><img src={base_path+news.banner} alt="hero image"/></Link>}
                                {!isMobile && <Link to="#"><img src={base_path+news.banner} alt="hero image" style={{width:'595px',height:'350px',objectFit:'cover',objectPosition:'center'}}/></Link>}
                            </div>
                            <div className="hero__text">
                                <span className="post-cat mb-10"><Link to="#">{news.category.name}</Link></span>
                                <h3 className="pr-100"><Link to="#">{news.title}</Link></h3>
                            </div>
                        </div>
                    </Col>
                )
            })}

        </>
    );
}

export default HeroLeft;