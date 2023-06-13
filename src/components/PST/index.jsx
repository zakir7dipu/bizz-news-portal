import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PstContent from "./PsfContent.jsx";
import Advertisement04 from "../Advertisement/Advertisement04.jsx";
import pstImg01 from "../../assets/img/pst/BGIC-483x322.jpg"
import AdvertisementImg from "../../assets/img/add/491746267754514836.png"

function Index(props) {
    return (
        <section className="latest-area pb-30">
            <Container>
                <Row>
                    <Col>
                        <div className="section-title mb-30">
                            <h2>মূল্য সংবেদনশীল তথ্য</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xl={9} lg={9} md={12}>
                        <Row>
                            {Array(20).fill().map((item, index)=><PstContent
                                key={index}
                                image={pstImg01}
                            />)}
                        </Row>
                    </Col>
                    <Col xl={3} lg={3} className="d-md-none d-lg-block">
                        <Advertisement04
                            image={AdvertisementImg}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Index;