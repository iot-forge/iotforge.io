(function () {
  var link = document.getElementById("top-link");
  if (!link) return;

  window.addEventListener("scroll", function () {
    var scrolled = document.body.scrollTop > 800 || document.documentElement.scrollTop > 800;
    link.classList.toggle("show", scrolled);
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = this.getAttribute("href").substring(1);
      var target = id ? document.getElementById(id) : null;
      if (!target) return;
      e.preventDefault();
      var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView(reduceMotion ? undefined : { behavior: "smooth" });
      if (id === "top") {
        history.replaceState(null, "", " ");
      } else {
        history.pushState(null, "", "#" + id);
      }
    });
  });
})();
