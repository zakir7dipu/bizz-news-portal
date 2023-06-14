import React, {useEffect} from 'react';
import NewsBlock from "./NewsBlock.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getPopularNews} from "../../../features/PopularNews/PopularNewsSlice.js";

function Index({category_slug}) {
    const {isLoading, news, errorMessage} = useSelector(state => state.popularNews)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPopularNews({category:category_slug}))
    },[category_slug])

    return (
        <>
            <h3>Popular Post</h3>
            {!isLoading && news.map(item=><NewsBlock key={item.slug} metaInfo={item}/>)}
        </>
    );
}

export default Index;