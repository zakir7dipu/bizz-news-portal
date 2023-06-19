import React, {useEffect, useState} from 'react';
import Top from "./Top.jsx";
import Middle from "./Middle.jsx";
import HeaderMenu from "./HeaderMenu.jsx";
import Bottom from "./Bottom.jsx";
import ModalSearch from "./ModalSearch.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getData, getSystemInfo} from "../../features/SystemInformation/SystemInformationSlice.js";

function Index(props) {
    const {systemInfo} = useSelector(state => state.systemInfoData)
    const dispatch = useDispatch();
    const [socialLinks, setSocialLinks] = useState([]);

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    useEffect(() => {
        setSocialLinks({
            facebook: systemInfo?.facebook,
            instagram: systemInfo?.instagram,
            linkedin: systemInfo?.linked_in,
            skype: systemInfo?.skype,
            twitter: systemInfo?.twitter,
        })
    },[systemInfo])

    return (
        <header className="header">
            <Top socialLinkData={socialLinks}/>
            <Middle logo={systemInfo?.logo}/>
            <HeaderMenu/>
            <Bottom socialLinkData={socialLinks} logo={systemInfo?.logo}/>
            <ModalSearch/>
        </header>
    );
}

export default Index;