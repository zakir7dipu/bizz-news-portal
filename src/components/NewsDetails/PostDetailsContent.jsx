import React from 'react';
import moment from "moment";
import {global} from "../../library/config.js";
import {Link} from "react-router-dom";
import RelatedNews from "./RelatedNews.jsx";

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
                        <li>
                            <i className="far fa-comment"></i>
                            <span>(03)</span>
                        </li>
                    </ul>
                </div>

                <div className="share-post-link mb-30">
                    <a className="facebook" href="#">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="twitter" href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="instagram" href="#">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="dribbble" href="#">
                        <i className="fab fa-dribbble"></i>
                    </a>
                    <a className="pinterest" href="#">
                        <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a className="google-plus" href="#">
                        <i className="fab fa-google-plus-g"></i>
                    </a>
                    <a className="pinterest" href="#">
                        <i className="fab fa-pinterest-p"></i>
                    </a>
                </div>

                <div className="post-thumb mb-25">
                    <img src={base_path + metaInfo?.banner} alt={metaInfo?.title}/>
                </div>

                <div className="post-content">
                    <p dangerouslySetInnerHTML={{__html: metaInfo?.news}}></p>
                </div>

                <div className="content__tags mt-30">
                    <span>Post Tags:</span>
                    <span className="content__tags-list">
                        {metaInfo?.tags.map(item => {
                            return (
                                <Link to={`/tags/${item?.tag?.name}/news`} key={item?.tag?.id}>{item?.tag?.name}</Link>
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
                        <RelatedNews excludeNews={metaInfo?.slug} slug={metaInfo?.category?.slug} base_path={base_path}/>
                    </div>
                </div>

                {/*<div className="post-comments mt-30">*/}
                {/*    <div className="section-title mb-30">*/}
                {/*        <h2>Recent Comments</h2>*/}
                {/*    </div>*/}
                {/*    <div className="latest-comments">*/}
                {/*        <ul>*/}
                {/*            <li>*/}
                {/*                <div className="comments-box">*/}
                {/*                    <div className="comments-avatar">*/}
                {/*                        <img src="assets/img/user/user-01.jpg" alt=""/>*/}
                {/*                    </div>*/}
                {/*                    <div className="comments-text">*/}
                {/*                        <div className="avatar-name">*/}
                {/*                            <h5>Omar Elnagar</h5>*/}
                {/*                            <span>September 13, 2018 at 10:38 AM</span>*/}
                {/*                        </div>*/}
                {/*                        <p>They call him Flipper Flipper faster than lightning. No one*/}
                {/*                            you see is smarter than he. They call*/}
                {/*                            him Flipper Flipper the faster than lightning. No one you*/}
                {/*                            see is smarter than he</p>*/}
                {/*                        <a href="#"><i className="fas fa-reply-all"></i> Reply</a>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <ul className="comments-reply">*/}
                {/*                    <li>*/}
                {/*                        <div className="comments-box">*/}
                {/*                            <div className="comments-avatar">*/}
                {/*                                <img src="assets/img/user/user-02.jpg" alt=""/>*/}
                {/*                            </div>*/}
                {/*                            <div className="comments-text">*/}
                {/*                                <div className="avatar-name">*/}
                {/*                                    <h5>Omar Elnagar</h5>*/}
                {/*                                    <span>September 13, 2018 at 10:38 AM</span>*/}
                {/*                                </div>*/}
                {/*                                <p>They call him Flipper Flipper faster than lightning.*/}
                {/*                                    No one you see is smarter than he. They*/}
                {/*                                    call him Flipper Flipper the faster than lightning.*/}
                {/*                                    No one you see is smarter than he</p>*/}
                {/*                                <a href="#"><i*/}
                {/*                                    className="fas fa-reply-all"></i> Reply</a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </li>*/}
                {/*                </ul>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <div className="comments-box">*/}
                {/*                    <div className="comments-avatar">*/}
                {/*                        <img src="assets/img/user/user-05.jpg" alt=""/>*/}
                {/*                    </div>*/}
                {/*                    <div className="comments-text">*/}
                {/*                        <div className="avatar-name">*/}
                {/*                            <h5>Omar Elnagar</h5>*/}
                {/*                            <span>September 13, 2018 at 10:38 AM</span>*/}
                {/*                        </div>*/}
                {/*                        <p>They call him Flipper Flipper faster than lightning. No one*/}
                {/*                            you see is smarter than he. They call*/}
                {/*                            him Flipper Flipper the faster than lightning. No one you*/}
                {/*                            see is smarter than he</p>*/}
                {/*                        <a href="#"><i className="fas fa-reply-all"></i> Reply</a>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="post-comments-form mt-40 mb-40">*/}
                {/*    <div className="section-title mb-30">*/}
                {/*        <h2>Recent Comments</h2>*/}
                {/*    </div>*/}
                {/*    <form action="#">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-xl-6">*/}
                {/*                <input type="text" placeholder="Your Name"/>*/}
                {/*            </div>*/}
                {/*            <div className="col-xl-6">*/}
                {/*                <input type="text" placeholder="Your Email"/>*/}
                {/*            </div>*/}
                {/*            <div className="col-xl-12">*/}
                {/*                                <textarea name="comments" id="comments" cols="30" rows="10"*/}
                {/*                                          placeholder="Your Comments"></textarea>*/}
                {/*                <button className="btn brand-btn" type="submit">Send message</button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </form>*/}
                {/*</div>*/}
            </div>
        </>
    );
}

export default PostDetailsContent;