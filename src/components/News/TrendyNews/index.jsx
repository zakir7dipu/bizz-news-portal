import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
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
    getAllTrendyNewsMiddleSm,
    getAllTrendyNewsRight
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