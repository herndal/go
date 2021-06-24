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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");
/* harmony import */ var _scripts_dropdowns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/dropdowns */ "./src/scripts/dropdowns.js");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_nav_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/nav.css */ "./src/styles/nav.css");
/* harmony import */ var _styles_nav_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_nav_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_game_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/game.css */ "./src/styles/game.css");
/* harmony import */ var _styles_game_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_game_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_board_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/board.css */ "./src/styles/board.css");
/* harmony import */ var _styles_board_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_board_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_endgame_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/endgame.css */ "./src/styles/endgame.css");
/* harmony import */ var _styles_endgame_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_endgame_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_responsive_design_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/responsive-design.css */ "./src/styles/responsive-design.css");
/* harmony import */ var _styles_responsive_design_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_design_css__WEBPACK_IMPORTED_MODULE_7__);








var root = document.getElementById('root');
var query = window.matchMedia("(max-height: 550px)");
home();

function home() {
  var title = document.createElement('div');
  var text = document.createElement('h1');
  title.id = 'title';
  text.innerHTML = 'Go';
  title.appendChild(text);
  root.append(title);
  options();
  query.addEventListener(toggleLandscape);
}

function options() {
  var oldGame = document.getElementById('game');
  var gameForm = document.querySelector('.new-game');
  var back = document.getElementById('back');
  if (oldGame) root.removeChild(oldGame);
  if (gameForm) root.removeChild(gameForm);
  if (back) root.removeChild(back);
  var options = document.createElement('ul');
  var play = document.createElement('button');
  options.id = 'options';
  play.id = 'play';
  play.classList.add('option');
  play.innerHTML = 'Play';
  play.onclick = newGame;
  options.appendChild(play);
  Object(_scripts_dropdowns__WEBPACK_IMPORTED_MODULE_1__["dropdown"])(options, 'About', Object(_scripts_dropdowns__WEBPACK_IMPORTED_MODULE_1__["aboutElements"])());
  Object(_scripts_dropdowns__WEBPACK_IMPORTED_MODULE_1__["dropdown"])(options, 'Author', Object(_scripts_dropdowns__WEBPACK_IMPORTED_MODULE_1__["authorElements"])());
  root.appendChild(options); // const footer = document.createElement('footer');
  // const footerBox = document.createElement('div');
  // const freepik = document.createElement('a');
  // const flaticon = document.createElement('a');
  // const fontawesome = document.createElement('a');
  // freepik.href = "https://www.flaticon.com/authors/freepik";
  // flaticon.href = "https://www.flaticon.com/";
  // fontawesome.href = "https://fontawesome.com/license";
  // freepik.innerHTML = 'Freepik';
  // flaticon.innerHTML= "www.flaticon.com";
  // fontawesome.innerHTML = "www.fontawesome.com";
  // footerBox.append(
  //   'Icons made by ',
  //   freepik,
  //   ' from ',
  //   flaticon,
  //   ' and ',
  //   fontawesome
  // )
  // footer.appendChild(footerBox);
  // document.body.appendChild(footer);

  toggleLandscape(query);
}

function newGame() {
  var docOptions = document.getElementById('options');
  root.removeChild(docOptions);
  var gameForm = document.createElement('div');
  var selectSize = document.createElement('select');
  var selectSizeLabel = document.createElement('p');
  var choose5 = document.createElement('option');
  var choose9 = document.createElement('option');
  var choose13 = document.createElement('option');
  var choose19 = document.createElement('option');
  var submit = document.createElement('button');
  var play = document.createElement('form');
  gameForm.classList.add('new-game');
  selectSize.id = 'size';
  play.id = 'play';
  choose5.value = '5';
  choose9.value = '9';
  choose13.value = '13';
  choose19.value = '19';
  selectSizeLabel.innerHTML = 'Choose the size of your board';
  choose5.innerHTML = '5 x 5';
  choose9.innerHTML = '9 x 9';
  choose13.innerHTML = '13 x 13';
  choose19.innerHTML = '19 x 19';
  submit.innerHTML = 'Start Game';
  selectSize.append(choose5, choose9, choose13, choose19);
  play.append(selectSize, submit);
  gameForm.append(selectSizeLabel, document.createElement('hr'), play);
  root.append(gameForm, backButton());
  document.querySelector("#play").addEventListener("submit", playGo(gameForm));
}

function backButton() {
  var button = document.createElement('button');
  var back = document.createElement('span');
  back.classList.add('back-go', 'red');
  button.id = 'back';
  back.innerHTML = 'back';
  button.onclick = options;
  button.append('Go ', back);
  return button;
}

function playGo(gameForm) {
  return function (event) {
    event.preventDefault();
    var size = document.getElementById('size').value;
    var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__["default"](size, options);
    root.removeChild(gameForm);
    root.removeChild(back);
    window.root = root; // document.body.removeChild(document.getElementsByTagName('footer')[0]);

    toggleLandscape(query);
    game.play();
  };
}

function toggleLandscape(query) {
  var root = document.getElementById('root');
  var over = false;
  var game = document.getElementById('game');
  if (game) over = game.classList.contains('over');
  var titleBlock = document.getElementById('title');

  if (query.matches && game) {
    if (titleBlock) root.removeChild(titleBlock);

    if (over) {
      var footer = document.getElementById('board-footer');
      var header = document.getElementById('endgame-header');
      header.remove();
      footer.appendChild(header);
    }
  } else {
    if (!titleBlock) {
      titleBlock = document.createElement('div');
      titleBlock.id = 'title';
      var title = document.createElement('h1');
      title.innerHTML = 'Go';
      titleBlock.appendChild(title);
      root.firstChild.before(titleBlock);
    }

    if (over) {
      var table = document.querySelector('.table');

      var _header = document.getElementById('endgame-header');

      _header.remove();

      table.before(_header);
    }
  }

  var instructions = document.getElementById('instructions');

  if (instructions) {
    if (instructions.classList.contains('show')) {
      var board = document.querySelector('.board-group').firstChild;
      var boardProps = board.getBoundingClientRect();
      var top = boardProps.top;
      var left = boardProps.left;
      instructions.setAttribute('style', "top: ".concat(top, "px; left: ").concat(left, "px;"));
    }
  }
}

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var white = "W",
    black = "B",
    empty = "_",
    neutral = ".";

var Board = /*#__PURE__*/function () {
  function Board(size) {
    _classCallCheck(this, Board);

    this.size = size;
    this.fullSize = size * size;
    this.grid = this.blankGrid();
    this.prevPositions = [];
  }

  _createClass(Board, [{
    key: "swap",
    value: function swap(color) {
      if (color === black) return white;
      if (color === white) return black;
      return color;
    }
  }, {
    key: "blankGrid",
    value: function blankGrid() {
      return empty.repeat(this.fullSize);
    }
  }, {
    key: "sPos",
    value: function sPos(pos) {
      return this.size * pos[0] + pos[1];
    }
  }, {
    key: "pos",
    value: function pos(sPos) {
      var row = Math.floor(sPos / this.size);
      var col = sPos % this.size;
      return [row, col];
    }
  }, {
    key: "validPos",
    value: function validPos(pos) {
      var _pos = _slicedToArray(pos, 2),
          x = _pos[0],
          y = _pos[1];

      if (x < 0 || y < 0) return false;
      return x % this.size === x && y % this.size === y;
    }
  }, {
    key: "placeStone",
    value: function placeStone(color, sPos) {
      this.grid = this.grid.slice(0, sPos) + color + this.grid.slice(sPos + 1);
    }
  }, {
    key: "placeManyStones",
    value: function placeManyStones(color, sPoses) {
      var arr = this.grid.split("");
      var cell;
      sPoses.forEach(function (sPos) {
        arr[sPos] = color;
      });
      return this.grid = arr.join("");
    }
  }, {
    key: "neighbors",
    value: function neighbors(sPos) {
      var _this = this;

      var _this$pos = this.pos(sPos),
          _this$pos2 = _slicedToArray(_this$pos, 2),
          row = _this$pos2[0],
          col = _this$pos2[1];

      var positions = [[row, col - 1], [row - 1, col], [row, col + 1], [row + 1, col]];
      var neighbs = [];
      positions.forEach(function (pos) {
        if (_this.validPos(pos)) neighbs.push(_this.sPos(pos));
      });
      return neighbs;
    }
  }, {
    key: "findString",
    value: function findString(sPos) {
      var _this2 = this;

      var color = this.grid[sPos];
      var stoneString = [];
      var bordered = [];
      var nextInString = [sPos];
      var currentStone;

      while (nextInString.length) {
        currentStone = nextInString.pop();
        stoneString.push(currentStone);
        this.neighbors(currentStone).forEach(function (neighb) {
          if (_this2.grid[neighb] === color && !stoneString.includes(neighb) && !nextInString.includes(neighb)) {
            nextInString.push(neighb);
          }

          if (_this2.grid[neighb] !== color) {
            bordered.push(neighb);
          }
        });
      }

      return {
        stoneString: stoneString,
        bordered: bordered
      };
    }
  }, {
    key: "captureSurrounded",
    value: function captureSurrounded(sPos) {
      var _this3 = this;

      var toPlace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var _this$findString = this.findString(sPos),
          stoneString = _this$findString.stoneString,
          bordered = _this$findString.bordered;

      var capture = true;
      bordered.forEach(function (secondPos) {
        if (_this3.grid[secondPos] === empty) {
          capture = false;
        }
      });

      if (capture) {
        if (toPlace) this.placeManyStones(empty, stoneString);
        return stoneString;
      } else {
        return [];
      }
    }
  }, {
    key: "playMove",
    value: function playMove(player, sPos) {
      var _this4 = this;

      var color = player.color;
      var opponent = this.swap(color);
      var grid = this.grid;
      var capturedStones = []; //do nothing if position is occupied

      if (grid[sPos] !== empty) return;
      this.placeStone(color, sPos); //find opponent stones in neighbors, capture if possible

      this.neighbors(sPos).forEach(function (neighb) {
        if (grid[neighb] === opponent) {
          capturedStones = capturedStones.concat(_this4.captureSurrounded(neighb));
        }
      }); //check for suicidal move

      if (this.captureSurrounded(sPos, false).length) {
        this.placeStone(empty, sPos);
        throw "Suicide! Try again";
      } //check for ko


      if (this.prevPositions.includes(this.grid)) {
        this.grid = this.prevPositions[this.prevPositions.length - 1];
        throw "Ko! Invalid move, try again";
      } //reduce captured stones to unique values


      var capturedReduced = [];

      if (capturedStones.length) {
        for (var i = 0; i < capturedStones.length; i++) {
          if (!capturedReduced.includes(capturedStones[i])) {
            capturedReduced.push(capturedStones[i]);
          }
        }
      }

      player.captured += capturedReduced.length;
      this.prevPositions.push(this.grid);
      return capturedStones;
    }
  }, {
    key: "score",
    value: function score() {
      var _this5 = this;

      var _loop = function _loop() {
        var idx = _this5.grid.indexOf(empty);

        var _this5$findString = _this5.findString(idx),
            stoneString = _this5$findString.stoneString,
            bordered = _this5$findString.bordered;

        var borderColors = bordered.map(function (sPos) {
          return _this5.grid[sPos].toUpperCase();
        });
        var matched = true;
        var firstColor = borderColors[0];
        if (!firstColor) matched = false;
        borderColors.forEach(function (color) {
          if (color !== firstColor) matched = false;
        });

        if (matched) {
          _this5.placeManyStones(firstColor.toLowerCase(), stoneString);
        } else {
          _this5.placeManyStones(neutral, stoneString);
        }
      };

      //fill grid territories (lowercase letters for visual difference)
      while (this.grid.includes(empty)) {
        _loop();
      } //count up the final scores


      var scoresGrid = this.grid.toUpperCase();
      var blackScore = 0;
      var whiteScore = 0;

      for (var i = 0; i < scoresGrid.length; i++) {
        if (scoresGrid[i] === black) blackScore++;
        if (scoresGrid[i] === white) whiteScore++;
      }

      ;
      return {
        blackScore: blackScore,
        whiteScore: whiteScore,
        grid: this.grid
      };
    }
  }]);

  return Board;
}();



/***/ }),

/***/ "./src/scripts/dropdowns.js":
/*!**********************************!*\
  !*** ./src/scripts/dropdowns.js ***!
  \**********************************/
