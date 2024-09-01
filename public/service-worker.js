// 서비스 워커에서 사용하는 캐시의 이름을 정의합니다.
const CACHE_NAME = "my-blog-cache-v1";
// 캐시에 저장할 URL들을 정의합니다.
const urlsToCache = ["/", "/index.html", "/favicon.ico"];

// 서비스 워커 설치 이벤트를 처리합니다.
self.addEventListener("install", (event) => {
  event.waitUntil(
    // 캐시를 열고, 정의된 URL들을 캐시에 추가합니다.
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// 네트워크 요청이 발생할 때의 이벤트를 처리합니다.
self.addEventListener("fetch", (event) => {
  event.respondWith(
    // 캐시에서 요청에 해당하는 리소스를 찾고, 없으면 네트워크에서 가져옵니다.
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// 서비스 워커 활성화 이벤트를 처리합니다.
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    // 이전 캐시들을 모두 제거하고, 현재 캐시만 남깁니다.
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cacheWhitelist.includes(key)) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});
