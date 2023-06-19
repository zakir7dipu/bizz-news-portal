import React from 'react';
import Skeleton from "react-loading-skeleton";
import {Col} from "react-bootstrap";

function TrendyNewsBottomSkeleton({card}) {
    return (
        <>
            {Array(card).fill(0).map((item, index) => {
                return (
                    <Col xl={3} ld={3} md={6} sm={12} key={index}>
                        <div className="postbox mb-25">
                            <div className="postbox__thumb">
                                <Skeleton height={150}/>
                            </div>
                            <div className="postbox__text pt-10">
                                <div className="postbox__text-meta pb-10">
                                    <Skeleton width={100}/>
                                </div>
                                <h4 className="pr-0">
                                    <Skeleton count={1}/>
                                </h4>
                            </div>
                        </div>
                    </Col>
                )
            })}
        </>
    );
}

export default TrendyNewsBottomSkeleton;