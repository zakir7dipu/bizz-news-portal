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

function Home() {
    const {metaAd3} = useSelector(state => state.advertisementState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAdBySlug3('advertisement-3'));
    }, [dispatch]);

    return (
        <>
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