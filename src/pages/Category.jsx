import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {showSingleCategory} from "../features/Category/CategorySlice.js";
import {Container} from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import PageContent from "../components/PageContent";

function Category(props) {
    const {slug} = useParams()
    const [category, setCategory] = useState([])
    const {isLoading, categories} = useSelector(state => state.category)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setCategory(categories.filter(cat=>cat.slug === slug)[0])
    },[isLoading, slug])

    return (
        !isLoading && <>
            <PageHeader name={category?.name} />
            <PageContent category={category}/>
        </>
    );
}

export default Category;