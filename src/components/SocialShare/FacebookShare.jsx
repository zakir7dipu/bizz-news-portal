import React, {createRef, useEffect} from 'react';
import {Link} from "react-router-dom";
import {facebookShare, twitterShare} from "../../library/helper.js";

function FacebookShare(props) {
    const facebookRef = createRef()
    useEffect(()=>{
        facebookShare(facebookRef.current, window.location.origin)
    },[])
    return (
        <Link ref={facebookRef} className="facebook" to="#" target="_blank">
            <i className="fab fa-facebook-f"></i>
        </Link>
    );
}

export default FacebookShare;