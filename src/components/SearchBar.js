import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPostsByKeyword } from "../slices/postSlice";

// 검색 바 컴포넌트로, 포스트 목록에서 키워드로 검색할 수 있게 합니다.
function SearchBar() {
  const [keyword, setKeyword] = useState(""); // 검색 키워드를 관리
  const dispatch = useDispatch();

  const handleSearch = () => {
    // 검색 키워드를 Redux 상태에 전달하여 포스트 목록을 필터링합니다.
    dispatch(filterPostsByKeyword(keyword));
  };

  return (
    <div className="mb-4 flex items-center">
      <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search posts" className="p-2 border rounded w-full" />
      <button onClick={handleSearch} className="px-4 py-2 ml-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
