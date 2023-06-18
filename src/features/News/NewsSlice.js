import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../library/api.js"

const {access} = new Api()
import {global} from "../../library/config.js"

const {default_token} = global.config

const initialData = {
    isLoading: true,
    news: [],
    total_rows: 0,
    total_pages: 1,
    errorMessage: null
}

export const getNews = createAsyncThunk("news/getNews", async (data, {rejectWithValue}) => {
    try {
        const {paginate, page, categorySlug} = data
        const autAccess = {
            token: default_token,
            category_slug: categorySlug,
            paginate: paginate,
            page: page,
            exclude_space: 'category-highlighted-news'
        }
        const res = await access.post("news", autAccess)
        return res.data;
    } catch (e) {
        return rejectWithValue
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
            console.log(payload)
            state.isLoading = false
            // array concatenation
            let allNews = state.news.concat(payload.news)
            // unique object
            state.news = [...new Map(allNews.map((item)=>[item["id"], item])).values()]
            state.total_rows = payload.total_rows
            state.total_pages = payload.pages
        },
        [getNews.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
        }
    }
})

export default newsSlice.reducer