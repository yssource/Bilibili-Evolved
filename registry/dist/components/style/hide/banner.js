!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/hide/banner"]=t():n["style/hide/banner"]=t()}(self,(function(){return function(){var n,t,e={930:function(n,t,e){var r=e(645)((function(n){return n[1]}));r.push([n.id,"#banner_link,\n.z-top-container.has-banner > .header,\n.custom-navbar .blur-layer,\n.bili-header__banner {\n  display: none !important;\n}\n\ndiv.blur-bg,\n.b-header-mask-wrp .b-header-mask-bg {\n  opacity: 0 !important;\n}\n\n.international-header .bili-banner,\n.international-home .bili-banner {\n  visibility: hidden !important;\n  height: 50px !important;\n  min-height: unset !important;\n}\n\n.nav-link .nav-link-ul .nav-link-item .link,\n.nav-user-center .user-con .item .name {\n  color: black !important;\n  text-shadow: none !important;\n}\nbody.dark .nav-link .nav-link-ul .nav-link-item .link,\nbody.dark .nav-user-center .user-con .item .name {\n  color: #eee !important;\n}",""]),n.exports=r},645:function(n){"use strict";
// eslint-disable-next-line func-names
n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
t.i=function(n,e,r){"string"==typeof n&&(
// eslint-disable-next-line no-param-reassign
n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<n.length;u++){var c=[].concat(n[u]);r&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),t.push(c))}},t}},389:function(n,t,e){var r=e(930);n.exports="string"==typeof r?r:r.toString()}},r={};function o(n){var t=r[n];if(void 0!==t)return t.exports;var i=r[n]={id:n,exports:{}};return e[n](i,i.exports,o),i.exports}t=Object.getPrototypeOf?function(n){return Object.getPrototypeOf(n)}:function(n){return n.__proto__},o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var i=Object.create(null);o.r(i);var a={};n=n||[null,t({}),t([]),t(t)];for(var u=2&r&&e;"object"==typeof u&&!~n.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(n){a[n]=function(){return e[n]}}));return a.default=function(){return e},o.d(i,a),i},o.d=function(n,t){for(var e in t)o.o(t,e)&&!o.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var i={};return function(){"use strict";o.d(i,{component:function(){return t}});var n=coreApis.utils.urls;const t={name:"hideBanner",entry:none,displayName:"隐藏顶部横幅",instantStyles:[{name:"hideBanner",style:()=>Promise.resolve().then(o.t.bind(o,389,23))}],tags:[componentsTags.style],description:{"zh-CN":"隐藏首页顶部横幅."},urlInclude:n.mainSiteUrls}}(),i=i.component}()}));