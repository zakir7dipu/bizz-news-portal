import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../library/api.js"

const {access} = new Api()
import {global} from "../../library/config.js"
const {default_token} = global.config

const initialData = {
    isLoading: true,
    psts: [],
    errorMessage: null
}

export const getPriceSensitiveInformation = createAsyncThunk("priceSensitiveInformation/getPriceSensitiveInformation", async (arg, {rejectWithValue})=>{
    try {
        const autAccess = {
            token: default_token,
        }
        const res = await access.post("price-sensitive-information", autAccess)
        return res.data;
    } catch (e) {
        return rejectWithValue
    }
})

export const priceSensitiveInformationSlice = createSlice({
    name: 'priceSensitiveInformation',
    initialState: initialData,
    extraReducers:{
        [getPriceSensitiveInformation.rejected]: (state) => {
            state.isLoading = true
        },
        [getPriceSensitiveInformation.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.psts = payload.price_sensitive_information
        },
        [getPriceSensitiveInformation.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
        }
    }
})

export default priceSensitiveInformationSlice.reducer;