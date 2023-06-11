import {configureStore} from "@reduxjs/toolkit";
import MenuReducer from "../features/MeanuBar/MenuSlice.js";

const store = configureStore({
    reducer: {
        menubar: MenuReducer
    }
})

export default store;