(()=>{var e={697:()=>{var e=document.querySelector(".menu-on"),t=document.querySelector(".menu"),n=document.querySelector(".menu-off"),o=document.querySelector(".feedback-off"),s=document.querySelector(".call-off"),c=document.querySelector(".icon-5"),i=document.querySelector(".icon-6"),d=document.querySelector(".call"),r=document.querySelector(".feedback"),a=document.querySelector(".lid"),u=(document.querySelector(".opacity"),document.querySelector(".open-text")),l=document.querySelector(".open-slaid"),m=document.querySelector(".open-card"),v=document.querySelector(".conteiner__text"),f=document.querySelector(".abusteku-deagulus"),L=document.querySelector(".abusteku-deagulusnew");e.addEventListener("click",(function(){t.classList.add("active"),a.classList.add("opacity")})),n.addEventListener("click",(function(){t.classList.remove("active"),a.classList.remove("opacity")})),i.addEventListener("click",(function(){r.classList.add("active"),a.classList.add("opacity"),t.classList.remove("active")})),o.addEventListener("click",(function(){r.classList.remove("active"),a.classList.remove("opacity")})),c.addEventListener("click",(function(){d.classList.add("active"),a.classList.add("opacity"),t.classList.remove("active")})),s.addEventListener("click",(function(){d.classList.remove("active"),a.classList.remove("opacity")})),u.addEventListener("click",(function(){v.classList.toggle("show")})),l.addEventListener("click",(function(){f.classList.toggle("show"),1==f.classList.contains("show")?l.innerHTML="Скрыть":l.innerHTML="Показать все"})),m.addEventListener("click",(function(){L.classList.toggle("show"),1==L.classList.contains("show")?m.innerHTML="Скрыть":m.innerHTML="Показать все"}))},483:function(){!function(){"use strict";function e(e){var t=!0,n=!1,o=null,s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function i(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!s[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}function d(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function r(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))}function a(n){n.metaKey||n.altKey||n.ctrlKey||(c(e.activeElement)&&d(e.activeElement),t=!0)}function u(e){t=!1}function l(e){c(e.target)&&(t||i(e.target))&&d(e.target)}function m(e){c(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),r(e.target))}function v(e){"hidden"===document.visibilityState&&(n&&(t=!0),f())}function f(){document.addEventListener("mousemove",p),document.addEventListener("mousedown",p),document.addEventListener("mouseup",p),document.addEventListener("pointermove",p),document.addEventListener("pointerdown",p),document.addEventListener("pointerup",p),document.addEventListener("touchmove",p),document.addEventListener("touchstart",p),document.addEventListener("touchend",p)}function L(){document.removeEventListener("mousemove",p),document.removeEventListener("mousedown",p),document.removeEventListener("mouseup",p),document.removeEventListener("pointermove",p),document.removeEventListener("pointerdown",p),document.removeEventListener("pointerup",p),document.removeEventListener("touchmove",p),document.removeEventListener("touchstart",p),document.removeEventListener("touchend",p)}function p(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,L())}document.addEventListener("keydown",a,!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("visibilitychange",v,!0),f(),e.addEventListener("focus",l,!0),e.addEventListener("blur",m,!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()},370:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},472:(e,t,n)=>{"use strict";e.exports=n.p+"img/CPS.1b0befc4bad54498a22a.png"},465:(e,t,n)=>{"use strict";e.exports=n.p+"img/logo1.0b1d2726ba5acb422d7e.png"},752:(e,t,n)=>{"use strict";e.exports=n.p+"img/logo2.f06ff2dba0ec1888300f.png"},389:(e,t,n)=>{"use strict";e.exports=n.p+"img/logo3.389d5a2aab2e2bef617b.png"},214:(e,t,n)=>{"use strict";e.exports=n.p+"img/logo4.b7642dc10b869992acc1.png"},825:(e,t,n)=>{"use strict";e.exports=n.p+"img/logo5.ed6936cd1071347580e2.png"},202:(e,t,n)=>{"use strict";e.exports=n.p+"img/logo6.7528e940b4e4c02d48f8.png"},753:(e,t,n)=>{"use strict";e.exports=n.p+"img/logo7.ffa619e40f762e19e723.png"},346:(e,t,n)=>{"use strict";e.exports=n.p+"img/logo8.7f1d61dcd72ac43c0995.png"}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var c=t[o]={exports:{}};return e[o].call(c.exports,c,c.exports,n),c.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.b=document.baseURI||self.location.href,(()=>{"use strict";n(483);var e=n(370),t=n.n(e),o=new URL(n(472),n.b),s=new URL(n(465),n.b),c=new URL(n(752),n.b),i=new URL(n(389),n.b),d=new URL(n(214),n.b),r=new URL(n(825),n.b),a=new URL(n(202),n.b),u=new URL(n(753),n.b),l=new URL(n(346),n.b);t()(o),t()(s),t()(c),t()(i),t()(d),t()(r),t()(a),t()(u),t()(l);n(697)})()})();