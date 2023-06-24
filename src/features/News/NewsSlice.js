import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../library/api.js"

const {access} = new Api()
import {global} from "../../library/config.js"

const {default_token} = global.config

const initialData = {
    isLoading: true,
    isMetaLoading: true,
    news: [],
    total_rows: 0,
    total_pages: 1,
    errorMessage: null,
    metaInfo: []
}

export const getNews = createAsyncThunk("news/getNews", async (data, {rejectWithValue}) => {
    try {
        const {paginate, page,excludeSpace, categorySlug, excludeNews,tagName,search} = data;
        const autAccess = {
            token: default_token,
            category_slug: categorySlug,
            paginate: paginate,
            page: page,
            exclude_space: excludeSpace,
            exclude_news: excludeNews,
            tag_slug: tagName,
            search: search,

        }
        const res = await access.post("news", autAccess)
        return res.data;
    } catch (e) {
        return rejectWithValue
    }
})

export const getMoreNews = createAsyncThunk("news/getMoreNews", async (data, {rejectWithValue}) => {
    try {
        const {paginate, page, excludeSpace ,categorySlug, excludeNews,tagName,search} = data;
        const autAccess = {
            token: default_token,
            category_slug: categorySlug,
            paginate: paginate,
            page: page,
            exclude_space: excludeSpace,
            exclude_news: excludeNews,
            tag_slug: tagName,
            search: search,
        }
        const res = await access.post("news", autAccess)
        return res.data;
    } catch (e) {
        return rejectWithValue
    }
})

export const fetchNewsBySlug = createAsyncThunk("news/fetchNewsBySlug", async (news, {rejectedWithValue}) => {
    try {
        const autAccess = {
            token: default_token,
        }
        const res = await access.post(`news-details/${news}`, autAccess)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const newsSlice = createSlice({
    name: 'news',
    initialState: initialData,
    extraReducers: {
        [getNews.pending]: (state) => {
            state.isLoading = true
        },
        [getNews.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.news = payload.news
            state.total_rows = payload.total_rows
            state.total_pages = payload.pages
        },
        [getNews.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
        },
        [getMoreNews.pending]: (state) => {
            state.isLoading = true
        },
        [getMoreNews.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            // array concatenation
            let allNews = state.news.concat(payload.news)
            // unique object
            state.news = [...new Map(allNews.map((item)=>[item["id"], item])).values()]
            state.total_rows = payload.total_rows
            state.total_pages = payload.pages
        },
        [getMoreNews.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
        },
        [fetchNewsBySlug.pending]: (state) => {
            state.isMetaLoading = true
        },
        [fetchNewsBySlug.fulfilled]: (state, {payload}) => {
            state.isMetaLoading = false;
            state.metaInfo = payload;
        },
        [fetchNewsBySlug.rejected]: (state, {payload}) => {
            state.isMetaLoading = false;
            state.message = payload;
        },
    }
})

export default newsSlice.reducer