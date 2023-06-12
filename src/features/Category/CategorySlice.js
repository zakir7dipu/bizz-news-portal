import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../library/api.js"

const {access} = new Api()
import {global} from "../../library/config.js"

const {default_token} = global.config

const initialData = {
    isLoading: true,
    categories: [],
    errorMessage: null
}

export const getAllCategories = createAsyncThunk("category/getAllCategories", async (arg,{rejectWithValue}) => {
    try {
        const autAccess = {
            token: default_token
        }
        const res = await access.post("categories", autAccess)
        return res.data;
    } catch (e) {
        return rejectWithValue
    }
})


export const categorySlice = createSlice({
    name: "category",
    initialState: initialData,
    reducers: {
        showAllCategories: (sate) => sate,
        showSingleCategory: (state, {payload})=> state.categories.filter(cat=>cat.slug === payload)
    },
    extraReducers: {
        [getAllCategories.pending]: (state) => {
            state.isLoading = true
        },
        [getAllCategories.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.categories = payload.categories
        },
        [getAllCategories.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
        }
    }
})
export const {showAllCategories, showSingleCategory} = categorySlice.actions
export default categorySlice.reducer;