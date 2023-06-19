import React, {useEffect} from 'react';
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {extraInfoAction} from "../../features/MeanuBar/MenuSlice.js";
import {showAllCategories} from "../../features/Category/CategorySlice.js";
import PopularNews from "../News/PopularNews";
import {goToExternalLink, useInternalLink} from "../../library/helper.js";

function Bottom({socialLinkData, logo}) {
    const {facebook, instagram, linkedin, skype, twitter} = socialLinkData
    const {isLoading, categories, errorMessage} = useSelector(state => state.category)
    const {extraInfo} = useSelector(state => state.menubar)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(showAllCategories)
    },[dispatch])

    return (
        <div className={`extra-info ${extraInfo && "info-open"}`}>
            <div className="close-icon">
                <button onClick={e => {
                    e.preventDefault()
                    dispatch(extraInfoAction(false))
                }}>
                    <i className="far fa-window-close"></i>
                </button>
            </div>
            <div className="header__logo">
                <Link to="/">
                    <img src={logo && useInternalLink(logo)} alt="Header Logo" style={{width: '180px'}}/>
                </Link>
            </div>
            <div className="social-icon-right mt-30 mb-50">
                {facebook && <Link to="#" onClick={e=>{
                    e.preventDefault()
                    goToExternalLink(facebook)
                }}><i className="fab fa-facebook-f"></i></Link>}

                {instagram && <Link to="#" onClick={e=>{
                    e.preventDefault()
                    goToExternalLink(instagram)
                }}><i className="fab fa-instagram"></i></Link>}

                {twitter && <Link to="#" onClick={e=>{
                    e.preventDefault()
                    goToExternalLink(twitter)
                }}><i className="fab fa-twitter"></i></Link>}

                {linkedin && <Link to="#" onClick={e=>{
                    e.preventDefault()
                    goToExternalLink(linkedin)
                }}><i className="fab fa-linkedin-in"></i></Link>}

                {skype && <Link to="#" onClick={e=>{
                    e.preventDefault()
                    goToExternalLink(skype)
                }}><i className="fab fa-skype"></i></Link>}
            </div>
            <div className="side-menu mb-30">
                {!isLoading && <ul>
                    <li><NavLink to="/">সর্বশেষ</NavLink></li>
                    {categories.map(cat=><li key={cat.id}><NavLink to={`/collection/${cat.slug}`}>{cat.name}</NavLink></li>)}
                </ul>}

            </div>

            <div className="side-post">
                <PopularNews category_slug={null}/>
            </div>
        </div>
    );
}

export default Bottom;