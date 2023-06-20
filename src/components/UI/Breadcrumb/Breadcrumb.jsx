import React from 'react';
import {Link} from "react-router-dom";

function Breadcrumb({page, activePage}) {
    return (
        <div className="page-title-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title text-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link to="#">{page}</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page"> {activePage}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumb;