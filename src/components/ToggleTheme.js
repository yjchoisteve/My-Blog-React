import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../slices/themeSlice";

// 테마 전환 버튼 컴포넌트로, 다크 모드와 라이트 모드를 전환할 수 있습니다.
function ToggleTheme() {
  const dispatch = useDispatch(); // Redux 액션을 디스패치할 수 있게 합니다.
  const theme = useSelector((state) => state.theme.theme); // 현재 테마 상태를 가져옵니다.

  return (
    <button onClick={() => dispatch(toggleTheme())} className="px-4 py-2 bg-gray-300 rounded">
      Toggle Theme (Current: {theme})
    </button>
  );
}

export default ToggleTheme;
