import React, {useEffect, useRef} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link, NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {extraInfoAction, searchModelAction} from "../../features/MeanuBar/MenuSlice.js";
import {getAllCategories} from "../../features/Category/CategorySlice.js";

function HeaderMenu(props) {
    const {isLoading, categories, errorMessage} = useSelector(state => state.category)
    const dispatch = useDispatch();
    const stickyRefer = useRef()

    useEffect(()=>{
        dispatch(getAllCategories())
    },[dispatch])

    useEffect(() => {
        // console.log(document.querySelector("[aria-current=page]"))
        // if(document.querySelector("[aria-current=page]")) {
        //     document.querySelector("[aria-current=page]").parentElement.classList.add('active');
        // }

        window.addEventListener('scroll', (e) => {
            if (document.body.getBoundingClientRect().top < 245) {
                stickyRefer.current.classList.remove('sticky')
            } else {
                stickyRefer.current.className = 'sticky'
            }
        });

        $("#mobile-menu").meanmenu({
            meanMenuContainer: ".mobile-menu",
            meanScreenWidth: "992"
        });
    })

    return (
        <div ref={stickyRefer} className="header__menu-area black-bg header-sticky">
            <Container>
                <Row>
                    {!isLoading && <Col xl={12}>
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
                            <nav id="mobile-menu">
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