/*! exports provided: dropdown, authorElements, aboutElements, instructions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropdown", function() { return dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorElements", function() { return authorElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutElements", function() { return aboutElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instructions", function() { return instructions; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//Author and About dropdowns
function dropdown(parent, name, listElements) {
  var dropdown = document.createElement('ul');
  var button = document.createElement('button');
  var list = document.createElement('ul');
  button.id = name.toLowerCase();
  list.id = "".concat(name.toLowerCase(), "-list");
  dropdown.classList.add('dropdown');
  button.classList.add('option', 'drop-button');
  list.classList.add('list');
  if (name === 'Author') button.classList.add('red');
  button.innerHTML = name;
  list.append.apply(list, _toConsumableArray(listElements));
  dropdown.append(button, list);
  parent.appendChild(dropdown);
  button.onclick = reveal(dropdown, list);
  document.onclick = hideLists;
}

function reveal(dropdown, list) {
  return function (event) {
    event.stopPropagation();
    hideLists();
    list.classList.toggle('show');
  };
}

function hideLists() {
  var lists = document.querySelectorAll('.list');

  for (var i = 0; i < lists.length; i++) {
    if (lists[i].classList.contains('show')) {
      lists[i].classList.remove('show');
    }
  }
}

function authorElements() {
  var name = document.createElement('h3');
  name.classList.add('red');
  name.innerHTML = 'Donald Herndon';
  var links = document.createElement('ul');
  links.id = 'author-links';
  var github = listLink('https://github.com/herndal/go', '<i class="fab fa-github-square"></i>', 'My Github repository for this project');
  var linkedIn = listLink('https://www.linkedin.com/in/donald-herndon-8364b01a5/', '<i class="fab fa-linkedin"></i>', 'My LinkedIn');
  var twitter = listLink('https://twitter.com/donald_builds', '<i class="fab fa-twitter-square"></i>', 'My Twitter');
  links.append(github, linkedIn, twitter);
  return [name, links];
}
function aboutElements() {
  var wikipedia = listLink('https://en.wikipedia.org/wiki/History_of_Go', '<i class="fab fa-wikipedia-w"></i>', 'Wikipedia: the History of Go', 'wikipedia');
  var aga = listLink('https://www.usgo.org/', img('https://www.usgo.org/theme/images/agalogo2.png'), 'The American Go Association. Founded in New York City in 1935, AGA is one of the oldest Western Go associations.', 'aga');
  var deepMind = listLink('https://deepmind.com/research/case-studies/alphago-the-story-so-far', img('https://upload.wikimedia.org/wikipedia/commons/1/12/DeepMind_logo.png'), 'In 2016, DeepMind\'s AlphaGo became the first program capable of defeating a Go world champion. Their story inspired this project', 'deepMind');
  return [aga, wikipedia, deepMind];
} //In-game instructions modal

function instructions(game) {
  var root = document.getElementById('root');
  var button = document.createElement('div');
  var instructions = document.createElement('div');
  button.id = 'instructions-button';
  instructions.id = 'instructions';
  button.innerHTML = '<i class="far fa-question-circle"></i>';
  fillInstructions(instructions);
  root.appendChild(instructions);
  game.appendChild(button);
  button.onclick = showInstructions(instructions);
  document.onclick = hideInstructions(instructions);
}

function fillInstructions(instructions) {
  var gettingStarted = document.createElement('div');
  var gettingStartedTitle = document.createElement('h4');
  var gettingStartedInfo = document.createElement('ul');
  gettingStartedTitle.innerHTML = 'Getting Started';
  gettingStartedInfo.append(li('The board is empty at the beginning of the game.'), li('The first player to move is Black.'), li('Players alternate turns until the game is over.'));
  gettingStarted.append(gettingStartedTitle, gettingStartedInfo);
  var gamePlay = document.createElement('div');
  var gamePlayTitle = document.createElement('h4');
  var gamePlayInfo = document.createElement('ul');
  gamePlayTitle.innerHTML = 'Taking Turns and Capturing';
  gamePlayInfo.append(li('On their turn, a player can either pass their turn or place one stone.'), li('Click on any empty intersection to place a stone:'), img('https://cabins-seeds.s3.amazonaws.com/go-move-example.png'), li('To pass your turn, click on your color\'s information box:'), img('https://cabins-seeds.s3.amazonaws.com/go-pass-example.png'), li('Adjacent stones form a group.'), li('A liberty is defined as an empty intersection next to a group.'), img('https://cabins-seeds.s3.amazonaws.com/go-liberty-example.png'), li('In this example, the large white group has just one liberty remaining, in the center.'), li('When a group has no liberties, it becomes captured and is removed from the board:'), img('https://cabins-seeds.s3.amazonaws.com/go-captured-example.png'), li('Now the black player has filled the last liberty and captured seven white stones.'), li('There are two illegal moves: Suicide and Ko.'), li('Ko means that a previous position of the board cannot be exactly repeated.'), li('Suicide means that a player cannot play a move that results in their own group being captured.'));
  gamePlay.append(gamePlayTitle, gamePlayInfo);
  var winning = document.createElement('div');
  var winningTitle = document.createElement('h4');
  var winningInfo = document.createElement('ul');
  winningTitle.innerHTML = 'Ending the game';
  winningInfo.append(li('The game ends when both players pass their turn.'), li('The player who commands more territory on the board wins.'), img('https://cabins-seeds.s3.amazonaws.com/go-endgame-example.png'), li('A player\'s territory includes the stones on the board of one color and the empty intersections surrounded by that color.'));
  winning.append(winningTitle, winningInfo);
  instructions.append(gettingStarted, gamePlay, winning);
}

function showInstructions(instructions) {
  return function (event) {
    event.stopPropagation();
    instructions.classList.toggle('show');
    var board = document.querySelector('.board-group').firstChild;
    var boardProps = board.getBoundingClientRect();
    var top = boardProps.top;
    var left = boardProps.left;
    instructions.setAttribute('style', "top: ".concat(top, "px; left: ").concat(left, "px;"));
  };
}

function hideInstructions(instructions) {
  return function (event) {
    if (instructions.classList.contains('show')) {
      instructions.classList.remove('show');
    }
  };
} //Utility functions for creating lists


function listLink(href, html, tip) {
  var _link$classList;

  var li = document.createElement('li');
  var link = document.createElement('a');
  li.classList.add('link');

  for (var _len = arguments.length, classes = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    classes[_key - 3] = arguments[_key];
  }

  (_link$classList = link.classList).add.apply(_link$classList, classes);

  link.href = href;

  if (typeof html === 'string') {
    link.innerHTML = html;
  } else {
    link.append(html);
  }

  tooltip(link, tip);
  link.target = 'blank';
  li.appendChild(link);
  return li;
}

function li(text) {
  var element = document.createElement('li');
  element.innerHTML = text;
  return element;
}

function img(url) {
  var element = document.createElement('img');
  element.src = url;
  return element;
}

function tooltip(link, tip) {
  link.title = tip;
  link.addEventListener('mouseover', showTip);
  link.addEventListener('mouseout', hideTip);
}

function showTip() {
  var title = this.title;
  this.title = '';
  this.setAttribute('tooltip', title);
  var tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.append(title);
  document.body.firstChild.before(tooltip);
  tooltip.setAttribute('style', 'max-width: 13em');
  var linkProps = this.getBoundingClientRect();
  var tooltipProps = tooltip.getBoundingClientRect();
  var top = linkProps.top - tooltipProps.height - 10;
  var left = linkProps.left + linkProps.width / 2 - tooltipProps.width / 2;
  tooltip.setAttribute('style', "max-width: 13em; top: ".concat(top, "px; left: ").concat(left, "px;"));
}

function hideTip() {
  var title = this.getAttribute('tooltip');
  this.title = title;
  this.removeAttribute('tooltip');
  document.querySelector(".tooltip").remove();
}

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/scripts/board.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/scripts/player.js");
/* harmony import */ var _dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdowns */ "./src/scripts/dropdowns.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var black = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]('black', 'B');
var white = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]('white', 'W');
var players = {
  'B': black,
  'W': white
};

