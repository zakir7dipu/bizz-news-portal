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

    // address : "World"
    // category_news_per_pagination : 5
    // created_at : null
    // description : "Bizz News"
    // email : "bizznews@email.com"
    // icon : "system-images/icons/1-20230606040320-1556338505-1407852535.png"
    // logo "system-images/logos/1-20230606040319-1194871461-2069288896.png"
    // mobile "01234567890"
    // motto : "Cyber Solve IQ"
    // name : "Bizz News"
    // phone : "01234567890"
    // secondary_logo : "system-images/secondary-logos/1-20230606040327-144819932-2106250450.png"
    // status : 1
    // tagline "Cyber Solve IQ"
    // website : "https://deskplusbd.com"

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
            <Middle/>
            <HeaderMenu/>
            <Bottom/>
            <ModalSearch/>
        </header>
    );
}

export default Index;