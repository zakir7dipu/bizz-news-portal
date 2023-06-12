import {configureStore} from "@reduxjs/toolkit";
import MenuReducer from "../features/MeanuBar/MenuSlice.js";
import CategoryReducer from "../features/Category/CategorySlice.js";
import BreakingNewsReducer from "../features/BreakingNews/BreakingNewsSlice.js";
import HeaderNewsReducer from "../features/HeaderNews/HeaderNewsSlice.js";

const store = configureStore({
    reducer: {
        menubar: MenuReducer,
        category: CategoryReducer,
        breakingNews: BreakingNewsReducer,
        headerNews: HeaderNewsReducer
    }
})

export default store;