import React, {useEffect, useRef} from 'react';
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {searchModelAction} from "../../features/MeanuBar/MenuSlice.js";
import {Link} from "react-router-dom";

function ModalSearch(props) {
    const {searchModel} = useSelector(state => state.menubar);
    const dispatch = useDispatch();
    const referBody = useRef();

    useEffect(() => {
        if(searchModel) {
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
                    <form>
                        <input type="text" placeholder="Search here..."/>
                        <button>
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ModalSearch;