(()=>{"use strict";var e={560:(e,r,t)=>{t.d(r,{A:()=>c});var n=t(601),a=t.n(n),o=t(314),i=t.n(o)()(a());i.push([e.id,'* {\n  box-sizing: border-box;\n}\n.ra-progress input[type="range"] {\n  --range-progress: 0;\n  -webkit-appearance: none;\n  position: relative;\n  background: #ccc;\n  width: 100%;\n  height: 2px;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.ra-progress input[type="range"]::-moz-range-track {\n  position: relative;\n  background: #ccc;\n  width: 100%;\n  height: 2px;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.ra-progress input[type="range"]::before {\n  content: "";\n  height: 2px;\n  background: #f50;\n  width: var(--range-progress);\n  border-bottom-left-radius: 2px;\n  border-top-left-radius: 2px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ra-progress input[type="range"]::-moz-range-progress {\n  background: #f50;\n  border-bottom-left-radius: 2px;\n  border-top-left-radius: 2px;\n  height: 2px;\n}\n\n.ra-progress input[type="range"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  height: 8px;\n  width: 8px;\n  border-radius: 50%;\n  border: none;\n  background-color: #f50;\n  cursor: pointer;\n  position: relative;\n}\n\n.ra-progress input[type="range"]:active::-webkit-slider-thumb {\n  transform: scale(1.2);\n}\n\n.ra-progress input[type="range"]::-moz-range-thumb {\n  height: 8px;\n  width: 8px;\n  border-radius: 50%;\n  background: #f50;\n  cursor: pointer;\n  border: transparent;\n  position: relative;\n}\n.ra-progress input[type="range"]:active::-moz-range-thumb {\n  transform: scale(1.2);\n}\n\n.ra-player {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));\n  align-items: center;\n  column-gap: 10px;\n}\n\n.ra-track {\n  order: 1;\n  grid-column: 1 / -1;\n}\n.ra-track-thumbnail {\n  width: 100%;\n}\n.ra-track .track-title {\n  margin: 0;\n}\n\n.ra-progress {\n  order: 2;\n  grid-column: 1 / -1;\n  line-height: 5px;\n  margin-bottom: 5px;\n}\n\n.ra-player .ra-play {\n  order: 4;\n}\n\n.ra-player .ra-prev {\n  order: 3;\n}\n.ra-player .ra-next {\n  order: 5;\n}\n\n.ra-player .time-track {\n  order: 6;\n  grid-column: span 6 / -1;\n  text-align: right;\n}\n.ra-player button {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  padding: 0;\n}\n\n.ra-player button svg {\n  width: 20px;\n  height: 20px;\n}\n\n.ra-player .volume {\n  display: flex;\n  align-items: center;\n}\n\n.ra-player .volume button {\n  margin: 0;\n}\n.ra-player .time {\n  color: #333;\n  font-size: 13px;\n}\n',""]);const c=i},314:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);n&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),r.push(s))}},r}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var o={},i=[],c=0;c<e.length;c++){var u=e[c],l=n.base?u[0]+n.base:u[0],s=o[l]||0,p="".concat(l," ").concat(s);o[l]=s+1;var f=t(p),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)r[f].references++,r[f].updater(d);else{var m=a(d,n);n.byIndex=c,r.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);r[c].references--}for(var u=n(e,a),l=0;l<o.length;l++){var s=t(o[l]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}o=u}}},659:e=>{var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},540:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},56:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,a&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},113:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={id:n,exports:{}};return e[n](o,o.exports,t),o.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nc=void 0;var n={};t.r(n),t.d(n,{default:()=>P});const a=require("react");var o=t.n(a),i=function(){return o().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-skip-end",viewBox:"0 0 16 16"},o().createElement("path",{d:"M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.713 3.31 4 3.655 4 4.308v7.384c0 .653.713.998 1.233.696L11.5 8.752V12a.5.5 0 0 0 1 0zM5 4.633 10.804 8 5 11.367z"}))},c=function(){return o().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-skip-start",viewBox:"0 0 16 16"},o().createElement("path",{d:"M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L5 8.752V12a.5.5 0 0 1-1 0zm7.5.633L5.696 8l5.804 3.367z"}))},u=function(){return o().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-play-circle",viewBox:"0 0 16 16"},o().createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),o().createElement("path",{d:"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"}))},l=function(){return o().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-pause-circle",viewBox:"0 0 16 16"},o().createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),o().createElement("path",{d:"M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"}))};function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}const p=function(e){var r,t,n=e.audioRef,i=e.progressBarRef,c=e.timeProgress,p=e.duration,f=e.setTimeProgress,d=e.playButton,m=e.pauseButton,g=(r=(0,a.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(r)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o,i,c=[],u=!0,l=!1;try{if(o=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;u=!1}else for(;!(u=(n=o.call(t)).done)&&(c.push(n.value),c.length!==r);u=!0);}catch(e){l=!0,a=e}finally{try{if(!u&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(l)throw a}}return c}}(r,t)||function(e,r){if(e){if("string"==typeof e)return s(e,r);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),v=g[0],h=g[1],y=(0,a.useRef)(),b=(0,a.useCallback)((function(){var e=n.current.currentTime;f(e),i.current&&(i.current.value=e,i.current.style.setProperty("--range-progress","".concat(i.current.value/p*100,"%"))),y.current=requestAnimationFrame(b)}),[n,p,i,f]);return(0,a.useEffect)((function(){v?n.current.play():n.current.pause(),y.current=requestAnimationFrame(b)}),[v,n,b]),(0,a.useEffect)((function(){v?n.current.play():n.current.pause()}),[v,n]),(0,a.useEffect)((function(){c===p&&(h(!1),n.current.currentTime=0)}),[c]),o().createElement("div",{className:"ra-play"},o().createElement("button",{onClick:function(){h((function(e){return!e}))}},v?m||o().createElement(l,null):d||o().createElement(u,null)))},f=function(e){var r=e.currentTrack,t=e.audioRef,n=e.setDuration,a=e.progressBarRef,i=e.trackTitle,c=e.cover;return o().createElement("div",{className:"ra-track"},c&&r.thumbnail&&o().createElement("img",{className:"ra-track-thumbnail",src:r.thumbnail,alt:r.title}),i&&o().createElement("p",{className:"track-title"},r.title),o().createElement("audio",{src:r.src,ref:t,onLoadedMetadata:function(){var e=t.current.duration;n(e),a.current&&(a.current.max=e)}}))},d=function(e){var r=e.progressBarRef,t=e.audioRef;return o().createElement("div",{className:"ra-progress"},o().createElement("input",{type:"range",ref:r,defaultValue:"0",onChange:function(){r.current&&(t.current.currentTime=r.current.value)}}))},m=function(e){var r=e.timeProgress,t=e.duration,n=function(e){if(e&&!isNaN(e)){var r=Math.floor(e/60),t=r<10?"0".concat(r):"".concat(r),n=Math.floor(e%60),a=n<10?"0".concat(n):"".concat(n);return"".concat(t,":").concat(a)}return"00:00"};return o().createElement("div",{className:"time-track"},o().createElement("span",{className:"time current-time"},n(r)),"/",o().createElement("span",{className:"time total-time"},n(t)))},g=function(e){var r=e.prev,t=e.next,n=e.navigationButton;return o().createElement(o().Fragment,null,o().createElement("div",{className:"ra-prev"},o().createElement("button",{onClick:r},n?n[0]:o().createElement(c,null))),o().createElement("div",{className:"ra-next"},o().createElement("button",{onClick:t},n?n[1]:o().createElement(i,null))))};function v(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o,i,c=[],u=!0,l=!1;try{if(o=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;u=!1}else for(;!(u=(n=o.call(t)).done)&&(c.push(n.value),c.length!==r);u=!0);}catch(e){l=!0,a=e}finally{try{if(!u&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(l)throw a}}return c}}(e,r)||function(e,r){if(e){if("string"==typeof e)return h(e,r);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}const y=function(e){var r=e.trackTitle,t=e.progressBar,n=e.tracks,i=e.navigator,c=e.timeTrack,u=e.cover,l=e.playButton,s=e.pauseButton,h=e.navigationButton,y=v((0,a.useState)(0),2),b=y[0],x=y[1],E=v((0,a.useState)(n[b]),2),w=E[0],k=E[1],T=v((0,a.useState)(0),2),A=T[0],B=T[1],S=v((0,a.useState)(0),2),M=S[0],N=S[1],C=(0,a.useRef)(),R=(0,a.useRef)(),j=function(){var e=b+1;e<n.length&&(x(e),k(n[e]))};return o().createElement("div",{className:"ra-player"},o().createElement(f,{currentTrack:w,audioRef:C,setDuration:N,progressBarRef:R,trackTitle:r,cover:u}),t&&o().createElement(d,{progressBarRef:R,audioRef:C}),o().createElement(p,{audioRef:C,progressBarRef:R,timeProgress:A,duration:M,setTimeProgress:B,handleNextTrack:j,playButton:l,pauseButton:s}),i&&o().createElement(g,{prev:function(){var e=b-1;e<n.length&&e>=0&&(x(e),k(n[e]))},next:j,navigationButton:h}),c&&o().createElement(m,{timeProgress:A,duration:M,setTimeProgress:B}))};var b=t(72),x=t.n(b),E=t(825),w=t.n(E),k=t(659),T=t.n(k),A=t(56),B=t.n(A),S=t(540),M=t.n(S),N=t(113),C=t.n(N),R=t(560),j={};j.styleTagTransform=C(),j.setAttributes=B(),j.insert=T().bind(null,"head"),j.domAPI=w(),j.insertStyleElement=M(),x()(R.A,j),R.A&&R.A.locals&&R.A.locals;const P=function(e){var r=e.tracks,t=e.trackTitle,n=e.cover,a=e.progressBar,i=e.timeTrack,c=e.navigator,u=e.navigationButton,l=e.playButton,s=e.pauseButton;return o().createElement("div",null,o().createElement(y,{tracks:r,trackTitle:t,cover:n,progressBar:a,timeTrack:i,navigator:c,navigationButton:u,playButton:l,pauseButton:s}))};module.exports=n})();