import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import PageHighlightedNews from "./PageHighlightedNews.jsx";
import NewsWithPagination from "../News/NewsWithPagination/index.jsx";
import PopularNews from "../News/PopularNews/index.jsx";
import PopularTags from "../Tags/PopularTags.jsx";
import {useInternalLink} from "../../library/helper.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchAdBySlug5} from "../../features/Advertisements/advertisementSlice.js";
import SubscriptionNewsLatter from "../Subscription/SubscriptionNewsLatter.jsx";

function Index({category}) {
    const {metaAd5} = useSelector(state => state.advertisementState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAdBySlug5('advertisement-5'));
    }, [dispatch]);

    return (
        <section className="news-area">
            <Container>
                <Row>
                    <Col xl={8} lg={8}>
                        <PageHighlightedNews categorySlug={category?.slug}/>
                        <NewsWithPagination categorySlug={category?.slug}/>
                    </Col>
                    <Col xl={4} lg={4}>
                        <div className="widget mb-40">
                            <Link to="#">
                                <img src={useInternalLink(metaAd5?.advertisement)} alt=""/>
                            </Link>
                        </div>
                        <div className="widget widget-border mb-40">
                            <PopularNews category_slug={category?.slug}/>
                        </div>
                        <SubscriptionNewsLatter/>
                        <div className="widget widget-border mb-40">
                            <PopularTags tag={'ALL'}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Index;