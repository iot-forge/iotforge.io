(function () {
  var bar = document.querySelector(".comic-share");
  if (!bar) return;

  var url = bar.getAttribute("data-url");
  var title = bar.getAttribute("data-title");
  var text = bar.getAttribute("data-text");
  var image = bar.getAttribute("data-image");
  var filename = bar.getAttribute("data-filename") || "comic.png";
  var status = bar.querySelector(".share-status");

  function track(method) {
    if (typeof gtag === "function") {
      gtag("event", "share", { method: method, content_type: "comic", item_id: bar.getAttribute("data-id") });
    }
  }

  function announce(msg) {
    if (status) status.textContent = msg;
  }

  // Social links: just record the click, the browser follows the href.
  bar.querySelectorAll("a[data-share]").forEach(function (a) {
    a.addEventListener("click", function () { track(a.getAttribute("data-share")); });
  });

  // Copy link, with a short "Copied" confirmation on the button itself.
  var copyBtn = bar.querySelector('[data-share="copy"]');
  if (copyBtn) {
    var label = copyBtn.querySelector("[data-label]");
    var original = label ? label.textContent : "";
    var timer;
    var done = function () {
      track("copy");
      copyBtn.classList.add("is-done");
      if (label) label.textContent = "Copied";
      announce("Link copied to clipboard");
      clearTimeout(timer);
      timer = setTimeout(function () {
        copyBtn.classList.remove("is-done");
        if (label) label.textContent = original;
      }, 1800);
    };
    var fallback = function () {
      var ta = document.createElement("textarea");
      ta.value = url;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      if (ok) done(); else window.prompt("Copy this link:", url);
    };
    copyBtn.addEventListener("click", function () {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(url).then(done, fallback);
      } else {
        fallback();
      }
    });
  }

  // Native share sheet, only where the browser offers one. Attaches the strip
  // image when the device can share files (phones, mostly), falls back to the link.
  var nativeItem = bar.querySelector("[data-share-native]");
  var nativeBtn = bar.querySelector('[data-share="native"]');
  if (nativeItem && nativeBtn && navigator.share) {
    nativeItem.hidden = false;
    nativeBtn.addEventListener("click", function () {
      var payload = { title: title, text: text, url: url };
      var share = function (data) {
        return navigator.share(data).then(function () { track("native"); }).catch(function (err) {
          if (!err || err.name !== "AbortError") announce("Sharing is not available right now");
        });
      };
      if (image && navigator.canShare) {
        fetch(image).then(function (r) {
          if (!r.ok) throw new Error(r.status);
          return r.blob();
        }).then(function (blob) {
          var file = new File([blob], filename, { type: blob.type || "image/png" });
          var withFile = { title: title, text: text + " " + url, files: [file] };
          return navigator.canShare(withFile) ? share(withFile) : share(payload);
        }).catch(function () { return share(payload); });
      } else {
        share(payload);
      }
    });
  }
})();
