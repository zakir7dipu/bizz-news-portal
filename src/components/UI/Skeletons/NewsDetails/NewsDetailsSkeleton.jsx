import React from 'react';
import Skeleton from "react-loading-skeleton";

function NewsDetailsSkeleton(props) {
    return (
        <>
            <div className="post-details">
                <h2 className="details-title mb-15">
                    <Skeleton/>
                </h2>

                <div className="postbox__text-meta pb-30">
                    <ul>
                        <li>
                            <span><Skeleton height={30} width={30}/></span>
                        </li>
                        <li>
                            <span><Skeleton height={30} width={30}/></span>
                        </li>
                        <li>
                            <span><Skeleton height={30} width={30}/></span>
                        </li>
                    </ul>
                </div>

                <div className="share-post-link mb-30">
                    <Skeleton height={30} width={50}/>
                </div>

                <div className="post-thumb mb-25">
                    <Skeleton height={450}/>
                </div>

                <div className="post-content">
                    <Skeleton count={20}/>
                </div>

                <div className="content__tags mt-30">
                    <Skeleton height={30} width={30}/>
                </div>
            </div>
        </>
    );
}

export default NewsDetailsSkeleton;