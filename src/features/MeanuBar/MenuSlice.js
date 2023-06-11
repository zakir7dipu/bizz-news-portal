import {createSlice} from "@reduxjs/toolkit";

const initialData = {
    extraInfo: false,
    searchModel: false,
}

export const menuBarSlice = createSlice({
    name:"MenuBar",
    initialState: initialData,
    reducers: {
        extraInfoAction: (state, {payload})=>{
            state.extraInfo = payload
        },
        searchModelAction:(state, {payload})=>{
            state.searchModel = payload
        }
    }
});

export const {extraInfoAction, searchModelAction} = menuBarSlice.actions;
export default menuBarSlice.reducer;