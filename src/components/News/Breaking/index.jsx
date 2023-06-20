import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import moment from "moment/moment.js";
import "moment/locale/bn.js"
import banglaTarikh from "bangla-tarikh";
import {useDispatch, useSelector} from "react-redux";
import {getAllBreakingNew} from "../../../features/BreakingNews/BreakingNewsSlice.js";
import {Link, NavLink} from "react-router-dom";

function Index(props) {
    const {isLoading, breakingNews, errorMessage} =useSelector(state => state.breakingNews)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllBreakingNew())
    },[])

    useEffect(()=>{
        $(".breaking__ticker-active").owlCarousel({
            loop: true,
            margin: 0,
            autoplay: false,
            items: 1,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            nav: true,
            dots: false,
            animateOut: "slideOutDown",
            animateIn: "flipInX",
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });
    })

    return (
        <section className="breaking pt-25 pb-25">
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className="breaking__meta mb-30">
                            <ul>
                                <li><i className="fas fa-calendar-alt"></i> <span>{moment().format('LL')}</span></li>
                                <li><i className="fas fa-calendar-alt"></i> <span>{banglaTarikh.format('DTS MMMM, YYYYT')}</span></li>
                                <li><i className="fas fa-clock"></i> <span>{moment().format('LT')}</span></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="breaking__wrapper">
                            <h5 className="breaking__title ">তাজা খবর</h5>

                            {!isLoading && <ul className="breaking__ticker-active owl-carousel">
                                {breakingNews && breakingNews.map(brn=><li key={brn.id}>
                                    <NavLink to={`/article/${brn.slug}`}>{brn.title}</NavLink>
                                </li>)}
                            </ul>}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Index;