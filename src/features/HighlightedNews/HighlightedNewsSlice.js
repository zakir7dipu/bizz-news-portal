import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../library/api.js"

const {access} = new Api()
import {global} from "../../library/config.js"
const {default_token} = global.config


const initialData = {
    isLoading: true,
    highlighted: [],
    news: [],
    errorMessage: null
}

export const getHighlightedNews = createAsyncThunk("highlightedNews/getHighlightedNews", async (data, {rejectWithValue}) => {
    try {
        const {slug} = data
        const autAccess = {
            token: default_token,
            space: "category-highlighted-news",
            category_slug: slug,
            take:1
        }
        const res = await access.post("news", autAccess)
        return res.data;
    } catch (e) {
        return rejectWithValue
    }
})

export const getNews = createAsyncThunk("highlightedNews/getNews", async (data, {rejectWithValue}) => {
    try {
        const {slug} = data
        const autAccess = {
            token: default_token,
            space: "category-highlighted-news",
            category_slug: slug,
            skip: 1,
            take: 2
        }
        const res = await access.post("news", autAccess)
        return res.data;
    } catch (e) {
        return rejectWithValue
    }
})

export const highlightedNewsSlice = createSlice({
    name: 'highlightedNews',
    initialState: initialData,
    extraReducers: {
        [getHighlightedNews.pending]: (state) => {
            state.isLoading = true
        },
        [getHighlightedNews.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.highlighted = payload.news[0]
        },
        [getHighlightedNews.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
        },
        [getNews.pending]: (state) => {
            state.isLoading = true
        },
        [getNews.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.news = payload.news
        },
        [getNews.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
        },
    }
})

export default highlightedNewsSlice.reducer