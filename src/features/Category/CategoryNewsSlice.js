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

export const getAllCategoryNewsBDForHomePage = createAsyncThunk("categoryNews/getAllCategoryNewsBDForHomePage", async (data, {rejectWithValue}) => {
    try {
        const autAccess = {
            token: default_token,
            category_slug: data,
            take: 1,
        }
        const res = await access.post("news", autAccess)
        return res.data;
    } catch (e) {
        return rejectWithValue
    }
})

export const categoryNewsSlice = createSlice({
    name: "categoryNews",
    initialState: initialData,
    extraReducers: {
        [getAllCategoryNewsBDForHomePage.pending]: (state) => {
            state.isLoading = true
        },
        [getAllCategoryNewsBDForHomePage.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.news = payload.news[0]
        },
        [getAllCategoryNewsBDForHomePage.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
        }
    }
})

export default categoryNewsSlice.reducer