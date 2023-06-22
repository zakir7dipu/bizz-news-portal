import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useDispatch, useSelector} from "react-redux";
import {getSystemInfo} from "../features/SystemInformation/SystemInformationSlice.js";
import Loading from "../components/Loading";
import {Helmet} from "react-helmet";
import ScrollToTop from "react-scroll-up";
import {useInternalLink} from "../library/helper.js";

function Main() {
    const {systemInfoIsLoading, systemInfo, systemInfoErrorMessage} = useSelector(state => state.systemInfoData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSystemInfo())
    }, [dispatch])

    const body = <>
        <Helmet>
            <title>{systemInfo?.name}</title>
            <link rel="icon" type="image/png" href={systemInfo?.icon && useInternalLink(systemInfo?.icon)}/>
        </Helmet>
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