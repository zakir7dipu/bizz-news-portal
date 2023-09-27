import React from 'react';
import moment from "moment";
import {global} from "../../library/config.js";
import {Link} from "react-router-dom";
import RelatedNews from "./RelatedNews.jsx";
import {Comments, FacebookProvider} from 'react-facebook';
import {truncateString, useInternalLink} from "../../library/helper.js";
import Sharethis from "../SocialShare/sharethis.jsx";

function PostDetailsContent({metaInfo}) {
    const {base_path} = global.config;


    return (
        <>
            <div className="post-details">
                <h2 className="details-title mb-15">{metaInfo?.title}</h2>

                <div className="postbox__text-meta pb-30">
                    <ul>
                        <li>
                            <i className="far fa-user-circle"></i>
                            <span>{metaInfo?.editor?.first_name} {metaInfo?.editor?.last_name}</span>
                        </li>
                        <li>
                            <i className="fas fa-calendar-alt"></i>
                            <span>{moment(metaInfo?.updated_at).format('LL')}</span>
                        </li>
                    </ul>
                </div>

                <div className="share-post-link mb-30">
                    {/*<SFacebookPostShare image={useInternalLink(metaInfo?.banner)} title={metaInfo?.title}/>*/}
                    {/*<TwitterShare title={metaInfo?.title}/>*/}
                    {/*<LinkedinShare title={metaInfo?.title}/>*/}
                    {/*<WhatsappShare title={metaInfo?.title}/>*/}
                    <Sharethis url={window.location.href}
                               image={useInternalLink(metaInfo?.banner)}
                               description={truncateString(metaInfo?.news, 120)}
                               title={metaInfo?.title}
                    />
                </div>

                <div className="post-thumb mb-25">
                    <img src={useInternalLink(metaInfo?.banner)} alt={metaInfo?.title}/>
                </div>

                <div className="post-content">
                    <p dangerouslySetInnerHTML={{__html: metaInfo?.news}}></p>
                </div>

                <div className="content__tags mt-30">
                    <span>Post Tags:</span>
                    <span className="content__tags-list">
                        {metaInfo?.tags.map(item => {
                            return (
                                <Link to={`/tags/${item?.tag?.slug}/news`} key={item?.tag?.id}>{item?.tag?.name}</Link>
                            )
                        })
                        }
                    </span>
                </div>

                <div className="also-like mt-30">
                    <div className="section-title mb-30">
                        <h2>You may also like</h2>
                    </div>
                    <div className="row">
                        <RelatedNews excludeNews={metaInfo?.slug} slug={metaInfo?.category?.slug}
                                     base_path={base_path}/>
                    </div>
                </div>

                <div className="post-comments mt-30">
                    <div className="section-title mb-30">
                        <h2>Recent Comments</h2>
                    </div>
                    <FacebookProvider appId="985668189451401">
                        <Comments href={`${window.location.origin}/article/${metaInfo?.id}`}/>
                    </FacebookProvider>
                </div>

            </div>
        </>
    );
}

export default PostDetailsContent;