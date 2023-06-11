import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import NewsImg1 from "../../assets/img/trendy/sm1.jpg";
import NewsImg2 from "../../assets/img/trendy/sm2.jpg";
import NewsImg3 from "../../assets/img/trendy/sm3.jpg";
import NewsImg4 from "../../assets/img/trendy/lg1.jpg";
import NewsImg5 from "../../assets/img/trendy/lg2.jpg";
import NewsImg6 from "../../assets/img/trendy/xs/xs-1.jpg";
import NewsImg7 from "../../assets/img/trendy/xs/xs-2.jpg";
import NewsImg8 from "../../assets/img/trendy/xs/xs-3.jpg";
import NewsImg9 from "../../assets/img/trendy/xs/xs-4.jpg";
import NewsImg10 from "../../assets/img/trendy/xs/xs-5.jpg";
import NewsImg11 from "../../assets/img/trendy/xs/xs-6.jpg";
import NewsImg12 from "../../assets/img/trendy/sm4.jpg";
import NewsImg13 from "../../assets/img/trendy/sm5.jpg";
import NewsImg14 from "../../assets/img/trendy/sm6.jpg";
import AdvertisementImg from "../../assets/img/add/600x400x.jpg"
import {Link} from "react-router-dom";
import Advertisement02 from "../Advertisement/Advertisement02.jsx";

