import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../library/api.js"

const {access} = new Api()
import {global} from "../../library/config.js"

const {default_token} = global.config

const initialData = {
    isLoadingHeaderLeft: true,
    isLoadingHeaderRight: true,
    headerNewsLeft: [],
    headerNewsRight: [],
    errorMessage: null
}

export const getHeaderLeftNews = createAsyncThunk("headerNews/getHeaderLeftNews", async (arg,{rejectWithValue}) => {
    try {
        const autAccess = {
            token: default_token,
            space: "home-heading-left",
            take: 1
        }
        const res = await access.post("news", autAccess)
        return res.data;
    } catch (e) {
        return rejectWithValue
    }
})

export const getHeaderRightNews = createAsyncThunk("headerNews/getHeaderRightNews", async (arg,{rejectWithValue}) => {
    try {
        const autAccess = {
            token: default_token,
            space: "home-heading-right",
            take: 4
        }
        const res = await access.post("news", autAccess)
        return res.data;
    } catch (e) {
        return rejectWithValue
    }
})


export const headerNewsSlice = createSlice({
    name: "headerNews",
    initialState: initialData,
    extraReducers: {
        [getHeaderLeftNews.pending]: (state) => {
            state.isLoadingHeaderLeft = true
        },
        [getHeaderLeftNews.fulfilled]: (state, {payload}) => {
            state.isLoadingHeaderLeft = false
            state.headerNewsLeft = payload.news
        },
        [getHeaderLeftNews.rejected]: (state, {payload}) => {
            state.isLoadingHeaderLeft = false
            state.errorMessage = payload
        },
        [getHeaderRightNews.pending]: (state) => {
            state.isLoadingHeaderRight = true
        },
        [getHeaderRightNews.fulfilled]: (state, {payload}) => {
            state.isLoadingHeaderRight = false
            state.headerNewsRight = payload.news
        },
        [getHeaderRightNews.rejected]: (state, {payload}) => {
            state.isLoadingHeaderRight = false
            state.errorMessage = payload
        }
    }
})
export default headerNewsSlice.reducer;