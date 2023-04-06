/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

var menuOn = document.querySelector(".menu-on");
var menu = document.querySelector(".menu");
var menuOff = document.querySelector(".menu-off");
var feedbackOff = document.querySelector(".feedback-off");
var callOff = document.querySelector(".call-off");
var callIcon = document.querySelector(".icon-5");
var feedbackIcon = document.querySelector(".icon-6");
var call = document.querySelector(".call");
var feedback = document.querySelector(".feedback");
var lid = document.querySelector(".lid");
var opacity = document.querySelector(".opacity");
var openText = document.querySelector(".open-text");
var openSlide = document.querySelector(".open-slaid");
var openCard = document.querySelector(".open-card");
var text = document.querySelector(".conteiner__text");
var logo = document.querySelector(".abusteku-deagulus");
var cadr = document.querySelector(".abusteku-deagulusnew");
var focusFeedback = document.querySelector(".focus-feedback");
var focusCall = document.querySelector(".focus-call");

var _loop = function _loop(index) {
  var scroll = document.querySelector(".adaptivSlayderlasekun");
  var id = "slaid" + index;
  var radio = document.getElementById(id);
  radio.addEventListener("click", function () {
    scroll.scrollLeft = 0;
  });
};

for (var index = 1; index < 17; index++) {
  _loop(index);
}

var _loop2 = function _loop2(_index) {
  var scroll = document.querySelectorAll(".adaptivSlayderlasekun")[1];
  var id = "slaidnew" + _index;
  var radio = document.getElementById(id);
  radio.addEventListener("click", function () {
    scroll.scrollLeft = 0;
  });
};

for (var _index = 1; _index < 9; _index++) {
  _loop2(_index);
}

var _loop3 = function _loop3(_index2) {
  var scroll = document.querySelectorAll(".adaptivSlayderlasekun")[2];
  var id = "slaidlast" + _index2;
  var radio = document.getElementById(id);
  radio.addEventListener("click", function () {
    scroll.scrollLeft = 0;
  });
};

for (var _index2 = 1; _index2 < 6; _index2++) {
  _loop3(_index2);
}

