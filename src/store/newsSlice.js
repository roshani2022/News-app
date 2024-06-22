import { createSlice } from "@reduxjs/toolkit";

const initialNewsState = {
  articles: [],
  loading: false,
  totalPages: 1,
  error: null,
  page: 1,
  category: null,
  searchArticle: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState: initialNewsState,
  reducers: {
    fetchNewsStart(state) {
      state.loading = true;
    },
    fetchNewsSuccess(state, action) {
      state.loading = false;
      state.articles = action.payload;
      state.totalPages = Math.ceil(action.payload.totalResults / 9);
    },
    fetchNewsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
      state.page = 1;
    },
    setSearchArticle(state, action) {
      state.searchArticle = action.payload;
      state.page = 1;
    },
  },
});

export const newsAction = newsSlice.actions;
export default newsSlice.reducer;
