import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './newsSlice'
import favReducer from './favSlice'
const store = configureStore({
    reducer:{news:newsReducer,fav:favReducer}
})

export default store;