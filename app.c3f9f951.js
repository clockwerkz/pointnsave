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
},{"./..\\images\\slide-1.jpg":[["slide-1.76083b87.jpg","images/slide-1.jpg"],"images/slide-1.jpg"],"./..\\images\\chino_valley_2.jpg":[["chino_valley_2.f1ce23ba.jpg","images/chino_valley_2.jpg"],"images/chino_valley_2.jpg"],"./..\\images\\city_of_Pico_Rivera.jpg":[["city_of_Pico_Rivera.c376718f.jpg","images/city_of_Pico_Rivera.jpg"],"images/city_of_Pico_Rivera.jpg"],"./..\\images\\city_of_Covina.jpg":[["city_of_Covina.350225d0.jpg","images/city_of_Covina.jpg"],"images/city_of_Covina.jpg"],"./..\\images\\thumbnail_IMG_3330.jpg":[["thumbnail_IMG_3330.a9adb0ae.jpg","images/thumbnail_IMG_3330.jpg"],"images/thumbnail_IMG_3330.jpg"],"./..\\images\\laptop-screen.jpg":[["laptop-screen.fa7d06ed.jpg","images/laptop-screen.jpg"],"images/laptop-screen.jpg"],"./..\\images\\mobile_phone_light.png":[["mobile_phone_light.5f040e61.png","images/mobile_phone_light.png"],"images/mobile_phone_light.png"],"./..\\images\\mobile_phone_dark.png":[["mobile_phone_dark.a98e61d4.png","images/mobile_phone_dark.png"],"images/mobile_phone_dark.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/vanillajs-scrollspy/lib/index.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fncAnimation = function fncAnimation(callback) {
  window.setTimeout(callback, 1000 / 60);
  return callback;
};

window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || fncAnimation;
}();

var VanillaScrollspy = function () {
  function VanillaScrollspy(menu) {
    var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'easeOutSine';

    _classCallCheck(this, VanillaScrollspy);

    this.menu = menu;
    this.speed = speed;
    this.easing = easing;
  }

  _createClass(VanillaScrollspy, [{
    key: 'scrollToY',
    value: function scrollToY() {
      var _this = this;

      var targetY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var scrollTargetY = targetY;
      var scrollY = window.scrollY || document.documentElement.scrollTop;
      var currentTime = 0;
      var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / this.speed, 0.8));

      var easingEquations = {
        easeOutSine: function easeOutSine(pos) {
          return Math.sin(pos * (Math.PI / 2));
        },
        easeInOutSine: function easeInOutSine(pos) {
          return -0.5 * (Math.cos(Math.PI * pos) - 1);
        },
        easeInOutQuint: function easeInOutQuint(pos) {
          /* eslint-disable-next-line */
          if ((pos /= 0.5) < 1) {
            return 0.5 * Math.pow(pos, 5);
          }
          return 0.5 * (Math.pow(pos - 2, 5) + 2);
        }
      };

      var tick = function tick() {
        currentTime += 1 / 60;
        var p = currentTime / time;
        var t = easingEquations[_this.easing](p);

        if (p < 1) {
          window.requestAnimFrame(tick);
          window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
        } else {
          window.scrollTo(0, scrollTargetY);
        }
      };

      tick();
    }
  }, {
    key: 'menuControl',
    value: function menuControl() {
      var i = void 0;
      var currLink = void 0;
      var refElement = void 0;
      var links = this.menu.querySelectorAll('a[href^="#"]');
      var scrollPos = window.scrollY || document.documentElement.scrollTop;

      for (i = 0; i < links.length; i += 1) {
        currLink = links[i];
        refElement = document.querySelector(currLink.getAttribute('href'));

        if (refElement.offsetTop <= scrollPos && refElement.offsetTop + refElement.clientHeight > scrollPos) {
          currLink.classList.add('active');
        } else {
          currLink.classList.remove('active');
        }
      }
    }
  }, {
    key: 'animated',
    value: function animated() {
      var self = this;
      function control(e) {
        e.preventDefault();
        var target = document.querySelector(this.hash);
        self.scrollToY(target.offsetTop);
      }

      var i = void 0;
      var link = void 0;
      var links = this.menu.querySelectorAll('a[href^="#"]');

      for (i = 0; i < links.length; i += 1) {
        link = links[i];
        link.addEventListener('click', control);
      }
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.animated();
      document.addEventListener('scroll', function () {
        _this2.menuControl();
      });
    }
  }]);

  return VanillaScrollspy;
}();

