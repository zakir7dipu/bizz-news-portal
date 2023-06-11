import React from 'react';
import {Link} from "react-router-dom";

function Advertisement02({image}) {
    return (
        <Link to="#">
            <img src={image} alt="hero image"/>
        </Link>
    );
}

export default Advertisement02;