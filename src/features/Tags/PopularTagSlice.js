import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../library/api.js"
import {global} from "../../library/config.js"

const {access} = new Api()
const {default_token} = global.config

const initialData = {
    isLoading: true,
    tags: [],
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
        }
    }
})

export default popularTagSlice.reducer;