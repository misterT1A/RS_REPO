/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var _view_header_header_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/header/header-view */ \"./src/app/view/header/header-view.js\");\n/* harmony import */ var _view_footer_footer_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/footer/footer-view */ \"./src/app/view/footer/footer-view.js\");\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/style.scss */ \"./src/style/style.scss\");\n/* harmony import */ var _view_main_main_wrapper_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/main/main-wrapper-view */ \"./src/app/view/main/main-wrapper-view.js\");\n\n\n\n\nclass App {\n  constructor() {\n    this.header = null;\n    this.main = null;\n    this.footer = null;\n    this.createView();\n  }\n  createView() {\n    this.header = new _view_header_header_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.main = new _view_main_main_wrapper_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    this.footer = new _view_footer_footer_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    document.body.append(this.header.getHTMLElement(), this.main.getHTMLElement(), this.footer.getHTMLElement());\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/app.js?");

/***/ }),

/***/ "./src/app/util/element-creator.js":
/*!*****************************************!*\
  !*** ./src/app/util/element-creator.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ElementCreator; }\n/* harmony export */ });\n/**\r\n * @typedef {{\r\n *  tag: string,\r\n * classNames:Array<string>,\r\n * textContent: string,\r\n * attributes: Array,\r\n * callback: function,\r\n * }} ElementParams\r\n */\n\nclass ElementCreator {\n  /**\r\n   *\r\n   * @param {ElementParams} param\r\n   */\n  constructor(param) {\n    this.element = null;\n    this.createElement(param);\n  }\n  createElement(param) {\n    this.element = document.createElement(param.tag);\n    this.setCssClasses(param.classNames);\n    this.setTextContent(param.textContent, param.textHtml);\n    this.setCallback(param.callback);\n    this.setAllAttribute(param.attributes);\n  }\n\n  /**\r\n   * @returns {HTMLElement}\r\n   */\n  getElement() {\n    return this.element;\n  }\n\n  /**\r\n   * @param {HTMLElement | ElementCreator} element\r\n   */\n  addInnerElement() {\n    for (var _len = arguments.length, elements = new Array(_len), _key = 0; _key < _len; _key++) {\n      elements[_key] = arguments[_key];\n    }\n    elements.forEach(elem => {\n      if (elem instanceof ElementCreator) {\n        this.element.append(elem.getElement());\n      } else {\n        this.element.append(elem);\n      }\n    });\n  }\n\n  /**\r\n   * @param {Array<string>} cssClasses\r\n   */\n  setCssClasses(cssClasses) {\n    if (cssClasses) {\n      cssClasses.forEach(cssClass => this.element.classList.add(cssClass));\n    }\n  }\n  setAllAttribute(attributes) {\n    if (attributes) {\n      Object.keys(attributes).forEach(item => {\n        this.element.setAttribute(item, attributes[item]);\n      });\n    }\n  }\n\n  /**\r\n   * @param {string} text\r\n   */\n  setTextContent(text, html) {\n    if (html) {\n      if (text) {\n        this.element.innerHTML = text;\n      }\n    } else {\n      this.element.textContent = text;\n    }\n  }\n\n  /**\r\n   * @param {function} callback\r\n   */\n  setCallback(callback) {\n    if (typeof callback === 'function') {\n      this.element.addEventListener('click', event => callback(event));\n    }\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/util/element-creator.js?");

/***/ }),

/***/ "./src/app/view/footer/footer-li-view.js":
/*!***********************************************!*\
  !*** ./src/app/view/footer/footer-li-view.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FoLinkView; }\n/* harmony export */ });\n/* harmony import */ var _util_element_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/element-creator */ \"./src/app/util/element-creator.js\");\n/* harmony import */ var _img_rs_school_js_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/rs_school_js.svg */ \"./src/img/rs_school_js.svg\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view */ \"./src/app/view/view.js\");\n\n\n\nconst CssClasses = {\n  LI: 'footer__item'\n};\nclass FoLinkView extends _view__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(content) {\n    const params = {\n      tag: 'li',\n      classNames: [CssClasses.LI]\n    };\n    super(params);\n    this.addInner(content);\n  }\n\n  // configureView(content) {\n  //   if (content.view) {\n  //     const a = new ElementCreator({\n  //       tag: 'a',\n  //       textContent: content.text,\n  //       attributes: content.attributes,\n  //       classNames: content.cssClasses,\n  //     });\n\n  //     if (content.innerTag) {\n  //       const innerElement = new ElementCreator({\n  //         tag: content.innerTag,\n  //         textContent: null,\n  //         attributes: {\n  //           alt: 'rsLogo',\n  //           src: rsLogo,\n  //         },\n  //         classNames: null,\n  //       });\n\n  //       a.addInnerElement(innerElement);\n  //     }\n\n  //     this.elementCreator.addInnerElement(a);\n  //   } else {\n  //     this.elementCreator.setTextContent(content.text);\n  //   }\n  // }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/footer/footer-li-view.js?");

/***/ }),

/***/ "./src/app/view/footer/footer-ul-view.js":
/*!***********************************************!*\
  !*** ./src/app/view/footer/footer-ul-view.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FoUlView; }\n/* harmony export */ });\n/* harmony import */ var _util_element_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/element-creator */ \"./src/app/util/element-creator.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ \"./src/app/view/view.js\");\n/* harmony import */ var _footer_li_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer-li-view */ \"./src/app/view/footer/footer-li-view.js\");\n/* harmony import */ var _img_rs_school_js_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/rs_school_js.svg */ \"./src/img/rs_school_js.svg\");\n\n\n\n\nconst CssClasses = {\n  UL: 'footer__list'\n};\nconst Content = [{\n  view: true,\n  innerTag: false,\n  textView: 'Mi GitHub',\n  attributes: {\n    href: 'https://github.com/misterT1A',\n    target: '_blank'\n  },\n  cssClasses: ['git__link']\n}, {\n  view: false,\n  innerTag: false,\n  text: '2023'\n}, {\n  view: true,\n  innerTag: 'img',\n  innerTagAtrib: {\n    alt: 'rsLogo',\n    src: _img_rs_school_js_svg__WEBPACK_IMPORTED_MODULE_3__\n  },\n  text: '',\n  attributes: {\n    href: 'https://rs.school/js/',\n    target: '_blank'\n  },\n  cssClasses: ['rs__link']\n}];\nclass FoUlView extends _view__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'ul',\n      classNames: [CssClasses.UL]\n    };\n    super(params);\n    this.configureView();\n  }\n  configureView() {\n    Content.forEach(param => {\n      const li = new _footer_li_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](param);\n      this.elementCreator.addInnerElement(li.getHTMLElement());\n    });\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/footer/footer-ul-view.js?");

