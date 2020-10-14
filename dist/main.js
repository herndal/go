/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/yoda-stitch.jpg":
/*!************************************!*\
  !*** ./src/images/yoda-stitch.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/images/yoda-stitch.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_yoda_stitch_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/yoda-stitch.jpg */ \"./src/images/yoda-stitch.jpg\");\n/* harmony import */ var _images_yoda_stitch_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_yoda_stitch_jpg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/canvas */ \"./src/scripts/canvas.js\");\n/* harmony import */ var _scripts_square__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/square */ \"./src/scripts/square.js\");\n/* harmony import */ var _scripts_DOMExample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/DOMExample */ \"./src/scripts/DOMExample.js\");\n/* harmony import */ var _scripts_DOMExample__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_DOMExample__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst currentStateObj = {\n  currentExample: null,\n  currentEventListeners: [],\n};\n\ndocument.querySelector(\"#canvas-demo\").addEventListener(\"click\", startCanvas);\ndocument.querySelector(\"#DOM-demo\").addEventListener(\"click\", startDOM);\n\nfunction startDOM() {\n  unregisterEventListeners();\n  clearDemo();\n  currentStateObj.currentExample = \"DOMDEMO\";\n  Object(_scripts_DOMExample__WEBPACK_IMPORTED_MODULE_4__[\"DOMExample\"])();\n}\n\nfunction startCanvas() {\n  clearDemo();\n  unregisterEventListeners();\n  currentStateObj.currentExample = \"CANVASDEMO\";\n  const canvas = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  canvas.createCanvas();\n  const squares = [new _scripts_square__WEBPACK_IMPORTED_MODULE_3__[\"default\"](canvas.ctx, canvas.coords, canvas.fillColor)];\n\n  let animating = true;\n\n  const animation = () => {\n    canvas.clearCanvas();\n    if (animating) squares.forEach((sq) => sq.updateSquare(canvas.fillColor));\n    squares.forEach((sq) => sq.drawSquare());\n    window.requestAnimationFrame(animation);\n    squares.forEach((sq) => {\n      if (sq.coords[0] + sq.coords[2] > window.innerWidth)\n        sq.reverseAnimation();\n      if (sq.coords[0] < 0) sq.reverseAnimation();\n    });\n  };\n\n  window.requestAnimationFrame(animation);\n\n  window.addEventListener(\"keydown\", handleKeyDown);\n  currentStateObj.currentEventListeners.push([\n    \"window\",\n    \"keydown\",\n    handleKeyDown,\n  ]);\n\n  window.addEventListener(\"mousedown\", handleMouseDown);\n  currentStateObj.currentEventListeners.push([\n    \"window\",\n    \"mousedown\",\n    handleMouseDown,\n  ]);\n\n  function handleKeyDown(event) {\n    if (event.which === 32) {\n      event.preventDefault();\n      squares.forEach((sq) => sq.reverseAnimation());\n      canvas.setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);\n    }\n  }\n\n  function handleMouseDown(event) {\n    event.preventDefault();\n    squares.push(\n      new _scripts_square__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n        canvas.ctx,\n        canvas.coords.map((co) => co + 25),\n        canvas.fillColor\n      )\n    );\n    // animating = !animating;\n  }\n}\n\nfunction unregisterEventListeners() {\n  while (currentStateObj.currentEventListeners.length) {\n    let [\n      selector,\n      event,\n      handler,\n    ] = currentStateObj.currentEventListeners.pop();\n    if (selector === \"window\") {\n      window.removeEventListener(event, handler);\n      console.log(handler);\n    } else {\n      document.querySelector(selector).removeEventListener(event, handler);\n    }\n  }\n}\n\nfunction clearDemo() {\n  if (currentStateObj.currentExample === \"CANVASDEMO\")\n    document.body.removeChild(document.querySelector(\"canvas\"));\n  if (currentStateObj.currentExample === \"DOMDEMO\") {\n    [...document.querySelectorAll(\".card\")].forEach((elem) =>\n      document.body.removeChild(elem)\n    );\n  }\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/DOMExample.js":
/*!***********************************!*\
  !*** ./src/scripts/DOMExample.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (10:27)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|   };\\n| \\n>   const greeting = testObj?.key2?.key3 || testObj.key1;\\n|   document.body.classList.add(\\\"center\\\");\\n|   const card = document.createElement(\\\"div\\\");\");\n\n//# sourceURL=webpack:///./src/scripts/DOMExample.js?");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass canvasExample {\n  constructor(props) {\n    this.coords = [10, 10, 150, 100];\n    this.animationDir = 1;\n    this.fillColor = `green`;\n    this.canvas = document.createElement(\"canvas\");\n    this.canvas.width = window.innerWidth * 0.75;\n    this.canvas.height = this.canvas.width / 2;\n    this.ctx = this.canvas.getContext(\"2d\");\n  }\n  createCanvas() {\n    document.body.append(this.canvas);\n  }\n  // drawSquare() {\n  //   this.ctx.fillStyle = this.fillColor;\n  //   this.ctx.fillRect(...this.coords);\n  // }\n  // updateSquare() {\n  //   this.coords = this.coords.map((coord) => (coord += 1 * this.animationDir));\n  // }\n\n  // clearSquare() {\n  //   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  // }\n\n  // reverseAnimation() {\n  //   this.animationDir *= -1;\n  // }\n  clearCanvas() {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n  setColor(color) {\n    this.fillColor = color;\n    document.body.style.backgroundColor = color;\n    document.body.style.filter = `brightness(150%)`;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (canvasExample);\n\n\n//# sourceURL=webpack:///./src/scripts/canvas.js?");

/***/ }),

/***/ "./src/scripts/square.js":
/*!*******************************!*\
  !*** ./src/scripts/square.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Square {\n  constructor(ctx, coords, color = \"green\") {\n    this.ctx = ctx;\n    this.coords = coords;\n    this.color = color;\n    this.animationDir = 1;\n  }\n\n  drawSquare() {\n    this.ctx.fillStyle = this.color;\n    this.ctx.fillRect(...this.coords);\n  }\n  updateSquare(color) {\n    this.color = color;\n    this.coords = this.coords.map((coord) => (coord += 1 * this.animationDir));\n  }\n\n  reverseAnimation() {\n    this.animationDir *= -1;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Square);\n\n\n//# sourceURL=webpack:///./src/scripts/square.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (3:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| // MIXINS && VARIABLES\\n| \\n> @mixin basic-box-shadow($color) {\\n|   box-shadow: 3px 3px 5px 5px $color, 1px 0px 1px $color;\\n| }\");\n\n//# sourceURL=webpack:///./src/styles/index.scss?");

/***/ })

/******/ });