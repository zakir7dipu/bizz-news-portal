import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../library/api.js"

const {access} = new Api()
import {global} from "../../library/config.js"

const {default_token} = global.config

const initialData = {
    systemInfoIsLoading: true,
    systemInfo: [],
    systemInfoErrorMessage: null
}

export const getSystemInfo = createAsyncThunk("systemInfo/getSystemInfo", async (arg, {rejectWithValue}) => {
    try {
        const autAccess = {
            token: default_token,
        }
        const res = await access.post("system-information", autAccess)
        return res.data;
    } catch (e) {
        return rejectWithValue
    }
})

export const systemInfoSlice = createSlice({
    name: 'systemInfo',
    initialState: initialData,
    reducers: {
        getData: (state)=>state
    },
    extraReducers: {
        [getSystemInfo.pending]: (state) => {
            state.systemInfoIsLoading = true
        },
        [getSystemInfo.fulfilled]: (state, {payload}) => {
            state.systemInfoIsLoading = false
            state.systemInfo = payload.system_information
        },
        [getSystemInfo.rejected]: (state, {payload}) => {
            state.systemInfoIsLoading = false
            state.systemInfoErrorMessage = payload
        }
    }
})
export const {getData} = systemInfoSlice.actions
export default systemInfoSlice.reducer