/***/ }),

/***/ "./src/app/view/footer/footer-view.js":
/*!********************************************!*\
  !*** ./src/app/view/footer/footer-view.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FooterView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ \"./src/app/view/view.js\");\n/* harmony import */ var _footer_ul_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer-ul-view */ \"./src/app/view/footer/footer-ul-view.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/app/view/footer/style.scss\");\n\n\n\nconst CssClasses = {\n  FOOTER: 'footer'\n};\nclass FooterView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'footer',\n      classNames: [CssClasses.FOOTER]\n    };\n    super(params);\n    this.configureView();\n  }\n  configureView() {\n    this.elementCreator.addInnerElement(new _footer_ul_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().getHTMLElement());\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/footer/footer-view.js?");

/***/ }),

/***/ "./src/app/view/header/burger-btn-view.js":
/*!************************************************!*\
  !*** ./src/app/view/header/burger-btn-view.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BurgerBtnView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ \"./src/app/view/view.js\");\n\nconst CssClasses = {\n  BURGER: 'burger'\n};\nclass BurgerBtnView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(navElement) {\n    const params = {\n      tag: 'button',\n      classNames: [CssClasses.BURGER]\n    };\n    super(params);\n    this.addElementsDOM(navElement);\n    this.addListner();\n  }\n  addElementsDOM(navElement) {\n    this.body = document.querySelector('body');\n    this.nav = navElement;\n    // this.nav = HeaderView.nav;\n  }\n\n  addListner() {\n    const elem = this.elementCreator.getElement();\n    elem.addEventListener('click', this.toggleNav);\n  }\n  toggleNav = () => {\n    this.nav.classList.toggle('drop');\n    this.body.classList.toggle('overflow');\n  };\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/header/burger-btn-view.js?");

/***/ }),

/***/ "./src/app/view/header/header-view.js":
/*!********************************************!*\
  !*** ./src/app/view/header/header-view.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HeaderView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ \"./src/app/view/view.js\");\n/* harmony import */ var _burger_btn_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger-btn-view */ \"./src/app/view/header/burger-btn-view.js\");\n/* harmony import */ var _nav_nav_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav-view */ \"./src/app/view/header/nav/nav-view.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./src/app/view/header/style.scss\");\n\n\n\n\nconst CssClasses = {\n  HEADER: 'header'\n};\nclass HeaderView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'header',\n      classNames: [CssClasses.HEADER]\n    };\n    super(params);\n    this.configureView();\n  }\n  configureView() {\n    const nav = new _nav_nav_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().getHTMLElement();\n    this.elementCreator.addInnerElement(nav, new _burger_btn_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](nav).getHTMLElement());\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/header/header-view.js?");

/***/ }),

/***/ "./src/app/view/header/nav/links/links-view.js":
/*!*****************************************************!*\
  !*** ./src/app/view/header/nav/links/links-view.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LinkView; }\n/* harmony export */ });\n/* harmony import */ var _util_element_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../util/element-creator */ \"./src/app/util/element-creator.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../view */ \"./src/app/view/view.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/app/view/header/nav/links/style.scss\");\n\n\n\nconst CssClasses = {\n  LI: 'nav_item'\n};\nclass LinkView extends _view__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(item) {\n    const params = {\n      tag: 'li',\n      classNames: [CssClasses.LI]\n    };\n    super(params);\n    this.configureView(item);\n  }\n  configureView(item) {\n    const a = new _util_element_creator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      tag: 'a',\n      textContent: item.text,\n      attributes: item.attributes\n    });\n    this.elementCreator.addInnerElement(a);\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/header/nav/links/links-view.js?");

/***/ }),

/***/ "./src/app/view/header/nav/links/ul-view.js":
/*!**************************************************!*\
  !*** ./src/app/view/header/nav/links/ul-view.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UlView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../view */ \"./src/app/view/view.js\");\n/* harmony import */ var _links_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./links-view */ \"./src/app/view/header/nav/links/links-view.js\");\n\n\nconst CssClasses = {\n  UL: 'nav__list'\n};\nconst textContent = [{\n  text: 'About me',\n  attributes: {\n    href: '\"#aboutMe\"'\n  }\n}, {\n  text: 'Contacts',\n  attributes: {\n    href: '\"#contacts\"'\n  }\n}, {\n  text: 'Code',\n  attributes: {\n    href: '\"#code\"'\n  }\n}, {\n  text: 'Skills',\n  attributes: {\n    href: '\"#skills\"'\n  }\n}, {\n  text: 'Education',\n  attributes: {\n    href: '\"#education\"'\n  }\n}];\nclass UlView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'ul',\n      classNames: [CssClasses.UL],\n      textContent: ''\n    };\n    super(params);\n    this.configureView();\n  }\n  configureView() {\n    textContent.forEach(item => {\n      const li = new _links_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](item);\n      this.elementCreator.addInnerElement(li.getHTMLElement());\n    });\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/header/nav/links/ul-view.js?");

/***/ }),

