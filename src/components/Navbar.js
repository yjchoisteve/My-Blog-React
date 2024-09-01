import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewPostPage from "../pages/NewPostPage";

// 네비게이션 바 컴포넌트로, 상단의 주요 메뉴를 관리합니다.
function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달창의 상태를 관리

  return (
    <div>
      <nav className="bg-blue-500 p-4 text-white flex justify-between">
        <div className="flex gap-4">
          {/* 홈으로 이동하는 링크 */}
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          {/* 새 포스트 작성 모달창을 여는 버튼 */}
          <button onClick={() => setIsModalOpen(true)} className="hover:text-gray-200">
            Create Post
          </button>
          {/* About 페이지로 이동하는 링크 */}
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>
        </div>
      </nav>
      {/* 모달창이 열렸을 때 NewPostPage 컴포넌트를 렌더링 */}
      {isModalOpen && <NewPostPage onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default Navbar;
