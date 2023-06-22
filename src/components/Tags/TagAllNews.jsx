import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useInternalLink} from "../../library/helper.js";
import SubscriptionNewsLatter from "../Subscription/SubscriptionNewsLatter.jsx";
import PopularTags from "./PopularTags.jsx";
import {Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchAdBySlug5} from "../../features/Advertisements/advertisementSlice.js";
import TagNewsWithPagination from "./TagNewsWithPagination.jsx";

function TagAllNews({tag}) {
    const {metaAd5} = useSelector(state => state.advertisementState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAdBySlug5('advertisement-5'));
    }, [dispatch]);
    return (
        <>
            <section className="news-area">
                <Container>
                    <Row>
                        <Col xl={8} lg={8}>
                            <TagNewsWithPagination tagName={tag}/>
                        </Col>
                        <Col xl={4} lg={4}>
                            <div className="widget mb-40">
                                <Link to="#">
                                    <img src={useInternalLink(metaAd5?.advertisement)} alt=""/>
                                </Link>
                            </div>
                            <SubscriptionNewsLatter/>
                            <div className="widget widget-border mb-40">
                                <PopularTags tag={tag}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default TagAllNews;