/***/ "./src/app/view/header/nav/nav-view.js":
/*!*********************************************!*\
  !*** ./src/app/view/header/nav/nav-view.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ \"./src/app/view/view.js\");\n/* harmony import */ var _links_ul_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./links/ul-view */ \"./src/app/view/header/nav/links/ul-view.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/app/view/header/nav/style.scss\");\n\n\n\nconst CssClasses = {\n  NAV: 'nav'\n};\nclass NavView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'nav',\n      classNames: [CssClasses.NAV],\n      textContent: ''\n    };\n    super(params);\n    this.addElementsDOM();\n    this.addListner();\n    this.configureView();\n  }\n  addElementsDOM() {\n    this.body = document.querySelector('body');\n  }\n  addListner() {\n    const elem = this.elementCreator.getElement();\n    elem.addEventListener('click', this.toggleNav.bind(this));\n  }\n  toggleNav(event) {\n    // if (event.target.classList.contains('nav')) {\n    this.elementCreator.getElement().classList.toggle('drop');\n    this.body.classList.toggle('overflow');\n    // }\n  }\n\n  configureView() {\n    this.elementCreator.addInnerElement(new _links_ul_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.elementCreator.getElement()).getHTMLElement());\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/header/nav/nav-view.js?");

/***/ }),

/***/ "./src/app/view/main/leftpart/content/contacts/contact-li.js":
/*!*******************************************************************!*\
  !*** ./src/app/view/main/leftpart/content/contacts/contact-li.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactLiView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n\nconst CssClasses = {\n  LI: 'contact_item'\n};\nclass ContactLiView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(content) {\n    const params = {\n      tag: 'li',\n      textContent: content.text,\n      textHtml: true,\n      classNames: [CssClasses.LI]\n    };\n    super(params);\n    this.addInner(content);\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/leftpart/content/contacts/contact-li.js?");

/***/ }),

/***/ "./src/app/view/main/leftpart/content/contacts/contact-ul.js":
/*!*******************************************************************!*\
  !*** ./src/app/view/main/leftpart/content/contacts/contact-ul.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactUlView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n/* harmony import */ var _contact_li__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-li */ \"./src/app/view/main/leftpart/content/contacts/contact-li.js\");\n\n\nconst CssClasses = {\n  UL: 'contact_list'\n};\nconst Content = [{\n  textHtml: true,\n  text: 'Discord:<br>100kgofmeat'\n}, {\n  textHtml: true,\n  text: 'Address:<br>Russia, N.Novgorod'\n}, {\n  textHtml: true,\n  view: true,\n  text: 'Email:<br>',\n  textView: 'paradogss@mail.ru',\n  attributes: {\n    href: 'mailto:paradogss@mail.ru',\n    target: '_blank'\n  },\n  cssClasses: []\n}];\nclass ContactUlView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'ul',\n      classNames: [CssClasses.UL]\n    };\n    super(params);\n    this.configureView();\n  }\n  configureView() {\n    Content.forEach(param => {\n      const li = new _contact_li__WEBPACK_IMPORTED_MODULE_1__[\"default\"](param);\n      this.elementCreator.addInnerElement(li.getHTMLElement());\n    });\n    // this.elementCreator.addInnerElement(\n    //   new ContactTitleView().getHTMLElement(),\n    // );\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/leftpart/content/contacts/contact-ul.js?");

/***/ }),

/***/ "./src/app/view/main/leftpart/content/contacts/contacts-title-view.js":
/*!****************************************************************************!*\
  !*** ./src/app/view/main/leftpart/content/contacts/contacts-title-view.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactTitleView; }\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/app/view/main/leftpart/content/contacts/style.scss\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n\n\nconst CssClasses = {\n  H2: 'mini__title'\n};\nclass ContactTitleView extends _view__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'h2',\n      textContent: 'My Contacts',\n      classNames: [CssClasses.H2],\n      attributes: {\n        id: 'contacts'\n      }\n    };\n    super(params);\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/leftpart/content/contacts/contacts-title-view.js?");

/***/ }),

/***/ "./src/app/view/main/leftpart/content/education/education-li-view.js":
/*!***************************************************************************!*\
  !*** ./src/app/view/main/leftpart/content/education/education-li-view.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EducationLiView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n\nconst CssClasses = {\n  LI: 'contact_item'\n};\nclass EducationLiView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(content) {\n    const params = {\n      tag: 'li',\n      textContent: content.text,\n      textHtml: true,\n      classNames: [CssClasses.LI]\n    };\n    super(params);\n    this.addInner(content);\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/leftpart/content/education/education-li-view.js?");

/***/ }),

/***/ "./src/app/view/main/leftpart/content/education/education-title-view.js":
/*!******************************************************************************!*\
  !*** ./src/app/view/main/leftpart/content/education/education-title-view.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EducationTitleView; }\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/app/view/main/leftpart/content/education/style.scss\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n\n\nconst CssClasses = {\n  H2: 'mini__title'\n};\nclass EducationTitleView extends _view__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'h2',\n      textContent: 'Education',\n      classNames: [CssClasses.H2],\n      attributes: {\n        id: 'education'\n      }\n    };\n    super(params);\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/leftpart/content/education/education-title-view.js?");

/***/ }),

/***/ "./src/app/view/main/leftpart/content/education/education-ul-view.js":
/*!***************************************************************************!*\
  !*** ./src/app/view/main/leftpart/content/education/education-ul-view.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EducationtUlView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n/* harmony import */ var _education_li_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education-li-view */ \"./src/app/view/main/leftpart/content/education/education-li-view.js\");\n\n\nconst CssClasses = {\n  UL: 'contact_list'\n};\nconst Content = [{\n  textHtml: true,\n  text: '2007 - 2013<br>Nizhny Novgorod State Technical University | Nizhny Novgorod.'\n}, {\n  textHtml: true,\n  text: '2023<br>RS_SCHOOL Stage 0'\n}];\nclass EducationtUlView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'ul',\n      classNames: [CssClasses.UL]\n    };\n    super(params);\n    this.configureView();\n  }\n  configureView() {\n    Content.forEach(param => {\n      const li = new _education_li_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](param);\n      this.elementCreator.addInnerElement(li.getHTMLElement());\n    });\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/leftpart/content/education/education-ul-view.js?");

