parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fx60":[function(require,module,exports) {

},{"./..\\images\\city_of_Pico_Rivera.jpg":[["city_of_Pico_Rivera.099f9ac7.jpg","O9kW"],"O9kW"],"./..\\images\\chino_valley_2.jpg":[["chino_valley_2.0fc7ae44.jpg","yr1m"],"yr1m"],"./..\\images\\slide-1.jpg":[["slide-1.c4bd28be.jpg","gHwe"],"gHwe"],"./..\\images\\city_of_Covina.jpg":[["city_of_Covina.af0ea2c7.jpg","wKHz"],"wKHz"],"./..\\images\\city_of_Pico_Rivera_mobile.jpg":[["city_of_Pico_Rivera_mobile.59e26607.jpg","l3tc"],"l3tc"],"./..\\images\\chino_valley_2_mobile.jpg":[["chino_valley_2_mobile.769cee43.jpg","un07"],"un07"],"./..\\images\\slide-1_mobile.jpg":[["slide-1_mobile.412d3fa6.jpg","G13P"],"G13P"],"./..\\images\\thumbnail_IMG_3330.jpg":[["thumbnail_IMG_3330.3f502f9b.jpg","CBiL"],"CBiL"],"./..\\images\\laptop-screen.jpg":[["laptop-screen.b3875394.jpg","ic7t"],"ic7t"],"./..\\images\\mobile_phone_light.png":[["mobile_phone_light.714d8964.png","Q1Ua"],"Q1Ua"],"./..\\images\\mobile_phone_dark.png":[["mobile_phone_dark.9d5fa34c.png","L5GJ"],"L5GJ"]}],"k2L1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fadeSlider=void 0;var e=function(e,n,t){var l=e+"  .mySlides",r=null;function i(e){o(t+=e)}function i(e){o(t+=e)}function o(e){var n,r=document.querySelectorAll(l);for(t=e>r.length?1:e<1?r.length:e,n=0;n<r.length;n++)r[n].style.display="none";r[t-1].style.display="block"}function i(e){o(t+=e)}function c(){null===r&&(r=setInterval(function(){o(t+1)},n))}function u(){clearInterval(r),r=null}return{init:function(n){o(1),c(),document.querySelector(e+" .next").addEventListener("click",function(){u(),i(1),c()}),document.querySelector(e+" .prev").addEventListener("click",function(){u(),i(-1),c()})},plusSlides:i,startTimer:c,stopTimer:u}};exports.fadeSlider=e;
},{}],"kJR7":[function(require,module,exports) {
"use strict";function e(e){var n=e.dimension,t=e.carouselObj,r=e.delay,l=t.querySelector(".carousel__panels"),o=-n,c=n,a=-4*n,i=null,s=t.querySelector(".carousel__control--left-control"),u=t.querySelector(".carousel__control--right-control");s.addEventListener("click",function(){i&&(clearInterval(i),i=null),o>=0||(v(),f(o+=c),d())}),u.addEventListener("click",function(){i&&(clearInterval(i),i=null),o<=a||(v(),f(o-=c),d())}),l.addEventListener("transitionend",function(){o<=a?(v(!1),f(o=0-c)):o>=0&&(v(!1),f(o=a+100))});var d=function(){i||(i=setInterval(function(){v(),f(o-=c)},r))},f=function(e){l.style.transform="translateX(".concat(e,"%)")},v=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return l.style.transition=e?"transform 0.75s ease-in-out":"none"};return d(),{setSlideTimer:d,stopTimer:function(){clearInterval(i),i=null}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createSlider=e;
},{}],"RRh4":[function(require,module,exports) {
"use strict";require("../scss/main.scss");var e=require("./fadeSlider"),r=require("./createSlider"),i=8e3,t=1;document.addEventListener("DOMContentLoaded",function(){var t=(0,r.createSlider)(n),d=(0,e.fadeSlider)(".mobile-phone",4e3,1),o=(0,e.fadeSlider)("#hero",i,1);d.init(1),o.init(1),window.addEventListener("focus",function(){t.setSlideTimer(),d.startTimer(),o.startTimer()}),window.addEventListener("blur",function(){t.stopTimer(),d.stopTimer(),o.stopTimer()})});var n={dimension:100,carouselObj:document.querySelector("#hero"),delay:i};
},{"../scss/main.scss":"fx60","./fadeSlider":"k2L1","./createSlider":"kJR7"}]},{},["RRh4"], null)
//# sourceMappingURL=carouselSlider.f0dc6c98.js.map