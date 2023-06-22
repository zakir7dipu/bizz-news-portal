import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import moment from "moment";
import {getNews} from "../../features/News/NewsSlice.js";
import CollectionBottomSkeleton from "../UI/Skeletons/Collection/CollectionBottomSkeleton.jsx";

function RelatedNews({excludeNews,slug, base_path}) {
    const {isLoading, news} = useSelector(state => state.allNews)
    const dispatch = useDispatch();
    useEffect(() => {
        if (slug) {
            let data = {
                categorySlug: slug,
                excludeNews: excludeNews,
            }
            dispatch(getNews(data))
        }
    }, [slug]);

    return (
        <>
            {isLoading && <CollectionBottomSkeleton card={6}/>}
            {!isLoading && news.map(tnb => {
                return (
                    <div className="col-lg-4 col-md-4" key={tnb?.id}>
                        <div className="postbox mb-30">
                            <div className="postbox__thumb">
                                <NavLink to={`/article/${tnb?.slug}`}>
                                    <img src={base_path + tnb?.banner} className="img-100" alt="hero image"/>
                                </NavLink>
                            </div>
                            <div className="postbox__text pt-10">
                                <div className="postbox__text-meta pb-10">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>{moment(tnb?.updated_at).format('LL')}</span>
                                        </li>

                                    </ul>
                                </div>
                                <h4 className="pr-0">
                                    <NavLink to={`/article/${tnb.slug}`}>{tnb.title}</NavLink>
                                </h4>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default RelatedNews;