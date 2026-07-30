(function () {
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var body = document.body;
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      body.classList.add("light");
      localStorage.setItem("pref-theme", "light");
    } else {
      body.classList.add("dark");
      body.classList.remove("light");
      localStorage.setItem("pref-theme", "dark");
    }
  });
})();
