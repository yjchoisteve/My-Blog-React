import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../slices/commentSlice";

// 댓글 리스트 컴포넌트로, 포스트에 대한 댓글을 관리합니다.
function CommentList({ postId }) {
  const dispatch = useDispatch(); // Redux 액션을 디스패치할 수 있게 합니다.
  const comments = useSelector((state) => state.comments.comments[postId]) || []; // 해당 포스트의 댓글 목록을 가져옵니다.
  const [newComment, setNewComment] = useState(""); // 새 댓글의 텍스트를 관리

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = { id: Date.now(), text: newComment }; // 새 댓글 객체를 생성
      dispatch(addComment({ postId, comment })); // Redux에 새 댓글을 추가
      setNewComment(""); // 댓글 입력 필드를 초기화
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {/* 댓글 목록을 렌더링 */}
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Add a comment" className="w-full p-2 mb-4 border rounded" />
      <button onClick={handleAddComment} className="px-4 py-2 bg-blue-500 text-white rounded">
        Add Comment
      </button>
    </div>
  );
}

export default CommentList;
