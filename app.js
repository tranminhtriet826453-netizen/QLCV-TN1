(function () {
  var url = window.QLCV_URL || "";
  var page = document.documentElement.getAttribute("data-page");
  var frame = document.getElementById("app");
  if (!/^https:\/\/script\.google\.com\/.+\/exec/.test(url)) {
    document.getElementById("setup").hidden = false;
    frame.remove();
    return;
  }
  frame.src = url + (page === "admin" ? "?p=admin" : "");
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(function () {});
})();
