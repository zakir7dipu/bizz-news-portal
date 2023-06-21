import React, {useEffect, useRef} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {extraInfoAction, searchModelAction} from "../../features/MeanuBar/MenuSlice.js";
import {getAllCategories} from "../../features/Category/CategorySlice.js";

function HeaderMenu(props) {
    const {isLoading, categories, errorMessage} = useSelector(state => state.category)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCategories())
    },[dispatch])

    return (
        <div className="header__menu-area black-bg header-sticky">
            <Container>
                <Row>
                    {!isLoading && <Col xl={12} style={{height:"55px"}}>
                        <div className="header__right-icon f-right mt-17">
                            <Link to="#" onClick={e => {
                                e.preventDefault()
                                dispatch(searchModelAction(true))
                            }}>
                                <i className="fas fa-search"></i>
                            </Link>
                            <Link className="info-bar" to="#" onClick={e => {
                                e.preventDefault()
                                dispatch(extraInfoAction(true))
                            }}>
                                <i className="fas fa-bars"></i>
                            </Link>
                        </div>
                        <div className="header__menu f-left">
                            <nav id="mobile-menu" className="d-lg-inline-block d-none">
                                <ul>
                                    <li className="headerMenu"><NavLink to="/">সর্বশেষ</NavLink></li>
                                    {categories && Array.from(categories).map(cat=><li className="headerMenu" key={cat.id}><NavLink to={`/collection/${cat.slug}`}>{cat.name}</NavLink></li>)}
                                </ul>
                            </nav>
                        </div>
                        <div className="mobile-menu"></div>
                    </Col>}
                </Row>
            </Container>
        </div>
    );
}

export default HeaderMenu;