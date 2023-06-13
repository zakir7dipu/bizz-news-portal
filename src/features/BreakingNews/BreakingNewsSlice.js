import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../library/api.js"

const {access} = new Api()
import {global} from "../../library/config.js"
const {default_token} = global.config

const initialData = {
    isLoading: true,
    breakingNews: [],
    errorMessage: null
}

export const getAllBreakingNew = createAsyncThunk("breakingNews/getAllBreakingNew", async (arg,{rejectWithValue}) => {
    try {
        const autAccess = {
            token: default_token,
            space: 'breaking-news'
        }
        const res = await access.post("news", autAccess)
        return res.data;
    } catch (e) {
        return rejectWithValue
    }
})

export const breakingNewsSlice = createSlice({
    name: "breakingNews",
    initialState: initialData,
    reducers: {
        showAllBreakingNews: (sate) => sate,
        showSingleBreakingNews: (state, {payload})=> state.breakingNews.filter(brn=>brn.slug === payload),
    },
    extraReducers: {
        [getAllBreakingNew.pending]: (state) => {
            state.isLoading = true
        },
        [getAllBreakingNew.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.breakingNews = payload.news
        },
        [getAllBreakingNew.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.breakingNews = payload
        }
    }
})
export const {showAllBreakingNews, showSingleBreakingNews} = breakingNewsSlice.actions
export default breakingNewsSlice.reducer;