import React from 'react';
import BreakingNews from "../components/News/Breaking/"
import HeroArea from "../components/News/Breaking/HeroArea.jsx";
import TodaysNews from "../components/News/TodaysNews.jsx";
import CategoryNews from "../components/News/CategoryNews.jsx";
import AdvertisementSection from "../components/Advertisement/Advertisement03.jsx";
import PstSection from "../components/PST";
import AdvertisementImg from "../assets/img/add/14637616716975557494.gif"

function Home(props) {
    return (
        <>
            <BreakingNews/>
            <HeroArea/>
            <TodaysNews/>
            <CategoryNews/>
            <AdvertisementSection
                image={AdvertisementImg}
            />
            <PstSection/>
        </>
    );
}

export default Home;