exports.default = VanillaScrollspy;
},{}],"js/app.js":[function(require,module,exports) {
"use strict";

require("../scss/main.scss");

var _vanillajsScrollspy = _interopRequireDefault(require("vanillajs-scrollspy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menu = document.getElementById('navbar');
var menuMobile = document.getElementById('navbar__mobile');
var scrollspy = new _vanillajsScrollspy.default(menu, 3000);
scrollspy.init();
var scrollspyMobile = new _vanillajsScrollspy.default(menuMobile, 3000);
scrollspyMobile.init();
var menuIcon = document.querySelector('.navbar__icon');
var menuIconClose = document.querySelector('.navbar-mobile__close');
var selectorBtns = document.querySelectorAll('.selector__button');
var industryInfo = document.querySelectorAll('.industry-info');
var navBar = document.querySelector('nav');
var handleScroll = debounce(function (e) {
  console.log(window.scrollY);
}, 250);
menuIcon.addEventListener('click', function (e) {
  document.querySelector('.navbar-mobile__wrapper').classList.toggle('show');
});
menuIconClose.addEventListener('click', function (e) {
  document.querySelector('.navbar-mobile__wrapper').classList.toggle('show');
});
selectorBtns.forEach(function (btn) {
  return btn.addEventListener('click', function (e) {
    selectorBtns.forEach(function (selector) {
      return selector.classList.remove('selected');
    });
    e.target.classList.add('selected');
    var itemShown = document.querySelector('.industry-info--show');

    if (itemShown) {
      itemShown.classList.remove('industry-info--show');
    }

    console.log(e.target.dataset.value);
    document.getElementById(e.target.dataset.value).classList.add('industry-info--show');
  });
}); //Modal 

var modalWrapper = document.querySelector('.modal__wrapper');
var privacyPolicy = document.getElementById('privacy-policy');
var termsOfService = document.getElementById('terms-of-service');
modalWrapper.addEventListener('click', closeModal);
termsOfService.addEventListener('click', function (e) {
  e.preventDefault();
  openModal();
});
privacyPolicy.addEventListener('click', function (e) {
  e.preventDefault();
  openModal();
  document.getElementById('privacy-modal').classList.add('modal__body--show');
});
termsOfService.addEventListener('click', function (e) {
  e.preventDefault();
  openModal();
  console.log(termsOfService);
  document.getElementById('terms-of-service-modal').classList.add('modal__body--show');
});
var modalCloseBtns = document.querySelectorAll('.btn--modal-close');
modalCloseBtns.forEach(function (btn) {
  return btn.addEventListener('click', closeModal);
});

function closeModal() {
  modalWrapper.classList.add('modal__wrapper--hide');
  document.getElementById('privacy-modal').classList.remove('modal__body--show');
  document.getElementById('terms-of-service-modal').classList.remove('modal__body--show');
  document.querySelector('body').classList.remove('disable-scroll');
}

function openModal() {
  modalWrapper.classList.remove('modal__wrapper--hide');
  document.querySelector('body').classList.add('disable-scroll');
}

function debounce(func, wait, immediate) {
  var timeout;
  return function executedFunction() {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

;
},{"../scss/main.scss":"scss/main.scss","vanillajs-scrollspy":"../node_modules/vanillajs-scrollspy/lib/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61802" + '/');

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
      } else {
        window.location.reload();
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map