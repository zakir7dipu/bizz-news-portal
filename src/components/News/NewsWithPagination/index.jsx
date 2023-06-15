import React, {useEffect, useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import pol6 from "../../../assets/img/politic/sm-pol1.jpg";
import moment from "moment/moment";
import {useDispatch, useSelector} from "react-redux";
import {getNews, getNewsUsingPaginate} from "../../../features/News/NewsSlice.js";
import {global} from "../../../library/config.js"
import {getImage} from "../../../library/helper.js";
const {base_path} = global.config

function Index({categorySlug}) {
    const {isLoading, news, total_rows, total_pages} = useSelector(state => state.allNews)
    console.log(news)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(()=>{
        if(categorySlug) {
            let data = {
                paginate:2,
                page:currentPage,
                categorySlug: categorySlug
            }
            dispatch(getNews(data))
        }
    },[categorySlug])
    return (
        !isLoading && <Row className="pt-30">
            {news.map(item=>{
                return (
                    <Col xl={4} lg={6} md={6} key={item.slug}>
                        <div className="postbox mb-30">
                            <div className="postbox__thumb">
                                <Link to="#">
                                    <img src={base_path+getImage(item.banners, 'sm')} alt="hero image"/>
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
                    </Col>
                )
            })}
            <Col sm={12} className="text-center">
                {total_pages !== currentPage && <Button variant="light" onClick={e=>{
                    e.preventDefault()
                    setCurrentPage(prevState => prevState+1)
                    let data = {
                        paginate:2,
                        page:currentPage+1,
                        categorySlug: categorySlug
                    }
                    getNewsUsingPaginate(data)
                }}>আরও</Button>}

            </Col>
        </Row>
    );
}

export default Index;