import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useDispatch, useSelector} from "react-redux";
import {getSystemInfo} from "../features/SystemInformation/SystemInformationSlice.js";
import Loading from "../components/Loading";

function Main(props) {
    const {systemInfoIsLoading, systemInfoErrorMessage} = useSelector(state => state.systemInfoData)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSystemInfo())
    },[dispatch])

    const body = <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>

    const loading = <Loading/>

    return !systemInfoIsLoading ? body : loading;
}

export default Main;