import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import Advertisement02 from "../../Advertisement/Advertisement02.jsx";
import moment from "moment/moment.js";
import "moment/locale/bn.js"

import {global} from "../../../library/config.js"
import TrendyNewsLeftSkeleton from "../../UI/Skeletons/TrendyNewsLeftSkeleton.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAdBySlug2} from "../../../features/Advertisements/advertisementSlice.js";
import {useInternalLink} from "../../../library/helper.js";

const {base_path} = global.config

function TrendyNewsRight({newsData}) {
    const {isLoading, data} = newsData;

    const {metaAd2} = useSelector(state => state.advertisementState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAdBySlug2('advertisement-2'));
    }, [dispatch]);

    return (
        <>
            {isLoading && <TrendyNewsLeftSkeleton card={3}/>}
            {!isLoading && <div className="col-20">
                {data.map(tnr => {
                    return (
                        <div className="postbox mb-25" key={tnr.slug}>
                            <div className="postbox__thumb">
                                <NavLink to={`/article/${tnr.slug}`}>
                                    <img src={base_path + tnr.banner} alt="hero image"/>
                                </NavLink>
                            </div>
                            <div className="postbox__text pt-10">
                                <div className="postbox__text-meta pb-10">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>{moment(tnr.created_at).format('LL')}</span>
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="pr-0">
                                    <NavLink to={`/article/${tnr.slug}`}>{tnr.title}</NavLink>
                                </h4>
                            </div>
                        </div>
                    )
                })}

                <div className="postbox mb-25">
                    <Advertisement02
                        image={useInternalLink(metaAd2?.advertisement)}
                    />
                </div>
            </div>}
        </>
    );
}

export default TrendyNewsRight;