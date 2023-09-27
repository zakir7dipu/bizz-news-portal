import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet-async";
import {useInternalLink} from "../../../library/helper.js";

function HeaderMeta({title, description, keywords, ogImage}) {
    const {systemInfo} = useSelector(state => state.systemInfoData)

    const [siteName, setSiteName] = useState("Bizz News")
    const [siteFavicon, setSiteFavicon] = useState("");
    const [siteLogo, setSiteLogo] = useState("");

    // useEffect(() => {
    //     dispatch(getSystemInfo())
    // }, [dispatch])

    useEffect(() => {
        setSiteName(`${systemInfo?.name} | ${title}`)
        setSiteFavicon(`/${systemInfo?.icon}`)
        setSiteLogo(`/${systemInfo?.logo}`)
    }, [systemInfo,title])

    return (
        <Helmet>
            <title>{siteName}</title>
            <meta name="robots" content="index,follow"/>
            <meta name='keywords' content={keywords || ""}/>
            <meta name="author" content="Bizz Solutions PLC"/>
            <meta name='description' content={description || ""}/>
            <meta property="og:type" content={"News"}/>
            <meta property="og:title" content={title || ""}/>
            <meta property="og:description" content={description || ""}/>
            <meta property="og:site_name" content="bizznewsbd.com"/>
            <meta property="og:image" content={ogImage ? useInternalLink(ogImage) : useInternalLink(siteLogo)}/>
            <meta name="twitter:creator" content={siteName}/>
            <meta name="twitter:card" content={title || ""}/>
            <meta name="twitter:title" content={title || ""}/>
            <link rel="canonical" href={window.location.href}/>
            <meta name="twitter:description" content={description || ""}/>
            <link rel="icon" type="image/png" href={useInternalLink(siteFavicon)}/>
        </Helmet>
    );
}

export default HeaderMeta;