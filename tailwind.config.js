// Tailwind CSS의 설정 파일을 생성함
module.exports = {
  // Tailwind CSS가 어떤 파일들을 스캔하여 클래스 이름을 찾아야 하는지 지정함
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // 테마를 확장할 수 있는 공간. 여기서 추가적인 테마 설정을 할 수 있음
  theme: {
    extend: {}, // 기본 테마 설정을 확장할 수 있음
  },
  // 추가적인 Tailwind 플러그인을 설정할 수 있는 공간
  plugins: [],
};
