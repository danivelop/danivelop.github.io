!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){n(2),t.exports=n(4)},function(t,e,n){"use strict";var r=n(0)(n(3));r.default.init(),r.default.registerPreviewStyle("cms.css")},function(t,e){t.exports=NetlifyCmsApp},function(t,e,n){"use strict";var r=n(0)(n(5));window.netlifyIdentity=r.default;var o=function(){return r.default.on("login",function(){document.location.href="/admin/"})};r.default.on("init",function(t){t?r.default.on("logout",function(){o()}):o()}),r.default.init()},function(t,e){t.exports=netlifyIdentity}]);
//# sourceMappingURL=cms.js.map