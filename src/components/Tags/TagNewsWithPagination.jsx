import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMoreNews, getNews} from "../../features/News/NewsSlice.js";
import {Button, Col, Row} from "react-bootstrap";
import CollectionBottomSkeleton from "../UI/Skeletons/Collection/CollectionBottomSkeleton.jsx";
import {NavLink} from "react-router-dom";
import {getImage} from "../../library/helper.js";
import moment from "moment";
import {global} from "../../library/config.js";

function TagNewsWithPagination({tagName}) {
    const {base_path} = global.config;
    const {isLoading, news, total_rows, total_pages} = useSelector(state => state.allNews)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [paginateItem, setPaginateItem] = useState(12)

    const paginateAction = () => {
        let data = {
            paginate: paginateItem,
            page: currentPage + 1,
            tagName: tagName
        }
        dispatch(getMoreNews(data))
    }

    useEffect(() => {
        if (tagName) {
            let data = {
                paginate: paginateItem,
                page: currentPage,
                tagName: tagName
            }
            dispatch(getNews(data))
        }
    }, [tagName]);

    return (
        <Row className="pt-30">
            {isLoading && <CollectionBottomSkeleton card={6}/>}
            {!isLoading && news.map(item => {
                return (
                    <Col xl={4} lg={6} md={6} key={item.slug}>
                        <div className="postbox mb-30">
                            <div className="postbox__thumb">
                                <NavLink to={`/article/${item.slug}`}>
                                    <img src={base_path + getImage(item.banners, 'sm')} alt="hero image"/>
                                </NavLink>
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
                                    <NavLink to={`/article/${item.slug}`}>{item.title}</NavLink>
                                </h4>
                            </div>
                        </div>
                    </Col>
                )
            })}
            <Col sm={12} className="text-center">
                {total_rows !== news?.length && <Button variant="light" onClick={e => {
                    e.preventDefault()
                    setCurrentPage(prevState => prevState + 1)
                    paginateAction()
                }}>আরও</Button>}

            </Col>
        </Row>
    );
}

export default TagNewsWithPagination;