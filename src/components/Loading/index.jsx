import React from 'react';
import Style from "./Loading.module.css"

function Index(props) {
    return (
        <div className={Style.loadingContainer}>
            <div className={Style.loadingCont}>
                <div className={Style.cont}>
                    <span className={`${Style.contSpan} ${Style.contSpanFirstChild}`}></span>
                    <span className={`${Style.contSpan} ${Style.contSpanNthChild2}`}></span>
                </div>
            </div>
        </div>
    );
}

export default Index;