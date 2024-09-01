import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

const POSTS_PER_PAGE = 5; // 페이지당 포스트 수를 정의

// 포스트 리스트 컴포넌트로, 포스트 목록을 페이징 처리하여 렌더링합니다.
function PostList() {
  const posts = useSelector((state) => state.posts.filteredPosts); // 필터링된 포스트 목록을 가져옴
  const categories = useSelector((state) => state.posts.categories); // 카테고리 목록을 가져옴
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지를 관리
  const [selectedCategory, setSelectedCategory] = useState(""); // 선택된 카테고리를 관리

  // 선택된 카테고리에 따라 포스트를 필터링
  const filteredPosts = selectedCategory ? posts.filter((post) => post.category === selectedCategory) : posts;

  // 현재 페이지에 표시할 포스트를 계산
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // 전체 페이지 수를 계산
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  return (
    <div className="p-4">
      {/* 검색 바와 카테고리 필터를 표시 */}
      <SearchBar />
      <div className="mb-4">
        <label className="mr-2">Filter by Category:</label>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="p-2 border rounded">
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      {/* 포스트 목록을 그리드로 표시 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentPosts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* 개별 포스트로 이동하는 링크 */}
            <Link to={`/post/${post.id}`}>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            </Link>
            <p>{post.content.substring(0, 100)}...</p>
            <p className="text-sm text-gray-500">{post.category}</p>
          </motion.div>
        ))}
      </div>
      {/* 페이징 버튼을 표시 */}
      <div className="col-span-full flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)} className={`px-4 py-2 rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PostList;
