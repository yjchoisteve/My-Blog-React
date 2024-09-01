import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Firebase 설정 객체로, Firebase 프로젝트의 정보를 포함합니다.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Firebase 앱이 초기화되지 않은 경우 초기화합니다.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Firebase 인증 서비스를 가져옵니다.
export const auth = firebase.auth();
// Firebase Firestore 데이터베이스 서비스를 가져옵니다.
export const db = firebase.firestore();
export default firebase;
