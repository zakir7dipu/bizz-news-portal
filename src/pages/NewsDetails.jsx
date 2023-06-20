import React, {useEffect, useState} from 'react';
import PopularTags from "../components/Tags/PopularTags.jsx";
import PopularNews from "../components/News/PopularNews";
import {Link, useParams} from "react-router-dom";
import adver from "../assets/img/add/add-sidebar.jpg";
import PostDetailsContent from "../components/NewsDetails/PostDetailsContent.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchNewsBySlug} from "../features/News/NewsSlice.js";

function NewsDetails() {
    const {slug} = useParams();
    const {
        isLoading,
        metaInfo
    } = useSelector((state) => state.allNews);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNewsBySlug(slug))
    }, [slug]);

    return (
        <>
            <section className="post-details-area pt-60 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <PostDetailsContent metaInfo={metaInfo?.news}/>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="widget mb-40">
                                <Link to="#">
                                    <img src={adver} alt=""/>
                                </Link>
                            </div>
                            <div className="widget widget-border mb-40">
                                <PopularNews category_slug={metaInfo?.news?.category?.slug}/>
                            </div>
                            <div className="widget widget-border mb-40">
                                <PopularTags/>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default NewsDetails;