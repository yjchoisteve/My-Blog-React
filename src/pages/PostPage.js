import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CommentList from "../components/CommentList";
import SocialShare from "../components/SocialShare";
import { addFavorite, removeFavorite } from "../slices/favoritesSlice";

// 개별 포스트 페이지 컴포넌트로, 특정 포스트의 내용을 표시합니다.
function PostPage() {
  const { id } = useParams(); // URL 파라미터에서 포스트 ID를 가져옴
  const post = useSelector((state) => state.posts.posts.find((p) => p.id === parseInt(id))); // 포스트 목록에서 해당 포스트를 찾음
  const favorites = useSelector((state) => state.favorites.favorites); // 즐겨찾기 목록을 가져옴
  const dispatch = useDispatch();

  // 해당 포스트가 즐겨찾기 목록에 있는지 확인
  const isFavorite = favorites.some((fav) => fav.id === post?.id);

  // 즐겨찾기 토글 버튼 클릭 시 호출되는 함수
  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(post.id)); // 즐겨찾기에서 제거
    } else {
      dispatch(addFavorite(post)); // 즐겨찾기에 추가
    }
  };

  if (!post) return <div>Post not found</div>; // 포스트가 존재하지 않을 때

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.content}</p>
      <button onClick={handleToggleFavorite} className={`px-4 py-2 mt-4 ${isFavorite ? "bg-red-500" : "bg-green-500"} text-white rounded`}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      {/* 소셜 미디어에 포스트를 공유할 수 있는 버튼 */}
      <SocialShare url={window.location.href} title={post.title} />
      {/* 댓글 목록을 표시 */}
      <CommentList postId={id} />
    </div>
  );
}

export default PostPage;
