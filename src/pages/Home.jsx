import React from 'react';
import BreakingNews from "../components/News/Breaking/"
import HeroArea from "../components/News/Breaking/HeroArea.jsx";
import TrendyNews from "../components/News/TrendyNews";
import CategoryNews from "../components/News/CategoryNews";
import AdvertisementSection from "../components/Advertisement/Advertisement03.jsx";
import PstSection from "../components/PST";
import AdvertisementImg from "../assets/img/add/14637616716975557494.gif"

function Home(props) {
    return (
        <>
            <BreakingNews/>
            <HeroArea/>
            <TrendyNews/>
            <CategoryNews/>
            <AdvertisementSection
                image={AdvertisementImg}
            />
            <PstSection/>
        </>
    );
}

export default Home;