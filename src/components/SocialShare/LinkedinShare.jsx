import React, {createRef, useEffect} from 'react';
import {Link} from "react-router-dom";
import {linkedinShare, twitterShare} from "../../library/helper.js";

function LinkedinShare({title}) {
    const linkedinRef = createRef()
    useEffect(()=>{
        linkedinShare(linkedinRef.current, window.location.href,title)
    },[title])
    return (
        <Link ref={linkedinRef} className="linkedin" to="#" target="_blank">
            <i className="fab fa-linkedin-in"></i>
        </Link>
    );
}

export default LinkedinShare;