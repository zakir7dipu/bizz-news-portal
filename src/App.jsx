import React, {useEffect} from 'react'
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/owl.carousel.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/fontawesome-all.min.css";
import "./assets/css/themify-icons.css";
import "./assets/css/meanmenu.css";
import "./assets/css/slick.css";
import "./assets/css/style.css";

import Main from "./layouts/Main.jsx";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import NewsDetails from "./pages/NewsDetails.jsx";
import Page from "./pages/Page.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import TagNews from "./pages/TagNews.jsx";


function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                    <Route path="collection/:slug" element={<Category/>}/>
                    <Route path="article/:slug" element={<NewsDetails/>}/>
                    <Route path="page/:slug" element={<Page/>}/>
                    <Route path="tags/:slug/news" element={<TagNews/>}/>
                    <Route path="contact-us" element={<ContactUs/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
