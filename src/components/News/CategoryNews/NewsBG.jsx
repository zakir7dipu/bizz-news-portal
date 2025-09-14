import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import CategoryNewsImg1 from "../../../assets/img/cat/cat1.jpg";
import moment from "moment/moment.js";
import "moment/locale/bn.js"
import Api from "../../../library/api.js"


const {access} = new Api()

import {global} from "../../../library/config.js"

const {base_path, default_token} = global.config;

function NewsBg({slug}) {
    const [news, setNews] = useState([])
    const [isLoading, setLoading] = useState(true)



    useEffect(() => {
        const fetchData = async () => {
            const autAccess = {
                token: default_token,
                category_slug: slug,
                take: 1,
            }
            const res = await access.post("news", autAccess)
            setNews(res.data.news[0])
            setLoading(false)
        }
        fetchData()
    }, [slug])

    return (
        !isLoading && <>
            {news && <div className="postbox mb-25">
                <div className="postbox__thumb">
                    <NavLink to={`/article/${news.slug}`}>
                        <img src={base_path+news?.banner} alt="hero image" style={{width:'406px',height:'270px',objectFit:'cover',objectPosition:'center'}}/>
                    </NavLink>
                </div>
                <div className="postbox__text pt-20">
                    <h4 className="title-18 pr-0">
                        <NavLink to={`/article/${news.slug}`}>{news?.title}</NavLink>
                    </h4>
                    <div className="postbox__text-meta pb-10">
                        <ul>
                            <li>
                                <i className="fas fa-calendar-alt"></i>
                                <span>{moment(news?.created_at).format('LL')}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>}
        </>

    );
}

export default NewsBg;