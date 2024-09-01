import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light", // 기본 테마는 라이트 모드로 설정
};

// 테마(다크 모드/라이트 모드) 관련 상태와 리듀서를 관리하는 슬라이스
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // 테마를 토글하는 액션
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light"; // 현재 테마를 반전시킴
      localStorage.setItem("theme", state.theme); // 로컬 스토리지에 저장하여 상태를 유지
      document.body.className = state.theme; // 바디 클래스에 테마를 적용
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
