import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import PageHeader from "../components/PageHeader";
import PageContent from "../components/PageContent";
import HeaderMeta from "../components/UI/SEO/HeaderMeta.jsx";
import {truncateString} from "../library/helper.js";

function Category(props) {
    const {slug} = useParams()
    const [category, setCategory] = useState([])
    const {isLoading, categories} = useSelector(state => state.category)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setCategory(categories.filter(cat => cat.slug === slug)[0])
        window.scrollTo(0, 0);
    }, [isLoading, slug])

    return (
        !isLoading && <>
            <HeaderMeta
                title={category?.name}
                description={truncateString(category?.description, 150)}
                keywords={category?.name}
            />
            <PageHeader name={category?.name}/>
            <PageContent category={category}/>
        </>
    );
}

export default Category;