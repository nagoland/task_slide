!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);document.getElementById("wrapper");const o=document.getElementsByClassName("slide-item"),r=o.length-1;let c=0;const i=3e3,u=1e3;var s,l,a;setTimeout((function(){o[0].classList.add("active","zoom")}),0),setInterval((function(){const e=c;o[c].classList.remove("active"),o[c=c==r?0:c+1].classList.add("active","zoom"),setTimeout((function(){o[e].classList.remove("zoom")}),u)}),i),s=document.getElementsByClassName("header")[0],l=document.getElementById("js-hamburger"),a=document.getElementById("js-black-bg"),l.addEventListener("click",(function(){s.classList.toggle("nav-open")})),a.addEventListener("click",(function(){s.classList.remove("nav-open")}))}]);