import React, {useEffect, useState} from 'react';
import PopularTags from "../components/Tags/PopularTags.jsx";
import PopularNews from "../components/News/PopularNews";
import {Link, useParams} from "react-router-dom";
import PostDetailsContent from "../components/NewsDetails/PostDetailsContent.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchNewsBySlug} from "../features/News/NewsSlice.js";
import {fetchAdBySlug6} from "../features/Advertisements/advertisementSlice.js";
import {metaKeywordGen, truncateString, useInternalLink} from "../library/helper.js";
import SubscriptionNewsLatter from "../components/Subscription/SubscriptionNewsLatter.jsx";
import NewsDetailsSkeleton from "../components/UI/Skeletons/NewsDetails/NewsDetailsSkeleton.jsx";
import HeaderMeta from "../components/UI/SEO/HeaderMeta.jsx";
import Loading from "../components/Loading";

function NewsDetails() {
    const {slug} = useParams();
    const {
        isMetaLoading,
        metaInfo
    } = useSelector((state) => state.allNews);

    const {metaAd6} = useSelector(state => state.advertisementState);

    const dispatch = useDispatch();

    const [siteName, setSiteName] = useState("News");
    const [siteTitle, setSiteTitle] = useState("Bizz News BD");
    const [siteUrl, setSiteUrl] = useState(
        window.location.href
    );
    const [siteImage, setSiteImage] = useState("News");

    useEffect(() => {
        dispatch(fetchAdBySlug6('advertisement-6'));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchNewsBySlug(slug))
        window.scrollTo(0, 0);

    }, [slug]);

    useEffect(() => {
        const newsinfo = metaInfo?.news
        if (newsinfo) {
            setSiteName(newsinfo?.title)
            setSiteTitle(newsinfo?.title)
            if(!newsinfo?.thumbnail) {
                setSiteImage(metaInfo?.news?.banner)
            } else {
                setSiteImage(metaInfo?.news?.thumbnail)
            }
        }
    }, [metaInfo])

    if (!isMetaLoading)
        return (
            <>
                <HeaderMeta
                    title={siteName}
                    description={truncateString(metaInfo?.news?.news, 150)}
                    keywords={metaKeywordGen(metaInfo?.news?.tags)}
                    ogImage={siteImage}
                />

                <section className="post-details-area pt-60 pb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8">
                                {isMetaLoading && <NewsDetailsSkeleton/>}
                                {!isMetaLoading && <PostDetailsContent metaInfo={metaInfo?.news}/>}
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <div className="widget mb-40">
                                <Link to="#">
                                    <img src={useInternalLink(metaAd6?.advertisement)} alt=""/>
                                </Link>
                            </div>
                            <div className="widget widget-border mb-40">
                                <PopularNews category_slug={metaInfo?.news?.category?.slug}/>
                            </div>
                            <SubscriptionNewsLatter/>
                                <div className="widget widget-border mb-40">
                                    <PopularTags tag={`ALL`}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    else {
        return <Loading/>
    }
}

export default NewsDetails;