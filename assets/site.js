(function () {
  // 渦：中心から等間隔に巻く渦巻き（半径 = 巻いた角度に比例）を線で描く（ホームにだけある）
  var swirl = document.getElementById("swirl-path");
  if (swirl) {
    var d = "", turns = 5.25, step = 0.08, gap = 34 / (2 * Math.PI);
    for (var t = 0.6; t <= turns * 2 * Math.PI; t += step) {
      var r = gap * t, x = 200 + r * Math.cos(t), y = 200 + r * Math.sin(t);
      d += (d ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1);
    }
    swirl.setAttribute("d", d);
  }

  // 画面の切り抜きが見えたら浮き上がらせる（見えない間も表示はしてある）
  var rises = document.querySelectorAll(".rise");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.2 });
    rises.forEach(function (el) { io.observe(el); });
  } else {
    rises.forEach(function (el) { el.classList.add("in"); });
  }
})();