function TodaysNews(props) {
    return (
        <section className="news-area pt-30 pb-30">
            <Container>
                <Row>
                    <Col>
                        <div className="section-title mb-30">
                            <h2>শীর্ষ খবর</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
            
            <Container>
                <Row className="row-10">
                    <div className="col-20">
                        <div className="postbox mb-25">
                            <div className="postbox__thumb">
                                <Link to="#">
                                    <img src={NewsImg1} alt="hero image"/>
                                </Link>
                            </div>
                            <div className="postbox__text pt-10">
                                <div className="postbox__text-meta pb-10">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>01 Sep 2018</span>
                                        </li>
                                        <li>
                                            <i className="far fa-comment"></i>
                                            <span>(03)</span>
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="pr-0">
                                    <Link to="#">Paul Manafort’s Accountant Testifies She Helped Alter Financial
                                        Documents</Link>
                                </h4>
                            </div>
                        </div>
                        <div className="postbox mb-25">
                            <div className="postbox__thumb">
                                <Link to="#">
                                    <img src={NewsImg2} alt="hero image"/>
                                </Link>
                            </div>
                            <div className="postbox__text pt-10">
                                <div className="postbox__text-meta pb-10">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>01 Sep 2018</span>
                                        </li>
                                        <li>
                                            <i className="far fa-comment"></i>
                                            <span>(03)</span>
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="pr-0">
                                    <Link to="#">Rina Sawayama Is Not the Asian Britney Spears</Link>
                                </h4>
                            </div>
                        </div>
                        <div className="postbox mb-25">
                            <div className="postbox__thumb">
                                <Link to="#">
                                    <img src={NewsImg3} alt="hero image"/>
                                </Link>
                            </div>
                            <div className="postbox__text pt-10">
                                <div className="postbox__text-meta pb-10">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>01 Sep 2018</span>
                                        </li>
                                        <li>
                                            <i className="far fa-comment"></i>
                                            <span>(03)</span>
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="pr-0">
                                    <Link to="#">Receiving the Summer Sols tice the Swedish Way</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-40">
                        <div className="postbox mb-25">
                            <div className="postbox__thumb">
                                <Link to="#">
                                    <img src={NewsImg4} alt="hero image"/>
                                </Link>
                                <span className="post-cat post-absolute">
                                        <Link to="#">politic</Link>
                                    </span>
                            </div>
                            <div className="postbox__text pt-10">
                                <div className="postbox__text-meta pb-10">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>01 Sep 2018</span>
                                        </li>
                                        <li>
                                            <i className="far fa-comment"></i>
                                            <span>(03)</span>
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="title-16 pr-0">
                                    <Link to="#">Trump’s Inaccurate Claims About High ways the world, Immigration and
                                        Beyoncé.</Link>
                                </h4>
                            </div>
                        </div>

                        <div className="postbox mb-25">
                            <div className="postbox__thumb">
                                <Link to="#">
                                    <img src={NewsImg5} alt="hero image"/>
                                </Link>
                                <span className="post-cat post-absolute">
                                        <Link to="#">travel</Link>
                                    </span>
                            </div>
                            <div className="postbox__text pt-10">
                                <div className="postbox__text-meta pb-10">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>01 Sep 2018</span>
                                        </li>
                                        <li>
                                            <i className="far fa-comment"></i>
                                            <span>(03)</span>
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="title-16 pr-0">
                                    <Link to="#">Moving From Buyer to Seller, Major League Soccer Revenue In The World
                                        Wide Claims About.</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-20 d-md-none d-xl-block">
                        <div className="post__small mb-30">
                            <div className="post__small-thumb f-left">
                                <Link to="#">
                                    <img src={NewsImg6} alt="hero image"/>
                                </Link>
                            </div>
                            <div className="post__small-text fix pl-10">
                                    <span className="sm-cat">
                                        <Link to="#">Fashion</Link>
                                    </span>
                                <h4 className="title-13 pr-0">
                                    <Link to="#">Storm in aw ame home away.</Link>
                                </h4>
                                <div className="post__small-text-meta">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>01 Sep 2018</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="post__small mb-30">
                            <div className="post__small-thumb f-left">
                                <Link to="#">
                                    <img src={NewsImg7} alt="hero image"/>
                                </Link>
                            </div>
                            <div className="post__small-text fix pl-10">
                                    <span className="sm-cat">
                                        <Link to="#">Fashion</Link>
                                    </span>
                                <h4 className="title-13 pr-0">
                                    <Link to="#">Good ridre urants bid farewell.</Link>
                                </h4>
                                <div className="post__small-text-meta">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>01 Sep 2018</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="post__small mb-30">
                            <div className="post__small-thumb f-left">
                                <Link to="#">
                                    <img src={NewsImg8} alt="hero image"/>
                                </Link>
                            </div>
                            <div className="post__small-text fix pl-10">
                                    <span className="sm-cat">
                                        <Link to="#">Fashion</Link>
                                    </span>
                                <h4 className="title-13 pr-0">
                                    <Link to="#">Nahan dow plays Lieral lership..</Link>
                                </h4>
                                <div className="post__small-text-meta">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>01 Sep 2018</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="post__small mb-30">
                            <div className="post__small-thumb f-left">
                                <Link to="#">
                                    <img src={NewsImg9} alt="hero image"/>
                                </Link>
                            </div>
                            <div className="post__small-text fix pl-10">
                                    <span className="sm-cat">
                                        <Link to="#">Travel</Link>
                                    </span>
                                <h4 className="title-13 pr-0">
                                    <Link to="#">Weinstein pushs for dismissal.</Link>
                                </h4>
                                <div className="post__small-text-meta">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>01 Sep 2018</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="post__small mb-30">
                            <div className="post__small-thumb f-left">
                                <Link to="#">
                                    <img src={NewsImg10} alt="hero image"/>
                                </Link>
                            </div>
                            <div className="post__small-text fix pl-10">
                                    <span className="sm-cat">
                                        <Link to="#">Politic</Link>
                                    </span>
                                <h4 className="title-13 pr-0">
                                    <Link to="#">New Season Tiets Seat Optional.</Link>
                                </h4>
                                <div className="post__small-text-meta">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>01 Sep 2018</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="post__small mb-30">
                            <div className="post__small-thumb f-left">
                                <Link to="#">
                                    <img src={NewsImg11} alt="hero image"/>
                                </Link>
                            </div>
                            <div className="post__small-text fix pl-10">
                                    <span className="sm-cat">
                                        <Link to="#">Study</Link>
                                    </span>
                                <h4 className="title-13 pr-0">
                                    <Link to="#">For Marilyn St Any Place Can Be..</Link>
                                </h4>
                                <div className="post__small-text-meta">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>01 Sep 2018</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="post-btn mb-30">
                            <Link to="#" className="btn btn-border">view more</Link>
                        </div>
                    </div>
                    <div className="col-20 ">
                        <div className="postbox mb-25">
                            <div className="postbox__thumb">
                                <Link to="#">
                                    <img src={NewsImg12} alt="hero image"/>
                                </Link>
                            </div>
                            <div className="postbox__text pt-10">
                                <div className="postbox__text-meta pb-10">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>01 Sep 2018</span>
                                        </li>
                                        <li>
                                            <i className="far fa-comment"></i>
                                            <span>(03)</span>
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="pr-0">
                                    <Link to="#">Paul Manafort’s Accountant Testifies She Helped Alter Financial
                                        Documents</Link>
                                </h4>
                            </div>
                        </div>
                        <div className="postbox mb-25">
                            <div className="postbox__thumb">
                                <Link to="#">
                                    <img src={NewsImg13} alt="hero image"/>
                                </Link>
                            </div>
                            <div className="postbox__text pt-10">
                                <div className="postbox__text-meta pb-10">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>01 Sep 2018</span>
                                        </li>
                                        <li>
                                            <i className="far fa-comment"></i>
                                            <span>(03)</span>
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="pr-0">
                                    <Link to="#">Rina Sawayama Is Not the Asian Britney Spears</Link>
                                </h4>
                            </div>
                        </div>
                        <div className="postbox mb-25">
                            <Advertisement02
                                image={AdvertisementImg}
                            />
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
}

export default TodaysNews;