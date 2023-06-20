import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchPageBySlug} from "../features/Page/PageSlice.js";
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb.jsx";
import PageDetails from "../components/Page/PageDetails.jsx";

function Page() {
    const {slug} = useParams();
    const {isLoading, metaInfo} = useSelector(state => state.pageState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPageBySlug(slug))
    }, [slug]);

    return (
        <>
            {!isLoading &&
                <>
                    <Breadcrumb page={`Page`} activePage={metaInfo?.name}/>
                    <PageDetails metaInfo={metaInfo}/>
                </>
            }
        </>
    );
}

export default Page;