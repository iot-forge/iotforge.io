(function () {
  var bar = document.getElementById("tag-buttons");
  if (!bar) return;

  var items = document.querySelectorAll(".resource-item");

  bar.addEventListener("click", function (e) {
    var btn = e.target.closest(".tag-toggle");
    if (!btn) return;
    var tag = btn.getAttribute("data-tag");

    bar.querySelectorAll(".tag-toggle").forEach(function (b) {
      b.classList.toggle("active", b === btn);
    });

    items.forEach(function (item) {
      var tags = item.getAttribute("data-tags") || "";
      var match = !tag || tags.split(",").indexOf(tag) !== -1;
      item.classList.toggle("is-hidden", !match);
    });
  });
})();
