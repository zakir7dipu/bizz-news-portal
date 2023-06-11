import React from 'react';
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";

function PsfContent({image}) {
    return (
        <Col xl={3} lg={3} md={6}>
            <Link to="#">
                <img src={image} alt="pst img"/>
            </Link>
        </Col>
    );
}

export default PsfContent;