/***/ }),

/***/ "./src/app/view/main/leftpart/content/left-content-view.js":
/*!*****************************************************************!*\
  !*** ./src/app/view/main/leftpart/content/left-content-view.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContentView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../view */ \"./src/app/view/view.js\");\n/* harmony import */ var _contacts_contact_ul__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts/contact-ul */ \"./src/app/view/main/leftpart/content/contacts/contact-ul.js\");\n/* harmony import */ var _contacts_contacts_title_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts/contacts-title-view */ \"./src/app/view/main/leftpart/content/contacts/contacts-title-view.js\");\n/* harmony import */ var _education_education_title_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education/education-title-view */ \"./src/app/view/main/leftpart/content/education/education-title-view.js\");\n/* harmony import */ var _education_education_ul_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./education/education-ul-view */ \"./src/app/view/main/leftpart/content/education/education-ul-view.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ \"./src/app/view/main/leftpart/content/style.scss\");\n\n\n\n\n\n\nconst CssClasses = {\n  DIV: 'left__content'\n};\nclass ContentView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'div',\n      classNames: [CssClasses.DIV]\n    };\n    super(params);\n    this.configureView();\n  }\n  configureView() {\n    // Content.forEach((param) => {\n    //   const li = new FoLinkView(param);\n    //   this.elementCreator.addInnerElement(li.getHTMLElement());\n    // });\n    this.elementCreator.addInnerElement(new _contacts_contacts_title_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().getHTMLElement(), new _contacts_contact_ul__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().getHTMLElement(), new _education_education_title_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().getHTMLElement(), new _education_education_ul_view__WEBPACK_IMPORTED_MODULE_4__[\"default\"]().getHTMLElement());\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/leftpart/content/left-content-view.js?");

/***/ }),

/***/ "./src/app/view/main/leftpart/leftPart-view.js":
/*!*****************************************************!*\
  !*** ./src/app/view/main/leftpart/leftPart-view.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LeftPartView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ \"./src/app/view/view.js\");\n/* harmony import */ var _content_left_content_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/left-content-view */ \"./src/app/view/main/leftpart/content/left-content-view.js\");\n/* harmony import */ var _photo_photo_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo/photo-view */ \"./src/app/view/main/leftpart/photo/photo-view.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./src/app/view/main/leftpart/style.scss\");\n\n\n\n\nconst CssClasses = {\n  DIV: 'left__part'\n};\nclass LeftPartView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'section',\n      classNames: [CssClasses.DIV]\n    };\n    super(params);\n    this.configureView();\n  }\n  configureView() {\n    this.elementCreator.addInnerElement(new _photo_photo_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().getHTMLElement(), new _content_left_content_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().getHTMLElement());\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/leftpart/leftPart-view.js?");

/***/ }),

/***/ "./src/app/view/main/leftpart/photo/photo-view.js":
/*!********************************************************!*\
  !*** ./src/app/view/main/leftpart/photo/photo-view.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PhotoView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../view */ \"./src/app/view/view.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/app/view/main/leftpart/photo/style.scss\");\n/* harmony import */ var _img_photo2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../img/photo2.jpg */ \"./src/img/photo2.jpg\");\n/* harmony import */ var _util_element_creator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util/element-creator */ \"./src/app/util/element-creator.js\");\n\n\n\n\nconst CssClasses = {\n  DIV: 'left__photo'\n};\nclass PhotoView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'div',\n      classNames: [CssClasses.DIV]\n    };\n    super(params);\n    this.configureView();\n  }\n  configureView() {\n    const img = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      tag: 'img',\n      textContent: null,\n      attributes: {\n        src: _img_photo2_jpg__WEBPACK_IMPORTED_MODULE_2__,\n        alt: 'photo'\n      },\n      classNames: ['photo']\n    });\n    this.elementCreator.addInnerElement(img);\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/leftpart/photo/photo-view.js?");

/***/ }),

/***/ "./src/app/view/main/main-wrapper-view.js":
/*!************************************************!*\
  !*** ./src/app/view/main/main-wrapper-view.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/app/view/main/style.scss\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ \"./src/app/view/view.js\");\n/* harmony import */ var _leftpart_leftPart_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leftpart/leftPart-view */ \"./src/app/view/main/leftpart/leftPart-view.js\");\n/* harmony import */ var _rightPart_rightPart_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rightPart/rightPart-view */ \"./src/app/view/main/rightPart/rightPart-view.js\");\n\n\n\n\nconst CssClasses = {\n  MAIN: 'main__wrapper'\n};\nclass Main extends _view__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'main',\n      classNames: [CssClasses.MAIN]\n    };\n    super(params);\n    this.configureView();\n  }\n  configureView() {\n    this.elementCreator.addInnerElement(new _leftpart_leftPart_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().getHTMLElement(), new _rightPart_rightPart_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().getHTMLElement());\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/main-wrapper-view.js?");

/***/ }),

/***/ "./src/app/view/main/rightPart/content/about-me/about-me-text-view.js":
/*!****************************************************************************!*\
  !*** ./src/app/view/main/rightPart/content/about-me/about-me-text-view.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AbouteMeTextView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n\nconst CssClasses = {\n  SPAN: 'description__text'\n};\nclass AbouteMeTextView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'span',\n      textContent: 'I always wanted to become a frontend developer, so finally I took up my studies.',\n      classNames: [CssClasses.SPAN]\n    };\n    super(params);\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/rightPart/content/about-me/about-me-text-view.js?");

/***/ }),

/***/ "./src/app/view/main/rightPart/content/about-me/about-me-title-view.js":
/*!*****************************************************************************!*\
  !*** ./src/app/view/main/rightPart/content/about-me/about-me-title-view.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AboutMeTitleView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n\nconst CssClasses = {\n  H2: 'mini__title',\n  Right: 'title__right'\n};\nclass AboutMeTitleView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'h2',\n      textContent: 'About me',\n      classNames: [CssClasses.H2, CssClasses.Right],\n      attributes: {\n        id: 'aboutMe'\n      }\n    };\n    super(params);\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/rightPart/content/about-me/about-me-title-view.js?");

/***/ }),

