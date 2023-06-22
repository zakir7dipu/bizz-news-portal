import React, {useState} from 'react';
import {global} from "../../library/config.js";
import {subscriptionHandler} from "../../library/helper.js";

function SubscriptionNewsLatter(props) {
    const [email, setEmail] = useState();
    const {default_token} = global.config;

    const handleRequest = (e) => {
        e.preventDefault();
        let data = {
            email: email,
            token: default_token
        }
        subscriptionHandler(data)
        setEmail('');
    }
    return (
        <>
            <div className="widget widget-border mb-40">
                <h3 className="widget-title">Subscribe our Newsletter!</h3>
                <p>Subscribe to our email newsletter to receive useful articles and special offers.</p>
                <form className="widget-subscribe" onSubmit={handleRequest}>
                    <input type="email" placeholder="Enter your email :"  value={email}
                           onChange={(e) => setEmail(e.target.value)} />
                    <button className="btn" type="submit">subscribe</button>
                </form>
            </div>
        </>
    );
}

export default SubscriptionNewsLatter;