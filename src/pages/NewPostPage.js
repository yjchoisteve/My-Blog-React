import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../slices/postSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// 새 포스트 작성 페이지 컴포넌트로, 모달 창으로 표시됩니다.
function NewPostPage({ onClose }) {
  const [title, setTitle] = useState(""); // 포스트 제목을 관리
  const [content, setContent] = useState(""); // 포스트 내용을 관리
  const [category, setCategory] = useState(""); // 포스트 카테고리를 관리
  const categories = useSelector((state) => state.posts.categories); // 카테고리 목록을 가져옴
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 새 포스트를 추가하는 함수
  const handleCreatePost = () => {
    const newPost = {
      id: Date.now(), // 포스트의 고유 ID
      title,
      content,
      category,
    };
    dispatch(addPost(newPost)); // Redux 상태에 포스트 추가
    toast.success("Post created successfully!"); // 성공 메시지를 표시
    navigate("/"); // 홈 페이지로 이동
    onClose(); // 모달 창을 닫음
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 dark:text-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl mb-4">Create New Post</h1>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 mb-4 border rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="w-full p-2 mb-4 border rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 mb-4 border rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded">
            Cancel
          </button>
          <button onClick={handleCreatePost} className="px-4 py-2 bg-blue-500 text-white rounded">
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewPostPage;
