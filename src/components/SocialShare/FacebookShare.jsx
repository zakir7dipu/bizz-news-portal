import React, {createRef, useEffect} from 'react';
import {Link} from "react-router-dom";
import {facebookShare, twitterShare} from "../../library/helper.js";

function FacebookShare({image, title}) {
    const facebookRef = createRef()
    // useEffect(()=>{
    //     facebookShare(facebookRef.current, window.location.href, image, title)
    // },[])
    return (
        <Link ref={facebookRef} className="facebook" to="#" target="_blank" onClick={e=>{
            e.preventDefault()
            facebookShare(facebookRef.current, window.location.href, image, title)
        }}>
            <i className="fab fa-facebook-f"></i>
        </Link>
    );
}

export default FacebookShare;