import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import CategoryNewsImg1 from "../../../assets/img/cat/cat1.jpg";
import moment from "moment/moment.js";
import "moment/locale/bn.js"
import Api from "../../../library/api.js"

const {access} = new Api()

import {global} from "../../../library/config.js"
import CategoryNewsImg2 from "../../../assets/img/trendy/xs/xs-12.jpg";
import CategoryNewsImg3 from "../../../assets/img/trendy/xs/xs-11.jpg";

const {base_path, default_token} = global.config;

function NewsSm({slug}) {
    const [news, setNews] = useState([])
    const [isLoading, setLoading] = useState(true)



    useEffect(() => {
        const fetchData = async () => {
            const autAccess = {
                token: default_token,
                category_slug: slug,
                skip: 1,
                take: 2,
            }
            const res = await access.post("news", autAccess)
            setNews(res.data.news)
            setLoading(false)
        }
        fetchData()
    }, [slug])

    return (
        !isLoading && <>
            {news && <div className="cat-sm-post">
                {news.map(item=>{
                    return (
                        <div className="post__small mb-30" key={item.slug}>
                            <div className="post__small-thumb f-left">
                                <NavLink to={`/article/${item.slug}`}>
                                    <img src={base_path+item?.banner} alt="hero image" style={{width:'100px', height:'85px', objectFit:'cover', objectPosition:'center'}}/>
                                </NavLink>
                            </div>
                            <div className="post__small-text fix pl-10">
                                <h4 className="title-16 pr-0 mt-0">
                                    <NavLink to={`/article/${item.slug}`}>{item?.title}</NavLink>
                                </h4>
                                <div className="post__small-text-meta">
                                    <ul>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>{moment(item?.created_at).format('LL')}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>}
        </>

    );
}

export default NewsSm;