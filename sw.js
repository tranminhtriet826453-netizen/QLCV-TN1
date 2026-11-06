// Service worker tối giản để Chrome cho phép "Cài đặt ứng dụng". Không lưu dữ liệu ngoại tuyến.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function () {});
