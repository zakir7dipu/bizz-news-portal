import React from 'react';
import Top from "./Top.jsx";
import Middle from "./Middle.jsx";
import HeaderMenu from "./HeaderMenu.jsx";
import Bottom from "./Bottom.jsx";
import ModalSearch from "./ModalSearch.jsx";

function Index(props) {
    return (
        <header className="header">
            <Top/>
            <Middle/>
            <HeaderMenu/>
            <Bottom/>
            <ModalSearch/>
        </header>
    );
}

export default Index;