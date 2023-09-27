import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchPageBySlug} from "../features/Page/PageSlice.js";
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb.jsx";
import PageDetails from "../components/Page/PageDetails.jsx";
import HeaderMeta from "../components/UI/SEO/HeaderMeta.jsx";
import {truncateString} from "../library/helper.js";

function Page() {
    const {slug} = useParams();
    const {isLoading, metaInfo} = useSelector(state => state.pageState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPageBySlug(slug))
        window.scrollTo(0, 0);
    }, [slug]);

    return (
        <>
            {!isLoading &&
                <>
                    <HeaderMeta
                        title={metaInfo?.name}
                        description={truncateString(metaInfo?.desc, 150)}
                        keywords={`bizznewsbd, news, bizz,bizzsolution, prothom alo, ssg, Business News, ${metaInfo?.name}`}
                    />
                    <Breadcrumb page={`Page`} activePage={metaInfo?.name}/>
                    <PageDetails metaInfo={metaInfo}/>
                </>
            }
        </>
    );
}

export default Page;