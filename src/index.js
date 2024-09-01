// React 라이브러리에서 React 객체를 가져옵니다.
import React from "react";
// ReactDOM 라이브러리에서 ReactDOM 객체를 가져와서 DOM에 컴포넌트를 렌더링합니다.
import ReactDOM from "react-dom";
// Redux 스토어를 전역적으로 사용할 수 있도록 Provider 컴포넌트를 가져옵니다.
import { Provider } from "react-redux";
// 애플리케이션의 최상위 컴포넌트를 가져옵니다.
import App from "./App";
// Redux 스토어를 가져와서 애플리케이션에 전달합니다.
import store from "./store";
// Tailwind CSS와 사용자 정의 스타일을 가져옵니다.
import "./styles/tailwind.css";
import "./styles/styles.css";

// 서비스 워커를 사용하여 오프라인 기능을 제공하고 PWA를 지원합니다.
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registration) => {
      // 서비스 워커가 성공적으로 등록되었을 때의 처리
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch((error) => {
      // 서비스 워커 등록에 실패했을 때의 처리
      console.error("Service Worker registration failed:", error);
    });
}

// ReactDOM.render()를 사용하여 최상위 컴포넌트인 App을 루트 DOM 요소에 렌더링합니다.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
