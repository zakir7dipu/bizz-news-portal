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

export const getNewsUsingPaginate = createAsyncThunk("news/getNewsUsingPaginate", async (data, {rejectWithValue}) => {
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
            state.isLoading = false
            state.news = payload.news
            state.total_rows = payload.total_rows
            state.total_pages = payload.pages
        },
        [getNews.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
        },
        [getNewsUsingPaginate.pending]: (state) => {
            state.isLoading = true
        },
        [getNewsUsingPaginate.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            payload.news.map(item=>state.news = [...state, item])
            state.total_rows = payload.total_rows
            state.total_pages = payload.pages
        },
        [getNewsUsingPaginate.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
        }
    }
})

export default newsSlice.reducer