var Game = /*#__PURE__*/function () {
  function Game(size, newGame) {
    _classCallCheck(this, Game);

    this.currentPlayer = black;
    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"](size);
    this.reset();
    this.drawGame(size);
    this.passTurn = this.passTurn.bind(this);
    this.newGame = newGame.bind(this);
  }

  _createClass(Game, [{
    key: "reset",
    value: function reset() {
      black.captured = 0;
      white.captured = 0;
    }
  }, {
    key: "drawGame",
    value: function drawGame(size) {
      var game = document.createElement('div');
      game.id = 'game';
      game.classList.add('black');
      Object(_dropdowns__WEBPACK_IMPORTED_MODULE_2__["instructions"])(game);
      this.drawBoard(size, game);
      this.drawPlayers(size, game);
      document.getElementById('root').appendChild(game);
      this.drawStars(size);
    }
  }, {
    key: "addCell",
    value: function addCell(element, color) {
      var cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.stone = color;
      element.appendChild(cell);
    }
  }, {
    key: "drawPlayers",
    value: function drawPlayers(size, game) {
      var docPlayers = document.createElement('div');
      var blackPlayer = document.createElement('div');
      var whitePlayer = document.createElement('div');
      var blackCaptured = document.createElement('div');
      var whiteCaptured = document.createElement('div');
      docPlayers.classList.add('players');
      blackPlayer.classList.add('player', 'black');
      whitePlayer.classList.add('player', 'white');
      blackCaptured.classList.add('captured');
      whiteCaptured.classList.add('captured');
      docPlayers.dataset.pass = false;
      blackPlayer.dataset.player = 'B';
      whitePlayer.dataset.player = 'W';
      blackCaptured.innerHTML = "".concat(black.captured);
      whiteCaptured.innerHTML = "".concat(white.captured);
      this.addCell(blackPlayer, 'B');
      this.addCell(whitePlayer, 'W');
      blackPlayer.appendChild(blackCaptured);
      whitePlayer.appendChild(whiteCaptured);
      docPlayers.append(blackPlayer, whitePlayer);
      game.appendChild(docPlayers);
    }
  }, {
    key: "drawBoard",
    value: function drawBoard(size, game) {
      var boardGroup = document.createElement('div');
      var board = document.createElement('ul');
      boardGroup.classList.add('board-group');
      board.classList.add('board', "s".concat(size));
      var k = 0;

      for (var i = 0; i < size; i++) {
        var row = document.createElement('ul');
        row.className = 'row';

        for (var r = 0; r < size; r++) {
          var cell = document.createElement('div');
          cell.classList.add('cell');
          cell.dataset.index = k;
          cell.dataset.stone = "_";
          row.appendChild(cell);
          k++;
        }

        ;
        board.appendChild(row);
      }

      ;
      boardGroup.appendChild(board);
      game.appendChild(boardGroup);
    }
  }, {
    key: "drawStars",
    value: function drawStars(size) {
      var stars = [];

      switch (size) {
        case "5":
          stars = [12];
          break;

        case "9":
          stars = [20, 24, 40, 56, 60];
          break;

        case "13":
          stars = [42, 48, 84, 120, 126];
          break;

        case "19":
          stars = [60, 66, 72, 174, 180, 186, 288, 294, 300];
      }

      var cell;
      stars.forEach(function (star) {
        cell = document.querySelector("[data-index=\"".concat(star, "\"]"));
        cell.classList.add("star");
      });
    }
  }, {
    key: "play",
    value: function play() {
      var notPasses = this.addPassListeners();
      document.querySelector('.board').addEventListener("click", this.playTurn(this.board, notPasses));
    }
  }, {
    key: "swap",
    value: function swap() {
      if (this.currentPlayer === black) {
        this.currentPlayer = white;
      } else {
        this.currentPlayer = black;
      }

      var game = document.querySelector('#game');
      game.classList.toggle('white');
      game.classList.toggle('black');
    }
  }, {
    key: "playTurn",
    value: function playTurn(board, notPasses) {
      var _this = this;

      return function (e) {
        e.preventDefault();
        var player = _this.currentPlayer;
        var color = player.color;
        var name = player.name;

        if (e.target.classList.contains('cell')) {
          var sPos = parseInt(e.target.dataset.index);

          try {
            var capturedStones = board.playMove(player, sPos);

            if (capturedStones) {
              _this.clearErrors();

              e.target.dataset.stone = color;
              var cell;
              capturedStones.forEach(function (index) {
                cell = document.querySelector("[data-index=\"".concat(index, "\"]"));
                cell.dataset.stone = "_";
              });
              notPasses[0]();
              notPasses[1]();
              var docPlayers = document.querySelector('.players');

              if (docPlayers.dataset.pass === 'true') {
                var opponentColor = color === 'W' ? 'B' : 'W';
                var index = color === 'W' ? 0 : 1;
                var opponent = document.querySelector("[data-player=\"".concat(opponentColor, "\"]"));
                notPasses[index] = _this.resetPassListeners(opponent);
                docPlayers.dataset.pass = false;
              }

              var capturedElement = document.querySelector(".player.".concat(name)).childNodes[1];
              capturedElement.innerHTML = "".concat(player.captured);

              _this.swap();
            }
          } catch (error) {
            _this.renderError(error);
          }
        }
      };
    }
  }, {
    key: "addPassListeners",
    value: function addPassListeners() {
      var _this2 = this;

      var notPasses = [];
      document.querySelectorAll('.player').forEach(function (player) {
        var listeners = [_this2.offerPass(player), _this2.notPass(player)];
        notPasses.push(listeners[1]);
        player.addEventListener('mouseover', listeners[0]);
        player.addEventListener('mouseout', listeners[1]);
        player.onclick = _this2.passTurn(player, listeners);
      });
      return notPasses;
    }
  }, {
    key: "resetPassListeners",
    value: function resetPassListeners(player) {
      var listeners = [this.offerPass(player), this.notPass(player)];
      player.addEventListener('mouseover', listeners[0]);
      player.addEventListener('mouseout', listeners[1]);
      player.onclick = this.passTurn(player, listeners);
      return listeners[1];
    }
  }, {
    key: "offerPass",
    value: function offerPass(player) {
      var _this3 = this;

      return function () {
        if (player.dataset.player === _this3.currentPlayer.color) {
          var pass = player.childNodes[1];
          if (pass) player.removeChild(player.childNodes[1]);
          player.classList.add("pass");
          player.dataset.pass = true;
        }
      };
    }
  }, {
    key: "notPass",
    value: function notPass(player) {
      return function () {
        if (player.dataset.pass === 'true') {
          player.dataset.pass = false;
          player.classList.remove('pass');
          var captured = document.createElement('div');
          captured.classList.add('captured');
          var gamePlayer = players[player.dataset.player];
          captured.innerHTML = "".concat(gamePlayer.captured);
          player.appendChild(captured);
        }
      };
    }
  }, {
    key: "passTurn",
    value: function passTurn(player, listeners) {
      var _this4 = this;

      return function (e) {
        if (player.dataset.player === _this4.currentPlayer.color) {
          e.preventDefault;

          _this4.clearErrors();

          var docPlayers = document.querySelector('.players');

          if (docPlayers.dataset.pass === 'true') {
            _this4.endGame(docPlayers);
          } else {
            docPlayers.dataset.pass = true;
            player.classList.add("pass");
            player.removeEventListener('mouseover', listeners[0]);
            player.removeEventListener('mouseout', listeners[1]);

            _this4.swap();
          }
        }
      };
    }
  }, {
    key: "renderError",
    value: function renderError(message) {
      var board = document.querySelector('.board');
      var error = document.getElementById('error');

      if (!error) {
        error = document.createElement('h3');
        error.id = 'error';
        board.after(error);
      }

      error.innerHTML = message;
    }
  }, {
    key: "clearErrors",
    value: function clearErrors() {
      var boardGroup = document.querySelector('.board-group');
      var error = document.getElementById('error');

      while (error) {
        boardGroup.removeChild(error);
        error = document.getElementById('error');
      }
    }
  }, {
    key: "endGame",
    value: function endGame(docPlayers) {
      var root = document.getElementById('root');
      var instructionsButton = document.getElementById('instructions-button');
      var instructions = document.getElementById('instructions');
      root.removeChild(instructions);
      var game = document.querySelector('#game');
      game.classList.add('over');
      game.removeChild(instructionsButton);
      game.removeChild(docPlayers);
      this.drawScore();
    }
  }, {
    key: "drawScore",
    value: function drawScore() {
      var _this$board$score = this.board.score(),
          blackScore = _this$board$score.blackScore,
          whiteScore = _this$board$score.whiteScore,
          grid = _this$board$score.grid;

      var boardGroup = document.querySelector('.board-group');
      var endGame = document.createElement('div');
      var header = document.createElement('div');
      var winMessage = document.createElement('h2');
      var table = document.createElement('div');
      var blackTotals = document.createElement('div');
      var whiteTotals = document.createElement('div');
      var blackBox = document.createElement('div');
      var whiteBox = document.createElement('div');
      var footer = document.createElement('div');
      var goHome = document.createElement('button');
      endGame.classList.add('endgame');
      table.classList.add('table');
      blackTotals.classList.add('totals', 'board', 'black');
      whiteTotals.classList.add('totals', 'board', 'white');
      blackBox.classList.add('total-box');
      whiteBox.classList.add('total-box');

      if (blackScore > whiteScore) {
        winMessage.innerHTML = "Black wins!"; //or draw
      } else if (blackScore < whiteScore) {
        winMessage.innerHTML = "White wins!"; //or draw
      } else {
        winMessage.innerHTML = "Draw!"; //or draw
      }

      header.id = 'endgame-header';
      header.appendChild(winMessage);
      goHome.innerHTML = 'Home';
      goHome.onclick = this.newGame;
      footer.id = 'board-footer';
      footer.appendChild(goHome);
      this.addCell(blackTotals, 'B');
      this.addCell(whiteTotals, 'W');
      this.addScore(blackBox, blackScore);
      this.addScore(whiteBox, whiteScore);
      this.addCaptured(blackBox, 'B');
      this.addCaptured(whiteBox, 'W');
      blackTotals.appendChild(blackBox);
      whiteTotals.appendChild(whiteBox);
      table.append(blackTotals, whiteTotals);

      for (var i = 0; i < grid.length; i++) {
        var cell = document.querySelector("[data-index=\"".concat(i, "\"]"));
        cell.dataset.stone = grid[i];
      }

      var query = window.matchMedia("(max-height: 550px)");
      query.matches ? footer.append(header) : endGame.append(header);
      endGame.append(table);
      boardGroup.before(endGame);
      boardGroup.appendChild(footer);
    }
  }, {
    key: "addCaptured",
    value: function addCaptured(element, color) {
      var child = document.createElement('div');
      var message = document.createElement('h3');
      var captured = document.createElement('h2');
      child.classList.add('total');
      message.innerHTML = 'Captured:';
      captured.innerHTML = "".concat(players[color].captured);
      child.append(message, captured);
      element.append(child);
    }
  }, {
    key: "addScore",
    value: function addScore(element, score) {
      var child = document.createElement('div');
      var message = document.createElement('h3');
      var htmlScore = document.createElement('h2');
      child.classList.add('total');
      message.innerHTML = 'Score:';
      htmlScore.innerHTML = "".concat(score);
      child.append(message, htmlScore);
      element.append(child);
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function Player(name, color) {
  _classCallCheck(this, Player);

  this.name = name;
  this.color = color;
  this.captured = 0;
};



/***/ }),

/***/ "./src/styles/board.css":
/*!******************************!*\
  !*** ./src/styles/board.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/endgame.css":
/*!********************************!*\
  !*** ./src/styles/endgame.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/game.css":
/*!*****************************!*\
  !*** ./src/styles/game.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/nav.css":
/*!****************************!*\
  !*** ./src/styles/nav.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/responsive-design.css":
/*!******************************************!*\
  !*** ./src/styles/responsive-design.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Ryb3Bkb3ducy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2JvYXJkLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2VuZGdhbWUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2FtZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9uYXYuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcmVzcG9uc2l2ZS1kZXNpZ24uY3NzIl0sIm5hbWVzIjpbInJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicXVlcnkiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiaG9tZSIsInRpdGxlIiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJpZCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiYXBwZW5kIiwib3B0aW9ucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVMYW5kc2NhcGUiLCJvbGRHYW1lIiwiZ2FtZUZvcm0iLCJxdWVyeVNlbGVjdG9yIiwiYmFjayIsInJlbW92ZUNoaWxkIiwicGxheSIsImNsYXNzTGlzdCIsImFkZCIsIm9uY2xpY2siLCJuZXdHYW1lIiwiZHJvcGRvd24iLCJhYm91dEVsZW1lbnRzIiwiYXV0aG9yRWxlbWVudHMiLCJkb2NPcHRpb25zIiwic2VsZWN0U2l6ZSIsInNlbGVjdFNpemVMYWJlbCIsImNob29zZTUiLCJjaG9vc2U5IiwiY2hvb3NlMTMiLCJjaG9vc2UxOSIsInN1Ym1pdCIsInZhbHVlIiwiYmFja0J1dHRvbiIsInBsYXlHbyIsImJ1dHRvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzaXplIiwiZ2FtZSIsIkdhbWUiLCJvdmVyIiwiY29udGFpbnMiLCJ0aXRsZUJsb2NrIiwibWF0Y2hlcyIsImZvb3RlciIsImhlYWRlciIsInJlbW92ZSIsImZpcnN0Q2hpbGQiLCJiZWZvcmUiLCJ0YWJsZSIsImluc3RydWN0aW9ucyIsImJvYXJkIiwiYm9hcmRQcm9wcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJzZXRBdHRyaWJ1dGUiLCJ3aGl0ZSIsImJsYWNrIiwiZW1wdHkiLCJuZXV0cmFsIiwiQm9hcmQiLCJmdWxsU2l6ZSIsImdyaWQiLCJibGFua0dyaWQiLCJwcmV2UG9zaXRpb25zIiwiY29sb3IiLCJyZXBlYXQiLCJwb3MiLCJzUG9zIiwicm93IiwiTWF0aCIsImZsb29yIiwiY29sIiwieCIsInkiLCJzbGljZSIsInNQb3NlcyIsImFyciIsInNwbGl0IiwiY2VsbCIsImZvckVhY2giLCJqb2luIiwicG9zaXRpb25zIiwibmVpZ2hicyIsInZhbGlkUG9zIiwicHVzaCIsInN0b25lU3RyaW5nIiwiYm9yZGVyZWQiLCJuZXh0SW5TdHJpbmciLCJjdXJyZW50U3RvbmUiLCJsZW5ndGgiLCJwb3AiLCJuZWlnaGJvcnMiLCJuZWlnaGIiLCJpbmNsdWRlcyIsInRvUGxhY2UiLCJmaW5kU3RyaW5nIiwiY2FwdHVyZSIsInNlY29uZFBvcyIsInBsYWNlTWFueVN0b25lcyIsInBsYXllciIsIm9wcG9uZW50Iiwic3dhcCIsImNhcHR1cmVkU3RvbmVzIiwicGxhY2VTdG9uZSIsImNvbmNhdCIsImNhcHR1cmVTdXJyb3VuZGVkIiwiY2FwdHVyZWRSZWR1Y2VkIiwiaSIsImNhcHR1cmVkIiwiaWR4IiwiaW5kZXhPZiIsImJvcmRlckNvbG9ycyIsIm1hcCIsInRvVXBwZXJDYXNlIiwibWF0Y2hlZCIsImZpcnN0Q29sb3IiLCJ0b0xvd2VyQ2FzZSIsInNjb3Jlc0dyaWQiLCJibGFja1Njb3JlIiwid2hpdGVTY29yZSIsInBhcmVudCIsIm5hbWUiLCJsaXN0RWxlbWVudHMiLCJsaXN0IiwicmV2ZWFsIiwiaGlkZUxpc3RzIiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlIiwibGlzdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGlua3MiLCJnaXRodWIiLCJsaXN0TGluayIsImxpbmtlZEluIiwidHdpdHRlciIsIndpa2lwZWRpYSIsImFnYSIsImltZyIsImRlZXBNaW5kIiwiZmlsbEluc3RydWN0aW9ucyIsInNob3dJbnN0cnVjdGlvbnMiLCJoaWRlSW5zdHJ1Y3Rpb25zIiwiZ2V0dGluZ1N0YXJ0ZWQiLCJnZXR0aW5nU3RhcnRlZFRpdGxlIiwiZ2V0dGluZ1N0YXJ0ZWRJbmZvIiwibGkiLCJnYW1lUGxheSIsImdhbWVQbGF5VGl0bGUiLCJnYW1lUGxheUluZm8iLCJ3aW5uaW5nIiwid2lubmluZ1RpdGxlIiwid2lubmluZ0luZm8iLCJocmVmIiwiaHRtbCIsInRpcCIsImxpbmsiLCJjbGFzc2VzIiwidG9vbHRpcCIsInRhcmdldCIsImVsZW1lbnQiLCJ1cmwiLCJzcmMiLCJzaG93VGlwIiwiaGlkZVRpcCIsImJvZHkiLCJsaW5rUHJvcHMiLCJ0b29sdGlwUHJvcHMiLCJoZWlnaHQiLCJ3aWR0aCIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIlBsYXllciIsInBsYXllcnMiLCJjdXJyZW50UGxheWVyIiwicmVzZXQiLCJkcmF3R2FtZSIsInBhc3NUdXJuIiwiYmluZCIsImRyYXdCb2FyZCIsImRyYXdQbGF5ZXJzIiwiZHJhd1N0YXJzIiwiZGF0YXNldCIsInN0b25lIiwiZG9jUGxheWVycyIsImJsYWNrUGxheWVyIiwid2hpdGVQbGF5ZXIiLCJibGFja0NhcHR1cmVkIiwid2hpdGVDYXB0dXJlZCIsInBhc3MiLCJhZGRDZWxsIiwiYm9hcmRHcm91cCIsImsiLCJjbGFzc05hbWUiLCJyIiwiaW5kZXgiLCJzdGFycyIsInN0YXIiLCJub3RQYXNzZXMiLCJhZGRQYXNzTGlzdGVuZXJzIiwicGxheVR1cm4iLCJlIiwicGFyc2VJbnQiLCJwbGF5TW92ZSIsImNsZWFyRXJyb3JzIiwib3Bwb25lbnRDb2xvciIsInJlc2V0UGFzc0xpc3RlbmVycyIsImNhcHR1cmVkRWxlbWVudCIsImNoaWxkTm9kZXMiLCJlcnJvciIsInJlbmRlckVycm9yIiwibGlzdGVuZXJzIiwib2ZmZXJQYXNzIiwibm90UGFzcyIsImdhbWVQbGF5ZXIiLCJlbmRHYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1lc3NhZ2UiLCJhZnRlciIsImluc3RydWN0aW9uc0J1dHRvbiIsImRyYXdTY29yZSIsInNjb3JlIiwid2luTWVzc2FnZSIsImJsYWNrVG90YWxzIiwid2hpdGVUb3RhbHMiLCJibGFja0JveCIsIndoaXRlQm94IiwiZ29Ib21lIiwiYWRkU2NvcmUiLCJhZGRDYXB0dXJlZCIsImNoaWxkIiwiaHRtbFNjb3JlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtR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Ozs7Ozs7Ozs7OztJQzVUa0IxRCxNLEdBQ25CLGdCQUFZbEQsSUFBWixFQUFrQnpELEtBQWxCLEVBQXlCO0FBQUE7O0FBQ3ZCLE9BQUt5RCxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLekQsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBSzRDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDRCxDOzs7Ozs7Ozs7Ozs7O0FDTEgsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuaW1wb3J0IHtcbiAgZHJvcGRvd24sXG4gIGF1dGhvckVsZW1lbnRzLFxuICBhYm91dEVsZW1lbnRzXG4gfSBmcm9tICcuL3NjcmlwdHMvZHJvcGRvd25zJztcbmltcG9ydCBcIi4vc3R5bGVzL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvbmF2LmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvZ2FtZS5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2JvYXJkLmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvZW5kZ2FtZS5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3Jlc3BvbnNpdmUtZGVzaWduLmNzc1wiO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbmNvbnN0IHF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LWhlaWdodDogNTUwcHgpXCIpO1xuaG9tZSgpO1xuXG5mdW5jdGlvbiBob21lKCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGUuaWQgPSAndGl0bGUnO1xuICB0ZXh0LmlubmVySFRNTCA9ICdHbyc7XG4gIHRpdGxlLmFwcGVuZENoaWxkKHRleHQpO1xuICByb290LmFwcGVuZCh0aXRsZSk7XG4gIG9wdGlvbnMoKTtcbiAgcXVlcnkuYWRkRXZlbnRMaXN0ZW5lcih0b2dnbGVMYW5kc2NhcGUpO1xufVxuXG5mdW5jdGlvbiBvcHRpb25zKCkge1xuICBjb25zdCBvbGRHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbiAgY29uc3QgZ2FtZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWdhbWUnKTtcbiAgY29uc3QgYmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrJyk7XG4gIGlmKG9sZEdhbWUpIHJvb3QucmVtb3ZlQ2hpbGQob2xkR2FtZSk7XG4gIGlmKGdhbWVGb3JtKSByb290LnJlbW92ZUNoaWxkKGdhbWVGb3JtKTtcbiAgaWYoYmFjaykgcm9vdC5yZW1vdmVDaGlsZChiYWNrKTtcbiAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IHBsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgb3B0aW9ucy5pZCA9ICdvcHRpb25zJztcbiAgcGxheS5pZCA9ICdwbGF5JztcbiAgcGxheS5jbGFzc0xpc3QuYWRkKCdvcHRpb24nKTtcbiAgcGxheS5pbm5lckhUTUwgPSAnUGxheSc7XG4gIHBsYXkub25jbGljayA9IG5ld0dhbWU7XG4gIG9wdGlvbnMuYXBwZW5kQ2hpbGQocGxheSk7XG4gIGRyb3Bkb3duKG9wdGlvbnMsICdBYm91dCcsIGFib3V0RWxlbWVudHMoKSk7XG4gIGRyb3Bkb3duKG9wdGlvbnMsICdBdXRob3InLCBhdXRob3JFbGVtZW50cygpKTtcbiAgcm9vdC5hcHBlbmRDaGlsZChvcHRpb25zKTtcbiAgLy8gY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIC8vIGNvbnN0IGZvb3RlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyBjb25zdCBmcmVlcGlrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAvLyBjb25zdCBmbGF0aWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgLy8gY29uc3QgZm9udGF3ZXNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIC8vIGZyZWVwaWsuaHJlZiA9IFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2F1dGhvcnMvZnJlZXBpa1wiO1xuICAvLyBmbGF0aWNvbi5ocmVmID0gXCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vXCI7XG4gIC8vIGZvbnRhd2Vzb21lLmhyZWYgPSBcImh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2VcIjtcbiAgLy8gZnJlZXBpay5pbm5lckhUTUwgPSAnRnJlZXBpayc7XG4gIC8vIGZsYXRpY29uLmlubmVySFRNTD0gXCJ3d3cuZmxhdGljb24uY29tXCI7XG4gIC8vIGZvbnRhd2Vzb21lLmlubmVySFRNTCA9IFwid3d3LmZvbnRhd2Vzb21lLmNvbVwiO1xuICAvLyBmb290ZXJCb3guYXBwZW5kKFxuICAvLyAgICdJY29ucyBtYWRlIGJ5ICcsXG4gIC8vICAgZnJlZXBpayxcbiAgLy8gICAnIGZyb20gJyxcbiAgLy8gICBmbGF0aWNvbixcbiAgLy8gICAnIGFuZCAnLFxuICAvLyAgIGZvbnRhd2Vzb21lXG4gIC8vIClcbiAgLy8gZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckJveCk7XG4gIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgdG9nZ2xlTGFuZHNjYXBlKHF1ZXJ5KTtcbn1cblxuZnVuY3Rpb24gbmV3R2FtZSgpIHtcbiAgY29uc3QgZG9jT3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zJyk7XG4gIHJvb3QucmVtb3ZlQ2hpbGQoZG9jT3B0aW9ucyk7XG4gIGNvbnN0IGdhbWVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHNlbGVjdFNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgY29uc3Qgc2VsZWN0U2l6ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBjaG9vc2U1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IGNob29zZTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3QgY2hvb3NlMTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3QgY2hvb3NlMTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHBsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGdhbWVGb3JtLmNsYXNzTGlzdC5hZGQoJ25ldy1nYW1lJyk7XG4gIHNlbGVjdFNpemUuaWQgPSAnc2l6ZSc7XG4gIHBsYXkuaWQgPSAncGxheSc7XG4gIGNob29zZTUudmFsdWUgPSAnNSc7XG4gIGNob29zZTkudmFsdWUgPSAnOSc7XG4gIGNob29zZTEzLnZhbHVlID0gJzEzJztcbiAgY2hvb3NlMTkudmFsdWUgPSAnMTknO1xuICBzZWxlY3RTaXplTGFiZWwuaW5uZXJIVE1MID0gJ0Nob29zZSB0aGUgc2l6ZSBvZiB5b3VyIGJvYXJkJztcbiAgY2hvb3NlNS5pbm5lckhUTUwgPSAnNSB4IDUnO1xuICBjaG9vc2U5LmlubmVySFRNTCA9ICc5IHggOSc7XG4gIGNob29zZTEzLmlubmVySFRNTCA9ICcxMyB4IDEzJztcbiAgY2hvb3NlMTkuaW5uZXJIVE1MID0gJzE5IHggMTknO1xuICBzdWJtaXQuaW5uZXJIVE1MID0gJ1N0YXJ0IEdhbWUnO1xuICBzZWxlY3RTaXplLmFwcGVuZChjaG9vc2U1LCBjaG9vc2U5LCBjaG9vc2UxMywgY2hvb3NlMTkpO1xuICBwbGF5LmFwcGVuZChzZWxlY3RTaXplLCBzdWJtaXQpO1xuICBnYW1lRm9ybS5hcHBlbmQoc2VsZWN0U2l6ZUxhYmVsLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpLCBwbGF5KTtcbiAgcm9vdC5hcHBlbmQoZ2FtZUZvcm0sIGJhY2tCdXR0b24oKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHBsYXlHbyhnYW1lRm9ybSkpO1xufVxuXG5mdW5jdGlvbiBiYWNrQnV0dG9uKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgYmFjay5jbGFzc0xpc3QuYWRkKCdiYWNrLWdvJywgJ3JlZCcpO1xuICBidXR0b24uaWQgPSAnYmFjayc7XG4gIGJhY2suaW5uZXJIVE1MID0gJ2JhY2snO1xuICBidXR0b24ub25jbGljayA9IG9wdGlvbnM7XG4gIGJ1dHRvbi5hcHBlbmQoJ0dvICcsIGJhY2spO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBwbGF5R28oZ2FtZUZvcm0pIHtcbiAgcmV0dXJuIGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHNpemUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l6ZScpLnZhbHVlO1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShzaXplLCBvcHRpb25zKTtcbiAgICByb290LnJlbW92ZUNoaWxkKGdhbWVGb3JtKTtcbiAgICByb290LnJlbW92ZUNoaWxkKGJhY2spO1xuICAgIHdpbmRvdy5yb290ID0gcm9vdDtcbiAgICAvLyBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb290ZXInKVswXSk7XG4gICAgdG9nZ2xlTGFuZHNjYXBlKHF1ZXJ5KTtcbiAgICBnYW1lLnBsYXkoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVMYW5kc2NhcGUocXVlcnkpIHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG4gIGxldCBvdmVyID0gZmFsc2U7XG4gIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuICBpZiAoZ2FtZSkgb3ZlciA9IGdhbWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVyJyk7XG4gIGxldCB0aXRsZUJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG4gIGlmIChxdWVyeS5tYXRjaGVzICYmIGdhbWUpIHtcbiAgICBpZiAodGl0bGVCbG9jaykgcm9vdC5yZW1vdmVDaGlsZCh0aXRsZUJsb2NrKTtcbiAgICBpZiAob3Zlcikge1xuICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkLWZvb3RlcicpO1xuICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZGdhbWUtaGVhZGVyJyk7XG4gICAgICBoZWFkZXIucmVtb3ZlKCk7XG4gICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKCF0aXRsZUJsb2NrKSB7XG4gICAgICB0aXRsZUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aXRsZUJsb2NrLmlkID0gJ3RpdGxlJztcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9ICdHbyc7XG4gICAgICB0aXRsZUJsb2NrLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIHJvb3QuZmlyc3RDaGlsZC5iZWZvcmUodGl0bGVCbG9jayk7XG4gICAgfVxuICAgIGlmIChvdmVyKSB7XG4gICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZScpXG4gICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5kZ2FtZS1oZWFkZXInKTtcbiAgICAgIGhlYWRlci5yZW1vdmUoKTtcbiAgICAgIHRhYmxlLmJlZm9yZShoZWFkZXIpO1xuICAgIH1cbiAgfVxuICBjb25zdCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zdHJ1Y3Rpb25zJyk7XG4gIGlmIChpbnN0cnVjdGlvbnMpIHtcbiAgICBpZiAoaW5zdHJ1Y3Rpb25zLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XG4gICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1ncm91cCcpLmZpcnN0Q2hpbGQ7XG4gICAgICBjb25zdCBib2FyZFByb3BzID0gYm9hcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCB0b3AgPSBib2FyZFByb3BzLnRvcDtcbiAgICAgIGNvbnN0IGxlZnQgPSBib2FyZFByb3BzLmxlZnQ7XG4gICAgICBpbnN0cnVjdGlvbnMuc2V0QXR0cmlidXRlKCdzdHlsZScsIGB0b3A6ICR7dG9wfXB4OyBsZWZ0OiAke2xlZnR9cHg7YCk7XG4gICAgfVxuICB9XG59IiwiY29uc3QgW3doaXRlLCBibGFjaywgZW1wdHksIG5ldXRyYWxdID0gW1wiV1wiLCBcIkJcIiwgXCJfXCIsIFwiLlwiXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3RvcihzaXplKSB7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmZ1bGxTaXplID0gc2l6ZSAqIHNpemU7XG4gICAgdGhpcy5ncmlkID0gdGhpcy5ibGFua0dyaWQoKTtcbiAgICB0aGlzLnByZXZQb3NpdGlvbnMgPSBbXTtcbiAgfVxuXG4gIHN3YXAoY29sb3IpIHtcbiAgICBpZiAoY29sb3IgPT09IGJsYWNrKSByZXR1cm4gd2hpdGU7XG4gICAgaWYgKGNvbG9yID09PSB3aGl0ZSkgcmV0dXJuIGJsYWNrO1xuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIGJsYW5rR3JpZCgpIHtcbiAgICByZXR1cm4gZW1wdHkucmVwZWF0KHRoaXMuZnVsbFNpemUpO1xuICB9XG5cbiAgc1Bvcyhwb3MpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplICogcG9zWzBdICsgcG9zWzFdO1xuICB9XG5cbiAgcG9zKHNQb3MpIHtcbiAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKHNQb3MgLyB0aGlzLnNpemUpO1xuICAgIGNvbnN0IGNvbCA9IHNQb3MgJSB0aGlzLnNpemU7XG4gICAgcmV0dXJuIFtyb3csIGNvbF07XG4gIH1cblxuICB2YWxpZFBvcyhwb3MpIHtcbiAgICBjb25zdCBbeCwgeV0gPSBwb3M7XG4gICAgaWYoeCA8IDAgfHwgeSA8IDApIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gKHggJSB0aGlzLnNpemUgPT09IHggJiYgeSAlIHRoaXMuc2l6ZSA9PT0geSk7XG4gIH1cblxuICBwbGFjZVN0b25lKGNvbG9yLCBzUG9zKSB7XG4gICAgdGhpcy5ncmlkID0gdGhpcy5ncmlkLnNsaWNlKDAsIHNQb3MpICsgY29sb3IgKyB0aGlzLmdyaWQuc2xpY2Uoc1BvcysxKTtcbiAgfVxuXG4gIHBsYWNlTWFueVN0b25lcyhjb2xvciwgc1Bvc2VzKSB7XG4gICAgY29uc3QgYXJyID0gdGhpcy5ncmlkLnNwbGl0KFwiXCIpO1xuICAgIHZhciBjZWxsO1xuICAgIHNQb3Nlcy5mb3JFYWNoKHNQb3MgPT4ge1xuICAgICAgYXJyW3NQb3NdID0gY29sb3I7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuZ3JpZCA9IGFyci5qb2luKFwiXCIpO1xuICB9XG5cbiAgbmVpZ2hib3JzKHNQb3MpIHtcbiAgICBjb25zdCBbcm93LCBjb2xdID0gdGhpcy5wb3Moc1Bvcyk7XG4gICAgY29uc3QgcG9zaXRpb25zID0gW1tyb3csIGNvbC0xXSwgW3Jvdy0xLCBjb2xdLCBbcm93LCBjb2wrMV0sIFtyb3crMSwgY29sXV07XG4gICAgY29uc3QgbmVpZ2hicyA9IFtdO1xuICAgIHBvc2l0aW9ucy5mb3JFYWNoKHBvcyA9PiB7XG4gICAgICBpZiAodGhpcy52YWxpZFBvcyhwb3MpKSBuZWlnaGJzLnB1c2godGhpcy5zUG9zKHBvcykpXG4gICAgfSlcbiAgICByZXR1cm4gbmVpZ2hicztcbiAgfVxuXG4gIGZpbmRTdHJpbmcoc1Bvcykge1xuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5ncmlkW3NQb3NdO1xuICAgIGNvbnN0IHN0b25lU3RyaW5nID0gW107XG4gICAgY29uc3QgYm9yZGVyZWQgPSBbXTtcbiAgICBjb25zdCBuZXh0SW5TdHJpbmcgPSBbc1Bvc107XG4gICAgbGV0IGN1cnJlbnRTdG9uZTtcbiAgICB3aGlsZSAobmV4dEluU3RyaW5nLmxlbmd0aCkge1xuICAgICAgY3VycmVudFN0b25lID0gbmV4dEluU3RyaW5nLnBvcCgpO1xuICAgICAgc3RvbmVTdHJpbmcucHVzaChjdXJyZW50U3RvbmUpO1xuICAgICAgdGhpcy5uZWlnaGJvcnMoY3VycmVudFN0b25lKS5mb3JFYWNoKG5laWdoYiA9PiB7XG4gICAgICAgIGlmICh0aGlzLmdyaWRbbmVpZ2hiXSA9PT0gY29sb3IgXG4gICAgICAgICAgJiYgIXN0b25lU3RyaW5nLmluY2x1ZGVzKG5laWdoYilcbiAgICAgICAgICAmJiAhbmV4dEluU3RyaW5nLmluY2x1ZGVzKG5laWdoYikpIHtcbiAgICAgICAgICBuZXh0SW5TdHJpbmcucHVzaChuZWlnaGIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdyaWRbbmVpZ2hiXSAhPT0gY29sb3IpIHtcbiAgICAgICAgICBib3JkZXJlZC5wdXNoKG5laWdoYik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKHtcbiAgICAgIHN0b25lU3RyaW5nLFxuICAgICAgYm9yZGVyZWRcbiAgICB9KTtcbiAgfVxuXG4gIGNhcHR1cmVTdXJyb3VuZGVkKHNQb3MsIHRvUGxhY2UgPSB0cnVlKSB7XG4gICAgY29uc3QgeyBcbiAgICAgIHN0b25lU3RyaW5nLCBcbiAgICAgIGJvcmRlcmVkIFxuICAgIH0gPSB0aGlzLmZpbmRTdHJpbmcoc1Bvcyk7XG4gICAgbGV0IGNhcHR1cmUgPSB0cnVlO1xuICAgIGJvcmRlcmVkLmZvckVhY2goc2Vjb25kUG9zID0+IHtcbiAgICAgIGlmICh0aGlzLmdyaWRbc2Vjb25kUG9zXSA9PT0gZW1wdHkpIHtcbiAgICAgICAgY2FwdHVyZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChjYXB0dXJlKSB7XG4gICAgICBpZiAodG9QbGFjZSkgdGhpcy5wbGFjZU1hbnlTdG9uZXMoZW1wdHksIHN0b25lU3RyaW5nKTtcbiAgICAgIHJldHVybiBzdG9uZVN0cmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIHBsYXlNb3ZlKHBsYXllciwgc1Bvcykge1xuICAgIGNvbnN0IGNvbG9yID0gcGxheWVyLmNvbG9yO1xuICAgIGNvbnN0IG9wcG9uZW50ID0gdGhpcy5zd2FwKGNvbG9yKTtcbiAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuICAgIGxldCBjYXB0dXJlZFN0b25lcyA9IFtdO1xuICAgIC8vZG8gbm90aGluZyBpZiBwb3NpdGlvbiBpcyBvY2N1cGllZFxuICAgIGlmIChncmlkW3NQb3NdICE9PSBlbXB0eSkgcmV0dXJuO1xuICAgIHRoaXMucGxhY2VTdG9uZShjb2xvciwgc1Bvcyk7XG4gICAgLy9maW5kIG9wcG9uZW50IHN0b25lcyBpbiBuZWlnaGJvcnMsIGNhcHR1cmUgaWYgcG9zc2libGVcbiAgICB0aGlzLm5laWdoYm9ycyhzUG9zKS5mb3JFYWNoKG5laWdoYiA9PiB7XG4gICAgICBpZiAoZ3JpZFtuZWlnaGJdID09PSBvcHBvbmVudCkge1xuICAgICAgICBjYXB0dXJlZFN0b25lcyA9IGNhcHR1cmVkU3RvbmVzLmNvbmNhdCh0aGlzLmNhcHR1cmVTdXJyb3VuZGVkKG5laWdoYikpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vY2hlY2sgZm9yIHN1aWNpZGFsIG1vdmVcbiAgICBpZiAodGhpcy5jYXB0dXJlU3Vycm91bmRlZChzUG9zLCBmYWxzZSkubGVuZ3RoKSB7XG4gICAgICB0aGlzLnBsYWNlU3RvbmUoZW1wdHksIHNQb3MpO1xuICAgICAgdGhyb3cgXCJTdWljaWRlISBUcnkgYWdhaW5cIjtcbiAgICB9XG4gICAgLy9jaGVjayBmb3Iga29cbiAgICBpZiAodGhpcy5wcmV2UG9zaXRpb25zLmluY2x1ZGVzKHRoaXMuZ3JpZCkpIHtcbiAgICAgIHRoaXMuZ3JpZCA9IHRoaXMucHJldlBvc2l0aW9uc1t0aGlzLnByZXZQb3NpdGlvbnMubGVuZ3RoIC0gMV07XG4gICAgICB0aHJvdyBcIktvISBJbnZhbGlkIG1vdmUsIHRyeSBhZ2FpblwiO1xuICAgIH1cbiAgICAvL3JlZHVjZSBjYXB0dXJlZCBzdG9uZXMgdG8gdW5pcXVlIHZhbHVlc1xuICAgIGxldCBjYXB0dXJlZFJlZHVjZWQgPSBbXTtcbiAgICBpZiAoY2FwdHVyZWRTdG9uZXMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcHR1cmVkU3RvbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghY2FwdHVyZWRSZWR1Y2VkLmluY2x1ZGVzKGNhcHR1cmVkU3RvbmVzW2ldKSkge1xuICAgICAgICAgIGNhcHR1cmVkUmVkdWNlZC5wdXNoKGNhcHR1cmVkU3RvbmVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwbGF5ZXIuY2FwdHVyZWQgKz0gY2FwdHVyZWRSZWR1Y2VkLmxlbmd0aDtcbiAgICB0aGlzLnByZXZQb3NpdGlvbnMucHVzaCh0aGlzLmdyaWQpO1xuICAgIHJldHVybiBjYXB0dXJlZFN0b25lcztcbiAgfVxuXG4gIHNjb3JlKCkge1xuICAgIC8vZmlsbCBncmlkIHRlcnJpdG9yaWVzIChsb3dlcmNhc2UgbGV0dGVycyBmb3IgdmlzdWFsIGRpZmZlcmVuY2UpXG4gICAgd2hpbGUgKHRoaXMuZ3JpZC5pbmNsdWRlcyhlbXB0eSkpIHtcbiAgICAgIGxldCBpZHggPSB0aGlzLmdyaWQuaW5kZXhPZihlbXB0eSk7XG4gICAgICBsZXQgeyBzdG9uZVN0cmluZywgYm9yZGVyZWQgfSA9IHRoaXMuZmluZFN0cmluZyhpZHgpO1xuICAgICAgbGV0IGJvcmRlckNvbG9ycyA9IGJvcmRlcmVkLm1hcChzUG9zID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZFtzUG9zXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSk7XG4gICAgICBsZXQgbWF0Y2hlZCA9IHRydWU7XG4gICAgICBsZXQgZmlyc3RDb2xvciA9IGJvcmRlckNvbG9yc1swXTtcbiAgICAgIGlmKCFmaXJzdENvbG9yKSBtYXRjaGVkID0gZmFsc2U7XG4gICAgICBib3JkZXJDb2xvcnMuZm9yRWFjaChjb2xvciA9PiB7XG4gICAgICAgIGlmIChjb2xvciAhPT0gZmlyc3RDb2xvcikgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICB0aGlzLnBsYWNlTWFueVN0b25lcyhmaXJzdENvbG9yLnRvTG93ZXJDYXNlKCksIHN0b25lU3RyaW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxhY2VNYW55U3RvbmVzKG5ldXRyYWwsIHN0b25lU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy9jb3VudCB1cCB0aGUgZmluYWwgc2NvcmVzXG4gICAgY29uc3Qgc2NvcmVzR3JpZCA9IHRoaXMuZ3JpZC50b1VwcGVyQ2FzZSgpO1xuICAgIGxldCBibGFja1Njb3JlID0gMDtcbiAgICBsZXQgd2hpdGVTY29yZSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY29yZXNHcmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc2NvcmVzR3JpZFtpXSA9PT0gYmxhY2spIGJsYWNrU2NvcmUrKztcbiAgICAgIGlmIChzY29yZXNHcmlkW2ldID09PSB3aGl0ZSkgd2hpdGVTY29yZSsrO1xuICAgIH07XG4gICAgcmV0dXJuICh7XG4gICAgICBibGFja1Njb3JlLFxuICAgICAgd2hpdGVTY29yZSxcbiAgICAgIGdyaWQ6IHRoaXMuZ3JpZFxuICAgIH0pXG4gIH1cbn0iLCIvL0F1dGhvciBhbmQgQWJvdXQgZHJvcGRvd25zXG5cbmV4cG9ydCBmdW5jdGlvbiBkcm9wZG93bihwYXJlbnQsIG5hbWUsIGxpc3RFbGVtZW50cykge1xuICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgYnV0dG9uLmlkID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICBsaXN0LmlkID0gYCR7bmFtZS50b0xvd2VyQ2FzZSgpfS1saXN0YDtcbiAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24nKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ29wdGlvbicsICdkcm9wLWJ1dHRvbicpO1xuICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcbiAgaWYobmFtZSA9PT0gJ0F1dGhvcicpIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZWQnKTtcbiAgYnV0dG9uLmlubmVySFRNTCA9IG5hbWU7XG4gIGxpc3QuYXBwZW5kKC4uLmxpc3RFbGVtZW50cyk7XG4gIGRyb3Bkb3duLmFwcGVuZChidXR0b24sIGxpc3QpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZHJvcGRvd24pO1xuICBidXR0b24ub25jbGljayA9IHJldmVhbChkcm9wZG93biwgbGlzdCk7XG4gIGRvY3VtZW50Lm9uY2xpY2sgPSBoaWRlTGlzdHM7XG59XG5mdW5jdGlvbiByZXZlYWwoZHJvcGRvd24sIGxpc3QpIHtcbiAgcmV0dXJuIGV2ZW50ID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBoaWRlTGlzdHMoKTtcbiAgICBsaXN0LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgfVxufVxuZnVuY3Rpb24gaGlkZUxpc3RzKCkge1xuICBjb25zdCBsaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0Jyk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChsaXN0c1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xuICAgICAgbGlzdHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhvckVsZW1lbnRzKCkge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbmFtZS5jbGFzc0xpc3QuYWRkKCdyZWQnKTtcbiAgbmFtZS5pbm5lckhUTUwgPSAnRG9uYWxkIEhlcm5kb24nO1xuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGxpbmtzLmlkID0gJ2F1dGhvci1saW5rcyc7XG4gIGNvbnN0IGdpdGh1YiA9IGxpc3RMaW5rKFxuICAgICdodHRwczovL2dpdGh1Yi5jb20vaGVybmRhbC9nbycsXG4gICAgJzxpIGNsYXNzPVwiZmFiIGZhLWdpdGh1Yi1zcXVhcmVcIj48L2k+JyxcbiAgICAnTXkgR2l0aHViIHJlcG9zaXRvcnkgZm9yIHRoaXMgcHJvamVjdCdcbiAgKTtcbiAgY29uc3QgbGlua2VkSW49IGxpc3RMaW5rKFxuICAgICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZG9uYWxkLWhlcm5kb24tODM2NGIwMWE1LycsXG4gICAgJzxpIGNsYXNzPVwiZmFiIGZhLWxpbmtlZGluXCI+PC9pPicsXG4gICAgJ015IExpbmtlZEluJ1xuICApO1xuICBjb25zdCB0d2l0dGVyID0gbGlzdExpbmsoXG4gICAgJ2h0dHBzOi8vdHdpdHRlci5jb20vZG9uYWxkX2J1aWxkcycsXG4gICAgJzxpIGNsYXNzPVwiZmFiIGZhLXR3aXR0ZXItc3F1YXJlXCI+PC9pPicsXG4gICAgJ015IFR3aXR0ZXInXG4gICk7XG4gIGxpbmtzLmFwcGVuZChnaXRodWIsIGxpbmtlZEluLCB0d2l0dGVyKTtcbiAgcmV0dXJuIFtuYW1lLCBsaW5rc107XG59XG5leHBvcnQgZnVuY3Rpb24gYWJvdXRFbGVtZW50cygpIHtcbiAgY29uc3Qgd2lraXBlZGlhID0gbGlzdExpbmsoXG4gICAgJ2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hpc3Rvcnlfb2ZfR28nLFxuICAgICc8aSBjbGFzcz1cImZhYiBmYS13aWtpcGVkaWEtd1wiPjwvaT4nLFxuICAgICdXaWtpcGVkaWE6IHRoZSBIaXN0b3J5IG9mIEdvJyxcbiAgICAnd2lraXBlZGlhJ1xuICApO1xuICBjb25zdCBhZ2EgPSBsaXN0TGluayhcbiAgICAnaHR0cHM6Ly93d3cudXNnby5vcmcvJyxcbiAgICBpbWcoJ2h0dHBzOi8vd3d3LnVzZ28ub3JnL3RoZW1lL2ltYWdlcy9hZ2Fsb2dvMi5wbmcnKSxcbiAgICAnVGhlIEFtZXJpY2FuIEdvIEFzc29jaWF0aW9uLiBGb3VuZGVkIGluIE5ldyBZb3JrIENpdHkgaW4gMTkzNSwgQUdBIGlzIG9uZSBvZiB0aGUgb2xkZXN0IFdlc3Rlcm4gR28gYXNzb2NpYXRpb25zLicsXG4gICAgJ2FnYSdcbiAgKTtcbiAgY29uc3QgZGVlcE1pbmQgPSBsaXN0TGluayhcbiAgICAnaHR0cHM6Ly9kZWVwbWluZC5jb20vcmVzZWFyY2gvY2FzZS1zdHVkaWVzL2FscGhhZ28tdGhlLXN0b3J5LXNvLWZhcicsXG4gICAgaW1nKCdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzEvMTIvRGVlcE1pbmRfbG9nby5wbmcnKSxcbiAgICAnSW4gMjAxNiwgRGVlcE1pbmRcXCdzIEFscGhhR28gYmVjYW1lIHRoZSBmaXJzdCBwcm9ncmFtIGNhcGFibGUgb2YgZGVmZWF0aW5nIGEgR28gd29ybGQgY2hhbXBpb24uIFRoZWlyIHN0b3J5IGluc3BpcmVkIHRoaXMgcHJvamVjdCcsXG4gICAgJ2RlZXBNaW5kJ1xuICApXG4gIHJldHVybiBbYWdhLCB3aWtpcGVkaWEsIGRlZXBNaW5kXTtcbn1cblxuXG4vL0luLWdhbWUgaW5zdHJ1Y3Rpb25zIG1vZGFsXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0cnVjdGlvbnMoZ2FtZSkge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGluc3RydWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidXR0b24uaWQgPSAnaW5zdHJ1Y3Rpb25zLWJ1dHRvbic7XG4gIGluc3RydWN0aW9ucy5pZCA9ICdpbnN0cnVjdGlvbnMnO1xuICBidXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLXF1ZXN0aW9uLWNpcmNsZVwiPjwvaT4nO1xuICBmaWxsSW5zdHJ1Y3Rpb25zKGluc3RydWN0aW9ucyk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25zKTtcbiAgZ2FtZS5hcHBlbmRDaGlsZChidXR0b24pO1xuICBidXR0b24ub25jbGljayA9IHNob3dJbnN0cnVjdGlvbnMoaW5zdHJ1Y3Rpb25zKTtcbiAgZG9jdW1lbnQub25jbGljayA9IGhpZGVJbnN0cnVjdGlvbnMoaW5zdHJ1Y3Rpb25zKTtcbn1cbmZ1bmN0aW9uIGZpbGxJbnN0cnVjdGlvbnMoaW5zdHJ1Y3Rpb25zKSB7XG4gIGNvbnN0IGdldHRpbmdTdGFydGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGdldHRpbmdTdGFydGVkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBjb25zdCBnZXR0aW5nU3RhcnRlZEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gIGdldHRpbmdTdGFydGVkVGl0bGUuaW5uZXJIVE1MID0gJ0dldHRpbmcgU3RhcnRlZCc7XG4gIGdldHRpbmdTdGFydGVkSW5mby5hcHBlbmQoXG4gICAgbGkoJ1RoZSBib2FyZCBpcyBlbXB0eSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBnYW1lLicpLFxuICAgIGxpKCdUaGUgZmlyc3QgcGxheWVyIHRvIG1vdmUgaXMgQmxhY2suJyksXG4gICAgbGkoJ1BsYXllcnMgYWx0ZXJuYXRlIHR1cm5zIHVudGlsIHRoZSBnYW1lIGlzIG92ZXIuJylcbiAgICApO1xuICBnZXR0aW5nU3RhcnRlZC5hcHBlbmQoZ2V0dGluZ1N0YXJ0ZWRUaXRsZSwgZ2V0dGluZ1N0YXJ0ZWRJbmZvKTtcbiAgY29uc3QgZ2FtZVBsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZ2FtZVBsYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGNvbnN0IGdhbWVQbGF5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGdhbWVQbGF5VGl0bGUuaW5uZXJIVE1MID0gJ1Rha2luZyBUdXJucyBhbmQgQ2FwdHVyaW5nJztcbiAgZ2FtZVBsYXlJbmZvLmFwcGVuZChcbiAgICBsaSgnT24gdGhlaXIgdHVybiwgYSBwbGF5ZXIgY2FuIGVpdGhlciBwYXNzIHRoZWlyIHR1cm4gb3IgcGxhY2Ugb25lIHN0b25lLicpLFxuICAgIGxpKCdDbGljayBvbiBhbnkgZW1wdHkgaW50ZXJzZWN0aW9uIHRvIHBsYWNlIGEgc3RvbmU6JyksXG4gICAgaW1nKCdodHRwczovL2NhYmlucy1zZWVkcy5zMy5hbWF6b25hd3MuY29tL2dvLW1vdmUtZXhhbXBsZS5wbmcnKSxcbiAgICBsaSgnVG8gcGFzcyB5b3VyIHR1cm4sIGNsaWNrIG9uIHlvdXIgY29sb3JcXCdzIGluZm9ybWF0aW9uIGJveDonKSxcbiAgICBpbWcoJ2h0dHBzOi8vY2FiaW5zLXNlZWRzLnMzLmFtYXpvbmF3cy5jb20vZ28tcGFzcy1leGFtcGxlLnBuZycpLFxuICAgIGxpKCdBZGphY2VudCBzdG9uZXMgZm9ybSBhIGdyb3VwLicpLFxuICAgIGxpKCdBIGxpYmVydHkgaXMgZGVmaW5lZCBhcyBhbiBlbXB0eSBpbnRlcnNlY3Rpb24gbmV4dCB0byBhIGdyb3VwLicpLFxuICAgIGltZygnaHR0cHM6Ly9jYWJpbnMtc2VlZHMuczMuYW1hem9uYXdzLmNvbS9nby1saWJlcnR5LWV4YW1wbGUucG5nJyksXG4gICAgbGkoJ0luIHRoaXMgZXhhbXBsZSwgdGhlIGxhcmdlIHdoaXRlIGdyb3VwIGhhcyBqdXN0IG9uZSBsaWJlcnR5IHJlbWFpbmluZywgaW4gdGhlIGNlbnRlci4nKSxcbiAgICBsaSgnV2hlbiBhIGdyb3VwIGhhcyBubyBsaWJlcnRpZXMsIGl0IGJlY29tZXMgY2FwdHVyZWQgYW5kIGlzIHJlbW92ZWQgZnJvbSB0aGUgYm9hcmQ6JyksXG4gICAgaW1nKCdodHRwczovL2NhYmlucy1zZWVkcy5zMy5hbWF6b25hd3MuY29tL2dvLWNhcHR1cmVkLWV4YW1wbGUucG5nJyksXG4gICAgbGkoJ05vdyB0aGUgYmxhY2sgcGxheWVyIGhhcyBmaWxsZWQgdGhlIGxhc3QgbGliZXJ0eSBhbmQgY2FwdHVyZWQgc2V2ZW4gd2hpdGUgc3RvbmVzLicpLFxuICAgIGxpKCdUaGVyZSBhcmUgdHdvIGlsbGVnYWwgbW92ZXM6IFN1aWNpZGUgYW5kIEtvLicpLFxuICAgIGxpKCdLbyBtZWFucyB0aGF0IGEgcHJldmlvdXMgcG9zaXRpb24gb2YgdGhlIGJvYXJkIGNhbm5vdCBiZSBleGFjdGx5IHJlcGVhdGVkLicpLFxuICAgIGxpKCdTdWljaWRlIG1lYW5zIHRoYXQgYSBwbGF5ZXIgY2Fubm90IHBsYXkgYSBtb3ZlIHRoYXQgcmVzdWx0cyBpbiB0aGVpciBvd24gZ3JvdXAgYmVpbmcgY2FwdHVyZWQuJylcbiAgICApO1xuICBnYW1lUGxheS5hcHBlbmQoZ2FtZVBsYXlUaXRsZSwgZ2FtZVBsYXlJbmZvKTtcbiAgY29uc3Qgd2lubmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB3aW5uaW5nVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBjb25zdCB3aW5uaW5nSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHdpbm5pbmdUaXRsZS5pbm5lckhUTUwgPSAnRW5kaW5nIHRoZSBnYW1lJztcbiAgd2lubmluZ0luZm8uYXBwZW5kKFxuICAgIGxpKCdUaGUgZ2FtZSBlbmRzIHdoZW4gYm90aCBwbGF5ZXJzIHBhc3MgdGhlaXIgdHVybi4nKSxcbiAgICBsaSgnVGhlIHBsYXllciB3aG8gY29tbWFuZHMgbW9yZSB0ZXJyaXRvcnkgb24gdGhlIGJvYXJkIHdpbnMuJyksXG4gICAgaW1nKCdodHRwczovL2NhYmlucy1zZWVkcy5zMy5hbWF6b25hd3MuY29tL2dvLWVuZGdhbWUtZXhhbXBsZS5wbmcnKSxcbiAgICBsaSgnQSBwbGF5ZXJcXCdzIHRlcnJpdG9yeSBpbmNsdWRlcyB0aGUgc3RvbmVzIG9uIHRoZSBib2FyZCBvZiBvbmUgY29sb3IgYW5kIHRoZSBlbXB0eSBpbnRlcnNlY3Rpb25zIHN1cnJvdW5kZWQgYnkgdGhhdCBjb2xvci4nKVxuICApO1xuICB3aW5uaW5nLmFwcGVuZCh3aW5uaW5nVGl0bGUsIHdpbm5pbmdJbmZvKVxuICBpbnN0cnVjdGlvbnMuYXBwZW5kKGdldHRpbmdTdGFydGVkLCBnYW1lUGxheSwgd2lubmluZyk7XG59XG5mdW5jdGlvbiBzaG93SW5zdHJ1Y3Rpb25zKGluc3RydWN0aW9ucykge1xuICByZXR1cm4gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGluc3RydWN0aW9ucy5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtZ3JvdXAnKS5maXJzdENoaWxkO1xuICAgIGNvbnN0IGJvYXJkUHJvcHMgPSBib2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB0b3AgPSBib2FyZFByb3BzLnRvcDtcbiAgICBjb25zdCBsZWZ0ID0gYm9hcmRQcm9wcy5sZWZ0O1xuICAgIGluc3RydWN0aW9ucy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYHRvcDogJHt0b3B9cHg7IGxlZnQ6ICR7bGVmdH1weDtgKTtcbiAgfVxufVxuZnVuY3Rpb24gaGlkZUluc3RydWN0aW9ucyhpbnN0cnVjdGlvbnMpIHtcbiAgcmV0dXJuIGV2ZW50ID0+IHtcbiAgICBpZiAoaW5zdHJ1Y3Rpb25zLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XG4gICAgICBpbnN0cnVjdGlvbnMuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIH1cbiAgfVxufVxuXG4vL1V0aWxpdHkgZnVuY3Rpb25zIGZvciBjcmVhdGluZyBsaXN0c1xuXG5mdW5jdGlvbiBsaXN0TGluayhocmVmLCBodG1sLCB0aXAsIC4uLmNsYXNzZXMpIHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBsaS5jbGFzc0xpc3QuYWRkKCdsaW5rJyk7XG4gIGxpbmsuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgbGluay5ocmVmID0gaHJlZjtcbiAgaWYodHlwZW9mIGh0bWwgPT09ICdzdHJpbmcnKSB7XG4gICAgbGluay5pbm5lckhUTUwgPSBodG1sO1xuICB9IGVsc2Uge1xuICAgIGxpbmsuYXBwZW5kKGh0bWwpO1xuICB9XG4gIHRvb2x0aXAobGluaywgdGlwKTtcbiAgbGluay50YXJnZXQgPSAnYmxhbmsnO1xuICBsaS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgcmV0dXJuIGxpO1xufVxuZnVuY3Rpb24gbGkodGV4dCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xuICByZXR1cm4gZWxlbWVudDtcbn1cbmZ1bmN0aW9uIGltZyh1cmwpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBlbGVtZW50LnNyYyA9IHVybDtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5mdW5jdGlvbiB0b29sdGlwKGxpbmssIHRpcCkge1xuICBsaW5rLnRpdGxlID0gdGlwO1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHNob3dUaXApO1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGlkZVRpcCk7XG59XG5mdW5jdGlvbiBzaG93VGlwKCkge1xuICBjb25zdCB0aXRsZSA9IHRoaXMudGl0bGU7XG4gIHRoaXMudGl0bGUgPSAnJztcbiAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3Rvb2x0aXAnLCB0aXRsZSk7XG4gIGNvbnN0IHRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9vbHRpcC5jbGFzc0xpc3QuYWRkKCd0b29sdGlwJyk7XG4gIHRvb2x0aXAuYXBwZW5kKHRpdGxlKTtcbiAgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkLmJlZm9yZSh0b29sdGlwKTtcbiAgdG9vbHRpcC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21heC13aWR0aDogMTNlbScpO1xuICBjb25zdCBsaW5rUHJvcHMgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCB0b29sdGlwUHJvcHMgPSB0b29sdGlwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyBcbiAgY29uc3QgdG9wID0gbGlua1Byb3BzLnRvcCAtIHRvb2x0aXBQcm9wcy5oZWlnaHQgLSAxMDtcbiAgY29uc3QgbGVmdCA9IGxpbmtQcm9wcy5sZWZ0ICsgKGxpbmtQcm9wcy53aWR0aCAvIDIpIC0gKHRvb2x0aXBQcm9wcy53aWR0aCAvIDIpO1xuICB0b29sdGlwLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgbWF4LXdpZHRoOiAxM2VtOyB0b3A6ICR7dG9wfXB4OyBsZWZ0OiAke2xlZnR9cHg7YCk7XG59XG5mdW5jdGlvbiBoaWRlVGlwKCkge1xuICBjb25zdCB0aXRsZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCd0b29sdGlwJyk7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3Rvb2x0aXAnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b29sdGlwXCIpLnJlbW92ZSgpO1xufSIsImltcG9ydCBCb2FyZCBmcm9tICcuL2JvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IHsgaW5zdHJ1Y3Rpb25zIH0gZnJvbSAnLi9kcm9wZG93bnMnO1xuXG5jb25zdCBibGFjayA9IG5ldyBQbGF5ZXIoJ2JsYWNrJywgJ0InKTtcbmNvbnN0IHdoaXRlID0gbmV3IFBsYXllcignd2hpdGUnLCAnVycpO1xuY29uc3QgcGxheWVycyA9IHtcbiAgJ0InOiBibGFjayxcbiAgJ1cnOiB3aGl0ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKHNpemUsIG5ld0dhbWUpIHtcbiAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSBibGFjaztcbiAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHNpemUpO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICB0aGlzLmRyYXdHYW1lKHNpemUpO1xuICAgIHRoaXMucGFzc1R1cm4gPSB0aGlzLnBhc3NUdXJuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5uZXdHYW1lID0gbmV3R2FtZS5iaW5kKHRoaXMpO1xuICB9XG4gIHJlc2V0KCkge1xuICAgIGJsYWNrLmNhcHR1cmVkID0gMDtcbiAgICB3aGl0ZS5jYXB0dXJlZCA9IDA7XG4gIH1cbiAgZHJhd0dhbWUoc2l6ZSkge1xuICAgIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYW1lLmlkID0gJ2dhbWUnO1xuICAgIGdhbWUuY2xhc3NMaXN0LmFkZCgnYmxhY2snKTtcbiAgICBpbnN0cnVjdGlvbnMoZ2FtZSk7XG4gICAgdGhpcy5kcmF3Qm9hcmQoc2l6ZSwgZ2FtZSk7XG4gICAgdGhpcy5kcmF3UGxheWVycyhzaXplLCBnYW1lKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLmFwcGVuZENoaWxkKGdhbWUpO1xuICAgIHRoaXMuZHJhd1N0YXJzKHNpemUpO1xuICB9XG4gIGFkZENlbGwoZWxlbWVudCwgY29sb3IpIHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgY2VsbC5kYXRhc2V0LnN0b25lID0gY29sb3I7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgfVxuICBkcmF3UGxheWVycyhzaXplLCBnYW1lKSB7XG4gICAgY29uc3QgZG9jUGxheWVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJsYWNrUGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgd2hpdGVQbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBibGFja0NhcHR1cmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgd2hpdGVDYXB0dXJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvY1BsYXllcnMuY2xhc3NMaXN0LmFkZCgncGxheWVycycpO1xuICAgIGJsYWNrUGxheWVyLmNsYXNzTGlzdC5hZGQoJ3BsYXllcicsICdibGFjaycpO1xuICAgIHdoaXRlUGxheWVyLmNsYXNzTGlzdC5hZGQoJ3BsYXllcicsICd3aGl0ZScpO1xuICAgIGJsYWNrQ2FwdHVyZWQuY2xhc3NMaXN0LmFkZCgnY2FwdHVyZWQnKTtcbiAgICB3aGl0ZUNhcHR1cmVkLmNsYXNzTGlzdC5hZGQoJ2NhcHR1cmVkJyk7XG4gICAgZG9jUGxheWVycy5kYXRhc2V0LnBhc3MgPSBmYWxzZTtcbiAgICBibGFja1BsYXllci5kYXRhc2V0LnBsYXllciA9ICdCJztcbiAgICB3aGl0ZVBsYXllci5kYXRhc2V0LnBsYXllciA9ICdXJztcbiAgICBibGFja0NhcHR1cmVkLmlubmVySFRNTCA9IGAke2JsYWNrLmNhcHR1cmVkfWA7XG4gICAgd2hpdGVDYXB0dXJlZC5pbm5lckhUTUwgPSBgJHt3aGl0ZS5jYXB0dXJlZH1gO1xuICAgIHRoaXMuYWRkQ2VsbChibGFja1BsYXllciwgJ0InKTtcbiAgICB0aGlzLmFkZENlbGwod2hpdGVQbGF5ZXIsICdXJyk7XG4gICAgYmxhY2tQbGF5ZXIuYXBwZW5kQ2hpbGQoYmxhY2tDYXB0dXJlZCk7XG4gICAgd2hpdGVQbGF5ZXIuYXBwZW5kQ2hpbGQod2hpdGVDYXB0dXJlZCk7XG4gICAgZG9jUGxheWVycy5hcHBlbmQoYmxhY2tQbGF5ZXIsIHdoaXRlUGxheWVyKTtcbiAgICBnYW1lLmFwcGVuZENoaWxkKGRvY1BsYXllcnMpO1xuICB9XG4gIGRyYXdCb2FyZChzaXplLCBnYW1lKSB7XG4gICAgY29uc3QgYm9hcmRHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBib2FyZEdyb3VwLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWdyb3VwJyk7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnLCBgcyR7c2l6ZX1gKTtcbiAgICBsZXQgayA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgcm93LmNsYXNzTmFtZSA9ICdyb3cnO1xuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCBzaXplOyByKyspIHtcbiAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgIGNlbGwuZGF0YXNldC5pbmRleCA9IGs7XG4gICAgICAgIGNlbGwuZGF0YXNldC5zdG9uZSA9IFwiX1wiO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIGsrKztcbiAgICAgIH07XG4gICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH07XG4gICAgYm9hcmRHcm91cC5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgZ2FtZS5hcHBlbmRDaGlsZChib2FyZEdyb3VwKTtcbiAgfTtcbiAgZHJhd1N0YXJzKHNpemUpIHtcbiAgICBsZXQgc3RhcnMgPSBbXTtcbiAgICBzd2l0Y2goc2l6ZSkge1xuICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgc3RhcnMgPSBbMTJdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCI5XCI6XG4gICAgICAgIHN0YXJzID0gWzIwLCAyNCwgNDAsIDU2LCA2MF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIjEzXCI6XG4gICAgICAgIHN0YXJzID0gWzQyLCA0OCwgODQsIDEyMCwgMTI2XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiMTlcIjpcbiAgICAgICAgc3RhcnMgPSBbNjAsIDY2LCA3MiwgMTc0LCAxODAsIDE4NiwgMjg4LCAyOTQsIDMwMF07XG4gICAgfVxuICAgIGxldCBjZWxsO1xuICAgIHN0YXJzLmZvckVhY2goc3RhciA9PiB7XG4gICAgICBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9XCIke3N0YXJ9XCJdYCk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzdGFyXCIpO1xuICAgIH0pO1xuICB9XG4gIHBsYXkoKSB7XG4gICAgY29uc3Qgbm90UGFzc2VzID0gdGhpcy5hZGRQYXNzTGlzdGVuZXJzKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucGxheVR1cm4odGhpcy5ib2FyZCwgbm90UGFzc2VzKSk7XG4gIH1cbiAgc3dhcCgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyID09PSBibGFjaykge1xuICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gd2hpdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IGJsYWNrO1xuICAgIH1cbiAgICBjb25zdCBnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUnKTtcbiAgICBnYW1lLmNsYXNzTGlzdC50b2dnbGUoJ3doaXRlJyk7XG4gICAgZ2FtZS5jbGFzc0xpc3QudG9nZ2xlKCdibGFjaycpO1xuICB9XG4gIHBsYXlUdXJuKGJvYXJkLCBub3RQYXNzZXMpIHtcbiAgICByZXR1cm4gZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmN1cnJlbnRQbGF5ZXI7XG4gICAgICBjb25zdCBjb2xvciA9IHBsYXllci5jb2xvcjtcbiAgICAgIGNvbnN0IG5hbWUgPSBwbGF5ZXIubmFtZTtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSkge1xuICAgICAgICBjb25zdCBzUG9zID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgY2FwdHVyZWRTdG9uZXMgPSBib2FyZC5wbGF5TW92ZShwbGF5ZXIsIHNQb3MpO1xuICAgICAgICAgIGlmKGNhcHR1cmVkU3RvbmVzKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyRXJyb3JzKCk7XG4gICAgICAgICAgICBlLnRhcmdldC5kYXRhc2V0LnN0b25lID0gY29sb3I7XG4gICAgICAgICAgICBsZXQgY2VsbDtcbiAgICAgICAgICAgIGNhcHR1cmVkU3RvbmVzLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgICAgICBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuc3RvbmUgPSBcIl9cIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBub3RQYXNzZXNbMF0oKTtcbiAgICAgICAgICAgIG5vdFBhc3Nlc1sxXSgpO1xuICAgICAgICAgICAgY29uc3QgZG9jUGxheWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJzJyk7XG4gICAgICAgICAgICBpZiAoZG9jUGxheWVycy5kYXRhc2V0LnBhc3MgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICBjb25zdCBvcHBvbmVudENvbG9yID0gY29sb3IgPT09ICdXJyA/ICdCJyA6ICdXJztcbiAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjb2xvciA9PT0gJ1cnID8gMCA6IDE7XG4gICAgICAgICAgICAgIGNvbnN0IG9wcG9uZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGxheWVyPVwiJHtvcHBvbmVudENvbG9yfVwiXWApO1xuICAgICAgICAgICAgICBub3RQYXNzZXNbaW5kZXhdID0gdGhpcy5yZXNldFBhc3NMaXN0ZW5lcnMob3Bwb25lbnQpO1xuICAgICAgICAgICAgICBkb2NQbGF5ZXJzLmRhdGFzZXQucGFzcyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FwdHVyZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllci4ke25hbWV9YCkuY2hpbGROb2Rlc1sxXTtcbiAgICAgICAgICAgIGNhcHR1cmVkRWxlbWVudC5pbm5lckhUTUwgPSBgJHtwbGF5ZXIuY2FwdHVyZWR9YDtcbiAgICAgICAgICAgIHRoaXMuc3dhcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgIHRoaXMucmVuZGVyRXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFkZFBhc3NMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3Qgbm90UGFzc2VzID0gW107XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllcicpLmZvckVhY2gocGxheWVyID0+IHtcbiAgICAgIGxldCBsaXN0ZW5lcnMgPSBbdGhpcy5vZmZlclBhc3MocGxheWVyKSwgdGhpcy5ub3RQYXNzKHBsYXllcildO1xuICAgICAgbm90UGFzc2VzLnB1c2gobGlzdGVuZXJzWzFdKTtcbiAgICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBsaXN0ZW5lcnNbMF0pO1xuICAgICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbGlzdGVuZXJzWzFdKTtcbiAgICAgIHBsYXllci5vbmNsaWNrID0gdGhpcy5wYXNzVHVybihwbGF5ZXIsIGxpc3RlbmVycyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vdFBhc3NlcztcbiAgfVxuICByZXNldFBhc3NMaXN0ZW5lcnMocGxheWVyKSB7XG4gICAgbGV0IGxpc3RlbmVycyA9IFt0aGlzLm9mZmVyUGFzcyhwbGF5ZXIpLCB0aGlzLm5vdFBhc3MocGxheWVyKV07XG4gICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGxpc3RlbmVyc1swXSk7XG4gICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbGlzdGVuZXJzWzFdKTtcbiAgICBwbGF5ZXIub25jbGljayA9IHRoaXMucGFzc1R1cm4ocGxheWVyLCBsaXN0ZW5lcnMpO1xuICAgIHJldHVybiBsaXN0ZW5lcnNbMV07XG4gIH1cbiAgb2ZmZXJQYXNzKHBsYXllcikge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZihwbGF5ZXIuZGF0YXNldC5wbGF5ZXIgPT09IHRoaXMuY3VycmVudFBsYXllci5jb2xvcikge1xuICAgICAgICBjb25zdCBwYXNzID0gcGxheWVyLmNoaWxkTm9kZXNbMV07XG4gICAgICAgIGlmIChwYXNzKSBwbGF5ZXIucmVtb3ZlQ2hpbGQocGxheWVyLmNoaWxkTm9kZXNbMV0pO1xuICAgICAgICBwbGF5ZXIuY2xhc3NMaXN0LmFkZChcInBhc3NcIik7XG4gICAgICAgIHBsYXllci5kYXRhc2V0LnBhc3MgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBub3RQYXNzKHBsYXllcikge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZihwbGF5ZXIuZGF0YXNldC5wYXNzID09PSAndHJ1ZScpIHtcbiAgICAgICAgcGxheWVyLmRhdGFzZXQucGFzcyA9IGZhbHNlO1xuICAgICAgICBwbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgncGFzcycpO1xuICAgICAgICBjb25zdCBjYXB0dXJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXB0dXJlZC5jbGFzc0xpc3QuYWRkKCdjYXB0dXJlZCcpO1xuICAgICAgICBjb25zdCBnYW1lUGxheWVyID0gcGxheWVyc1twbGF5ZXIuZGF0YXNldC5wbGF5ZXJdO1xuICAgICAgICBjYXB0dXJlZC5pbm5lckhUTUwgPSBgJHtnYW1lUGxheWVyLmNhcHR1cmVkfWA7XG4gICAgICAgIHBsYXllci5hcHBlbmRDaGlsZChjYXB0dXJlZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBhc3NUdXJuKHBsYXllciwgbGlzdGVuZXJzKSB7XG4gICAgcmV0dXJuIGUgPT4ge1xuICAgICAgaWYocGxheWVyLmRhdGFzZXQucGxheWVyID09PSB0aGlzLmN1cnJlbnRQbGF5ZXIuY29sb3IpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcbiAgICAgICAgdGhpcy5jbGVhckVycm9ycygpO1xuICAgICAgICBjb25zdCBkb2NQbGF5ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcnMnKTtcbiAgICAgICAgaWYoZG9jUGxheWVycy5kYXRhc2V0LnBhc3MgPT09ICd0cnVlJykge1xuICAgICAgICAgIHRoaXMuZW5kR2FtZShkb2NQbGF5ZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jUGxheWVycy5kYXRhc2V0LnBhc3MgPSB0cnVlO1xuICAgICAgICBwbGF5ZXIuY2xhc3NMaXN0LmFkZChcInBhc3NcIik7XG4gICAgICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBsaXN0ZW5lcnNbMF0pO1xuICAgICAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBsaXN0ZW5lcnNbMV0pO1xuICAgICAgICB0aGlzLnN3YXAoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZW5kZXJFcnJvcihtZXNzYWdlKSB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICBsZXQgZXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3InKTtcbiAgICBpZighZXJyb3IpIHtcbiAgICAgIGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIGVycm9yLmlkID0gJ2Vycm9yJztcbiAgICAgIGJvYXJkLmFmdGVyKGVycm9yKTtcbiAgICB9XG4gICAgZXJyb3IuaW5uZXJIVE1MID0gbWVzc2FnZTtcbiAgfVxuICBjbGVhckVycm9ycygpIHtcbiAgICBjb25zdCBib2FyZEdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLWdyb3VwJyk7XG4gICAgbGV0IGVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yJyk7XG4gICAgd2hpbGUgKGVycm9yKSB7XG4gICAgICBib2FyZEdyb3VwLnJlbW92ZUNoaWxkKGVycm9yKTtcbiAgICAgIGVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yJyk7XG4gICAgfVxuICB9XG4gIGVuZEdhbWUoZG9jUGxheWVycykge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICAgIGNvbnN0IGluc3RydWN0aW9uc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnN0cnVjdGlvbnMtYnV0dG9uJyk7XG4gICAgY29uc3QgaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3RydWN0aW9ucycpO1xuICAgIHJvb3QucmVtb3ZlQ2hpbGQoaW5zdHJ1Y3Rpb25zKTtcbiAgICBjb25zdCBnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUnKTtcbiAgICBnYW1lLmNsYXNzTGlzdC5hZGQoJ292ZXInKTtcbiAgICBnYW1lLnJlbW92ZUNoaWxkKGluc3RydWN0aW9uc0J1dHRvbik7XG4gICAgZ2FtZS5yZW1vdmVDaGlsZChkb2NQbGF5ZXJzKTtcbiAgICB0aGlzLmRyYXdTY29yZSgpO1xuICB9XG4gIGRyYXdTY29yZSgpIHtcbiAgICBjb25zdCB7YmxhY2tTY29yZSwgd2hpdGVTY29yZSwgZ3JpZH0gPSB0aGlzLmJvYXJkLnNjb3JlKCk7XG4gICAgY29uc3QgYm9hcmRHcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1ncm91cCcpO1xuICAgIGNvbnN0IGVuZEdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB3aW5NZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJsYWNrVG90YWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgd2hpdGVUb3RhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBibGFja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHdoaXRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZ29Ib21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZW5kR2FtZS5jbGFzc0xpc3QuYWRkKCdlbmRnYW1lJyk7XG4gICAgdGFibGUuY2xhc3NMaXN0LmFkZCgndGFibGUnKTtcbiAgICBibGFja1RvdGFscy5jbGFzc0xpc3QuYWRkKCd0b3RhbHMnLCAnYm9hcmQnLCAnYmxhY2snKTtcbiAgICB3aGl0ZVRvdGFscy5jbGFzc0xpc3QuYWRkKCd0b3RhbHMnLCAnYm9hcmQnLCAnd2hpdGUnKTtcbiAgICBibGFja0JveC5jbGFzc0xpc3QuYWRkKCd0b3RhbC1ib3gnKTtcbiAgICB3aGl0ZUJveC5jbGFzc0xpc3QuYWRkKCd0b3RhbC1ib3gnKTtcbiAgICBpZihibGFja1Njb3JlID4gd2hpdGVTY29yZSkge1xuICAgICAgd2luTWVzc2FnZS5pbm5lckhUTUwgPSBgQmxhY2sgd2lucyFgOyAvL29yIGRyYXdcbiAgICB9IGVsc2UgaWYoYmxhY2tTY29yZSA8IHdoaXRlU2NvcmUpIHtcbiAgICAgIHdpbk1lc3NhZ2UuaW5uZXJIVE1MID0gYFdoaXRlIHdpbnMhYDsgLy9vciBkcmF3XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbk1lc3NhZ2UuaW5uZXJIVE1MID0gYERyYXchYDsgLy9vciBkcmF3XG4gICAgfVxuICAgIGhlYWRlci5pZCA9ICdlbmRnYW1lLWhlYWRlcic7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHdpbk1lc3NhZ2UpO1xuICAgIGdvSG9tZS5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgZ29Ib21lLm9uY2xpY2sgPSB0aGlzLm5ld0dhbWU7XG4gICAgZm9vdGVyLmlkID0gJ2JvYXJkLWZvb3Rlcic7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdvSG9tZSk7XG4gICAgdGhpcy5hZGRDZWxsKGJsYWNrVG90YWxzLCAnQicpO1xuICAgIHRoaXMuYWRkQ2VsbCh3aGl0ZVRvdGFscywgJ1cnKTtcbiAgICB0aGlzLmFkZFNjb3JlKGJsYWNrQm94LCBibGFja1Njb3JlKTtcbiAgICB0aGlzLmFkZFNjb3JlKHdoaXRlQm94LCB3aGl0ZVNjb3JlKTtcbiAgICB0aGlzLmFkZENhcHR1cmVkKGJsYWNrQm94LCAnQicpO1xuICAgIHRoaXMuYWRkQ2FwdHVyZWQod2hpdGVCb3gsICdXJyk7XG4gICAgYmxhY2tUb3RhbHMuYXBwZW5kQ2hpbGQoYmxhY2tCb3gpO1xuICAgIHdoaXRlVG90YWxzLmFwcGVuZENoaWxkKHdoaXRlQm94KTtcbiAgICB0YWJsZS5hcHBlbmQoYmxhY2tUb3RhbHMsIHdoaXRlVG90YWxzKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ3JpZC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD1cIiR7aX1cIl1gKTtcbiAgICAgIGNlbGwuZGF0YXNldC5zdG9uZSA9IGdyaWRbaV07XG4gICAgfVxuICAgIGxldCBxdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC1oZWlnaHQ6IDU1MHB4KVwiKTtcbiAgICBxdWVyeS5tYXRjaGVzID8gZm9vdGVyLmFwcGVuZChoZWFkZXIpIDogZW5kR2FtZS5hcHBlbmQoaGVhZGVyKSA7XG4gICAgZW5kR2FtZS5hcHBlbmQodGFibGUpO1xuICAgIGJvYXJkR3JvdXAuYmVmb3JlKGVuZEdhbWUpO1xuICAgIGJvYXJkR3JvdXAuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgfVxuICBhZGRDYXB0dXJlZChlbGVtZW50LCBjb2xvcikge1xuICAgIGNvbnN0IGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgY2FwdHVyZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ3RvdGFsJyk7XG4gICAgbWVzc2FnZS5pbm5lckhUTUwgPSAnQ2FwdHVyZWQ6JztcbiAgICBjYXB0dXJlZC5pbm5lckhUTUwgPSBgJHtwbGF5ZXJzW2NvbG9yXS5jYXB0dXJlZH1gO1xuICAgIGNoaWxkLmFwcGVuZChtZXNzYWdlLCBjYXB0dXJlZCk7XG4gICAgZWxlbWVudC5hcHBlbmQoY2hpbGQpO1xuICB9XG4gIGFkZFNjb3JlKGVsZW1lbnQsIHNjb3JlKSB7XG4gICAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBodG1sU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ3RvdGFsJyk7XG4gICAgbWVzc2FnZS5pbm5lckhUTUwgPSAnU2NvcmU6JztcbiAgICBodG1sU2NvcmUuaW5uZXJIVE1MID0gYCR7c2NvcmV9YDtcbiAgICBjaGlsZC5hcHBlbmQobWVzc2FnZSwgaHRtbFNjb3JlKTtcbiAgICBlbGVtZW50LmFwcGVuZChjaGlsZCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBjb2xvcikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuY2FwdHVyZWQgPSAwO1xuICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==