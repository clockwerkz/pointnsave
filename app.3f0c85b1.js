parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fx60":[function(require,module,exports) {

},{"./..\\images\\casual-cellphone-contemporary-1471752.jpg":[["casual-cellphone-contemporary-1471752.b66d1831.jpg","2NYA"],"2NYA"]}],"D57x":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(e){return window.setTimeout(e,1e3/60),e};window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||n;var o=function(){function n(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"easeOutSine";t(this,n),this.menu=e,this.speed=o,this.easing=i}return e(n,[{key:"scrollToY",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=window.scrollY||document.documentElement.scrollTop,o=0,i=Math.max(.1,Math.min(Math.abs(n-t)/this.speed,.8)),r={easeOutSine:function(e){return Math.sin(e*(Math.PI/2))},easeInOutSine:function(e){return-.5*(Math.cos(Math.PI*e)-1)},easeInOutQuint:function(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2)}};!function a(){var u=(o+=1/60)/i,s=r[e.easing](u);u<1?(window.requestAnimFrame(a),window.scrollTo(0,n+(t-n)*s)):window.scrollTo(0,t)}()}},{key:"menuControl",value:function(){var e=void 0,t=void 0,n=void 0,o=this.menu.querySelectorAll('a[href^="#"]'),i=window.scrollY||document.documentElement.scrollTop;for(e=0;e<o.length;e+=1)t=o[e],(n=document.querySelector(t.getAttribute("href"))).offsetTop<=i&&n.offsetTop+n.clientHeight>i?t.classList.add("active"):t.classList.remove("active")}},{key:"animated",value:function(){var e=this;function t(t){t.preventDefault();var n=document.querySelector(this.hash);e.scrollToY(n.offsetTop)}var n=void 0,o=this.menu.querySelectorAll('a[href^="#"]');for(n=0;n<o.length;n+=1)o[n].addEventListener("click",t)}},{key:"init",value:function(){var e=this;this.animated(),document.addEventListener("scroll",function(){e.menuControl()})}}]),n}();exports.default=o;
},{}],"QdeU":[function(require,module,exports) {
"use strict";require("../scss/main.scss");var e=t(require("vanillajs-scrollspy"));function t(e){return e&&e.__esModule?e:{default:e}}var n=document.getElementById("navbar"),r=document.getElementById("navbar__mobile"),o=new e.default(n,3e3);o.init();var s=new e.default(r,3e3);s.init();var a=document.querySelector(".navbar__icon"),c=document.querySelector(".navbar-mobile__close"),l=document.querySelectorAll(".selector__button"),i=document.querySelectorAll(".industry-info");a.addEventListener("click",function(e){document.querySelector(".navbar-mobile__wrapper").classList.toggle("show")}),c.addEventListener("click",function(e){document.querySelector(".navbar-mobile__wrapper").classList.toggle("show")}),l.forEach(function(e){return e.addEventListener("click",function(e){l.forEach(function(e){return e.classList.remove("selected")}),e.target.classList.add("selected");var t=document.querySelector(".industry-info--show");t&&t.classList.remove("industry-info--show"),console.log(e.target.dataset.value),document.getElementById(e.target.dataset.value).classList.add("industry-info--show")})});
},{"../scss/main.scss":"fx60","vanillajs-scrollspy":"D57x"}]},{},["QdeU"], null)
//# sourceMappingURL=app.3f0c85b1.js.map