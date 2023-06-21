import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import PageHighlightedNews from "./PageHighlightedNews.jsx";
import NewsWithPagination from "../News/NewsWithPagination/index.jsx";
import PopularNews from "../News/PopularNews/index.jsx";
import PopularTags from "../Tags/PopularTags.jsx";
import {global} from "../../library/config.js";
import {subscriptionHandler, useInternalLink} from "../../library/helper.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchAdBySlug5} from "../../features/Advertisements/advertisementSlice.js";

function Index({category}) {
    const [email, setEmail] = useState();
    const {default_token} = global.config;

    const handleRequest = (e) => {
        e.preventDefault();
        let data = {
            email: email,
            token: default_token
        }
        subscriptionHandler(data)
        setEmail('');
    }

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
                        <div className="widget widget-border mb-40">
                            <h3 className="widget-title">Subscribe our Newsletter!</h3>
                            <p>Subscribe to our email newsletter to receive useful articles and special offers.</p>
                            <form className="widget-subscribe" onSubmit={handleRequest}>
                                <input type="email" placeholder="Enter your email :"  value={email}
                                       onChange={(e) => setEmail(e.target.value)} />
                                <button className="btn" type="submit">subscribe</button>
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