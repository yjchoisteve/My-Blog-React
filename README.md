# My Blog

## 프로젝트 개요

이 프로젝트는 React를 사용하여 구축된 개인 블로그 애플리케이션이다. 이 블로그에서는 포스트 작성, 댓글 작성, 다크 모드와 라이트 모드 전환, 그리고 소셜 미디어 공유와 같은 다양한 기능을 제공한다. Redux를 사용한 전역 상태 관리, Firebase를 통한 사용자 인증 및 데이터베이스 관리, Tailwind CSS를 사용한 스타일링 등이 포함되어 있다.

## 디렉토리 구조

```
my-blog/
│
├── public/
│   ├── index.html               # 기본 HTML 템플릿이다.
│   ├── favicon.ico              # 사이트 아이콘이다.
│   ├── service-worker.js        # PWA 지원을 위한 서비스 워커 파일이다.
│
├── src/
│   ├── assets/
│   │   └── images/              # 프로젝트에서 사용하는 이미지 파일들이다.
│   │
│   ├── components/              # UI 컴포넌트 모음이다.
│   │   ├── Footer.js            # 하단 푸터 컴포넌트이다.
│   │   ├── Navbar.js            # 상단 네비게이션 바 컴포넌트이다.
│   │   ├── PostImage.js         # 포스트 이미지 렌더링 컴포넌트이다.
│   │   ├── PostList.js          # 포스트 리스트 컴포넌트이다.
│   │   ├── SearchBar.js         # 검색 바 컴포넌트이다.
│   │   ├── SocialShare.js       # 소셜 공유 버튼 컴포넌트이다.
│   │   ├── ToggleTheme.js       # 테마 전환 버튼 컴포넌트이다.
│   │   └── CommentList.js       # 댓글 리스트 컴포넌트이다.
│   │
│   ├── pages/                   # 페이지 컴포넌트 모음이다.
│   │   ├── HomePage.js          # 홈 페이지 컴포넌트이다.
│   │   ├── PostPage.js          # 개별 포스트 페이지 컴포넌트이다.
│   │   ├── NewPostPage.js       # 새 포스트 작성 페이지 컴포넌트이다.
│   │   └── AboutPage.js         # 소개 페이지 컴포넌트이다.
│   │
│   ├── slices/                  # Redux 슬라이스(리듀서) 모음이다.
│   │   ├── postSlice.js         # 포스트 관련 슬라이스이다.
│   │   ├── commentSlice.js      # 댓글 관련 슬라이스이다.
│   │   ├── themeSlice.js        # 테마 관련 슬라이스이다.
│   │   └── favoritesSlice.js    # 즐겨찾기 관련 슬라이스이다.
│   │
│   ├── styles/                  # 스타일 파일 모음이다.
│   │   ├── styles.css           # 사용자 정의 CSS (다크 모드 및 라이트 모드 지원)이다.
│   │   └── tailwind.css         # Tailwind CSS 파일이다.
│   │
│   ├── App.js                   # 메인 애플리케이션 컴포넌트이다.
│   ├── index.js                 # React 애플리케이션의 진입점이다.
│   ├── store.js                 # Redux 스토어 설정 파일이다.
│   └── firebase.js              # Firebase 설정 파일이다.
│
└── package.json                 # npm 패키지 설정 파일이다.
```

## 각 파일에 대한 설명

- **public/index.html**: React 애플리케이션이 포함될 HTML 템플릿 파일이다.
- **public/service-worker.js**: PWA(Progressive Web App) 지원을 위한 서비스 워커 파일이다.
- **src/index.js**: React 애플리케이션의 진입점이며, DOM에 React 컴포넌트를 마운트한다.
- **src/App.js**: 애플리케이션의 최상위 컴포넌트로, 라우팅 및 전역 상태 관리를 포함한다.
- **src/store.js**: Redux 스토어를 설정하는 파일이다.
- **src/firebase.js**: Firebase 설정 파일로, 인증 및 데이터베이스 기능을 포함한다.
- **src/components/**: 애플리케이션의 UI를 구성하는 재사용 가능한 컴포넌트들이 포함된 디렉토리이다.
- **src/pages/**: 애플리케이션의 주요 페이지들을 구성하는 컴포넌트들이 포함된 디렉토리이다.
- **src/slices/**: Redux Toolkit의 슬라이스들로, 각 기능별 상태와 리듀서를 관리한다.
- **src/styles/**: 전체 애플리케이션에 적용되는 스타일 파일들이 포함된 디렉토리이다.

## 설치 및 세팅

### 필수 패키지 설치

아래의 명령어를 사용하여 필요한 npm 패키지를 설치한다.

```bash
# Create React app with basic setup
npx create-react-app my-blog
cd my-blog

# Install React Router for routing
npm install react-router-dom

# Install Redux and Redux Toolkit for state management
npm install @reduxjs/toolkit react-redux

# Install Firebase for authentication and database
npm install firebase

# Install Tailwind CSS for utility-first styling
npm install tailwindcss

# Install React Toastify for toast notifications
npm install react-toastify

# Install Framer Motion for animations
npm install framer-motion

# Install React LazyLoad for image lazy loading
npm install react-lazyload
```

### Tailwind CSS 설정

1. Tailwind CSS 초기화:

   ```bash
   npx tailwindcss init
   ```

2. `tailwind.config.js` 설정:

   ```javascript
   module.exports = {
     content: ['./src/**/*.{js,jsx,ts,tsx}'],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. `src/styles/tailwind.css`에 Tailwind 지시문 추가:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. `index.js`에서 Tailwind CSS를 임포트:

   ```javascript
   import './styles/tailwind.css';
   ```

