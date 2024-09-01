import React from "react";

// 하단 푸터 컴포넌트로, 사이트의 저작권 정보와 소셜 링크를 표시합니다.
function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      {/* 사이트 저작권 정보 */}
      <p>&copy; 2024 My Blog. All rights reserved.</p>
      <div className="mt-2">
        {/* 이메일 링크로, 클릭 시 사용자의 기본 메일 클라이언트가 열립니다. */}
        <a href="mailto:test@test.com" className="text-blue-400 hover:underline">
          Contact Us
        </a>
        <div className="flex justify-center mt-2 space-x-4">
          {/* 소셜 미디어 링크들 */}
          <a href="https://twitter.com/test" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            Twitter
          </a>
          <a href="https://facebook.com/test" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            Facebook
          </a>
          <a href="https://linkedin.com/in/test" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
