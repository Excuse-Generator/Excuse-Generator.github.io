//Code for .... 
(function() {
  var ASSET = "https://cdn2.scratch.mit.edu/get_image/user/14542217_32x32.png";
  var WIDTH = 88;
  var HEIGHT = 87;
  var VERT_DIRECTIONS = ["up", "down"];
  var HORI_DIRECTIONS = ["left", "right"];
  var SCROLL_AMOUNTS = [6, 8, 11, 15];
  var SCROLL_DELAYS = [60, 85, 100, 130];

  function _assign(obj, attrs) {
    for (var key in attrs) {
      obj[key] = attrs[key];
    }
  }

  function _choice(options) {
    return options[parseInt(Math.random() * options.length)];
  }

  function add() {
    var outerMarquee = document.createElement("marquee");
    _assign(outerMarquee, {
      direction: _choice(VERT_DIRECTIONS),
      behavior: "alternate",
      scrollAmount: _choice(SCROLL_AMOUNTS),
      scrollDelay: _choice(SCROLL_DELAYS)
    });
    _assign(outerMarquee.style, {
      position: "fixed",
      width: "auto",
      height: "auto",
      top: 0,
      left: 0,
      zIndex: 999999,
      pointerEvents: "none"
    });

    var innerMarquee = document.createElement("marquee");
    _assign(innerMarquee, {
      behavior: "alternate",
      direction: _choice(HORI_DIRECTIONS),
      scrollAmount: _choice(SCROLL_AMOUNTS),
      scrollDelay: _choice(SCROLL_DELAYS)
    });
    _assign(innerMarquee.style, { width: "100%" });
    outerMarquee.appendChild(innerMarquee);

    var img = document.createElement("img");
    img.src = ASSET;
    innerMarquee.appendChild(img);

    var body = document.body;
    if (body) {
      body.appendChild(outerMarquee);
    }
  }

  var original = window.SeaDragon;

  var self = (window.SeaDragon = {
    add: add,
    noConflict: function() {
      window.SeaDragon = original;
      return self;
    }
  });
})();
