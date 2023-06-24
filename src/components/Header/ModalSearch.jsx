import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchModelAction} from "../../features/MeanuBar/MenuSlice.js";
import {Link, useNavigate} from "react-router-dom";
import {infoMessage} from "../../library/helper.js";

function ModalSearch(props) {

    const {searchModel} = useSelector(state => state.menubar);
    const dispatch = useDispatch();

    const referBody = useRef();
    const [searchText, setSearchText] = useState();
    const navigate = useNavigate();

    const handleRequest = (e) => {
        e.preventDefault();

        infoMessage("Please wait a while, We are processing your request.");
        navigate(`/news-search/${searchText}`);
        setSearchText(" ");
        dispatch(searchModelAction(false))
    }

    useEffect(() => {
        if (searchModel) {
            referBody.current.classList.add('show')
            referBody.current.style.display = 'block'
            referBody.current.style.paddingRight = '15.9851px'
        } else {
            referBody.current.classList.remove('show')
            referBody.current.style.display = null
            referBody.current.style.paddingRight = null
        }
    }, [searchModel]);

    return (
        <div ref={referBody} className="modal fade" id="search-modal" tabIndex="-1" role="dialog" aria-hidden="true">
            <Link to="#" onClick={e=>{
                e.preventDefault()
                dispatch(searchModelAction(false))
            }} >
                <i className="fa fa-times float-right p-5 text-white" aria-hidden="true"></i>
            </Link>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <form onSubmit={handleRequest}>
                        <input type="text" placeholder="Search here..." value={searchText}
                               onChange={(e) => setSearchText(e.target.value)}/>
                        <button type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ModalSearch;