import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useDispatch, useSelector} from "react-redux";
import {getSystemInfo} from "../features/SystemInformation/SystemInformationSlice.js";
import Loading from "../components/Loading";
import ScrollToTop from "react-scroll-up";

function Main() {
    const {systemInfoIsLoading} = useSelector(state => state.systemInfoData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSystemInfo())
    }, [dispatch])


    const body = <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        <ScrollToTop
            showUnder={160}
            EasingType='easeOutCubic'
            AnimationDuration={500}
        >
            <i className="fas fa-level-up-alt scrollUp"></i>
        </ScrollToTop>
    </>

    const loading = <Loading/>

    return !systemInfoIsLoading ? body : loading;
}

export default Main;