import React, {createRef, useEffect} from 'react';
import {whatsappShare} from "../../library/helper.js";
import {Link} from "react-router-dom";

function WhatsappShare({title}) {
    const whatsappRef = createRef()
    useEffect(()=>{
        whatsappShare(whatsappRef.current, title, window.location.origin,)
    },[title])
    return (
        <Link ref={whatsappRef} className="whatsapp" to="#" target="_blank">
            <i className="fab fa-whatsapp"></i>
        </Link>
    );
}

export default WhatsappShare;