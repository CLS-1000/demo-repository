// Lets a board take its accent color from the URL, e.g. switchboard.html?accent=3FB6A8
(function () {
  var hex = new URLSearchParams(location.search).get("accent");
  if (hex && /^#?[0-9a-f]{6}$/i.test(hex)) {
    document.documentElement.style.setProperty("--accent", "#" + hex.replace("#", ""));
  }
})();