/***/ "./src/app/view/main/rightPart/content/about-me/about-me-wrapper-view.js":
/*!*******************************************************************************!*\
  !*** ./src/app/view/main/rightPart/content/about-me/about-me-wrapper-view.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AboutMeWrapperView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n/* harmony import */ var _about_me_title_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-me-title-view */ \"./src/app/view/main/rightPart/content/about-me/about-me-title-view.js\");\n/* harmony import */ var _about_me_text_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-me-text-view */ \"./src/app/view/main/rightPart/content/about-me/about-me-text-view.js\");\n\n\n\nconst CssClasses = {\n  DIV: 'about__me'\n};\nclass AboutMeWrapperView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'div',\n      classNames: [CssClasses.DIV]\n    };\n    super(params);\n    this.configureView();\n  }\n  configureView() {\n    this.elementCreator.addInnerElement(new _about_me_title_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().getHTMLElement(), new _about_me_text_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().getHTMLElement());\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/rightPart/content/about-me/about-me-wrapper-view.js?");

/***/ }),

/***/ "./src/app/view/main/rightPart/content/codeExample/codeExample-content-view.js":
/*!*************************************************************************************!*\
  !*** ./src/app/view/main/rightPart/content/codeExample/codeExample-content-view.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CodeExampleContentView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n\nconst CssClasses = {\n  CODE: 'code'\n};\nclass CodeExampleContentView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'code',\n      textHtml: true,\n      textContent: 'function multiply(a, b) { <br>return a * b;<br>}<br><br>let result = multiply(1, 2);<br>alert( result );<br>',\n      classNames: [CssClasses.CODE]\n    };\n    super(params);\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/rightPart/content/codeExample/codeExample-content-view.js?");

/***/ }),

/***/ "./src/app/view/main/rightPart/content/codeExample/codeExample-title-view.js":
/*!***********************************************************************************!*\
  !*** ./src/app/view/main/rightPart/content/codeExample/codeExample-title-view.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CodeExampleTitleView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n\nconst CssClasses = {\n  H2: 'mini__title',\n  Right: 'title__right'\n};\nclass CodeExampleTitleView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'h2',\n      textContent: 'Code Example',\n      classNames: [CssClasses.H2, CssClasses.Right],\n      attributes: {\n        id: 'code'\n      }\n    };\n    super(params);\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/rightPart/content/codeExample/codeExample-title-view.js?");

/***/ }),

/***/ "./src/app/view/main/rightPart/content/codeExample/codeExample-wrapper.js":
/*!********************************************************************************!*\
  !*** ./src/app/view/main/rightPart/content/codeExample/codeExample-wrapper.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CodeExampleWrapperView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n/* harmony import */ var _codeExample_content_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codeExample-content-view */ \"./src/app/view/main/rightPart/content/codeExample/codeExample-content-view.js\");\n/* harmony import */ var _codeExample_title_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./codeExample-title-view */ \"./src/app/view/main/rightPart/content/codeExample/codeExample-title-view.js\");\n\n\n\nconst CssClasses = {\n  DIV: 'code__example'\n};\nclass CodeExampleWrapperView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'div',\n      classNames: [CssClasses.DIV]\n    };\n    super(params);\n    this.configureView();\n  }\n  configureView() {\n    this.elementCreator.addInnerElement(new _codeExample_title_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().getHTMLElement(), new _codeExample_content_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().getHTMLElement());\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/rightPart/content/codeExample/codeExample-wrapper.js?");

/***/ }),

/***/ "./src/app/view/main/rightPart/content/main-Title/main-text-view.js":
/*!**************************************************************************!*\
  !*** ./src/app/view/main/rightPart/content/main-Title/main-text-view.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainTextView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n\nconst CssClasses = {\n  H2: 'right__text'\n};\nclass MainTextView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'h2',\n      textContent: 'Front-End developer',\n      classNames: [CssClasses.H2]\n    };\n    super(params);\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/rightPart/content/main-Title/main-text-view.js?");

/***/ }),

/***/ "./src/app/view/main/rightPart/content/main-Title/main-title-view.js":
/*!***************************************************************************!*\
  !*** ./src/app/view/main/rightPart/content/main-Title/main-title-view.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainTitleView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n\nconst CssClasses = {\n  H1: 'right__title'\n};\nclass MainTitleView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'h1',\n      textContent: 'Artem Taraskin',\n      classNames: [CssClasses.H1]\n    };\n    super(params);\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/rightPart/content/main-Title/main-title-view.js?");

/***/ }),

/***/ "./src/app/view/main/rightPart/content/projects/projects-content-li-view.js":
/*!**********************************************************************************!*\
  !*** ./src/app/view/main/rightPart/content/projects/projects-content-li-view.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectsLiView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n\nconst CssClasses = {\n  LI: 'projects_item'\n};\nclass ProjectsLiView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(content) {\n    const params = {\n      tag: 'li',\n      textContent: content.text,\n      textHtml: false,\n      classNames: [CssClasses.LI]\n    };\n    super(params);\n    this.addInner(content);\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/rightPart/content/projects/projects-content-li-view.js?");

/***/ }),

