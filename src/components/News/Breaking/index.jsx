import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import moment from "moment/moment.js";
import "moment/locale/bn.js"
import banglaTarikh from "bangla-tarikh";
import {useDispatch, useSelector} from "react-redux";
import {getAllBreakingNew} from "../../../features/BreakingNews/BreakingNewsSlice.js";
import {Link, NavLink} from "react-router-dom";
import Marquee from "react-fast-marquee";


function Index(props) {
    const {isLoading, breakingNews, errorMessage} = useSelector(state => state.breakingNews)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllBreakingNew())
    }, [])

    return (
        <section className="breaking pt-25 pb-25">
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className="breaking__meta mb-30">
                            <ul>
                                <li><i className="fas fa-calendar-alt"></i> <span>{moment().format('LL')}</span></li>
                                <li><i className="fas fa-calendar-alt"></i>
                                    <span>{banglaTarikh.format('DTS MMMM, YYYYT')}</span></li>
                                <li><i className="fas fa-clock"></i> <span>{moment().format('LT')}</span></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="breaking__wrapper">
                            <h5 className="breaking__title ">তাজা খবর</h5>
                            <Marquee
                                direction="Left"
                                speed={60}
                                pauseOnHover
                                style={{display: "flex", justifyContent: "center", alignItems: 'center'}}
                            >
                                {breakingNews && breakingNews.map(brn => {
                                    return (
                                        <p key={brn.id} style={{padding:"10px 0", margin:"0"}}>
                                            <Link to={`/article/${brn.slug}`}>
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <i className="fas fa-star text-warning"></i>
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                {brn.title}
                                            </Link>
                                        </p>
                                    )
                                })}
                            </Marquee>
                            {/*{!isLoading && <ul className="breaking__ticker-active owl-carousel">*/}
                            {/*    {breakingNews && breakingNews.map(brn=><li key={brn.id}>*/}
                            {/*        <NavLink to={/article/${brn.slug}}>{brn.title}</NavLink>*/}
                            {/*    </li>)}*/}
                            {/*</ul>}*/}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Index;