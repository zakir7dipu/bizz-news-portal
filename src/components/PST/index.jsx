import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PstContent from "./PsfContent.jsx";
import Advertisement04 from "../Advertisement/Advertisement04.jsx";
import pstImg01 from "../../assets/img/pst/BGIC-483x322.jpg"
import AdvertisementImg from "../../assets/img/add/491746267754514836.png"
import {useDispatch, useSelector} from "react-redux";
import {getPriceSensitiveInformation} from "../../features/PriceSensitiveInformation/PriceSensitiveInformationSlice.js";
import {global} from "../../library/config.js"
const {base_path} = global.config

function Index(props) {
    const {isLoading, psts, errorMessage} = useSelector(state => state.PriceSensitiveInformation)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPriceSensitiveInformation())
    },[dispatch])

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
                {!isLoading && <Row>
                    <Col xl={9} lg={9} md={12}>
                        <Row>
                            {psts.map((pst)=><PstContent
                                key={pst.id}
                                image={base_path+pst.path}
                            />)}
                        </Row>
                    </Col>
                    <Col xl={3} lg={3} className="d-md-none d-lg-block">
                        <Advertisement04
                            image={AdvertisementImg}
                        />
                    </Col>
                </Row>}

            </Container>
        </section>
    );
}

export default Index;