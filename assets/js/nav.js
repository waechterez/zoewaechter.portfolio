(function () {
  var base = window.SITE_BASE || "./";

  var html =
    '<a class="nav-logo" href="' + base + 'about.html">ZOE WAECHTER</a>' +
    '<div class="nav-links">' +
    '<a href="' + base + 'about.html">ABOUT</a>' +
    '<a href="' + base + 'rd/index.html">RESEARCH <span class="nav-ampersand">&amp;</span> DEVELOPMENT</a>' +
    '<a href="' + base + 'play/index.html">PLAY</a>' +
    '</div>';

  var mount = document.getElementById("site-nav");
  if (mount) {
    mount.innerHTML = html;
  }
})();
