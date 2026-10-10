/* Petrolog AI — config.js qiymatlarini sahifaga qo‘yadi. */
(function () {
  "use strict";
  var c = window.PETROLOG || {};
  var repo = c.githubUser ? "https://github.com/" + c.githubUser + "/" + (c.githubRepo || "petrolog") : "";

  var links = {
    github: c.githubUser ? "https://github.com/" + c.githubUser : "",
    repo: repo,
    releases: c.releaseUrl || (repo ? repo + "/releases/latest" : ""),
    tests: repo ? repo + "/tree/main/tests" : "",
    live: c.liveUrl || "",
    youtube: c.youtubeId ? "https://youtu.be/" + c.youtubeId : "",
    email: c.email ? "mailto:" + c.email : "",
    orcid: c.orcid ? "https://orcid.org/" + c.orcid : "",
    telegram: c.telegram ? "https://t.me/" + c.telegram : ""
  };

  // <a data-link="repo"> — havola qo‘yiladi; qiymat bo‘lmasa element yashiriladi
  document.querySelectorAll("[data-link]").forEach(function (a) {
    var url = links[a.getAttribute("data-link")];
    if (url) {
      a.href = url;
      if (/^https?:/.test(url)) { a.target = "_blank"; a.rel = "noopener"; }
    } else {
      (a.closest("[data-hide-wrap]") || a).hidden = true;
    }
  });

  // data-show-if="live" — qiymat bor bo‘lsa ko‘rsatiladi, data-show-unless — yo‘q bo‘lsa
  document.querySelectorAll("[data-show-if]").forEach(function (el) {
    el.hidden = !links[el.getAttribute("data-show-if")];
  });
  document.querySelectorAll("[data-show-unless]").forEach(function (el) {
    el.hidden = !!links[el.getAttribute("data-show-unless")];
  });

  // <span data-text="videoLength">
  document.querySelectorAll("[data-text]").forEach(function (el) {
    var v = c[el.getAttribute("data-text")];
    if (v) el.textContent = v; else (el.closest("[data-hide-wrap]") || el).hidden = true;
  });

  // Video
  var box = document.getElementById("video");
  if (box && c.youtubeId && /^[\w-]{6,20}$/.test(c.youtubeId)) {
    var f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + c.youtubeId + "?rel=0";
    f.title = "Petrolog AI demo-videosi";
    f.loading = "lazy";
    f.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen";
    f.allowFullscreen = true;
    box.innerHTML = "";
    box.appendChild(f);
  }

  // Skrinshotlar
  var g = document.getElementById("gallery");
  if (g) {
    var list = Array.isArray(c.screenshots) ? c.screenshots : [];
    if (!list.length) {
      (g.closest("[data-hide-wrap]") || g).hidden = true;
    } else {
      list.forEach(function (s) {
        var fig = document.createElement("figure");
        var img = document.createElement("img");
        img.src = s.src; img.alt = s.caption || ""; img.loading = "lazy";
        fig.appendChild(img);
        if (s.caption) {
          var cap = document.createElement("figcaption");
          cap.textContent = s.caption;
          fig.appendChild(cap);
        }
        g.appendChild(fig);
      });
    }
  }
})();
