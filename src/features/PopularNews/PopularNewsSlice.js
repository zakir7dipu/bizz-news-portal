import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../library/api.js"

const {access} = new Api()
import {global} from "../../library/config.js"
const {default_token} = global.config

const initialData = {
    isLoading: true,
    news: [],
    errorMessage: null
}

export const getPopularNews = createAsyncThunk("popularNews/getPopularNews", async (data,{rejectWithValue})=> {
    try {
        const {category} = data
        const autAccess = {
            token: default_token,
            space: 'popular-posts',
            category_slug: category,
            take: 5
        }
        const res = await access.post("news", autAccess)
        return res.data;
    } catch (err) {
        return rejectWithValue
    }
})

export const popularNewsSlice = createSlice({
    name: "popularNews",
    initialState: initialData,
    extraReducers: {
        [getPopularNews.pending]: (state) => {
            state.isLoading = true
        },
        [getPopularNews.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.news = payload.news
        },
        [getPopularNews.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
        }
    }
})

export default popularNewsSlice.reducer;