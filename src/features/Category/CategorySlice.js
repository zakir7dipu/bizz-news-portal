import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../library/api.js"

const {access} = new Api()
import {global} from "../../library/config.js"

const {default_token} = global.config

const initialData = {
    isLoading: true,
    categories: [],
    showHomeCategories: [],
    singleCategory: [],
    errorMessage: null
}

export const getAllCategories = createAsyncThunk("category/getAllCategories", async (arg, {rejectWithValue}) => {
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
        showSingleCategory: (state, {payload}) => {
            console.log(state)
            let category = state.categories.filter(cat => {
                // cat.slug == payload
                console.log(cat)
            })

            // state.singleCategory = category[0]
        }
    },
    extraReducers: {
        [getAllCategories.pending]: (state) => {
            state.isLoading = true
        },
        [getAllCategories.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.categories = payload.categories
            state.showHomeCategories = payload.categories.filter(cat => cat.home_page === 1)
        },
        [getAllCategories.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
        }
    }
})
export const {showAllCategories, showSingleCategory} = categorySlice.actions
export default categorySlice.reducer;