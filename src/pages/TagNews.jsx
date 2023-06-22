import React from 'react';
import {useParams} from "react-router-dom";
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb.jsx";
import TagAllNews from "../components/Tags/TagAllNews.jsx";

function TagNews() {
    const {slug} = useParams();
    return (
        <>
            <Breadcrumb page={'Tags News'} activePage={slug.replaceAll("-", " ").toUpperCase()}/>
            <TagAllNews tag={slug}/>
        </>
    );
}

export default TagNews;