/***/ "./src/app/view/main/rightPart/content/projects/projects-content-ul-view.js":
/*!**********************************************************************************!*\
  !*** ./src/app/view/main/rightPart/content/projects/projects-content-ul-view.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectsUlView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n/* harmony import */ var _projects_content_li_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-content-li-view */ \"./src/app/view/main/rightPart/content/projects/projects-content-li-view.js\");\n/* harmony import */ var _img_library_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../img/library.png */ \"./src/img/library.png\");\n/* harmony import */ var _img_racingGame_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../img/racingGame.png */ \"./src/img/racingGame.png\");\n/* harmony import */ var _img_snakeGame_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../img/snakeGame.png */ \"./src/img/snakeGame.png\");\n/* harmony import */ var _img_audioPlayer_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../img/audioPlayer.png */ \"./src/img/audioPlayer.png\");\n/* harmony import */ var _img_videoPlayer_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../img/videoPlayer.png */ \"./src/img/videoPlayer.png\");\n/* harmony import */ var _img_imageGalary_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../img/imageGalary.png */ \"./src/img/imageGalary.png\");\n\n\n\n\n\n\n\n\nconst CssClasses = {\n  UL: 'projects_list'\n};\nconst Content = [{\n  view: true,\n  innerTag: 'img',\n  textView: 'Library',\n  innerTagAtrib: {\n    alt: 'Library',\n    src: _img_library_png__WEBPACK_IMPORTED_MODULE_2__,\n    cssClasses: ['projects_img']\n  },\n  text: '',\n  attributes: {\n    href: 'https://mistert1a.github.io/RS_REPO/library/',\n    target: '_blank'\n  },\n  cssClasses: ['projects_link']\n}, {\n  view: true,\n  innerTag: 'img',\n  textView: 'Racing Game',\n  innerTagAtrib: {\n    alt: 'Racing Game',\n    src: _img_racingGame_png__WEBPACK_IMPORTED_MODULE_3__,\n    cssClasses: ['projects_img']\n  },\n  text: '',\n  attributes: {\n    href: 'https://mistert1a.github.io/RS_REPO/js30randomGame/',\n    target: '_blank'\n  },\n  cssClasses: ['projects_link']\n}, {\n  view: true,\n  innerTag: 'img',\n  textView: 'Snake Game',\n  innerTagAtrib: {\n    alt: 'Snake Game',\n    src: _img_snakeGame_png__WEBPACK_IMPORTED_MODULE_4__,\n    cssClasses: ['projects_img']\n  },\n  text: '',\n  attributes: {\n    href: 'https://mistert1a.github.io/RS_REPO/js30snakeGame/',\n    target: '_blank'\n  },\n  cssClasses: ['projects_link']\n}, {\n  view: true,\n  innerTag: 'img',\n  textView: 'Audio Player',\n  innerTagAtrib: {\n    alt: 'Audio Player',\n    src: _img_audioPlayer_png__WEBPACK_IMPORTED_MODULE_5__,\n    cssClasses: ['projects_img']\n  },\n  text: '',\n  attributes: {\n    href: 'https://mistert1a.github.io/RS_REPO/js30audio/',\n    target: '_blank'\n  },\n  cssClasses: ['projects_link']\n}, {\n  view: true,\n  innerTag: 'img',\n  textView: 'Video Player',\n  innerTagAtrib: {\n    alt: 'Video Player',\n    src: _img_videoPlayer_png__WEBPACK_IMPORTED_MODULE_6__,\n    cssClasses: ['projects_img']\n  },\n  text: '',\n  attributes: {\n    href: 'https://mistert1a.github.io/RS_REPO/js30video',\n    target: '_blank'\n  },\n  cssClasses: ['projects_link']\n}, {\n  view: true,\n  innerTag: 'img',\n  textView: 'Image Galary',\n  innerTagAtrib: {\n    alt: 'Image Galary',\n    src: _img_imageGalary_png__WEBPACK_IMPORTED_MODULE_7__,\n    cssClasses: ['projects_img']\n  },\n  text: '',\n  attributes: {\n    href: 'https://mistert1a.github.io/RS_REPO/js30imageGalery/',\n    target: '_blank'\n  },\n  cssClasses: ['projects_link']\n}];\nclass ProjectsUlView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'ul',\n      classNames: [CssClasses.UL]\n    };\n    super(params);\n    this.configureView();\n  }\n  configureView() {\n    Content.forEach(param => {\n      const li = new _projects_content_li_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](param);\n      this.elementCreator.addInnerElement(li.getHTMLElement());\n    });\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/rightPart/content/projects/projects-content-ul-view.js?");

/***/ }),

/***/ "./src/app/view/main/rightPart/content/projects/projects-title-view.js":
/*!*****************************************************************************!*\
  !*** ./src/app/view/main/rightPart/content/projects/projects-title-view.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectsTitleView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n\nconst CssClasses = {\n  H2: 'mini__title',\n  Right: 'title__right'\n};\nclass ProjectsTitleView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'h2',\n      textContent: 'My_projects',\n      classNames: [CssClasses.H2, CssClasses.Right]\n    };\n    super(params);\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/rightPart/content/projects/projects-title-view.js?");

/***/ }),

/***/ "./src/app/view/main/rightPart/content/projects/projects-wrapper-view.js":
/*!*******************************************************************************!*\
  !*** ./src/app/view/main/rightPart/content/projects/projects-wrapper-view.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectsWrapperView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n/* harmony import */ var _projects_content_ul_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-content-ul-view */ \"./src/app/view/main/rightPart/content/projects/projects-content-ul-view.js\");\n/* harmony import */ var _projects_title_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-title-view */ \"./src/app/view/main/rightPart/content/projects/projects-title-view.js\");\n\n\n\nconst CssClasses = {\n  DIV: 'my_projects'\n};\nclass ProjectsWrapperView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'div',\n      classNames: [CssClasses.DIV]\n    };\n    super(params);\n    this.configureView();\n  }\n  configureView() {\n    this.elementCreator.addInnerElement(new _projects_title_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().getHTMLElement(), new _projects_content_ul_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().getHTMLElement());\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/rightPart/content/projects/projects-wrapper-view.js?");

/***/ }),

