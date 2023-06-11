import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Advertisement03({image}) {
    return (
        <section className="add-area pb-30 d-md-none  d-xl-block">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <img src={image} alt=""/>
                    </Col>
                </Row>
            </Container>
        </section>
);
}

export default Advertisement03;