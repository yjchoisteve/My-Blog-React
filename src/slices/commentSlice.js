import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: {}, // 포스트 ID별로 댓글을 저장
};

// 댓글 관련 상태와 리듀서를 관리하는 슬라이스
const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    // 댓글 추가 액션
    addComment: (state, action) => {
      const { postId, comment } = action.payload;
      if (!state.comments[postId]) {
        state.comments[postId] = []; // 해당 포스트에 대한 댓글 배열을 초기화
      }
      state.comments[postId].push(comment); // 새로운 댓글을 추가
    },
    // 댓글 삭제 액션
    deleteComment: (state, action) => {
      const { postId, commentId } = action.payload;
      state.comments[postId] = state.comments[postId].filter((comment) => comment.id !== commentId);
    },
  },
});

export const { addComment, deleteComment } = commentSlice.actions;
export default commentSlice.reducer;