/***/ "./src/app/view/main/rightPart/content/skills/skills-li-view.js":
/*!**********************************************************************!*\
  !*** ./src/app/view/main/rightPart/content/skills/skills-li-view.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SkillsLiView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n\nconst CssClasses = {\n  LI: 'skills__item'\n};\nclass SkillsLiView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(content) {\n    const params = {\n      tag: 'li',\n      textContent: content.text,\n      textHtml: false,\n      classNames: [CssClasses.LI]\n    };\n    super(params);\n    this.addInner(content);\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/rightPart/content/skills/skills-li-view.js?");

/***/ }),

/***/ "./src/app/view/main/rightPart/content/skills/skills-title-view.js":
/*!*************************************************************************!*\
  !*** ./src/app/view/main/rightPart/content/skills/skills-title-view.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SkillsTitleView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n\nconst CssClasses = {\n  H2: 'mini__title',\n  Right: 'title__right'\n};\nclass SkillsTitleView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'h2',\n      textContent: 'Skills',\n      classNames: [CssClasses.H2, CssClasses.Right],\n      attributes: {\n        id: 'skills'\n      }\n    };\n    super(params);\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/rightPart/content/skills/skills-title-view.js?");

/***/ }),

/***/ "./src/app/view/main/rightPart/content/skills/skills-ul-view.js":
/*!**********************************************************************!*\
  !*** ./src/app/view/main/rightPart/content/skills/skills-ul-view.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SkillsUlView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n/* harmony import */ var _skills_li_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills-li-view */ \"./src/app/view/main/rightPart/content/skills/skills-li-view.js\");\n\n\nconst CssClasses = {\n  UL: 'skills__list'\n};\nconst Content = [{\n  text: 'HTML'\n}, {\n  text: 'CSS'\n}, {\n  // eslint-disable-next-line no-script-url\n  text: 'JavaScript: learnjavascript.ru in progress'\n}, {\n  text: 'Git'\n}, {\n  text: 'Webpack'\n}, {\n  text: 'English: A2 (I am constantly improving my level)'\n}];\nclass SkillsUlView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'ul',\n      classNames: [CssClasses.UL]\n    };\n    super(params);\n    this.configureView();\n  }\n  configureView() {\n    Content.forEach(param => {\n      const li = new _skills_li_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](param);\n      this.elementCreator.addInnerElement(li.getHTMLElement());\n    });\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/rightPart/content/skills/skills-ul-view.js?");

/***/ }),

/***/ "./src/app/view/main/rightPart/content/skills/skills-wrapper-view.js":
/*!***************************************************************************!*\
  !*** ./src/app/view/main/rightPart/content/skills/skills-wrapper-view.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SkillsWrapperView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view */ \"./src/app/view/view.js\");\n/* harmony import */ var _skills_title_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills-title-view */ \"./src/app/view/main/rightPart/content/skills/skills-title-view.js\");\n/* harmony import */ var _skills_ul_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills-ul-view */ \"./src/app/view/main/rightPart/content/skills/skills-ul-view.js\");\n\n\n\nconst CssClasses = {\n  DIV: 'skills'\n};\nclass SkillsWrapperView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'div',\n      classNames: [CssClasses.DIV]\n    };\n    super(params);\n    this.configureView();\n  }\n  configureView() {\n    this.elementCreator.addInnerElement(new _skills_title_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().getHTMLElement(), new _skills_ul_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().getHTMLElement());\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/rightPart/content/skills/skills-wrapper-view.js?");

/***/ }),

/***/ "./src/app/view/main/rightPart/rightPart-view.js":
/*!*******************************************************!*\
  !*** ./src/app/view/main/rightPart/rightPart-view.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RightParttView; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ \"./src/app/view/view.js\");\n/* harmony import */ var _content_about_me_about_me_wrapper_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/about-me/about-me-wrapper-view */ \"./src/app/view/main/rightPart/content/about-me/about-me-wrapper-view.js\");\n/* harmony import */ var _content_codeExample_codeExample_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/codeExample/codeExample-wrapper */ \"./src/app/view/main/rightPart/content/codeExample/codeExample-wrapper.js\");\n/* harmony import */ var _content_main_Title_main_text_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/main-Title/main-text-view */ \"./src/app/view/main/rightPart/content/main-Title/main-text-view.js\");\n/* harmony import */ var _content_main_Title_main_title_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/main-Title/main-title-view */ \"./src/app/view/main/rightPart/content/main-Title/main-title-view.js\");\n/* harmony import */ var _content_projects_projects_wrapper_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/projects/projects-wrapper-view */ \"./src/app/view/main/rightPart/content/projects/projects-wrapper-view.js\");\n/* harmony import */ var _content_skills_skills_wrapper_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/skills/skills-wrapper-view */ \"./src/app/view/main/rightPart/content/skills/skills-wrapper-view.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ \"./src/app/view/main/rightPart/style.scss\");\n\n\n\n\n\n\n\n\nconst CssClasses = {\n  DIV: 'right__part'\n};\nclass RightParttView extends _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    const params = {\n      tag: 'section',\n      classNames: [CssClasses.DIV]\n    };\n    super(params);\n    this.configureView();\n  }\n  configureView() {\n    this.elementCreator.addInnerElement(new _content_main_Title_main_title_view__WEBPACK_IMPORTED_MODULE_4__[\"default\"]().getHTMLElement(), new _content_main_Title_main_text_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().getHTMLElement(), new _content_about_me_about_me_wrapper_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().getHTMLElement(), new _content_skills_skills_wrapper_view__WEBPACK_IMPORTED_MODULE_6__[\"default\"]().getHTMLElement(), new _content_codeExample_codeExample_wrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().getHTMLElement(), new _content_projects_projects_wrapper_view__WEBPACK_IMPORTED_MODULE_5__[\"default\"]().getHTMLElement());\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/rightPart/rightPart-view.js?");

/***/ }),

