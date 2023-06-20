import React, {useEffect, useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import pol6 from "../../../assets/img/politic/sm-pol1.jpg";
import moment from "moment/moment";
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../../features/News/NewsSlice.js";
import {global} from "../../../library/config.js"
import {getImage} from "../../../library/helper.js";
import CollectionBottomSkeleton from "../../UI/Skeletons/Collection/CollectionBottomSkeleton.jsx";
const {base_path} = global.config

function Index({categorySlug}) {
    const {isLoading, news, total_rows, total_pages} = useSelector(state => state.allNews)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [paginateItem, setPaginateItem] = useState(2)

    const paginateAction = () => {
        let data = {
            paginate:paginateItem,
            page:currentPage+1,
            categorySlug: categorySlug
        }
        dispatch(getNews(data))
    }

    useEffect(()=>{
        if(categorySlug) {
            let data = {
                paginate:paginateItem,
                page:currentPage,
                categorySlug: categorySlug
            }
            dispatch(getNews(data))
        }
    },[categorySlug])

    return (
        <Row className="pt-30">
            {isLoading && <CollectionBottomSkeleton card={6}/>}
            {!isLoading &&  news.map(item=>{
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
                {total_rows !== news?.length && <Button variant="light" onClick={e=>{
                    e.preventDefault()
                    setCurrentPage(prevState => prevState+1)
                    paginateAction()
                }}>আরও</Button>}

            </Col>
        </Row>
    );
}

export default Index;