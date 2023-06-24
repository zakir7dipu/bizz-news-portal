import React from 'react';
import {useParams} from "react-router-dom";
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb.jsx";
import SearchNewsData from "../components/News/Search/SearchNewsData.jsx";

function SearchNews(props) {
    const {slug} = useParams();
    return (
        <>
            <Breadcrumb page={'Search Keyword'} activePage={slug.replaceAll("-", " ").toUpperCase()}/>
            <SearchNewsData slug={slug}/>
        </>
    );
}

export default SearchNews;