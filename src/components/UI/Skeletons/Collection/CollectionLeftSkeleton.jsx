import React from 'react';
import Skeleton from "react-loading-skeleton";
import {Col} from "react-bootstrap";

function CollectionLeftSkeleton() {
    return (

        <Col xl={8} lg={8}>
            <div className="postbox mb-30">
                <div className="postbox__thumb">
                    <Skeleton height={360}/>
                    <span className="post-cat post-absolute">
                            <Skeleton height={30} width={50}/>
                        </span>
                </div>
                <div className="postbox__text pt-10">
                    <div className="postbox__text-meta pb-10">
                        <Skeleton height={30} width={50}/>
                    </div>
                    <h4 className="title-16 pr-0">
                        <Skeleton/>
                    </h4>
                </div>
            </div>
        </Col>

    );
}

export default CollectionLeftSkeleton;