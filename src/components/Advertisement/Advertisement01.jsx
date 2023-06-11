import React from 'react';
import HeaderAdd from "../../assets/img/add/header-add.jpg";
import {Link} from "react-router-dom";

function Advertisement01({image}) {
    return (
        <Link to="#"><img src={image} alt="Header Add"/></Link>
    );
}

export default Advertisement01;