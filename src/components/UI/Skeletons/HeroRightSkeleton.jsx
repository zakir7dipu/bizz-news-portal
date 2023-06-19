import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import Style from "./Style.module.css";

function HeroRightSkeleton({card}) {
    return (
        <Row>
            {Array(card).fill(0).map((item, index)=>{
                return <Col lg={6} md={6} sm={12} key={index}>
                    <Card className={Style.mbt30}>
                        <Skeleton height={160}>
                            <Skeleton width={30} height={35}/>
                            <h3 className={Style.rightHeroTitle}>
                                <Skeleton/>
                            </h3>
                        </Skeleton>
                    </Card>
                </Col>
            })}
        </Row>
    );
}

export default HeroRightSkeleton;