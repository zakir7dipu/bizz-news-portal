import React, {createRef, useEffect} from 'react';
import {Link} from "react-router-dom";
import {twitterShare} from "../../library/helper.js";

function TwitterShare({title}) {
    const twitterRef = createRef()
    useEffect(()=>{
        twitterShare(twitterRef.current, window.location.href,title)
    },[title])
    return (
        <Link ref={twitterRef} className="twitter" to="#" target="_blank">
            <i className="fab fa-twitter"></i>
        </Link>
    );
}

export default TwitterShare;