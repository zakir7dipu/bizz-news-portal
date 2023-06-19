import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import moment from "moment";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../features/SystemInformation/SystemInformationSlice.js";
import SubscribeArea from "./SubscribeArea.jsx";
import FooterBottomArea from "./FooterBottomArea/index.jsx";

function Index(props) {
    const {systemInfo} = useSelector(state => state.systemInfoData)
    const dispatch = useDispatch();
    const [socialLinks, setSocialLinks] = useState([]);
    const [contactInfo, setContactInfo] = useState([]);

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    // category_news_per_pagination : 5
    // created_at : null
    // description : "Bizz News"
    // icon : "system-images/icons/1-20230606040320-1556338505-1407852535.png"
    // logo "system-images/logos/1-20230606040319-1194871461-2069288896.png"
    // motto : "Cyber Solve IQ"
    // name : "Bizz News"
    // secondary_logo : "system-images/secondary-logos/1-20230606040327-144819932-2106250450.png"
    // tagline "Cyber Solve IQ"
    useEffect(() => {
        setSocialLinks({
            facebook: systemInfo?.facebook,
            instagram: systemInfo?.instagram,
            linkedin: systemInfo?.linked_in,
            skype: systemInfo?.skype,
            twitter: systemInfo?.twitter,
        })
        setContactInfo({
            address: systemInfo?.address,
            email: systemInfo?.email,
            mobile: systemInfo?.mobile,
            website: systemInfo?.website
        })
    },[systemInfo])

    return (
        <footer className="footer-bg">
            <SubscribeArea logo={systemInfo?.logo}/>
            <FooterBottomArea contact={contactInfo} socialLinkData={socialLinks} description={systemInfo?.description}/>
            <div className="copyright-area pt-25 pb-25">
                <Container>
                    <Row>
                        <Col>
                            <div className="copyright text-center">
                                <p>© Copyrights {moment().format('YYYY')}. All rights reserved by <Link to="#">Bizz Solutions PLC</Link></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
}

export default Index;