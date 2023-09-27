import React, {useEffect} from 'react';
import BreakingNews from "../components/News/Breaking/"
import HeroArea from "../components/News/Breaking/HeroArea.jsx";
import TrendyNews from "../components/News/TrendyNews";
import CategoryNews from "../components/News/CategoryNews";
import AdvertisementSection from "../components/Advertisement/Advertisement03.jsx";
import PstSection from "../components/PST";
import {useDispatch, useSelector} from "react-redux";
import {fetchAdBySlug3} from "../features/Advertisements/advertisementSlice.js";
import {useInternalLink} from "../library/helper.js";
import HeaderMeta from "../components/UI/SEO/HeaderMeta.jsx";

function Home() {
    const {metaAd3} = useSelector(state => state.advertisementState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAdBySlug3('advertisement-3'));
    }, [dispatch]);

    return (
        <>
            <HeaderMeta
                title={'Home'}
                description={`Stay informed about the thriving business landscape of Bangladesh with Bizz News BD. Get the latest updates on industry trends, market analysis, financial insights, and exclusive interviews with top executives. Dive into comprehensive coverage of local and international business news, empowering entrepreneurs, investors, and professionals to make informed decisions. Join our esteemed readership and unlock the pulse of Bangladesh's dynamic business ecosystem. Stay ahead, stay connected with our trusted business news source`}
                keywords={`bizznewsbd, news, bizz,bizzsolution, prothom alo, ssg, Business News`}
            />
            <BreakingNews/>
            <HeroArea/>
            <TrendyNews/>
            <CategoryNews/>
            <AdvertisementSection
                image={useInternalLink(metaAd3?.advertisement)}
            />
            <PstSection/>
        </>
    );
}

export default Home;