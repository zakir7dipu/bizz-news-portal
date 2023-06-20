import React from 'react';
import Skeleton from "react-loading-skeleton";

function CollectionMidSkeleton({card}) {
    return (
        <>
            {Array(card).fill(0).map((item, index) => {
                return (
                    <div className="postbox mb-30" key={index}>
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
                )
            })}
        </>
    );
}

export default CollectionMidSkeleton;