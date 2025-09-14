import React, {useEffect} from 'react';
import {Link, NavLink} from "react-router-dom";
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
                            <NavLink to={`/article/${highlighted?.slug}`}>
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

                            </NavLink>
                            <span className="post-cat post-absolute">
                            <NavLink to={`/collection/${highlighted?.category?.slug}`}>{highlighted?.category?.name}</NavLink>
                        </span>
                        </div>
                        <div className="postbox__text pt-10">
                            <div className="postbox__text-meta pb-10">
                                <ul>
                                    <li>
                                        <i className="fas fa-calendar-alt"></i>
                                        <span>{moment(highlighted?.created_at).format('LL')}</span>
                                    </li>
                                </ul>
                            </div>
                            <h4 className="title-16 pr-0">
                                <NavLink to={`/article/${highlighted?.slug}`}>{highlighted?.title}</NavLink>
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
                                    <NavLink to={`/article/${item?.slug}`}>
                                        <img src={base_path + getImage(item.banners, 'md')} alt="hero image"/>
                                    </NavLink>
                                </div>
                                <div className="postbox__text pt-10">
                                    <div className="postbox__text-meta pb-10">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>{moment(item.created_at).format('LL')}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="pr-0">
                                        <NavLink to={`/article/${item?.slug}`}>{item.title}</NavLink>
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