parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fx60":[function(require,module,exports) {

},{"./..\\images\\casual-cellphone-contemporary-1471752.jpg":[["casual-cellphone-contemporary-1471752.b66d1831.jpg","2NYA"],"2NYA"],"./..\\images\\thumbnail_IMG_3330.jpg":[["thumbnail_IMG_3330.3f502f9b.jpg","CBiL"],"CBiL"],"./..\\images\\mobile_phone_light.png":[["mobile_phone_light.714d8964.png","Q1Ua"],"Q1Ua"],"./..\\images\\mobile_phone_dark.png":[["mobile_phone_dark.9d5fa34c.png","782L"],"782L"]}],"D57x":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(e){return window.setTimeout(e,1e3/60),e};window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||n;var o=function(){function n(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"easeOutSine";t(this,n),this.menu=e,this.speed=o,this.easing=i}return e(n,[{key:"scrollToY",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=window.scrollY||document.documentElement.scrollTop,o=0,i=Math.max(.1,Math.min(Math.abs(n-t)/this.speed,.8)),r={easeOutSine:function(e){return Math.sin(e*(Math.PI/2))},easeInOutSine:function(e){return-.5*(Math.cos(Math.PI*e)-1)},easeInOutQuint:function(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2)}};!function a(){var u=(o+=1/60)/i,s=r[e.easing](u);u<1?(window.requestAnimFrame(a),window.scrollTo(0,n+(t-n)*s)):window.scrollTo(0,t)}()}},{key:"menuControl",value:function(){var e=void 0,t=void 0,n=void 0,o=this.menu.querySelectorAll('a[href^="#"]'),i=window.scrollY||document.documentElement.scrollTop;for(e=0;e<o.length;e+=1)t=o[e],(n=document.querySelector(t.getAttribute("href"))).offsetTop<=i&&n.offsetTop+n.clientHeight>i?t.classList.add("active"):t.classList.remove("active")}},{key:"animated",value:function(){var e=this;function t(t){t.preventDefault();var n=document.querySelector(this.hash);e.scrollToY(n.offsetTop)}var n=void 0,o=this.menu.querySelectorAll('a[href^="#"]');for(n=0;n<o.length;n+=1)o[n].addEventListener("click",t)}},{key:"init",value:function(){var e=this;this.animated(),document.addEventListener("scroll",function(){e.menuControl()})}}]),n}();exports.default=o;
},{}],"QdeU":[function(require,module,exports) {
"use strict";require("../scss/main.scss");var e=t(require("vanillajs-scrollspy"));function t(e){return e&&e.__esModule?e:{default:e}}var o=document.getElementById("navbar"),n=document.getElementById("navbar__mobile"),r=new e.default(o,3e3);r.init();var c=new e.default(n,3e3);c.init();var l=document.querySelector(".navbar__icon"),s=document.querySelector(".navbar-mobile__close"),a=document.querySelectorAll(".selector__button"),d=document.querySelectorAll(".industry-info"),i=document.querySelector("nav"),u=p(function(e){console.log(window.scrollY)},250);window.addEventListener("scroll",function(e){window.scrollY>200?i.classList.add("dark"):i.classList.remove("dark")}),l.addEventListener("click",function(e){document.querySelector(".navbar-mobile__wrapper").classList.toggle("show")}),s.addEventListener("click",function(e){document.querySelector(".navbar-mobile__wrapper").classList.toggle("show")}),a.forEach(function(e){return e.addEventListener("click",function(e){a.forEach(function(e){return e.classList.remove("selected")}),e.target.classList.add("selected");var t=document.querySelector(".industry-info--show");t&&t.classList.remove("industry-info--show"),console.log(e.target.dataset.value),document.getElementById(e.target.dataset.value).classList.add("industry-info--show")})});var m=document.querySelector(".modal__wrapper"),v=document.getElementById("privacy-policy"),y=document.getElementById("terms-of-service");m.addEventListener("click",_),y.addEventListener("click",function(e){e.preventDefault(),L()}),v.addEventListener("click",function(e){e.preventDefault(),L(),document.getElementById("privacy-modal").classList.add("modal__body--show")}),y.addEventListener("click",function(e){e.preventDefault(),L(),console.log(y),document.getElementById("terms-of-service-modal").classList.add("modal__body--show")});var f=document.querySelectorAll(".btn--modal-close");function _(){m.classList.add("modal__wrapper--hide"),document.getElementById("privacy-modal").classList.remove("modal__body--show"),document.getElementById("terms-of-service-modal").classList.remove("modal__body--show"),document.querySelector("body").classList.remove("disable-scroll")}function L(){m.classList.remove("modal__wrapper--hide"),document.querySelector("body").classList.add("disable-scroll")}function p(e,t,o){var n;return function(){var r=this,c=arguments,l=o&&!n;clearTimeout(n),n=setTimeout(function(){n=null,o||e.apply(r,c)},t),l&&e.apply(r,c)}}f.forEach(function(e){return e.addEventListener("click",_)});
},{"../scss/main.scss":"fx60","vanillajs-scrollspy":"D57x"}]},{},["QdeU"], null)
//# sourceMappingURL=app.a7cfc0ac.js.map