/***/ "./src/app/view/view.js":
/*!******************************!*\
  !*** ./src/app/view/view.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\n/* harmony import */ var _util_element_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/element-creator */ \"./src/app/util/element-creator.js\");\n\nclass View {\n  /**\r\n   * @param {import ('../util/element-creator').ElementParams} params\r\n   */\n  constructor(params) {\n    this.elementCreator = this.createView(params);\n  }\n  getHTMLElement() {\n    return this.elementCreator.getElement();\n  }\n\n  /**\r\n   * @param {import ('../util/element-creator').ElementParams} params\r\n   * @returns {ElementCreator}\r\n   */\n  createView(params) {\n    const elementParams = {\n      tag: params.tag,\n      classNames: params.classNames,\n      textContent: params.textContent,\n      textHtml: params.textHtml,\n      callback: params.callback,\n      attributes: params.attributes\n    };\n    const elementCreator = new _util_element_creator__WEBPACK_IMPORTED_MODULE_0__[\"default\"](elementParams);\n    return elementCreator;\n  }\n  addInner(params) {\n    if (params.view) {\n      const a = new _util_element_creator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        tag: 'a',\n        textContent: params.textView,\n        attributes: params.attributes,\n        classNames: params.cssClasses\n      });\n      if (params.innerTag) {\n        const innerElement = new _util_element_creator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          tag: params.innerTag,\n          textContent: null,\n          attributes: params.innerTagAtrib,\n          classNames: params.innerTagAtrib.cssClasses\n        });\n        a.addInnerElement(innerElement);\n      }\n      this.elementCreator.addInnerElement(a);\n    } else {\n      this.elementCreator.setTextContent(params.text, params.textHtml);\n    }\n  }\n}\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app */ \"./src/app/app.js\");\n\n\nconst CvAPP = new _app_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack://simpleclassapp/./src/index.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <title>cv</title>\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack://simpleclassapp/./src/index.html?");

/***/ }),

/***/ "./src/app/view/footer/style.scss":
/*!****************************************!*\
  !*** ./src/app/view/footer/style.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/footer/style.scss?");

/***/ }),

/***/ "./src/app/view/header/nav/links/style.scss":
/*!**************************************************!*\
  !*** ./src/app/view/header/nav/links/style.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/header/nav/links/style.scss?");

/***/ }),

/***/ "./src/app/view/header/nav/style.scss":
/*!********************************************!*\
  !*** ./src/app/view/header/nav/style.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/header/nav/style.scss?");

/***/ }),

/***/ "./src/app/view/header/style.scss":
/*!****************************************!*\
  !*** ./src/app/view/header/style.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/header/style.scss?");

/***/ }),

/***/ "./src/app/view/main/leftpart/content/contacts/style.scss":
/*!****************************************************************!*\
  !*** ./src/app/view/main/leftpart/content/contacts/style.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/leftpart/content/contacts/style.scss?");

/***/ }),

/***/ "./src/app/view/main/leftpart/content/education/style.scss":
/*!*****************************************************************!*\
  !*** ./src/app/view/main/leftpart/content/education/style.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/leftpart/content/education/style.scss?");

/***/ }),

/***/ "./src/app/view/main/leftpart/content/style.scss":
/*!*******************************************************!*\
  !*** ./src/app/view/main/leftpart/content/style.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/leftpart/content/style.scss?");

/***/ }),

/***/ "./src/app/view/main/leftpart/photo/style.scss":
/*!*****************************************************!*\
  !*** ./src/app/view/main/leftpart/photo/style.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/leftpart/photo/style.scss?");

/***/ }),

/***/ "./src/app/view/main/leftpart/style.scss":
/*!***********************************************!*\
  !*** ./src/app/view/main/leftpart/style.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/leftpart/style.scss?");

/***/ }),

/***/ "./src/app/view/main/rightPart/style.scss":
/*!************************************************!*\
  !*** ./src/app/view/main/rightPart/style.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/rightPart/style.scss?");

/***/ }),

/***/ "./src/app/view/main/style.scss":
/*!**************************************!*\
  !*** ./src/app/view/main/style.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://simpleclassapp/./src/app/view/main/style.scss?");

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://simpleclassapp/./src/style/style.scss?");

/***/ }),

/***/ "./src/img/audioPlayer.png":
/*!*********************************!*\
  !*** ./src/img/audioPlayer.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/audioPlayer.png\";\n\n//# sourceURL=webpack://simpleclassapp/./src/img/audioPlayer.png?");

/***/ }),

/***/ "./src/img/imageGalary.png":
/*!*********************************!*\
  !*** ./src/img/imageGalary.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/imageGalary.png\";\n\n//# sourceURL=webpack://simpleclassapp/./src/img/imageGalary.png?");

/***/ }),

/***/ "./src/img/library.png":
/*!*****************************!*\
  !*** ./src/img/library.png ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/library.png\";\n\n//# sourceURL=webpack://simpleclassapp/./src/img/library.png?");

/***/ }),

/***/ "./src/img/photo2.jpg":
/*!****************************!*\
  !*** ./src/img/photo2.jpg ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/photo2.jpg\";\n\n//# sourceURL=webpack://simpleclassapp/./src/img/photo2.jpg?");

/***/ }),

/***/ "./src/img/racingGame.png":
/*!********************************!*\
  !*** ./src/img/racingGame.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/racingGame.png\";\n\n//# sourceURL=webpack://simpleclassapp/./src/img/racingGame.png?");

/***/ }),

/***/ "./src/img/rs_school_js.svg":
/*!**********************************!*\
  !*** ./src/img/rs_school_js.svg ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/rs_school_js.svg\";\n\n//# sourceURL=webpack://simpleclassapp/./src/img/rs_school_js.svg?");

/***/ }),

/***/ "./src/img/snakeGame.png":
/*!*******************************!*\
  !*** ./src/img/snakeGame.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/snakeGame.png\";\n\n//# sourceURL=webpack://simpleclassapp/./src/img/snakeGame.png?");

/***/ }),

/***/ "./src/img/videoPlayer.png":
/*!*********************************!*\
  !*** ./src/img/videoPlayer.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/videoPlayer.png\";\n\n//# sourceURL=webpack://simpleclassapp/./src/img/videoPlayer.png?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;