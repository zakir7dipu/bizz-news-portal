import React from 'react';
import Skeleton from "react-loading-skeleton";
import {Col} from "react-bootstrap";

function CollectionBottomSkeleton({card}) {
    return (
        <>
            {Array(card).fill(0).map((item, index) => {
                return (
                    <Col xl={4} lg={6} md={6} key={index}>
                        <div className="postbox mb-30">
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

export default CollectionBottomSkeleton;