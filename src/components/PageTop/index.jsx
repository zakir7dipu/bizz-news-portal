import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import moment from "moment/moment.js";
import pol1 from "../../assets/img/politic/pol1.jpg"
import pol2 from "../../assets/img/politic/pol2.jpg"
import pol3 from "../../assets/img/politic/pol3.jpg"
import pol4 from "../../assets/img/politic/pol-lg1.jpg"
import pol5 from "../../assets/img/politic/pol-lg2.jpg"
import pol6 from "../../assets/img/politic/sm-pol1.jpg"
import pol7 from "../../assets/img/politic/sm-pol2.jpg"
import pol8 from "../../assets/img/politic/sm-pol3.jpg"
import pol9 from "../../assets/img/politic/sm-pol4.jpg"
import pol10 from "../../assets/img/politic/sm-pol5.jpg"
import pol11 from "../../assets/img/politic/sm-pol6.jpg"
import pol12 from "../../assets/img/politic/pol-list1.jpg"
import pol13 from "../../assets/img/politic/pol-list2.jpg"
import pol14 from "../../assets/img/politic/pol-list3.jpg"
import adver from "../../assets/img/add/add-sidebar.jpg"
import pol15 from "../../assets/img/trendy/xs/xs-1.jpg"
import pol16 from "../../assets/img/trendy/xs/xs-2.jpg"
import pol17 from "../../assets/img/trendy/xs/xs-3.jpg"
import pol18 from "../../assets/img/trendy/xs/xs-4.jpg"
import pol19 from "../../assets/img/details/sidebar-post.jpg"
import {Link} from "react-router-dom";

