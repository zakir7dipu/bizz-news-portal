import React from 'react';
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";

function PsfContent({image}) {
    return (
        <Col xl={3} lg={3} md={6} className="py-3">
            <Link to="#">
                <img src={image} alt="pst img" style={{width:"100%",height:"100px",objectFit:"cover",objectPosition:"center"}}/>
            </Link>
        </Col>
    );
}

export default PsfContent;