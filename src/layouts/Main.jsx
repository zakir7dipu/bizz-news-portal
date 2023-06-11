import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header";

function Main(props) {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default Main;