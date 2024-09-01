import React from "react";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";

// 소셜 미디어에 포스트를 공유할 수 있는 컴포넌트입니다.
function SocialShare({ url, title }) {
  return (
    <div className="flex space-x-2 mt-4">
      <FacebookShareButton url={url} quote={title}>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Share on Facebook</button>
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <button className="bg-blue-400 text-white px-4 py-2 rounded">Share on Twitter</button>
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title}>
        <button className="bg-blue-700 text-white px-4 py-2 rounded">Share on LinkedIn</button>
      </LinkedinShareButton>
    </div>
  );
}

export default SocialShare;
