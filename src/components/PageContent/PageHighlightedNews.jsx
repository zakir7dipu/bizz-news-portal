import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {global} from "../../library/config.js"
import {isMobile} from 'react-device-detect';
import moment from "moment/moment.js";
import {Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getHighlightedNews, getNews} from "../../features/HighlightedNews/HighlightedNewsSlice.js";
import {getImage} from "../../library/helper.js";
import CollectionLeftSkeleton from "../UI/Skeletons/Collection/CollectionLeftSkeleton.jsx";
import CollectionMidSkeleton from "../UI/Skeletons/Collection/CollectionMidSkeleton.jsx";

const {base_path} = global.config

function PageHighlightedNews({categorySlug}) {
    const {isLoading, highlighted, news, errorMessage} = useSelector(state => state.highlightedNews)
    const dispatch = useDispatch()
    useEffect(() => {
        let data = {
            slug: categorySlug
        }
        dispatch(getHighlightedNews(data))
        dispatch(getNews(data))
    }, [categorySlug])
    return (
        <>
            <Row>
                {isLoading && <CollectionLeftSkeleton/>}
                {!isLoading && highlighted && <Col xl={8} lg={8}>
                    <div className="postbox mb-30">
                        <div className="postbox__thumb">
                            <Link to="#">
                                {!isMobile &&
                                    <img className="img-100" src={base_path + highlighted?.banner} alt="hero image"
                                         style={{
                                             width: '100%',
                                             height: '370px',
                                             objectFit: 'cover',
                                             objectPosition: 'center'
                                         }}/>}
                                {isMobile &&
                                    <img className="img-100" src={base_path + highlighted?.banner} alt="hero image"/>}

                            </Link>
                            <span className="post-cat post-absolute">
                            <Link to="#">{highlighted?.category?.name}</Link>
                        </span>
                        </div>
                        <div className="postbox__text pt-10">
                            <div className="postbox__text-meta pb-10">
                                <ul>
                                    <li>
                                        <i className="fas fa-calendar-alt"></i>
                                        <span>{moment(highlighted?.updated_at).format('LL')}</span>
                                    </li>
                                </ul>
                            </div>
                            <h4 className="title-16 pr-0">
                                <Link to="#">{highlighted?.title}</Link>
                            </h4>
                        </div>
                    </div>
                </Col>}

                <Col xl={4} lg={4}>
                    {isLoading && <CollectionMidSkeleton card={3}/>}
                    {news.map(item => {
                        return (
                            <div className="postbox mb-30" key={item.slug}>
                                <div className="postbox__thumb">
                                    <Link to="#">
                                        <img src={base_path + getImage(item.banners, 'md')} alt="hero image"/>
                                    </Link>
                                </div>
                                <div className="postbox__text pt-10">
                                    <div className="postbox__text-meta pb-10">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>{moment(item.updated_at).format('LL')}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="pr-0">
                                        <Link to="#">{item.title}</Link>
                                    </h4>
                                </div>
                            </div>
                        )
                    })}
                </Col>
            </Row>

        </>
    );
}

export default PageHighlightedNews;