parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fx60":[function(require,module,exports) {

},{"./..\\images\\slide-1.jpg":[["slide-1.c4bd28be.jpg","gHwe"],"gHwe"],"./..\\images\\thumbnail_IMG_3330.jpg":[["thumbnail_IMG_3330.3f502f9b.jpg","CBiL"],"CBiL"],"./..\\images\\mobile_phone_light.png":[["mobile_phone_light.714d8964.png","Q1Ua"],"Q1Ua"],"./..\\images\\mobile_phone_dark.png":[["mobile_phone_dark.9d5fa34c.png","782L"],"782L"]}],"2RRh":[function(require,module,exports) {
"use strict";require("../scss/main.scss");var e=null,t=document.querySelectorAll(".slideshow__img--light"),s=document.querySelectorAll(".slideshow__img--dark"),c=document.querySelector(".mobile-phone"),i=1;function n(e){l(i+=e)}function o(e){l(i=e)}function l(e){var t,s=document.getElementsByClassName("mySlides");for(i=e>s.length?1:e<1?s.length:e,t=0;t<s.length;t++)s[t].style.display="none";s[i-1].style.display="block"}function a(){null===e&&(e=setInterval(function(){l(i+1)},4e3))}function r(){clearInterval(e),e=null}l(i),a(),document.querySelector(".next").addEventListener("click",function(){r(),n(1),a()}),document.querySelector(".prev").addEventListener("click",function(){r(),n(-1),a()});var d=document.querySelector(".toggle-switch");function u(){document.querySelectorAll(".switch__text").forEach(function(e){e.classList.contains("switch__text--active")?e.classList.remove("switch__text--active"):e.classList.add("switch__text--active")})}d.addEventListener("change",function(){this.checked?(c.classList.add("mobile-phone--dark"),c.classList.remove("mobile-phone--light"),t.forEach(function(e){e.classList.remove("show"),e.classList.add("hide")}),s.forEach(function(e){e.classList.remove("hide"),e.classList.add("show")})):(c.classList.add("mobile-phone--light"),c.classList.remove("mobile-phone--dark"),t.forEach(function(e){e.classList.remove("hide"),e.classList.add("show")}),s.forEach(function(e){e.classList.remove("show"),e.classList.add("hide")})),u()});
},{"../scss/main.scss":"fx60"}]},{},["2RRh"], null)
//# sourceMappingURL=carouselSlider.a2606202.js.map