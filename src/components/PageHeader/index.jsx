import React from 'react';
import {Container} from "react-bootstrap";

function Index({name}) {
    return (
        <div className="category-title-area pt-60 pb-60">
            <Container>
                <div className="cat-heading text-center grey-bg">
                    <h3 className="page-name">{name}</h3>
                </div>
            </Container>
        </div>
    );
}

export default Index;