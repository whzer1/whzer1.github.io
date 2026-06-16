function show_runtime() {
  window.setTimeout("show_runtime()", 1000);
  X = new Date("01/01/2026 00:00:00"); // 修改你的建站时间
  Y = new Date();
  T = (Y.getTime() - X.getTime());
  M = 24 * 60 * 60 * 1000;
  a = T / M;
  A = Math.floor(a);
  b = (a - A) * 24;
  B = Math.floor(b);
  c = (b - B) * 60;
  C = Math.floor((b - B) * 60);
  D = Math.floor((c - C) * 60);
  
  var span = document.getElementById("runtime_span");
  // 只有当页面上有这个元素时才写入，防止报错
  if (span) {
    span.innerHTML = "本站已运行: " + A + "天" + B + "小时" + C + "分" + D + "秒";
  }
}
show_runtime();