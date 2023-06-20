import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import adver from "../../assets/img/add/add-sidebar.jpg"
import {Link} from "react-router-dom";
import PageHighlightedNews from "./PageHighlightedNews.jsx";
import NewsWithPagination from "../News/NewsWithPagination/index.jsx";
import PopularNews from "../News/PopularNews/index.jsx";
import PopularTags from "../Tags/PopularTags.jsx";

function Index({category}) {
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
                                <img src={adver} alt=""/>
                            </Link>
                        </div>
                        <div className="widget widget-border mb-40">
                            <PopularNews category_slug={category?.slug}/>
                        </div>
                        <div className="widget widget-border mb-40">
                            <h3 className="widget-title">Subscribe our Newsletter!</h3>
                            <p>Subscribe to our email newsletter to receive useful articles and special offers.</p>
                            <form className="widget-subscribe" action="#">
                                <input type="email" placeholder="Enter your email :"/>
                                <button className="btn">subscribe</button>
                            </form>
                        </div>
                        <div className="widget widget-border mb-40">
                            <PopularTags/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Index;