import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import NewsImg1 from "../../../assets/img/trendy/sm1.jpg";
import NewsImg2 from "../../../assets/img/trendy/sm2.jpg";
import NewsImg3 from "../../../assets/img/trendy/sm3.jpg";
import NewsImg4 from "../../../assets/img/trendy/lg1.jpg";
import NewsImg5 from "../../../assets/img/trendy/lg2.jpg";
import NewsImg6 from "../../../assets/img/trendy/xs/xs-1.jpg";
import NewsImg7 from "../../../assets/img/trendy/xs/xs-2.jpg";
import NewsImg8 from "../../../assets/img/trendy/xs/xs-3.jpg";
import NewsImg9 from "../../../assets/img/trendy/xs/xs-4.jpg";
import NewsImg10 from "../../../assets/img/trendy/xs/xs-5.jpg";
import NewsImg11 from "../../../assets/img/trendy/xs/xs-6.jpg";
import NewsImg12 from "../../../assets/img/trendy/sm4.jpg";
import NewsImg13 from "../../../assets/img/trendy/sm5.jpg";
import NewsImg14 from "../../../assets/img/trendy/sm6.jpg";
import AdvertisementImg from "../../../assets/img/add/600x400x.jpg"
import {Link} from "react-router-dom";
import Advertisement02 from "../../Advertisement/Advertisement02.jsx";
import TrendyNewsLeft from "./TrendyNewsLeft.jsx";
import TrendyNewsMidBg from "./TrendyNewsMidBg.jsx";
import TrendyNewsMidSm from "./TrendyNewsMidSM.jsx";
import TrendyNewsRight from "./TrendyNewsRight.jsx";
import TrendyNewsBottom from "./TrendyNewsBottom.jsx";
import {useDispatch, useSelector} from "react-redux";
import {
    getAllTrendyNewsBottom,
    getAllTrendyNewsLeft,
    getAllTrendyNewsMiddleBg,
    getAllTrendyNewsMiddleSm, getAllTrendyNewsRight, trendySlice
} from "../../../features/TrendyNews/TrendyNewsSlice.js";

function Index(props) {
    const {isLoadingTrendyLeft, trendyLeft, isLoadingTrendyMiddleBg, trendyMiddleBg, isLoadingTrendyMiddleSm, trendyMiddleSm, isLoadingTrendyRight, trendyRight, isLoadingTrendyBottom, trendyBottom, errorMessage} = useSelector(state=>state.trendyNews)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllTrendyNewsLeft())
        dispatch(getAllTrendyNewsMiddleBg())
        dispatch(getAllTrendyNewsMiddleSm())
        dispatch(getAllTrendyNewsRight())
        dispatch(getAllTrendyNewsBottom())
    },[dispatch])

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
                    <TrendyNewsLeft trendyNewsData={{
                        isLoading: isLoadingTrendyLeft,
                        data: trendyLeft
                    }}/>
                    <TrendyNewsMidBg newsData={{
                        isLoading: isLoadingTrendyMiddleBg,
                        data: trendyMiddleBg
                    }}/>
                    <TrendyNewsMidSm newsData={{
                        isLoading: isLoadingTrendyMiddleSm,
                        data: trendyMiddleSm
                    }}/>
                    <TrendyNewsRight newsData={{
                        isLoading: isLoadingTrendyRight,
                        data: trendyRight
                    }}/>
                </Row>
                <TrendyNewsBottom newsData={{
                    isLoading: isLoadingTrendyBottom,
                    data: trendyBottom
                }}/>
            </Container>
        </section>
    );
}

export default Index;