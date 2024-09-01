import React, { Suspense, useEffect } from "react";
// react-router-dom에서 BrowserRouter, Route, Routes를 가져와서 라우팅을 설정합니다.
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// 네비게이션 바, 테마 토글, 푸터 컴포넌트를 가져옵니다.
import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ToggleTheme";
import Footer from "./components/Footer";
// Toastify를 사용하여 알림 메시지를 표시하기 위한 설정을 가져옵니다.
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// React 컴포넌트를 지연 로딩하기 위해 React.lazy()를 사용합니다.
const HomePage = React.lazy(() => import("./pages/HomePage"));
const PostPage = React.lazy(() => import("./pages/PostPage"));
const NewPostPage = React.lazy(() => import("./pages/NewPostPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));

function App() {
  // 다크 모드 또는 라이트 모드를 로컬 스토리지에서 불러와서 설정합니다.
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.className = savedTheme;
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <div className="flex-grow container mx-auto px-4">
          <ToggleTheme />
          {/* 지연 로딩되는 컴포넌트를 감싸고 로딩 중에는 'Loading...' 메시지를 표시합니다. */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/post/:id" element={<PostPage />} />
              <Route path="/new-post" element={<NewPostPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </Router>
      {/* Toastify 컴포넌트로 알림 메시지를 표시합니다. */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default App;
