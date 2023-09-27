import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb.jsx";
import TagAllNews from "../components/Tags/TagAllNews.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchTagBySlug} from "../features/Tags/PopularTagSlice.js";
import HeaderMeta from "../components/UI/SEO/HeaderMeta.jsx";

function TagNews() {
    const {slug} = useParams();
    const {isLoading, metaTagInfo, errorMessage} = useSelector(state => state.popularTags)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTagBySlug(slug))
    }, [slug])

    return (
        <>
            <HeaderMeta
                title={metaTagInfo[0]?.name}
            />
            <Breadcrumb page={'Tags News'} activePage={metaTagInfo[0]?.name}/>
            <TagAllNews tag={slug}/>
        </>
    );
}

export default TagNews;