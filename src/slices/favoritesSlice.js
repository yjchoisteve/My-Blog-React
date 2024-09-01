import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [], // 즐겨찾기 목록을 저장
};

// 즐겨찾기 관련 상태와 리듀서를 관리하는 슬라이스
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    // 즐겨찾기 추가 액션
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    // 즐겨찾기 제거 액션
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
