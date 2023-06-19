import React, {useEffect} from 'react';
import {Container, Row} from "react-bootstrap";
import HeroLeft from "./HeroLeft.jsx";
import HeroRight from "./HeroRight.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getHeaderLeftNews, getHeaderRightNews} from "../../../features/HeaderNews/HeaderNewsSlice.js";

function HeroArea() {
    const {isLoadingHeaderLeft, isLoadingHeaderRight, headerNewsLeft, headerNewsRight} = useSelector(state => state.headerNews)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getHeaderLeftNews())
        dispatch(getHeaderRightNews())
    },[dispatch])

    return (
        <section className="hero-area">
            <Container>
                <Row>

                    <HeroLeft newsData={{
                        isLoading: isLoadingHeaderLeft,
                        data: headerNewsLeft
                    }}/>
                    <HeroRight newsData={{
                        isLoading: isLoadingHeaderRight,
                        data: headerNewsRight
                    }}/>
                </Row>
            </Container>
        </section>
);
}

export default HeroArea;