## Firebase 설정 가이드

Firebase를 사용하면 웹 애플리케이션에서 인증, 데이터베이스, 스토리지, 호스팅 등의 다양한 백엔드 서비스를 손쉽게 통합할 수 있다. 이 가이드는 Firebase를 React 프로젝트와 통합하여 사용자 인증 및 Firestore 데이터베이스를 설정하는 방법을 단계별로 안내한다.

### **1. Firebase 프로젝트 생성**

1. **Firebase 콘솔에 로그인**  
   [Firebase Console](https://console.firebase.google.com/)에 접속한 후, Google 계정으로 로그인한다.

2. **새 프로젝트 추가**
   - Firebase 콘솔에서 "프로젝트 추가" 또는 "새 프로젝트 만들기" 버튼을 클릭한다.
   - **프로젝트 이름**을 입력한다. 프로젝트 이름은 Firebase 콘솔에서 프로젝트를 식별하는 데 사용된다.
   - Firebase에서 제안하는 **Google Analytics** 설정 여부를 선택한다. 이 예제에서는 Google Analytics를 사용하지 않아도 된다.
   - 설정이 완료되면 "프로젝트 만들기" 버튼을 클릭하여 프로젝트를 생성한다. 프로젝트 생성에는 몇 초 정도 소요된다.

3. **Firebase 앱 등록**
   - 프로젝트가 생성되면 Firebase 콘솔 대시보드로 이동한다.
   - 대시보드에서 웹 아이콘 (`</>`)을 클릭하여 웹 애플리케이션을 등록한다.
   - **앱 이름**을 입력하고(예: "MyBlog"), Firebase SDK 설정에 포함될 앱을 등록한다.
   - Firebase가 제공하는 **구성 객체**를 복사해 둔다. 이 정보는 React 애플리케이션에서 Firebase를 초기화하는 데 필요하다.

### **2. .env 파일 생성 및 Firebase 설정**

Firebase에서 제공하는 구성 객체를 React 프로젝트에 통합하려면, 환경 변수를 사용하여 민감한 정보를 보호해야 한다.

1. **.env 파일 생성**
   - 프로젝트 루트 디렉토리에 `.env` 파일을 생성한다.
   - Firebase 콘솔에서 복사한 구성 객체를 다음과 같이 `.env` 파일에 추가한다:

   ```plaintext
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```

   - 각 항목은 Firebase 콘솔에서 제공된 구성 객체의 값으로 대체해야 한다.

2. **Firebase 초기화**
   - `src/firebase.js` 파일을 생성하고, Firebase를 초기화하는 코드를 작성한다:

   ```javascript
   import firebase from 'firebase/app';
   import 'firebase/auth';
   import 'firebase/firestore';

   // .env 파일에 저장된 환경 변수를

 사용하여 Firebase를 초기화한다.
   const firebaseConfig = {
     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
     appId: process.env.REACT_APP_FIREBASE_APP_ID,
   };

   // Firebase 앱을 초기화한다. 앱이 이미 초기화되어 있는지 확인하여 중복 초기화를 방지한다.
   if (!firebase.apps.length) {
     firebase.initializeApp(firebaseConfig);
   }

   // Firebase 인증 서비스를 가져온다.
   export const auth = firebase.auth();
   // Firebase Firestore 데이터베이스 서비스를 가져온다.
   export const db = firebase.firestore();
   export default firebase;
   ```

   - 이 설정으로 Firebase를 프로젝트에 통합하고, Firebase의 인증 및 Firestore 서비스를 사용할 수 있다.

### **3. Firebase Authentication 설정**

1. **Firebase 콘솔에서 Authentication 활성화**
   - Firebase 콘솔의 좌측 메뉴에서 "Authentication"을 선택한다.
   - "시작하기" 버튼을 클릭한다.
   - "로그인 방법" 탭에서 **이메일/비밀번호** 옵션을 활성화한다.
   - "저장" 버튼을 클릭하여 설정을 저장한다.

2. **React 프로젝트에서 Firebase 인증 사용**
   - 이제 Firebase Authentication을 사용하여 React 애플리케이션에서 사용자 인증을 처리할 수 있다. 예를 들어, Firebase Authentication을 사용하여 사용자를 로그인 또는 회원가입 시킬 수 있다:

   ```javascript
   import { auth } from './firebase';

   // 이메일과 비밀번호로 사용자 로그인
   const loginWithEmailAndPassword = (email, password) => {
     return auth.signInWithEmailAndPassword(email, password);
   };

   // 이메일과 비밀번호로 사용자 회원가입
   const registerWithEmailAndPassword = (email, password) => {
     return auth.createUserWithEmailAndPassword(email, password);
   };

   // 사용자 로그아웃
   const logout = () => {
     return auth.signOut();
   };
   ```

### **4. Firestore 데이터베이스 설정**

1. **Firestore 활성화**
   - Firebase 콘솔의 좌측 메뉴에서 "Firestore Database"를 선택한다.
   - "데이터베이스 만들기" 버튼을 클릭한다.
   - Firestore 모드 선택 시 "생성 모드"를 선택하고 "다음"을 클릭한다.
   - Firestore 위치를 선택한 후 "사용하기"를 클릭하여 Firestore 데이터베이스를 활성화한다.

2. **Firestore 컬렉션 및 문서 구조**
   - Firestore는 **컬렉션**과 **문서**로 데이터를 관리한다. 블로그 애플리케이션에서는 "posts"와 "comments" 컬렉션을 사용할 수 있다.
   - 예를 들어, 각 포스트는 "posts" 컬렉션의 문서로 저장되고, 댓글은 각 포스트 문서 하위에 있는 "comments" 컬렉션에 저장될 수 있다.

3. **React 프로젝트에서 Firestore 사용**
   - Firestore에 데이터를 읽고 쓰기 위해 Firestore 서비스를 사용한다:

   ```javascript
   import { db } from './firebase';

   // 새로운 포스트 추가
   const addNewPost = async (title, content, category) => {
     const postRef = db.collection('posts').doc();
     await postRef.set({
       title,
       content,
       category,
       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
     });
   };

   // 모든 포스트 가져오기
   const getAllPosts = async () => {
     const snapshot = await db.collection('posts').orderBy('createdAt', 'desc').get();
     const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
     return posts;
   };

   // 특정 포스트의 댓글 가져오기
   const getCommentsForPost = async (postId) => {
     const snapshot = await db.collection('posts').doc(postId).collection('comments').orderBy('createdAt', 'asc').get();
     const comments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
     return comments;
   };
   ```

   - 이러한 방법으로 Firestore에서 데이터를 읽고 쓸 수 있으며, 애플리케이션에서 실시간 데이터를 처리할 수도 있다.

### **5. Firebase Hosting 설정 (선택 사항)**

Firebase Hosting은 Firebase 프로젝트를 호스팅하는 데 사용될 수 있다. 이 과정은 선택 사항이며, 애플리케이션을 Firebase Hosting에 배포하려는 경우에만 필요하다.

1. **Firebase CLI 설치**
   - Firebase CLI를 사용하여 프로젝트를 Firebase Hosting에 배포할 수 있다. 다음 명령어로 Firebase CLI를 설치한다:

   ```bash
   npm install -g firebase-tools
   ```

2. **Firebase 프로젝트 초기화**
   - 프로젝트 루트 디렉토리에서 Firebase 프로젝트를 초기화한다:

   ```bash
   firebase init
   ```

   - "Hosting" 옵션을 선택하고, 기존 프로젝트를 선택한다.
   - 빌드 출력을 저장할 디렉토리로 `build`를 설정한다.
   - `npm run build` 명령어를 실행하여 프로젝트를 빌드한 후, 다음 명령어로 배포한다:

   ```bash
   firebase deploy
   ```