import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../library/api.js"
import {global} from "../../library/config.js"

const {access} = new Api()
const {default_token} = global.config

const initialData = {
    isLoading: true,
    tags: [],
    metaTagInfo: [],
    errorMessage: null
}

export const getPopularTags = createAsyncThunk("popularTags/getPopularTags", async (args, {rejectWithValue}) => {
    try {

        const autAccess = {
            token: default_token,
        }
        const res = await access.post("tags", autAccess)
        return res.data;
    } catch (err) {
        return rejectWithValue
    }
})

export const fetchTagBySlug = createAsyncThunk("popularTags/fetchTagBySlug", async (slug, {rejectedWithValue}) => {
    try {
        const autAccess = {
            token: default_token,
            slug: slug,
        }
        const res = await access.post("tags", autAccess)
        return res.data;
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const popularTagSlice = createSlice({
    name: "popularTags",
    initialState: initialData,
    extraReducers: {
        [getPopularTags.pending]: (state) => {
            state.isLoading = true
        },
        [getPopularTags.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.tags = payload.tags
        },
        [getPopularTags.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
        },
        [fetchTagBySlug.pending]: (state) => {
            state.isLoading = true
        },
        [fetchTagBySlug.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaTagInfo = payload.tags;
        },
        [fetchTagBySlug.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
    }
})

export default popularTagSlice.reducer;