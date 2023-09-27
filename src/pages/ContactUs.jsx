import React, {useEffect, useState} from 'react';
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../features/SystemInformation/SystemInformationSlice.js";
import {errorMessage, errorResponseMessage, infoMessage, successMessage} from "../library/helper.js";
import Api from "../library/api.js";
import {global} from "../library/config.js";
import HeaderMeta from "../components/UI/SEO/HeaderMeta.jsx";

function ContactUs() {
    const {systemInfo} = useSelector(state => state.systemInfoData)
    const dispatch = useDispatch();

    const {access} = new Api();
    const {default_token} = global.config
    const [clientName, setClientName] = useState("");
    const [clientSubject, setClientSubject] = useState("");
    const [clientPhone, setClientPhone] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientMessage, setClientMessage] = useState("");

    const messageRequestHandler = (e) => {
        e.preventDefault();
        if (!clientName) {
            errorMessage("Name is required.")
        }

        if (!clientPhone) {
            errorMessage("Phone is required.")
        }
        if (!clientEmail) {
            errorMessage("Email is required.")
        }
        if (!clientMessage) {
            errorMessage(("Message is required."))
        }

        if (clientName && clientPhone && clientEmail && clientMessage) {
            let data = {
                token: default_token,
                name: clientName,
                subject: clientSubject,
                phone: clientPhone,
                email: clientEmail,
                message: clientMessage
            }
            infoMessage("Please wait a while, We are processing your request.")
            access.post("message", data)
                .then(res => {
                    resetHandler();
                    successMessage(res.data.message);
                })
                .catch(err => errorResponseMessage(err))
        }
    }

    const resetHandler = () => {
        setClientName("")
        setClientSubject("")
        setClientPhone("")
        setClientEmail("")
        setClientMessage("")
    }


    useEffect(() => {
        dispatch(getData())
    }, [dispatch]);

    return (
        <>
            <HeaderMeta
                title={`Contact Us`}
            />
            <Breadcrumb page={`Page`} activePage={`Contact Us`}/>
            <div className="contact-area pt-110 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="contact-info mb-30">
                                <h2>Keep in touch</h2>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="contact-meta mb-30">
                                            <div className="contact-meta-info">
                                                <h4>Phone</h4>
                                                <p>{systemInfo?.phone}</p>
                                                <p>{systemInfo?.mobile}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-meta mb-30">
                                            <div className="contact-meta-info">
                                                <h4>E-mail</h4>
                                                <p>{systemInfo?.email}</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-meta">
                                            <div className="contact-meta-info">
                                                <h4>Address</h4>
                                                <p>{systemInfo?.address}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="contact-form mb-30">
                                <h3>Do you have any question?</h3>
                                <form onSubmit={messageRequestHandler}>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <input name="name" type="text" placeholder="Name" value={clientName}
                                                   onChange={(e)=>setClientName(e.target.value)}/>
                                        </div>
                                        <div className="col-xl-6">
                                            <input name="email" type="email" placeholder="Email" value={clientEmail}
                                                   onChange={(e)=>setClientEmail(e.target.value)}/>
                                        </div>
                                        <div className="col-xl-6">
                                            <input name="phone" type="tel" placeholder="Phone" value={clientPhone}
                                                   onChange={(e)=>setClientPhone(e.target.value)}/>
                                        </div>
                                        <div className="col-xl-12">
                                            <input name="subject" type="text" placeholder="Subject" value={clientSubject}
                                                   onChange={(e)=>setClientSubject(e.target.value)} />
                                        </div>
                                        <div className="col-xl-12">
                                            <textarea name="message" id="message" cols="30" rows="10"
                                                      placeholder="Message" value={clientMessage}
                                                      onChange={(e)=>setClientMessage(e.target.value)}></textarea>
                                            <button className="btn brand-btn" type="submit">send message</button>
                                        </div>
                                    </div>
                                </form>
                                <p className="ajax-response"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.4038936985894!2d90.41504231744385!3d23.7329724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c00000001%3A0x7d52523d0b8a18d4!2sBizz%20Career%20Ltd.!5e0!3m2!1sen!2sbd!4v1687254727818!5m2!1sen!2sbd"
                    width="100%" height="450" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>
            </div>
        </>
    );
}

export default ContactUs;