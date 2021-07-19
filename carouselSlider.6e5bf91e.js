// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\Gladwin_County.jpg":[["Gladwin_County.23c6bb30.jpg","images/Gladwin_County.jpg"],"images/Gladwin_County.jpg"],"./..\\images\\chino_valley_2.jpg":[["chino_valley_2.f1ce23ba.jpg","images/chino_valley_2.jpg"],"images/chino_valley_2.jpg"],"./..\\images\\Silsbee.jpg":[["Silsbee.4ba167db.jpg","images/Silsbee.jpg"],"images/Silsbee.jpg"],"./..\\images\\city_of_Covina.jpg":[["city_of_Covina.350225d0.jpg","images/city_of_Covina.jpg"],"images/city_of_Covina.jpg"],"./..\\images\\Gladwin_County_mobile.jpg":[["Gladwin_County_mobile.9e1680f7.jpg","images/Gladwin_County_mobile.jpg"],"images/Gladwin_County_mobile.jpg"],"./..\\images\\chino_valley_2_mobile.jpg":[["chino_valley_2_mobile.d1ca22f8.jpg","images/chino_valley_2_mobile.jpg"],"images/chino_valley_2_mobile.jpg"],"./..\\images\\thumbnail_IMG_3330.jpg":[["thumbnail_IMG_3330.a9adb0ae.jpg","images/thumbnail_IMG_3330.jpg"],"images/thumbnail_IMG_3330.jpg"],"./..\\images\\laptop-screen.jpg":[["laptop-screen.fa7d06ed.jpg","images/laptop-screen.jpg"],"images/laptop-screen.jpg"],"./..\\images\\mobile_phone_light.png":[["mobile_phone_light.5f040e61.png","images/mobile_phone_light.png"],"images/mobile_phone_light.png"],"./..\\images\\mobile_phone_dark.png":[["mobile_phone_dark.a98e61d4.png","images/mobile_phone_dark.png"],"images/mobile_phone_dark.png"],"./..\\images\\PointNSaveLOGO.png":[["PointNSaveLOGO.4bbc82aa.png","images/PointNSaveLOGO.png"],"images/PointNSaveLOGO.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/fadeSlider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fadeSlider = void 0;

var fadeSlider = function fadeSlider(target, delay, slideIndex) {
  var el = target + "  .mySlides";
  var timer = null;

  function plusSlides(n) {
    showSlides(slideIndex += n);
  } // Thumbnail image controls


  function currentSlide(n) {
    showSlides(slideIndex = n);
  } // Next/previous controls


  function plusSlides(n) {
    showSlides(slideIndex += n);
  } // Thumbnail image controls


  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(el);

    if (n > slides.length) {
      slideIndex = 1;
    } else if (n < 1) {
      slideIndex = slides.length;
    } else {
      slideIndex = n;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  } // Next/previous controls


  function plusSlides(n) {
    showSlides(slideIndex += n);
  } // Thumbnail image controls


  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function startTimer() {
    if (timer === null) {
      timer = setInterval(function () {
        showSlides(slideIndex + 1);
      }, delay);
    }
  }

  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }

  function init(n) {
    showSlides(1);
    startTimer();
    document.querySelector(target + ' .next').addEventListener('click', function () {
      stopTimer();
      plusSlides(1);
      startTimer();
    });
    document.querySelector(target + ' .prev').addEventListener('click', function () {
      stopTimer();
      plusSlides(-1);
      startTimer();
    });
  }

  return {
    init: init,
    plusSlides: plusSlides,
    startTimer: startTimer,
    stopTimer: stopTimer
  };
};

exports.fadeSlider = fadeSlider;
},{}],"js/createSlider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSlider = createSlider;

function createSlider(_ref) {
  var dimension = _ref.dimension,
      carouselObj = _ref.carouselObj,
      delay = _ref.delay;
  var slider = carouselObj.querySelector('.carousel__panels');
  var quoteIdx = 1;
  var transX = -dimension;
  var objWidth = dimension;
  var upperLimit = -(dimension * 4);
  var lowerLimit = 0;
  var reset = false;
  var setTransition = false;
  var timerObj = null;
  var leftControl = carouselObj.querySelector('.carousel__control--left-control');
  var rightControl = carouselObj.querySelector('.carousel__control--right-control');
  leftControl.addEventListener('click', function () {
    if (timerObj) {
      clearInterval(timerObj);
      timerObj = null;
    }

    if (transX >= lowerLimit) return;
    setAnimationTransition();
    transX += objWidth;
    setTranslate(transX);
    setSlideTimer();
  });
  rightControl.addEventListener('click', function () {
    if (timerObj) {
      clearInterval(timerObj);
      timerObj = null;
    }

    if (transX <= upperLimit) return;
    setAnimationTransition();
    transX -= objWidth;
    setTranslate(transX);
    setSlideTimer();
  });
  slider.addEventListener('transitionend', function () {
    if (transX <= upperLimit) {
      setAnimationTransition(false);
      transX = lowerLimit - objWidth;
      setTranslate(transX);
    } else if (transX >= lowerLimit) {
      setAnimationTransition(false);
      transX = upperLimit + 100;
      setTranslate(transX);
    }
  });

  var setSlideTimer = function setSlideTimer() {
    if (!timerObj) {
      timerObj = setInterval(function () {
        setAnimationTransition();
        transX -= objWidth;
        setTranslate(transX);
      }, delay);
    }
  };

  var stopTimer = function stopTimer() {
    clearInterval(timerObj);
    timerObj = null;
  };

  var setTranslate = function setTranslate(value) {
    slider.style.transform = "translateX(".concat(value, "%)");
  };

  var setAnimationTransition = function setAnimationTransition() {
    var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    return slider.style.transition = animated ? 'transform 0.75s ease-in-out' : 'none';
  };

  setSlideTimer();
  return {
    setSlideTimer: setSlideTimer,
    stopTimer: stopTimer
  };
}
},{}],"js/carouselSlider.js":[function(require,module,exports) {
"use strict";

require("../scss/main.scss");

var _fadeSlider = require("./fadeSlider");

var _createSlider = require("./createSlider");

var delay = 8000;
var quoteIndex = 1;
document.addEventListener("DOMContentLoaded", function () {
  //showSlides(slideIndex);
  var heroSlider = (0, _createSlider.createSlider)(heroSliderSetup);
  var mobilePhoneSlides = (0, _fadeSlider.fadeSlider)(".mobile-phone", 4000, 1);
  var quotesSlides = (0, _fadeSlider.fadeSlider)("#hero", delay, 1);
  mobilePhoneSlides.init(1);
  quotesSlides.init(1);
  window.addEventListener('focus', function () {
    heroSlider.setSlideTimer();
    mobilePhoneSlides.startTimer();
    quotesSlides.startTimer();
  });
  window.addEventListener('blur', function () {
    heroSlider.stopTimer();
    mobilePhoneSlides.stopTimer();
    quotesSlides.stopTimer();
  });
});
var heroSliderSetup = {
  dimension: 100,
  carouselObj: document.querySelector("#hero"),
  delay: delay
};
},{"../scss/main.scss":"scss/main.scss","./fadeSlider":"js/fadeSlider.js","./createSlider":"js/createSlider.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58983" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/carouselSlider.js"], null)
//# sourceMappingURL=/carouselSlider.6e5bf91e.js.map