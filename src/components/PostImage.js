import React from "react";
import LazyLoad from "react-lazyload";

// 포스트 이미지 컴포넌트로, 이미지를 지연 로딩하여 성능을 최적화합니다.
function PostImage({ src, alt }) {
  return (
    <LazyLoad height={200} offset={100}>
      <img src={src} alt={alt} className="w-full h-auto" />
    </LazyLoad>
  );
}

export default PostImage;
