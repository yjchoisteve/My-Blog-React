import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [], // 포스트 목록을 저장
  filteredPosts: [], // 필터링된 포스트 목록을 저장
  categories: ["Technology", "Health", "Lifestyle"], // 기본 카테고리 목록
};

// 포스트 관련 상태와 리듀서를 관리하는 슬라이스
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // 포스트 추가 액션
    addPost: (state, action) => {
      state.posts.push(action.payload);
      state.filteredPosts = state.posts; // 필터링된 목록을 업데이트
    },
    // 포스트 삭제 액션
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      state.filteredPosts = state.posts; // 필터링된 목록을 업데이트
    },
    // 키워드에 따른 포스트 필터링 액션
    filterPostsByKeyword: (state, action) => {
      const keyword = action.payload.toLowerCase();
      state.filteredPosts = state.posts.filter((post) => post.title.toLowerCase().includes(keyword) || post.content.toLowerCase().includes(keyword));
    },
  },
});

export const { addPost, deletePost, filterPostsByKeyword } = postSlice.actions;
export default postSlice.reducer;
