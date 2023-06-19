import React from 'react';
import {Card, Col} from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import Style from "./Style.module.css";

function HeroLeftSkeleton() {
    return (
        <Col lg={6} md={12}>
            <Card className={Style.mbt30}>
                <Skeleton height={350}/>
                <Card.Body className={Style.heroText}>
                    <Skeleton count={2}/>
                    <Skeleton/>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default HeroLeftSkeleton;