parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Cz5k":[function(require,module,exports) {
var e=document.querySelector(".burger__btn"),n=document.querySelector(".close__btn"),c=document.querySelector(".header__backdrop"),t=document.querySelector(".page-header"),o=document.querySelectorAll(".nav__link"),d=document.querySelector(".menu__btn");function r(){t.classList.add("menu-open"),document.body.classList.add("menu-open")}function u(){t.classList.remove("menu-open"),document.body.classList.remove("menu-open")}e.addEventListener("click",r),n.addEventListener("click",u),c.addEventListener("click",u),d.addEventListener("click",u),o.forEach(function(e){e.addEventListener("click",u)});
},{}]},{},["Cz5k"], null)
//# sourceMappingURL=/team-project1/mobile-menu.d1e4f0ef.js.map