function Index(props) {
    return (
        <section className="news-area">
            <Container>
                <Row>
                    <Col xl={8} lg={8}>
                        <Row>
                            <Col xl={4} lg={4}>
                                <div className="postbox mb-30">
                                    <div className="postbox__thumb">
                                        <Link to="#">
                                            <img src={pol1} alt="hero image"/>
                                        </Link>
                                    </div>
                                    <div className="postbox__text pt-10">
                                        <div className="postbox__text-meta pb-10">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>{moment().format('LL')}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4 className="pr-0">
                                            <Link to="#">Paul Manafort’s Accountant Testifie She Helped Alter
                                                Financial.</Link>
                                        </h4>
                                    </div>
                                </div>
                                <div className="postbox mb-30">
                                    <div className="postbox__thumb">
                                        <Link to="#">
                                            <img src={pol2} alt="hero image"/>
                                        </Link>
                                    </div>
                                    <div className="postbox__text pt-10">
                                        <div className="postbox__text-meta pb-10">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>{moment().format('LL')}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4 className="pr-0">
                                            <Link to="#">Receiving the Summer Sols Honour tice the Swedish Way.</Link>
                                        </h4>
                                    </div>
                                </div>
                                <div className="postbox mb-30">
                                    <div className="postbox__thumb">
                                        <Link to="#">
                                            <img src={pol3} alt="hero image"/>
                                        </Link>
                                    </div>
                                    <div className="postbox__text pt-10">
                                        <div className="postbox__text-meta pb-10">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>{moment().format('LL')}</span>
                                                </li>
                                                <li>
                                                    <i className="far fa-comment"></i>
                                                    <span>(03)</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4 className="pr-0">
                                            <Link to="#">The New Health Care: Worklac Wellness Programs..</Link>
                                        </h4>
                                    </div>
                                </div>
                                {/*<div className="post-btn mb-30">*/}
                                {/*    <Link to="#" className="btn btn-border">view more</Link>*/}
                                {/*</div>*/}
                            </Col>
                            <Col xl={8} lg={8}>
                                <div className="postbox mb-30">
                                    <div className="postbox__thumb">
                                        <Link to="#">
                                            <img className="img-100" src={pol4}
                                                 alt="hero image"/>
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
                                                    <span>{moment().format('LL')}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4 className="title-16 pr-0">
                                            <Link to="#">Trump’s Inaccurate Claims About High ways the world,
                                                Immigration
                                                and Beyoncé entitlements after.</Link>
                                        </h4>
                                    </div>
                                </div>
                                <div className="postbox mb-30">
                                    <div className="postbox__thumb">
                                        <Link to="#">
                                            <img className="img-100" src={pol5}
                                                 alt="hero image"/>
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
                                                    <span>{moment().format('LL')}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4 className="title-16 pr-0">
                                            <Link to="#">Moving From Buyer to Seller, Major League Soccer grothe Revenue
                                                In The World Wide. Immigration.</Link>
                                        </h4>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="pt-30">
                            <Col xl={4} lg={6} md={6}>
                                <div className="postbox mb-30">
                                    <div className="postbox__thumb">
                                        <Link to="#">
                                            <img src={pol6} alt="hero image"/>
                                        </Link>
                                    </div>
                                    <div className="postbox__text pt-10">
                                        <div className="postbox__text-meta pb-10">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>{moment().format('LL')}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4 className="pr-0">
                                            <Link to="#">Off the Menu Midtown East Was Gets Wanderlust Cafe.</Link>
                                        </h4>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} md={6}>
                                <div className="postbox mb-30">
                                    <div className="postbox__thumb">
                                        <Link to="#">
                                            <img src={pol7} alt="hero image"/>
                                        </Link>
                                    </div>
                                    <div className="postbox__text pt-10">
                                        <div className="postbox__text-meta pb-10">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>{moment().format('LL')}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4 className="pr-0">
                                            <Link to="#">The New Health Care: Worklac Wellness Programs.</Link>
                                        </h4>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} md={6}>
                                <div className="postbox mb-30">
                                    <div className="postbox__thumb">
                                        <Link to="#">
                                            <img src={pol8} alt="hero image"/>
                                        </Link>
                                    </div>
                                    <div className="postbox__text pt-10">
                                        <div className="postbox__text-meta pb-10">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>{moment().format('LL')}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4 className="pr-0">
                                            <Link to="#">Plan to Punish Immigrants for Using Welfare Could.</Link>
                                        </h4>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} md={6}>
                                <div className="postbox mb-30">
                                    <div className="postbox__thumb">
                                        <Link to="#">
                                            <img src={pol9} alt="hero image"/>
                                        </Link>
                                    </div>
                                    <div className="postbox__text pt-10">
                                        <div className="postbox__text-meta pb-10">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>{moment().format('LL')}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4 className="pr-0">
                                            <Link to="#">The New Health Care: Worklac Wellness Programs.</Link>
                                        </h4>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} md={6}>
                                <div className="postbox mb-30">
                                    <div className="postbox__thumb">
                                        <Link to="#">
                                            <img src={pol10} alt="hero image"/>
                                        </Link>
                                    </div>
                                    <div className="postbox__text pt-10">
                                        <div className="postbox__text-meta pb-10">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>{moment().format('LL')}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4 className="pr-0">
                                            <Link to="#">Plan to Punish Immigrants for Using Welfare Could.</Link>
                                        </h4>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} md={6}>
                                <div className="postbox mb-30">
                                    <div className="postbox__thumb">
                                        <Link to="#">
                                            <img src={pol11} alt="hero image"/>
                                        </Link>
                                    </div>
                                    <div className="postbox__text pt-10">
                                        <div className="postbox__text-meta pb-10">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>{moment().format('LL')}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4 className="pr-0">
                                            <Link to="#">Plan to Punish Immigrants for Using Welfare Could.</Link>
                                        </h4>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="category-list-view pt-30">
                            <Row>
                                <Col xl={6} lg={6} md={6}>
                                    <div className="postbox mb-30">
                                        <div className="postbox__thumb">
                                            <Link to="#">
                                                <img src={pol12} alt="hero image"/>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} lg={6} md={6}>
                                    <div className="postbox__text mb-30">
                                        <h4 className="title-16 pr-0">
                                            <Link to="#">Succession finale: jeremy strong keall’s struggles what comes
                                                next.</Link>
                                        </h4>
                                        <div className="postbox__text-meta pb-10">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>{moment().format('LL')}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="desc-text mb-20">
                                            <p>But I must explain to you how all this mistaken idea of denouncing sure
                                                and praising pain was born and I
                                                will give you a complete account.</p>
                                        </div>
                                        <Link to="#" className="btn btn-soft">read more</Link>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6} lg={6} md={6}>
                                    <div className="postbox mb-30">
                                        <div className="postbox__thumb">
                                            <Link to="#">
                                                <img src={pol13} alt="hero image"/>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} lg={6} md={6}>
                                    <div className="postbox__text mb-30">
                                        <h4 className="title-16 pr-0">
                                            <Link to="#">Critic’s notebook: deep dives into jutice from shakespeare and
                                                atticus finch</Link>
                                        </h4>
                                        <div className="postbox__text-meta pb-10">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>{moment().format('LL')}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="desc-text mb-20">
                                            <p>But I must explain to you how all this mistaken idea of denouncing sure
                                                and praising pain was born and I
                                                will give you a complete account.</p>
                                        </div>
                                        <Link to="#" className="btn btn-soft">read more</Link>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6} lg={6} md={6}>
                                    <div className="postbox mb-30">
                                        <div className="postbox__thumb">
                                            <Link to="#">
                                                <img src={pol14} alt="hero image"/>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} lg={6} md={6}>
                                    <div className="postbox__text mb-30">
                                        <h4 className="title-16 pr-0">
                                            <Link to="#">Critic’s notebook: deep dives into jutice from shakespeare and
                                                atticus finch</Link>
                                        </h4>
                                        <div className="postbox__text-meta pb-10">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span>{moment().format('LL')}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="desc-text mb-20">
                                            <p>But I must explain to you how all this mistaken idea of denouncing sure
                                                and praising pain was born and I
                                                will give you a complete account.</p>
                                        </div>
                                        <Link to="#" className="btn btn-soft">read more</Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <Row className="mt-10 mb-60">
                            <Col xl={12}>
                                <div className="pagination">
                                    <ul>
                                        <li>
                                            <Link to="#">Prev</Link>
                                        </li>
                                        <li className="active">
                                            <Link to="#">
                                                <span>1</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <span>2</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <span>3</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">Next</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={4} lg={4}>
                        <div className="widget mb-40">
                            <Link to="#">
                                <img src={adver} alt=""/>
                            </Link>
                        </div>
                        <div className="widget widget-border mb-40">
                            <h3 className="widget-title">Popular posts</h3>
                            <div className="post__small mb-30">
                                <div className="post__small-thumb f-left">
                                    <Link to="#">
                                        <img src={pol15} alt="hero image"/>
                                    </Link>
                                </div>
                                <div className="post__small-text fix pl-10">
                                        <span className="sm-cat">
                                            <Link to="#">Fashion</Link>
                                        </span>
                                    <h4 className="title-13 pr-0">
                                        <Link to="#">Husar asks expenses authority to entitlements after Bruno</Link>
                                    </h4>
                                    <div className="post__small-text-meta">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>{moment().format('LL')}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="post__small mb-30">
                                <div className="post__small-thumb f-left">
                                    <Link to="#">
                                        <img src={pol16} alt="hero image"/>
                                    </Link>
                                </div>
                                <div className="post__small-text fix pl-10">
                                        <span className="sm-cat">
                                            <Link to="#">Fashion</Link>
                                        </span>
                                    <h4 className="title-13 pr-0">
                                        <Link to="#">Researchers claim majo throug in the fight to cure fibrosis</Link>
                                    </h4>
                                    <div className="post__small-text-meta">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>{moment().format('LL')}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="post__small mb-30">
                                <div className="post__small-thumb f-left">
                                    <Link to="#">
                                        <img src={pol17} alt="hero image"/>
                                    </Link>
                                </div>
                                <div className="post__small-text fix pl-10">
                                        <span className="sm-cat">
                                            <Link to="#">Fashion</Link>
                                        </span>
                                    <h4 className="title-13 pr-0">
                                        <Link to="#">Nahan downplays Liberal lership tensions after white ant</Link>
                                    </h4>
                                    <div className="post__small-text-meta">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>{moment().format('LL')}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="post__small">
                                <div className="post__small-thumb f-left">
                                    <Link to="#">
                                        <img src={pol18} alt="hero image"/>
                                    </Link>
                                </div>
                                <div className="post__small-text fix pl-10">
                                        <span className="sm-cat">
                                            <Link to="#">Travel</Link>
                                        </span>
                                    <h4 className="title-13 pr-0">
                                        <Link to="#">Farmers plead for bullets to put down emaciated stock</Link>
                                    </h4>
                                    <div className="post__small-text-meta">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>{moment().format('LL')}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
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
                            <h3 className="widget-title">Most visited</h3>
                            <div className="postbox">
                                <div className="postbox__thumb">
                                    <Link to="#">
                                        <img src={pol19} alt="hero image"/>
                                    </Link>
                                </div>
                                <div className="postbox__text pt-15">
                                    <div className="postbox__text-meta pb-10">
                                        <ul>
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>{moment().format('LL')}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="title-16 pr-0">
                                        <Link to="#">Paul Manafort’s Accountant Testifies She Helped Alter Financial
                                            Documents</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="widget widget-border mb-40">
                            <h3 className="widget-title">Popular Tags</h3>
                            <div className="tagcloud">
                                <Link to="#">Fashion</Link>
                                <Link to="#">Politic</Link>
                                <Link to="#">Modern</Link>
                                <Link to="#">Tips</Link>
                                <Link to="#">Nav</Link>
                                <Link to="#">Jason</Link>
                                <Link to="#">Roster</Link>
                                <Link to="#">Boat</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
);
}

export default Index;