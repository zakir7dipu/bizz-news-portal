import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CategoryNewsImg1 from "../../../assets/img/cat/cat1.jpg";
import CategoryNewsImg2 from "../../../assets/img/trendy/xs/xs-12.jpg";
import CategoryNewsImg3 from "../../../assets/img/trendy/xs/xs-11.jpg";
import CategoryNewsImg4 from "../../../assets/img/cat/cat2.jpg";
import CategoryNewsImg5 from "../../../assets/img/trendy/xs/xs-7.jpg";
import CategoryNewsImg6 from "../../../assets/img/trendy/xs/xs-8.jpg";
import CategoryNewsImg7 from "../../../assets/img/cat/cat3.jpg";
import CategoryNewsImg8 from "../../../assets/img/trendy/xs/xs-10.jpg";
import CategoryNewsImg9 from "../../../assets/img/trendy/xs/xs-9.jpg";
import {Link} from "react-router-dom";
import NewsCategoryColumn from "./NewsColumn.jsx";
import {useDispatch, useSelector} from "react-redux";

function Index(props) {
    const {isLoading, showHomeCategories} = useSelector(state => state.category)

    return (
        <section className="cat-area pb-30">
            <Container>
                {!isLoading && <Row>
                    {showHomeCategories.map(shc=><NewsCategoryColumn key={shc.slug} categoryInfo={shc}/>)}
                    {/*<Col xl={4} lg={4} md={6}>*/}
                    {/*    <div className="section-title mb-30">*/}
                    {/*        <h2>travel</h2>*/}
                    {/*    </div>*/}

                    {/*    <div className="postbox mb-25">*/}
                    {/*        <div className="postbox__thumb">*/}
                    {/*            <Link to="#">*/}
                    {/*                <img src={CategoryNewsImg4} alt="hero image"/>*/}
                    {/*            </Link>*/}
                    {/*        </div>*/}
                    {/*        <div className="postbox__text pt-20">*/}
                    {/*            <h4 className="title-18 pr-0">*/}
                    {/*                <Link to="#">Robots or Job Training: Manutues Grapple With How to Improve.</Link>*/}
                    {/*            </h4>*/}
                    {/*            <div className="postbox__text-meta pb-10">*/}
                    {/*                <ul>*/}
                    {/*                    <li>*/}
                    {/*                        <i className="fas fa-calendar-alt"></i>*/}
                    {/*                        <span>01 Sep 2018</span>*/}
                    {/*                    </li>*/}
                    {/*                    <li>*/}
                    {/*                        <i className="far fa-comment"></i>*/}
                    {/*                        <span>(03)</span>*/}
                    {/*                    </li>*/}
                    {/*                </ul>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className="cat-sm-post">*/}
                    {/*        <div className="post__small mb-30">*/}
                    {/*            <div className="post__small-thumb f-left">*/}
                    {/*                <Link to="#">*/}
                    {/*                    <img src={CategoryNewsImg5} alt="hero image"/>*/}
                    {/*                </Link>*/}
                    {/*            </div>*/}
                    {/*            <div className="post__small-text fix pl-10">*/}
                    {/*                <h4 className="title-16 pr-0 mt-0">*/}
                    {/*                    <Link to="#">Canadian Shoppers Pay When Visa and MasterCard.</Link>*/}
                    {/*                </h4>*/}
                    {/*                <div className="post__small-text-meta">*/}
                    {/*                    <ul>*/}
                    {/*                        <li>*/}
                    {/*                            <i className="fas fa-calendar-alt"></i>*/}
                    {/*                            <span>01 Sep 2018</span>*/}
                    {/*                        </li>*/}
                    {/*                    </ul>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="post__small mb-30">*/}
                    {/*            <div className="post__small-thumb f-left">*/}
                    {/*                <Link to="#">*/}
                    {/*                    <img src={CategoryNewsImg6} alt="hero image"/>*/}
                    {/*                </Link>*/}
                    {/*            </div>*/}
                    {/*            <div className="post__small-text fix pl-10">*/}
                    {/*                <h4 className="title-16 pr-0 mt-0">*/}
                    {/*                    <Link to="#">Who is next football Super Hero. Check the future star</Link>*/}
                    {/*                </h4>*/}
                    {/*                <div className="post__small-text-meta">*/}
                    {/*                    <ul>*/}
                    {/*                        <li>*/}
                    {/*                            <i className="fas fa-calendar-alt"></i>*/}
                    {/*                            <span>01 Sep 2018</span>*/}
                    {/*                        </li>*/}
                    {/*                    </ul>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Col>*/}
                    {/*<Col xl={4} lg={4} md={6} className="d-md-none d-lg-block">*/}
                    {/*    <div className="section-title mb-30">*/}
                    {/*        <h2>lifestyle</h2>*/}
                    {/*    </div>*/}

                    {/*    <div className="postbox mb-25">*/}
                    {/*        <div className="postbox__thumb">*/}
                    {/*            <Link to="#">*/}
                    {/*                <img src={CategoryNewsImg7} alt="hero image"/>*/}
                    {/*            </Link>*/}
                    {/*        </div>*/}
                    {/*        <div className="postbox__text pt-20">*/}
                    {/*            <h4 className="title-18 pr-0">*/}
                    {/*                <Link to="#">Denying passports to Americans along the border throwing their*/}
                    {/*                    citizens.</Link>*/}
                    {/*            </h4>*/}
                    {/*            <div className="postbox__text-meta pb-10">*/}
                    {/*                <ul>*/}
                    {/*                    <li>*/}
                    {/*                        <i className="fas fa-calendar-alt"></i>*/}
                    {/*                        <span>01 Sep 2018</span>*/}
                    {/*                    </li>*/}
                    {/*                    <li>*/}
                    {/*                        <i className="far fa-comment"></i>*/}
                    {/*                        <span>(03)</span>*/}
                    {/*                    </li>*/}
                    {/*                </ul>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className="cat-sm-post">*/}
                    {/*        <div className="post__small mb-30">*/}
                    {/*            <div className="post__small-thumb f-left">*/}
                    {/*                <Link to="#">*/}
                    {/*                    <img src={CategoryNewsImg8} alt="hero image"/>*/}
                    {/*                </Link>*/}
                    {/*            </div>*/}
                    {/*            <div className="post__small-text fix pl-10">*/}
                    {/*                <h4 className="title-16 pr-0 mt-0">*/}
                    {/*                    <Link to="#">Hobots or Job Training: Mnutuers Grapple With How to Improve.</Link>*/}
                    {/*                </h4>*/}
                    {/*                <div className="post__small-text-meta">*/}
                    {/*                    <ul>*/}
                    {/*                        <li>*/}
                    {/*                            <i className="fas fa-calendar-alt"></i>*/}
                    {/*                            <span>01 Sep 2018</span>*/}
                    {/*                        </li>*/}
                    {/*                    </ul>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="post__small mb-30">*/}
                    {/*            <div className="post__small-thumb f-left">*/}
                    {/*                <Link to="#">*/}
                    {/*                    <img src={CategoryNewsImg9} alt="hero image"/>*/}
                    {/*                </Link>*/}
                    {/*            </div>*/}
                    {/*            <div className="post__small-text fix pl-10">*/}
                    {/*                <h4 className="title-16 pr-0 mt-0">*/}
                    {/*                    <Link to="#">Robots or Job Training: Manutues Grapple With How to Improve..</Link>*/}
                    {/*                </h4>*/}
                    {/*                <div className="post__small-text-meta">*/}
                    {/*                    <ul>*/}
                    {/*                        <li>*/}
                    {/*                            <i className="fas fa-calendar-alt"></i>*/}
                    {/*                            <span>01 Sep 2018</span>*/}
                    {/*                        </li>*/}
                    {/*                    </ul>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Col>*/}
                </Row>}

            </Container>
        </section>
    );
}

export default Index;