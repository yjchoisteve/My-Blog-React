import { configureStore } from "@reduxjs/toolkit";
// Redux 슬라이스(리듀서)들을 가져옵니다.
import postReducer from "./slices/postSlice";
import commentReducer from "./slices/commentSlice";
import themeReducer from "./slices/themeSlice";
import favoritesReducer from "./slices/favoritesSlice";

// Redux 스토어를 설정합니다.
const store = configureStore({
  reducer: {
    // 포스트와 관련된 상태를 관리하는 리듀서입니다.
    posts: postReducer,
    // 댓글과 관련된 상태를 관리하는 리듀서입니다.
    comments: commentReducer,
    // 테마(다크 모드, 라이트 모드) 상태를 관리하는 리듀서입니다.
    theme: themeReducer,
    // 즐겨찾기와 관련된 상태를 관리하는 리듀서입니다.
    favorites: favoritesReducer,
  },
});

export default store;
