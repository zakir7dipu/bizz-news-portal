import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../library/api.js"
import {global} from "../../library/config.js"

const {access} = new Api();
const {default_token} = global.config;

const initialData = {
    isLoading: true,
    advertisements: [],
    metaAd1: [],
    metaAd2: [],
    metaAd3: [],
    metaAd4: [],
    metaAd5: [],
    metaAd6: [],
    errorMessage: null
}

export const getAllAdvertisement = createAsyncThunk("advertisements/getAllAdvertisement", async (arg, {rejectWithValue}) => {
    try {
        const autAccess = {
            token: default_token
        }
        const res = await access.post("advertisements", autAccess)
        return res.data;
    } catch (e) {
        return rejectWithValue
    }
})

export const fetchAdBySlug1 = createAsyncThunk("advertisements/fetchAdBySlug1", async (space, {rejectedWithValue}) => {
    try {
        const autAccess = {
            token: default_token,
            space: space,
            take: 1,
        }
        const res = await access.post(`advertisements`, autAccess)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const fetchAdBySlug2 = createAsyncThunk("advertisements/fetchAdBySlug2", async (space, {rejectedWithValue}) => {
    try {
        const autAccess = {
            token: default_token,
            space: space,
            take: 1,
        }
        const res = await access.post(`advertisements`, autAccess)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const fetchAdBySlug3 = createAsyncThunk("advertisements/fetchAdBySlug3", async (space, {rejectedWithValue}) => {
    try {
        const autAccess = {
            token: default_token,
            space: space,
            take: 1,
        }
        const res = await access.post(`advertisements`, autAccess)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const fetchAdBySlug4 = createAsyncThunk("advertisements/fetchAdBySlug4", async (space, {rejectedWithValue}) => {
    try {
        const autAccess = {
            token: default_token,
            space: space,
            take: 1,
        }
        const res = await access.post(`advertisements`, autAccess)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const fetchAdBySlug5 = createAsyncThunk("advertisements/fetchAdBySlug5", async (space, {rejectedWithValue}) => {
    try {
        const autAccess = {
            token: default_token,
            space: space,
            take: 1,
        }
        const res = await access.post(`advertisements`, autAccess)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const fetchAdBySlug6 = createAsyncThunk("advertisements/fetchAdBySlug6", async (space, {rejectedWithValue}) => {
    try {
        const autAccess = {
            token: default_token,
            space: space,
            take: 1,
        }
        const res = await access.post(`advertisements`, autAccess)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})


export const advertisementSlice = createSlice({
    name: "advertisements",
    initialState: initialData,
    extraReducers: {
        [getAllAdvertisement.pending]: (state) => {
            state.isLoading = true
        },
        [getAllAdvertisement.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.advertisements = payload.advertisements
        },
        [getAllAdvertisement.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
        },
        [fetchAdBySlug1.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAdBySlug1.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaAd1 = payload.advertisements[0];
        },
        [fetchAdBySlug1.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [fetchAdBySlug2.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAdBySlug2.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaAd2 = payload.advertisements[0];
        },
        [fetchAdBySlug2.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [fetchAdBySlug3.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAdBySlug3.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaAd3 = payload.advertisements[0];
        },
        [fetchAdBySlug3.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [fetchAdBySlug4.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAdBySlug4.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaAd4 = payload.advertisements[0];
        },
        [fetchAdBySlug4.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [fetchAdBySlug5.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAdBySlug5.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaAd5 = payload.advertisements[0];
        },
        [fetchAdBySlug5.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [fetchAdBySlug6.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAdBySlug6.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaAd6 = payload.advertisements[0];
        },
        [fetchAdBySlug6.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
    }
})

export default advertisementSlice.reducer;