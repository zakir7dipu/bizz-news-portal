import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet-async";
import {useInternalLink} from "../../../library/helper.js";

function HeaderMeta({title, description, keywords, ogImage}) {
    const {systemInfo} = useSelector(state => state.systemInfoData)

    const [siteName, setSiteName] = useState("Bizz News")
    const [siteFavicon, setSiteFavicon] = useState("");
    const [siteLogo, setSiteLogo] = useState("");

    useEffect(() => {
        setSiteName(`${systemInfo?.name} | ${title}`)
        setSiteFavicon(`${systemInfo?.icon}`)
        setSiteLogo(`${systemInfo?.logo}`)
    }, [systemInfo, title]);

    const image = ogImage ? useInternalLink(ogImage) : useInternalLink(siteLogo);
    const favicon = useInternalLink(siteFavicon);
    const url = typeof window !== "undefined" ? window.location.href : "";

    return (
        <Helmet>
            <title>{siteName}</title>
            <meta name="robots" content="index,follow"/>
            <meta name="keywords" content={keywords || ""}/>
            <meta name="author" content="Bizz Solutions PLC"/>
            <meta name="description" content={description || ""}/>

            <meta property="og:type" content="article"/>
            <meta property="og:url" content={url}/>
            <meta property="og:title" content={title || ""}/>
            <meta property="og:description" content={description || ""}/>
            <meta property="og:site_name" content="bizznewsbd.com"/>
            <meta property="og:image" content={image}/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={title || ""}/>
            <meta name="twitter:description" content={description || ""}/>
            <meta name="twitter:image" content={image}/>
            <meta name="twitter:creator" content="@bizznewsbd"/>

            <link rel="canonical" href={url}/>
            <link rel="icon" type="image/png" href={favicon}/>
        </Helmet>
    );
}

export default HeaderMeta;