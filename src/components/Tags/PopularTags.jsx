import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPopularTags} from "../../features/Tags/PopularTagSlice.js";

function PopularTags() {
    const {isLoading, tags, errorMessage} = useSelector(state => state.popularTags)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPopularTags())
    }, [dispatch])
    return (
        <>
            <h3 className="widget-title">Popular Tags</h3>
            <div className="tagcloud">
                {!isLoading && tags.map(item => {
                        return (
                            <Link to="#" className={item.name=='ALL'?'active':''}  key={item?.id}>{item?.name}</Link>
                        )
                    }
                )}
            </div>
        </>
    );
}

export default PopularTags;