import React from 'react';
import {Container, Row} from "react-bootstrap";
import NewsCategoryColumn from "./NewsColumn.jsx";
import {useSelector} from "react-redux";
import CategoryNewsSkeleton from "../../UI/Skeletons/CategoryNewsSkeleton.jsx";

function Index(props) {
    const {isLoading, showHomeCategories} = useSelector(state => state.category)

    return (
        <>
            {isLoading && <CategoryNewsSkeleton card={3} smCard={2}/>}
            <section className="cat-area pb-30">
                <Container>
                    {!isLoading && <Row>
                        {showHomeCategories.map(shc => <NewsCategoryColumn key={shc.slug} categoryInfo={shc}/>)}
                    </Row>}
                </Container>
            </section>
        </>
    );
}

export default Index;