import React from "react";
import PostList from "../components/PostList";

// 홈 페이지 컴포넌트로, 블로그의 포스트 목록을 표시합니다.
function HomePage() {
  return (
    <div>
      {/* 페이지 상단의 환영 메시지 */}
      <div className="bg-blue-500 text-white p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-xl">Sharing my thoughts and ideas with the world</p>
      </div>
      {/* 포스트 목록을 표시 */}
      <div className="mt-6">
        <PostList />
      </div>
    </div>
  );
}

export default HomePage;
