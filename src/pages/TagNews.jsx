import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb.jsx";
import TagAllNews from "../components/Tags/TagAllNews.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchTagBySlug} from "../features/Tags/PopularTagSlice.js";

function TagNews() {
    const {slug} = useParams();
    const {metaTagInfo, errorMessage} = useSelector(state => state.popularTags)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTagBySlug(slug))
    }, [slug])

    return (
        <>
            <Breadcrumb page={'Tags News'} activePage={metaTagInfo[0]?.name}/>
            <TagAllNews tag={slug}/>
        </>
    );
}

export default TagNews;