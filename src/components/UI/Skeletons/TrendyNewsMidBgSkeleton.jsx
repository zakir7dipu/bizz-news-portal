import React from 'react';
import Skeleton from "react-loading-skeleton";

function TrendyNewsMidBgSkeleton({card}) {
    return (
        <div className="col-40">
            {Array(card).fill(0).map((item, index) => {
                return <div className="postbox mb-25" key={index}>
                    <div className="postbox__thumb">
                        <Skeleton height={250} width={475}/>
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
            })}
        </div>
    );
}

export default TrendyNewsMidBgSkeleton;