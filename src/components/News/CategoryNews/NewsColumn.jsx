import React from 'react';
import {Col} from "react-bootstrap";
import NewsBg from "./NewsBG.jsx";
import NewsSm from "./NewsSm.jsx";

function NewsColumn({categoryInfo}) {
    const {name, slug} = categoryInfo

    return (
        <Col xl={4} lg={4} md={6}>
            <div className="section-title mb-30">
                <h2>{name}</h2>
            </div>

            <NewsBg slug={slug} />


            <NewsSm slug={slug} />
        </Col>
    );
}

export default NewsColumn;