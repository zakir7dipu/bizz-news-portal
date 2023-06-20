import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

function CategoryNewsSkeleton({card, smCard}) {
    return (
        <section className="cat-area pb-30">
            <Container>
                <Row>
                    {Array(card).fill(0).map((item, index) => {
                        return (
                            <Col xl={4} lg={4} md={6} key={index}>
                                <div className="section-title mb-30">
                                    <h2>
                                        <Skeleton width={50}/>
                                    </h2>
                                </div>
                                <div className="postbox mb-25">
                                    <div className="postbox__thumb">
                                        <Skeleton height={270}/>
                                    </div>
                                    <div className="postbox__text pt-20">
                                        <h4 className="title-18 pr-0">
                                            <Skeleton/>
                                        </h4>
                                        <div className="postbox__text-meta pb-10">
                                            <Skeleton height={30} width={50}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="cat-sm-post">
                                    {Array(smCard).fill(0).map((item, index) => {
                                        return (
                                            <div className="post__small mb-30" key={index}>
                                                <div className="post__small-thumb f-left">
                                                    <Skeleton height={85} width={100}/>
                                                </div>
                                                <div className="post__small-text fix pl-10">
                                                    <h4 className="title-16 pr-0 mt-0">
                                                        <Skeleton count={2}/>
                                                    </h4>
                                                    <div className="post__small-text-meta">
                                                        <Skeleton height={30} width={50}/>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default CategoryNewsSkeleton;