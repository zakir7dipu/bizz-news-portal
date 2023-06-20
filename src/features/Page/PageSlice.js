import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../library/api.js"
import {global} from "../../library/config.js"

const {access} = new Api()

const {default_token} = global.config

const initialData = {
    isLoading: true,
    pages: [],
    metaInfo: [],
    errorMessage: null
}


export const getAllPages = createAsyncThunk("pages/getAllPages", async (arg, {rejectWithValue}) => {
    try {
        const autAccess = {
            token: default_token
        }
        const res = await access.post("pages", autAccess)
        return res.data;
    } catch (e) {
        return rejectWithValue
    }
})

export const fetchPageBySlug = createAsyncThunk("pages/fetchPageBySlug", async (page, {rejectedWithValue}) => {
    try {
        const autAccess = {
            token: default_token,
        }
        const res = await access.post(`pages/${page}`, autAccess)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const pageSlice = createSlice({
    name: "category",
    initialState: initialData,
    extraReducers: {
        [getAllPages.pending]: (state) => {
            state.isLoading = true
        },
        [getAllPages.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.pages = payload.pages
        },
        [getAllPages.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
        },
        [fetchPageBySlug.pending]: (state) => {
            state.isLoading = true
        },
        [fetchPageBySlug.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload.page;
        },
        [fetchPageBySlug.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
    }
})

export default pageSlice.reducer;