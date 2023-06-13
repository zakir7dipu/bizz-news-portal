import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../library/api.js"

const {access} = new Api()
import {global} from "../../library/config.js"

const {default_token} = global.config

const initialData = {
    isLoadingTrendyLeft: true,
    trendyLeft: [],
    isLoadingTrendyMiddleBg: true,
    trendyMiddleBg: [],
    isLoadingTrendyMiddleSm: true,
    trendyMiddleSm: [],
    isLoadingTrendyRight: true,
    trendyRight: [],
    isLoadingTrendyBottom: true,
    trendyBottom: [],
    errorMessage: null
}

export const getAllTrendyNewsLeft = createAsyncThunk("trendyNews/getAllTrendyNewsLeft", async (arg, {rejectWithValue}) => {
    try {
        const autAccess = {
            token: default_token,
            space: "trendy-news-left",
            take: 3
        }
        const res = await access.post("news", autAccess)
        return res.data;
    } catch (e) {
        return rejectWithValue
    }
})

export const getAllTrendyNewsMiddleBg = createAsyncThunk("trendyNews/getAllTrendyNewsMiddleBg", async (arg, {rejectWithValue}) => {
    try {
        const autAccess = {
            token: default_token,
            space: "trendy-news-middle-left",
            take: 2
        }
        const res = await access.post("news", autAccess)
        return res.data;
    } catch (e) {
        return rejectWithValue
    }
})

export const getAllTrendyNewsMiddleSm = createAsyncThunk("trendyNews/getAllTrendyNewsMiddleSm", async (arg, {rejectWithValue}) => {
    try {
        const autAccess = {
            token: default_token,
            space: "trendy-news-middle-right",
            take: 3
        }
        const res = await access.post("news", autAccess)
        return res.data;
    } catch (e) {
        return rejectWithValue
    }
})

export const getAllTrendyNewsRight = createAsyncThunk("trendyNews/getAllTrendyNewsRight", async (arg, {rejectWithValue}) => {
    try {
        const autAccess = {
            token: default_token,
            space: "trendy-news-right",
            take: 2
        }
        const res = await access.post("news", autAccess)
        return res.data;
    } catch (e) {
        return rejectWithValue
    }
})

export const getAllTrendyNewsBottom = createAsyncThunk("trendyNews/getAllTrendyNewsBottom", async (arg, {rejectWithValue}) => {
    try {
        const autAccess = {
            token: default_token,
            space: "trendy-news-bottom",
            take: 8
        }
        const res = await access.post("news", autAccess)
        return res.data;
    } catch (e) {
        return rejectWithValue
    }
})

export const trendySlice = createSlice({
    name: "trendyNews",
    initialState: initialData,
    extraReducers: {
        [getAllTrendyNewsLeft.pending]: (state) => {
            state.isLoadingTrendyLeft = true
        },
        [getAllTrendyNewsLeft.fulfilled]: (state, {payload}) => {
            state.isLoadingTrendyLeft = false
            state.trendyLeft = payload.news
        },
        [getAllTrendyNewsLeft.rejected]: (state, {payload}) => {
            state.isLoadingTrendyLeft = false
            state.errorMessage = payload
        },
        [getAllTrendyNewsMiddleBg.pending]: (state) => {
            state.isLoadingTrendyMiddleBg = true
        },
        [getAllTrendyNewsMiddleBg.fulfilled]: (state, {payload}) => {
            state.isLoadingTrendyMiddleBg = false
            state.trendyMiddleBg = payload.news
        },
        [getAllTrendyNewsMiddleBg.rejected]: (state, {payload}) => {
            state.isLoadingTrendyMiddleBg = false
            state.errorMessage = payload
        },
        [getAllTrendyNewsMiddleSm.pending]: (state) => {
            state.isLoadingTrendyMiddleSm = true
        },
        [getAllTrendyNewsMiddleSm.fulfilled]: (state, {payload}) => {
            state.isLoadingTrendyMiddleSm = false
            state.trendyMiddleSm = payload.news
        },
        [getAllTrendyNewsMiddleSm.rejected]: (state, {payload}) => {
            state.isLoadingTrendyMiddleSm = false
            state.errorMessage = payload
        },
        [getAllTrendyNewsRight.pending]: (state) => {
            state.isLoadingTrendyRight = true
        },
        [getAllTrendyNewsRight.fulfilled]: (state, {payload}) => {
            state.isLoadingTrendyRight = false
            state.trendyRight = payload.news
        },
        [getAllTrendyNewsRight.rejected]: (state, {payload}) => {
            state.isLoadingTrendyRight = false
            state.errorMessage = payload
        },
        [getAllTrendyNewsBottom.pending]: (state) => {
            state.isLoadingTrendyBottom = true
        },
        [getAllTrendyNewsBottom.fulfilled]: (state, {payload}) => {
            state.isLoadingTrendyBottom = false
            state.trendyBottom = payload.news
        },
        [getAllTrendyNewsBottom.rejected]: (state, {payload}) => {
            state.isLoadingTrendyBottom = false
            state.errorMessage = payload
        }
    }
});

export default trendySlice.reducer