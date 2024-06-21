import { createSlice } from "@reduxjs/toolkit";

const initialFavState = {
    favList: JSON.parse(localStorage.getItem('favList')) || []
}

const favSlice = createSlice({
    name: "fav",
    initialState: initialFavState,
    reducers: {
        addNews(state, action) {
            state.favList.push(action.payload);
            localStorage.setItem('favList', JSON.stringify(state.favList));
        },
        removeNews(state, action) {
            state.favList = state.favList.filter(article => article.title !== action.payload.title);
            localStorage.setItem('favList', JSON.stringify(state.favList));
        },
        initializeFavorites(state) {
            const savedFavorites = JSON.parse(localStorage.getItem('favList')) || [];
            state.favList = savedFavorites;
        }
    }
})

export const favActions = favSlice.actions;
export default favSlice.reducer;
