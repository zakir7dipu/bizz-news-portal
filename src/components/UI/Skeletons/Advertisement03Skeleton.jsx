import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

function Advertisement03Skeleton() {
    return (
        <section className="add-area pb-30 d-md-none  d-xl-block">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <Skeleton height={250}/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Advertisement03Skeleton;