menuOn.addEventListener("click", function () {
  menu.classList.add("active");
  lid.classList.add("opacity");
});
menuOff.addEventListener("click", function () {
  menu.classList.remove("active");
  lid.classList.remove("opacity");
});
feedbackIcon.addEventListener("click", function () {
  feedback.classList.add("active");
  lid.classList.add("opacity");
  menu.classList.remove("active");
  focusFeedback.focus();
});
feedbackOff.addEventListener("click", function () {
  feedback.classList.remove("active");
  lid.classList.remove("opacity");
});
callIcon.addEventListener("click", function () {
  call.classList.add("active");
  lid.classList.add("opacity");
  menu.classList.remove("active");
  focusCall.focus();
});
callOff.addEventListener("click", function () {
  call.classList.remove("active");
  lid.classList.remove("opacity");
});
openText.addEventListener("click", function () {
  text.classList.toggle("show");
});
openSlide.addEventListener("click", function () {
  logo.classList.toggle("show");

  if (logo.classList.contains("show") == true) {
    openSlide.innerHTML = "Скрыть";
  } else {
    openSlide.innerHTML = "Показать все";
  }
});
openCard.addEventListener("click", function () {
  cadr.classList.toggle("show");

  if (cadr.classList.contains("show") == true) {
    openCard.innerHTML = "Скрыть";
  } else {
    openCard.innerHTML = "Показать все";
  }
});

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.js */ "./index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_js__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/CPS.png */ "./img/CPS.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo1.png */ "./img/logo1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo2.png */ "./img/logo2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo3.png */ "./img/logo3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo4.png */ "./img/logo4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo5.png */ "./img/logo5.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo6.png */ "./img/logo6.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo7.png */ "./img/logo7.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo8.png */ "./img/logo8.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>Document</title>\r\n  </head>\r\n  <body>\r\n    <div class=\"key\">\r\n      <section class=\"menu\">\r\n        <header>\r\n          <ul>\r\n            <li>\r\n              <button\r\n                type=\"button\"\r\n                class=\"icon-1 menu-off\"\r\n                aria-label=\"закрыть\"\r\n              ></button>\r\n            </li>\r\n            <li class=\"icon-2\"><p class=\"vh\">CPS</p></li>\r\n            <li>\r\n              <button type=\"button\" class=\"icon-3\" aria-label=\"поиск\"></button>\r\n            </li>\r\n          </ul>\r\n        </header>\r\n        <main>\r\n          <ul>\r\n            <li><a href=\"#\" aria-label=\"Ремонт техники\">Ремонт техники</a></li>\r\n            <li>\r\n              <a href=\"#\" aria-label=\"Услуги и сервисы\">Услуги и сервисы</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" aria-label=\"Корпоративным клиентам\"\r\n                >Корпоративным клиентам</a\r\n              >\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" aria-label=\"Продавцам техники\">Продавцам техники</a>\r\n            </li>\r\n            <li><a href=\"#\" aria-label=\"Партнерам\">Партнерам</a></li>\r\n            <li><a href=\"#\" aria-label=\"Производителям\">Производителям</a></li>\r\n            <li>\r\n              <a href=\"#\" aria-label=\"Наши сервисные центры\"\r\n                >Наши сервисные центры</a\r\n              >\r\n            </li>\r\n            <li><a href=\"#\" aria-label=\"Контакты\">Контакты</a></li>\r\n          </ul>\r\n        </main>\r\n        <footer>\r\n          <ul>\r\n            <li>\r\n              <ul class=\"buttons\">\r\n                <li>\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"icon-5\"\r\n                    aria-label=\"заказать звонок\"\r\n                  ></button>\r\n                </li>\r\n                <li>\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"icon-6\"\r\n                    aria-label=\"обратная связь\"\r\n                  ></button>\r\n                </li>\r\n                <li>\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"icon-7\"\r\n                    aria-label=\"контакты\"\r\n                  ></button>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <li>\r\n              <a href=\"mailto=mail@cps.com\" aria-label=\"Почта\">mail@cps.com</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"8 800 890 8900\" aria-label=\"Номер телефона\"\r\n                >8 800 890 8900</a\r\n              >\r\n            </li>\r\n          </ul>\r\n          <ul class=\"buttons\">\r\n            <li><button type=\"button\">RU</button></li>\r\n            <li><button type=\"button\">EN</button></li>\r\n            <li><button type=\"button\">CH</button></li>\r\n          </ul>\r\n        </footer>\r\n      </section>\r\n      <section class=\"lid\">\r\n        <header>\r\n          <ul>\r\n            <li>\r\n              <button\r\n                type=\"button\"\r\n                class=\"icon-1 menu-on\"\r\n                aria-label=\"меню\"\r\n              ></button\r\n              ><span class=\"line\"></span>\r\n            </li>\r\n            <li class=\"icon-2\"><p class=\"vh\">CPS</p></li>\r\n            <li>\r\n              <button\r\n                type=\"button\"\r\n                class=\"icon-5\"\r\n                aria-label=\"заказать звонок\"\r\n              ></button>\r\n            </li>\r\n            <li>\r\n              <button\r\n                type=\"button\"\r\n                class=\"icon-6\"\r\n                aria-label=\"обратная связь\"\r\n              ></button>\r\n            </li>\r\n            <li>\r\n              <button\r\n                type=\"button\"\r\n                class=\"icon-7\"\r\n                aria-label=\"контакты\"\r\n              ></button>\r\n            </li>\r\n            <li>\r\n              <span class=\"line\"></span\r\n              ><button\r\n                type=\"button\"\r\n                class=\"icon-3\"\r\n                aria-label=\"оставить заявку\"\r\n              ></button>\r\n            </li>\r\n            <li>\r\n              <button\r\n                type=\"button\"\r\n                class=\"icon-4\"\r\n                aria-label=\"статус ремонта\"\r\n              ></button>\r\n            </li>\r\n          </ul>\r\n        </header>\r\n        <main>\r\n          <h1>Услуги и сервисы</h1>\r\n          <div class=\"none\">\r\n            <button type=\"button\" class=\"icon-1_position\">\r\n              Оставить заявку\r\n            </button>\r\n            <button type=\"button\" class=\"icon-3_position\">\r\n              Статус ремонта\r\n            </button>\r\n          </div>\r\n          <nav class=\"scroll\">\r\n            <ul>\r\n              <li>\r\n                <a href=\"#\" aria-label=\"Ремонтируемые устройства\"\r\n                  >Ремонтируемые устройства</a\r\n                >\r\n              </li>\r\n              <li>\r\n                <a href=\"#\" aria-label=\"Дополнительные услуги\"\r\n                  >Дополнительные услуги</a\r\n                >\r\n              </li>\r\n              <li>\r\n                <a href=\"#\" aria-label=\"Цены на услуги\">Цены на услуги</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\" aria-label=\"Адреса сервисных центров\"\r\n                  >Адреса сервисных центров</a\r\n                >\r\n              </li>\r\n              <li>\r\n                <a href=\"#\" aria-label=\"Специальные цены\">Специальные цены</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\" aria-label=\"Ремонтируемые бренды\"\r\n                  >Ремонтируемые бренды</a\r\n                >\r\n              </li>\r\n              <li><a href=\"#\" aria-label=\"Отзывы\">Отзывы</a></li>\r\n            </ul>\r\n          </nav>\r\n          <section class=\"conteiner\">\r\n            <div class=\"conteiner_2\">\r\n              <p class=\"conteiner__text\">\r\n                Мы являемся авторизованным сервисным центром по ремонту техники\r\n                Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с\r\n                официальной гарантией производителя. <br />\r\n                <br />\r\n                Мы успешно работаем с 1992 года и заслужили репутацию надежного\r\n                партнера, что подтверждает большое количество постоянных\r\n                клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям\r\n                и, в свою очередь, советуют нас родным и близким. Lorem ipsum\r\n                dolor, sit amet consectetur adipisicing elit. Rerum vitae\r\n                suscipit dolores in, eum neque! Laboriosam esse sed nihil\r\n                recusandae reprehenderit soluta in aperiam rem eius! Quas animi\r\n                fugit dolor. Lorem ipsum dolor sit amet, consectetur adipisicing\r\n                elit. Porro repellat quae illum provident. Nulla dicta nemo\r\n                dignissimos recusandae, sed dolore laudantium architecto enim ea\r\n                vel nam sequi exercitationem totam dolorum.\r\n              </p>\r\n              <button type=\"button\" class=\"conteiner__bth open-text\">\r\n                Читать далее\r\n              </button>\r\n            </div>\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"логотип компании CPS\" />\r\n          </section>\r\n          <section class=\"conteiner-2\">\r\n            <div class=\"adaptivSlayder\">\r\n              <h2 class=\"title\">Ремонт техники различных брендов</h2>\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaid1\" checked />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaid2\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaid3\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaid4\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaid5\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaid6\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaid7\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaid8\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaid9\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaid10\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaid11\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaid12\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaid13\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaid14\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaid15\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaid16\" />\r\n              <div class=\"adaptivSlayderlasekun\">\r\n                <div class=\"abusteku-deagulus\">\r\n                  <ul>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"logo1\"\r\n                        aria-label=\"Информация о бренде Lenovo\"\r\n                        ><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Lenovo\"\r\n                      /></a>\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"logo2\"\r\n                        aria-label=\"Информация о бренде Samsung\"\r\n                        ><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Samsung\"\r\n                      /></a>\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"logo3\"\r\n                        aria-label=\"Информация о бренде Acer\"\r\n                        ><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Acer\"\r\n                      /></a>\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"logo4\"\r\n                        aria-label=\"Информация о бренде hp\"\r\n                        ><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"hp\"\r\n                      /></a>\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"logo5\"\r\n                        aria-label=\"Информация о бренде Bosch\"\r\n                        ><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Bosch\"\r\n                      /></a>\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"logo6\"\r\n                        aria-label=\"Информация о бренде ViewSonic\"\r\n                        ><img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"ViewSonic\"\r\n                      /></a>\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"logo7\"\r\n                        aria-label=\"Информация о бренде Apple\"\r\n                        ><img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Apple\"\r\n                      /></a>\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"logo8\"\r\n                        aria-label=\"Информация о бренде Sony\"\r\n                        ><img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Sony\"\r\n                      /></a>\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"logo2\"\r\n                        aria-label=\"Информация о бренде Samsung\"\r\n                        ><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Samsung\"\r\n                      /></a>\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"logo3\"\r\n                        aria-label=\"Информация о бренде Acer\"\r\n                        ><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Acer\"\r\n                      /></a>\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"logo4\"\r\n                        aria-label=\"Информация о бренде hp\"\r\n                        ><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"hp\"\r\n                      /></a>\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"logo5\"\r\n                        aria-label=\"Информация о бренде Bosch\"\r\n                        ><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Bosch\"\r\n                      /></a>\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"logo6\"\r\n                        aria-label=\"Информация о бренде ViewSonic\"\r\n                        ><img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"ViewSonic\"\r\n                      /></a>\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"logo7\"\r\n                        aria-label=\"Информация о бренде Apple\"\r\n                        ><img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Apple\"\r\n                      /></a>\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"logo8\"\r\n                        aria-label=\"Информация о бренде Sony\"\r\n                        ><img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Sony\"\r\n                      /></a>\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"logo8\"\r\n                        aria-label=\"Информация о бренде Sony\"\r\n                        ><img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Sony\"\r\n                      /></a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n              <div class=\"kadoves\">\r\n                <label for=\"slaid1\"></label>\r\n                <label for=\"slaid2\"></label>\r\n                <label for=\"slaid3\"></label>\r\n                <label for=\"slaid4\"></label>\r\n                <label for=\"slaid5\"></label>\r\n                <label for=\"slaid6\"></label>\r\n                <label for=\"slaid7\"></label>\r\n                <label for=\"slaid8\"></label>\r\n                <label for=\"slaid9\"></label>\r\n                <label for=\"slaid10\"></label>\r\n                <label for=\"slaid11\"></label>\r\n                <label for=\"slaid12\"></label>\r\n                <label for=\"slaid13\"></label>\r\n                <label for=\"slaid14\"></label>\r\n                <label for=\"slaid15\"></label>\r\n                <label for=\"slaid16\"></label>\r\n              </div>\r\n              <button type=\"button\" class=\"conteiner__bth open-slaid\">\r\n                Показать все\r\n              </button>\r\n            </div>\r\n            <div class=\"adaptivSlayder\">\r\n              <h2 class=\"title\">Ремонт различных видов техники</h2>\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaidnew1\" checked />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaidnew2\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaidnew3\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaidnew4\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaidnew5\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaidnew6\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaidnew7\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaidnew8\" />\r\n              <div class=\"adaptivSlayderlasekun\">\r\n                <div class=\"abusteku-deagulusnew\">\r\n                  <ul>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"cadre1\"\r\n                        aria-label=\"Информация о ремонте ноутбуков\"\r\n                        >Ремонт ноутбуков</a\r\n                      >\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"cadre2\"\r\n                        aria-label=\"Информация о ремонте планшетов\"\r\n                        >Ремонт планшетов</a\r\n                      >\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"cadre3\"\r\n                        aria-label=\"Информация о ремонте ПК\"\r\n                        >Ремонт ПК</a\r\n                      >\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"cadre4\"\r\n                        aria-label=\"Информация о ремонте мониторов\"\r\n                        >Ремонт мониторов</a\r\n                      >\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"cadre5\"\r\n                        aria-label=\"Информация о ремонте мониторов\"\r\n                        >Ремонт мониторов</a\r\n                      >\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"cadre6\"\r\n                        aria-label=\"Информация о ремонте мониторов\"\r\n                        >Ремонт мониторов</a\r\n                      >\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"cadre7\"\r\n                        aria-label=\"Информация о ремонте мониторов\"\r\n                        >Ремонт мониторов</a\r\n                      >\r\n                    </li>\r\n                    <li>\r\n                      <a\r\n                        href=\"#\"\r\n                        class=\"cadre8\"\r\n                        aria-label=\"Информация о ремонте мониторов\"\r\n                        >Ремонт мониторов</a\r\n                      >\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n              <div class=\"kadoves\">\r\n                <label for=\"slaidnew1\"></label>\r\n                <label for=\"slaidnew2\"></label>\r\n                <label for=\"slaidnew3\"></label>\r\n                <label for=\"slaidnew4\"></label>\r\n                <label for=\"slaidnew5\"></label>\r\n                <label for=\"slaidnew6\"></label>\r\n                <label for=\"slaidnew7\"></label>\r\n                <label for=\"slaidnew8\"></label>\r\n              </div>\r\n              <button type=\"button\" class=\"conteiner__bth open-card\">\r\n                Показать все\r\n              </button>\r\n            </div>\r\n            <div class=\"adaptivSlayder\">\r\n              <h2 class=\"title\">Ремонт различных видов техники</h2>\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaidlast1\" checked />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaidlast2\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaidlast3\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaidlast4\" />\r\n              <input type=\"radio\" name=\"kadoves\" id=\"slaidlast5\" />\r\n              <div class=\"adaptivSlayderlasekun\">\r\n                <div class=\"new-head\">\r\n                  <p>Ремонтные услуги</p>\r\n                  <p>Цена</p>\r\n                  <p>Срок</p>\r\n                </div>\r\n                <div class=\"abusteku-deaguluslast\">\r\n                  <div class=\"price1\">\r\n                    <p class=\"caption\">Ремонтные услуги</p>\r\n                    <p>Диагностика</p>\r\n                    <p class=\"caption\">Цена</p>\r\n                    <p>Бесплатно</p>\r\n                    <p class=\"caption\">Срок</p>\r\n                    <p>30 мин</p>\r\n                    <a href=\"#\" aria-label=\"Заказать\">Заказать</a>\r\n                  </div>\r\n                  <div class=\"price2\">\r\n                    <p class=\"caption\">Ремонтные услуги</p>\r\n                    <p>Замена дисплея</p>\r\n                    <p class=\"caption\">Цена</p>\r\n                    <p>1 000 ₽</p>\r\n                    <p class=\"caption\">Срок</p>\r\n                    <p>30-120 мин</p>\r\n                    <a href=\"#\" aria-label=\"Заказать\">Заказать</a>\r\n                  </div>\r\n                  <div class=\"price3\">\r\n                    <p class=\"caption\">Ремонтные услуги</p>\r\n                    <p>Замена полифонического динамика</p>\r\n                    <p class=\"caption\">Цена</p>\r\n                    <p>1 000 ₽</p>\r\n                    <p class=\"caption\">Срок</p>\r\n                    <p>30-120 мин</p>\r\n                    <a href=\"#\" aria-label=\"Заказать\">Заказать</a>\r\n                  </div>\r\n                  <div class=\"price4\">\r\n                    <p class=\"caption\">Ремонтные услуги</p>\r\n                    <p>Тестирование с выдачей технического заключения</p>\r\n                    <p class=\"caption\">Цена</p>\r\n                    <p>1 000 ₽</p>\r\n                    <p class=\"caption\">Срок</p>\r\n                    <p>30-120 мин</p>\r\n                    <a href=\"#\" aria-label=\"Заказать\">Заказать</a>\r\n                  </div>\r\n                  <div class=\"price5\">\r\n                    <p class=\"caption\">Ремонтные услуги</p>\r\n                    <p>Замена программного обеспечения</p>\r\n                    <p class=\"caption\">Цена</p>\r\n                    <p>1 000 ₽</p>\r\n                    <p class=\"caption\">Срок</p>\r\n                    <p>30-120 мин</p>\r\n                    <a href=\"#\" aria-label=\"Заказать\">Заказать</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"kadoves\">\r\n                <label for=\"slaidlast1\"></label>\r\n                <label for=\"slaidlast2\"></label>\r\n                <label for=\"slaidlast3\"></label>\r\n                <label for=\"slaidlast4\"></label>\r\n                <label for=\"slaidlast5\"></label>\r\n              </div>\r\n            </div>\r\n            <p class=\"rubric\">\r\n              Все цены указаны с учетом НДС. Стоимость ремонта указана на\r\n              единичную услугу. Для получения коммерческого предложения на\r\n              постоянное обслуживание, оставьте заявку.<br /><br /><a\r\n                href=\"#\"\r\n                aria-label=\"Получить коммерческое предложение\"\r\n                >Получить коммерческое предложение</a\r\n              >\r\n            </p>\r\n          </section>\r\n        </main>\r\n        <footer>\r\n          <ul>\r\n            <li>© 2019 CPS<br />Разработано командой Apesong</li>\r\n            <li>Политика конфиденциальности</li>\r\n            <li>\r\n              Информация, размещенная на данной странице, не является публичной\r\n              офертой\r\n            </li>\r\n          </ul>\r\n        </footer>\r\n      </section>\r\n      <section class=\"feedback\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"icon-1 feedback-off\"\r\n          aria-label=\"закрыть\"\r\n        ></button>\r\n        <header>\r\n          <h1>Обратная связь</h1>\r\n        </header>\r\n        <main>\r\n          <form action=\"\" class=\"form\">\r\n            <input type=\"text\" placeholder=\"Имя\" class=\"focus-feedback\" />\r\n            <input type=\"text\" name=\"\" id=\"\" placeholder=\"Телефон\" />\r\n            <input type=\"email\" name=\"\" id=\"\" placeholder=\"Электронная почта\" />\r\n            <input type=\"text\" placeholder=\"Сообщение\" />\r\n            <p>\r\n              Нажимая “отправить”, вы даете согласие на\r\n              <a href=\"#\" aria-label=\"Согласие на обработку персональных данных\"\r\n                >обработку персональных данных</a\r\n              >\r\n              и соглашаетесь с нашей\r\n              <a href=\"#\" aria-label=\"Политика конфиденциальности\"\r\n                >политикой конфиденциальности</a\r\n              >\r\n            </p>\r\n            <input type=\"submit\" class=\"submit\" value=\"Отправить\" />\r\n          </form>\r\n        </main>\r\n      </section>\r\n      <section class=\"call\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"icon-1 call-off\"\r\n          aria-label=\"закрыть\"\r\n        ></button>\r\n        <header>\r\n          <h1>Заказать звонок</h1>\r\n        </header>\r\n        <main>\r\n          <form action=\"\" class=\"form\">\r\n            <input\r\n              type=\"text\"\r\n              name=\"\"\r\n              id=\"\"\r\n              placeholder=\"Телефон\"\r\n              class=\"focus-call\"\r\n            />\r\n            <p>\r\n              Нажимая “отправить”, вы даете согласие на\r\n              <a href=\"#\" aria-label=\"Согласие на обработку персональных данных\"\r\n                >обработку персональных данных</a\r\n              >\r\n              и соглашаетесь с нашей\r\n              <a href=\"#\" aria-label=\"Политика конфиденциальности\"\r\n                >политикой конфиденциальности</a\r\n              >\r\n            </p>\r\n            <button type=\"submit\" class=\"submit\" aria-label=\"Отправить\">\r\n              Отправить\r\n            </button>\r\n          </form>\r\n        </main>\r\n      </section>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./img/CPS.png":
/*!*********************!*\
  !*** ./img/CPS.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/CPS.png";

/***/ }),

/***/ "./img/logo1.png":
/*!***********************!*\
  !*** ./img/logo1.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo1.png";

/***/ }),

/***/ "./img/logo2.png":
/*!***********************!*\
  !*** ./img/logo2.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo2.png";

/***/ }),

/***/ "./img/logo3.png":
/*!***********************!*\
  !*** ./img/logo3.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo3.png";

/***/ }),

/***/ "./img/logo4.png":
/*!***********************!*\
  !*** ./img/logo4.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo4.png";

/***/ }),

/***/ "./img/logo5.png":
/*!***********************!*\
  !*** ./img/logo5.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo5.png";

/***/ }),

/***/ "./img/logo6.png":
/*!***********************!*\
  !*** ./img/logo6.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo6.png";

/***/ }),

/***/ "./img/logo7.png":
/*!***********************!*\
  !*** ./img/logo7.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo7.png";

/***/ }),

/***/ "./img/logo8.png":
/*!***********************!*\
  !*** ./img/logo8.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo8.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-b0975e"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map