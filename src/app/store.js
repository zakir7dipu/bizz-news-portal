import {configureStore} from "@reduxjs/toolkit";
import MenuReducer from "../features/MeanuBar/MenuSlice.js";
import CategoryReducer from "../features/Category/CategorySlice.js";
import BreakingNewsReducer from "../features/BreakingNews/BreakingNewsSlice.js";
import HeaderNewsReducer from "../features/HeaderNews/HeaderNewsSlice.js";
import TrendyNewsReducer from "../features/TrendyNews/TrendyNewsSlice.js";
import PopularNewsReducer from "../features/PopularNews/PopularNewsSlice.js";
import PriceSensitiveInformationReducer from "../features/PriceSensitiveInformation/PriceSensitiveInformationSlice.js";
import HighlightedNewsReducer from "../features/HighlightedNews/HighlightedNewsSlice.js";
import NewsReducer from "../features/News/NewsSlice.js";

const store = configureStore({
    reducer: {
        menubar: MenuReducer,
        category: CategoryReducer,
        breakingNews: BreakingNewsReducer,
        headerNews: HeaderNewsReducer,
        trendyNews: TrendyNewsReducer,
        popularNews: PopularNewsReducer,
        PriceSensitiveInformation: PriceSensitiveInformationReducer,
        highlightedNews: HighlightedNewsReducer,
        allNews: NewsReducer
    }
})

export default store;