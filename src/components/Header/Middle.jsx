import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Advertisement01 from "../Advertisement/Advertisement01.jsx";
import {useInternalLink} from "../../library/helper.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchAdBySlug1} from "../../features/Advertisements/advertisementSlice.js";
import {isMobile} from 'react-device-detect';

function Middle({logo}) {
    const {isLoading, metaAd1} = useSelector(state => state.advertisementState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAdBySlug1('advertisement-1'));
    }, [dispatch]);

    return (
        !isMobile &&
        <div className="header__middle pt-20">
            <Container>
                <Row>
                    <Col lg={4} md={3}
                         className="d-flex align-items-center justify-content-md-start justify-content-center">
                        <div className="header__logo text-center text-md-left mb-20">
                            <Link to="/"><img src={logo && useInternalLink(logo)} alt="Header Logo"
                                              style={{width: '180px'}}/></Link>
                        </div>
                    </Col>
                    <Col lg={8} md={9}>
                        <div className="header__add text-center text-md-right mb-20">
                            {!isLoading && <Advertisement01
                                image={useInternalLink(metaAd1?.advertisement)}
                            />}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Middle;