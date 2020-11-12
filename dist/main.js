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
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_board_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/board.css */ "./src/styles/board.css");
/* harmony import */ var _styles_board_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_board_css__WEBPACK_IMPORTED_MODULE_2__);



document.querySelector("#play-go").addEventListener("submit", playGo);

function playGo(event) {
  event.preventDefault(); //render the board
  //listen for click: play turn
  //surrender functionality
  //end game
  //restart game:
  //unregister/reregister event listeners?
  //clear board

  var size = document.getElementById('size').value;
  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__["default"](size);
  document.querySelector("#root").removeChild(document.querySelector(".welcome"));
}
/* <form>
  a: <input type="number" name="a" id="a"><br>
  b: <input type="number" name="b" id="b"><br>
  <button onclick="add()">Add</button>
</form>
<script>
  function add() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var sum = a + b;
    alert(sum);
  }
</script> */
// import "./styles/index.scss";
// import canvasExample from "./scripts/canvas";
// import Square from "./scripts/square";
// import { DOMExample } from "./scripts/DOMExample";
// const currentStateObj = {
//   currentExample: null,
//   currentEventListeners: [],
// };
// document.querySelector("#canvas-demo").addEventListener("click", startCanvas);
// document.querySelector("#DOM-demo").addEventListener("click", startDOM);
// function startDOM() {
//   unregisterEventListeners();
//   clearDemo();
//   currentStateObj.currentExample = "DOMDEMO";
//   DOMExample();
// }
// function startCanvas() {
//   clearDemo();
//   unregisterEventListeners();
//   currentStateObj.currentExample = "CANVASDEMO";
//   const canvas = new canvasExample();
//   canvas.createCanvas();
//   const squares = [new Square(canvas.ctx, canvas.coords, canvas.fillColor)];
//   let animating = true;
//   const animation = () => {
//     canvas.clearCanvas();
//     if (animating) squares.forEach((sq) => sq.updateSquare(canvas.fillColor));
//     squares.forEach((sq) => sq.drawSquare());
//     window.requestAnimationFrame(animation);
//     squares.forEach((sq) => {
//       if (sq.coords[0] + sq.coords[2] > window.innerWidth)
//         sq.reverseAnimation();
//       if (sq.coords[0] < 0) sq.reverseAnimation();
//     });
//   };
//   window.requestAnimationFrame(animation);
//   // window.addEventListener("keydown", handleKeyDown);
//   // currentStateObj.currentEventListeners.push([
//   //   "window",
//   //   "keydown",
//   //   handleKeyDown,
//   // ]);
//   // window.addEventListener("mousedown", handleMouseDown);
//   // currentStateObj.currentEventListeners.push([
//   //   "window",
//   //   "mousedown",
//   //   handleMouseDown,
//   // ]);
//   function handleKeyDown(event) {
//     if (event.which === 32) {
//       event.preventDefault();
//       squares.forEach((sq) => sq.reverseAnimation());
//       canvas.setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
//     }
//   }
//   function handleMouseDown(event) {
//     event.preventDefault();
//     squares.push(
//       new Square(
//         canvas.ctx,
//         canvas.coords.map((co) => co + 25),
//         canvas.fillColor
//       )
//     );
//     // animating = !animating;
//   }
// }
// function unregisterEventListeners() {
//   while (currentStateObj.currentEventListeners.length) {
//     let [
//       selector,
//       event,
//       handler,
//     ] = currentStateObj.currentEventListeners.pop();
//     if (selector === "window") {
//       window.removeEventListener(event, handler);
//       console.log(handler);
//     } else {
//       document.querySelector(selector).removeEventListener(event, handler);
//     }
//   }
// }
// function clearDemo() {
//   if (currentStateObj.currentExample === "CANVASDEMO")
//     document.body.removeChild(document.querySelector("canvas"));
//   if (currentStateObj.currentExample === "DOMDEMO") {
//     [...document.querySelectorAll(".card")].forEach((elem) =>
//       document.body.removeChild(elem)
//     );
//   }
// }

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/*! exports provided: Board, Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var white = "X",
    black = "O",
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
      return empty * this.fullSize;
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
      sPoses.forEach(function (sPos) {
        arr[sPos] = color;
      });
      return this.grid = arr.join("");
    }
  }, {
    key: "neighbors",
    value: function neighbors(sPos) {
      var _this = this;

      var _this$pos = this.pos(sPos);

      var _this$pos2 = _slicedToArray(_this$pos, 2);

      row = _this$pos2[0];
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
      var stoneString = [sPos];
      var bordered = [];
      var nextInString = [sPos];
      var currentStone;

      while (nextInString.length) {
        currentStone = nextInString.pop();
        stoneString.push(currentStone);
        this.neighbors(currentStone).forEach(function (neighb) {
          if (_this2.grid[neighb] === color && !stoneString.includes(neighb)) {
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

      var _this$findString = this.findString(sPos),
          stoneString = _this$findString.stoneString,
          bordered = _this$findString.bordered;

      var capture = true;
      bordered.forEach(function (sPos) {
        if (_this3.grid[sPos] === empty) {
          capture = false;
        }
      });

      if (capture) {
        this.placeManyStones(empty, stoneString);
        return stoneString;
      } else {
        return [];
      }
    }
  }, {
    key: "playMove",
    value: function playMove(player, pos) {
      var _this4 = this;

      var color = player.color;
      var sPos = this.sPos(pos);
      var opponent = swap(color);
      var captured = 0; //do nothing if position is occupied

      if (this.grid[sPos] !== empty) return;
      this.placeStone(color, sPos); //find opponent stones in neighbors, capture if possible

      this.neighbors(sPos).forEach(function (neighb) {
        if (_this4.grid[neighb] === opponent) {
          captured += (_readOnlyError("captured"), _this4.captureSurrounded(neighb).length);
        }
      }); //check for suicidal move

      if (this.captureSurrounded(sPos).length) {
        throw "Suicide! Try again";
      } //check for ko


      if (this.prevPositions.includes(this.grid)) {
        this.grid = this.prevPositions[this.prevPositions.length - 1];
        throw "Ko! Invalid move, try again";
      }

      player.captured += captured;
      this.prevPositions.push(this.grid);
      return this.grid;
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
          return _this5.grid[sPos].toUpperCase;
        });
        var matched = true;
        var firstColor = borderColors[0];
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
var Player = /*#__PURE__*/function () {
  function Player(color) {
    _classCallCheck(this, Player);

    this.color = color;
    this.captured = 0;
    this.pass = false;
  }

  _createClass(Player, [{
    key: "takeTurn",
    value: function takeTurn() {}
  }]);

  return Player;
}();

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
/* harmony import */ var _styles_nav_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/nav.css */ "./src/styles/nav.css");
/* harmony import */ var _styles_nav_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_nav_css__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var black = new _board__WEBPACK_IMPORTED_MODULE_0__["Player"]('black');
var white = new _board__WEBPACK_IMPORTED_MODULE_0__["Player"]('white');

var Game = /*#__PURE__*/function () {
  function Game(size) {
    _classCallCheck(this, Game);

    this.size = size;
    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__["Board"](size);
    black.pass = false;
    black.captured = 0;
    white.pass = false;
    white.captured = 0;
    this.currentPlayer = black;
    this.docBoard = document.createElement('ul');
    this.docBoard.classList.add('board', 'black');
    this.fill(size);
    var root = document.getElementById('root');
    root.appendChild(this.docBoard);
    this.addStars();
  }

  _createClass(Game, [{
    key: "fill",
    value: function fill() {
      var k = 0;

      for (var i = 0; i < this.size; i++) {
        var row = document.createElement('ul');
        row.className = 'row';

        for (var _i = 0; _i < this.size; _i++) {
          var cell = document.createElement('div');
          cell.classList.add('cell');
          cell.dataset.index = k;
          cell.dataset.stone = "_";
          row.appendChild(cell);
          k++;
        }

        this.docBoard.appendChild(row);
        this.docBoard.style.width = "".concat(30 * this.size, "px");
        this.docBoard.style.height = "".concat(30 * this.size, "px");
      }
    }
  }, {
    key: "addStars",
    value: function addStars() {
      var stars = [];

      switch (this.size) {
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
      // fresh players, fresh board
      // get user input
      document.querySelector('board').addEventListener("click", this.playTurn(board));
      document.querySelector(".pass").addEventListener("click", this.passTurn); // take turns
      // listen for two passes in a row
      // stop the game
      // take the score, display the winner
      // add a replay button
    }
  }, {
    key: "swap",
    value: function swap() {
      if (this.currentPlayer === black) {
        this.currentPlayer = white;
      } else {
        this.currentPlayer = black;
      }

      var board = document.querySelector('board');
      board.toggleClass('white');
      board.toggleClass('black');
    }
  }, {
    key: "playTurn",
    value: function playTurn(board) {
      return function (e) {
        if (!e.target.classList.contains('white') && !e.target.classList.contains('black')) {
          var idx = e.target.classList; //play a turn on our board
        }
      };
    }
  }, {
    key: "passTurn",
    value: function passTurn(board) {
      return function (e) {
        if (e.target.classList.contains("".concat(this.currentPlayer.color))) {
          this.swap();
        }
      };
    }
  }]);

  return Game;
}(); // 0    1    2    3    4    5    6    7    8
// 9    10   11   12   13   14   15   16   17
// 18   19   20   21   22   23   24   25   26
// 27   28   29   30   31   32   33   34   35
// 36   37   38   39   40   41   42   43   44
// 45   46   47   48   49   50   51   52   53
// 54   55   56   57   58   59   60   61   62
// 63   64   65   66   67   68   69   70   71
// 72   73   74   75   76   77   78   79   80
// 0    1    2    3    4    5    6    7    8    9    10   11   12
// 13   14   15   16   17   18   19   20   21   22   23   24   25
// 26   27   28   29   30   31   32   33   34   35   36   37   38
// 39   40   41   42   43   44   45   46   47   48   49   50   51
// 52   53   54   55   56   57   58   59   60   61   62   63   64
// 65   66   67   68   69   70   71   72   73   74   75   76   77
// 78   79   80   81   82   83   84   85   86   87   88   89   90
// 91   92   93   94   95   96   97   98   99   100  101  102  103
// 104  105  106  107  108  109  110  111  112  113  114  115  116
// 117  118  119  120  121  122  123  124  125  126  127  128  129
// 130  131  132  133  134  135  136  137  138  139  140  141  142
// 143  144  145  146  147  148  149  150  151  152  153  154  155
// 156  157  158  159  160  161  162  163  164  165  166  167  168
// 0    1    2    3    4    5    6    7    8    9    10   11   12   13   14   15   16   17   18
// 19   20   21   22   23   24   25   26   27   28   29   30   31   32   33   34   35   36   37
// 38   39   40   41   42   43   44   45   46   47   48   49   50   51   52   53   54   55   56
// 57   58   59  (60)  61   62   63   64   65  (66)  67   68   69   70   71  (72)  73   74   75
// 76   77   78   79   80   81   82   83   84   85   86   87   88   89   90   91   92   93   94
// 95   96   97   98   99   100  101  102  103  104  105  106  107  108  109  110  111  112  113
// 114  115  116  117  118  119  120  121  122  123  124  125  126  127  128  129  130  131  132
// 133  134  135  136  137  138  139  140  141  142  143  144  145  146  147  148  149  150  151
// 152  153  154  155  156  157  158  159  160  161  162  163  164  165  166  167  168  169  170
// 171  172  173 (174) 175  176  177  178  179 (180) 181  182  183  184  185 (186) 187  188  189 
// 190  191  192  193  194  195  196  197  198  199  200  201  202  203  204  205  206  207  208
// 209  210  211  212  213  214  215  216  217  218  219  220  221  222  223  224  225  226  227
// 228  229  230  231  232  233  234  235  236  237  238  239  240  241  242  243  244  245  246
// 247  248  249  250  251  252  253  254  255  256  257  258  259  260  261  262  263  264  265
// 266  267  268  269  270  271  272  273  274  275  276  277  278  279  280  281  282  283  284
// 285  286  287 (288) 289  290  291  292  293 (294) 295  296  297  298  299 (300) 301  302  303
// 304  305  306  307  308  309  310  311  312  313  314  315  316  317  318  319  320  321  322
// 323  324  325  326  327  328  329  330  331  332  333  334  335  336  337  338  339  340  341
// 342  343  344  345  346  347  348  349  350  351  352  353  354  355  356  357  358  359  360
//     populate() {
//         let grid = [];
//         for (let i = 0; i < this.height; i++) {
//             let rowArr = [];
//             let row = document.createElement('ul');
//             row.className = 'row';
//             for (let j = 0; j < this.width; j++) {
//                 let cell = document.createElement('div')
//                 cell.className = 'cell';
//                 cell.dataset.pos = [i, j]
//                 rowArr.push(cell);
//                 row.appendChild(cell);
//             } 
//             this.root.appendChild(row);
//             grid.push(rowArr);
//         }
//         return grid;
//     }
// import stitchAndYoda from "../images/yoda-stitch.jpg";
// export const DOMExample = () => {
//   const testObj = {
//     key1: "hi",
//     key2: {
//       key3: "Hello",
//     },
//   };
//   const greeting = testObj?.key2?.key3 || testObj.key1;
//   document.body.classList.add("center");
//   const card = document.createElement("div");
//   card.classList.add("card", "center");
//   card.innerHTML = `<h2>${greeting} World!</h2>`;
//   document.body.append(card);
//   const imgCard = document.createElement("div");
//   imgCard.classList.add("card", "center", "image-card");
//   document.body.appendChild(imgCard);
//   const imgElement = document.createElement("img");
//   imgElement.src = buildAssetPath(stitchAndYoda);
//   imgElement.classList.add("card", "center");
//   imgElement.style.objectFit = "cover";
//   imgElement.style.filter = "grayscale(80%)";
//   document.body.appendChild(imgElement);
// };
// // to resolve path issues for images in JS
// function buildAssetPath(imgSrc) {
//   return `./dist/${imgSrc}`;
// }




/***/ }),

/***/ "./src/styles/board.css":
/*!******************************!*\
  !*** ./src/styles/board.css ***!
  \******************************/
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9ib2FyZC5jc3M/ZTZkOSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL25hdi5jc3M/MTdjYiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz8yZTE3Il0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5R28iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2l6ZSIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJnYW1lIiwiR2FtZSIsInJlbW92ZUNoaWxkIiwid2hpdGUiLCJibGFjayIsImVtcHR5IiwibmV1dHJhbCIsIkJvYXJkIiwiZnVsbFNpemUiLCJncmlkIiwiYmxhbmtHcmlkIiwicHJldlBvc2l0aW9ucyIsImNvbG9yIiwicG9zIiwic1BvcyIsInJvdyIsIk1hdGgiLCJmbG9vciIsImNvbCIsIngiLCJ5Iiwic2xpY2UiLCJzUG9zZXMiLCJhcnIiLCJzcGxpdCIsImZvckVhY2giLCJqb2luIiwicG9zaXRpb25zIiwibmVpZ2hicyIsInZhbGlkUG9zIiwicHVzaCIsInN0b25lU3RyaW5nIiwiYm9yZGVyZWQiLCJuZXh0SW5TdHJpbmciLCJjdXJyZW50U3RvbmUiLCJsZW5ndGgiLCJwb3AiLCJuZWlnaGJvcnMiLCJuZWlnaGIiLCJpbmNsdWRlcyIsImZpbmRTdHJpbmciLCJjYXB0dXJlIiwicGxhY2VNYW55U3RvbmVzIiwicGxheWVyIiwib3Bwb25lbnQiLCJzd2FwIiwiY2FwdHVyZWQiLCJwbGFjZVN0b25lIiwiY2FwdHVyZVN1cnJvdW5kZWQiLCJpZHgiLCJpbmRleE9mIiwiYm9yZGVyQ29sb3JzIiwibWFwIiwidG9VcHBlckNhc2UiLCJtYXRjaGVkIiwiZmlyc3RDb2xvciIsInRvTG93ZXJDYXNlIiwic2NvcmVzR3JpZCIsImJsYWNrU2NvcmUiLCJ3aGl0ZVNjb3JlIiwiaSIsIlBsYXllciIsInBhc3MiLCJib2FyZCIsImN1cnJlbnRQbGF5ZXIiLCJkb2NCb2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJmaWxsIiwicm9vdCIsImFwcGVuZENoaWxkIiwiYWRkU3RhcnMiLCJrIiwiY2xhc3NOYW1lIiwiY2VsbCIsImRhdGFzZXQiLCJpbmRleCIsInN0b25lIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInN0YXJzIiwic3RhciIsInBsYXlUdXJuIiwicGFzc1R1cm4iLCJ0b2dnbGVDbGFzcyIsImUiLCJ0YXJnZXQiLCJjb250YWlucyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtB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ZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5pbXBvcnQgXCIuL3N0eWxlcy9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2JvYXJkLmNzc1wiO1xuXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheS1nb1wiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHBsYXlHbyk7XG5cbmZ1bmN0aW9uIHBsYXlHbyhldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAvL3JlbmRlciB0aGUgYm9hcmRcbiAgLy9saXN0ZW4gZm9yIGNsaWNrOiBwbGF5IHR1cm5cbiAgLy9zdXJyZW5kZXIgZnVuY3Rpb25hbGl0eVxuICAvL2VuZCBnYW1lXG5cbiAgLy9yZXN0YXJ0IGdhbWU6XG4gIC8vdW5yZWdpc3Rlci9yZXJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVycz9cbiAgLy9jbGVhciBib2FyZFxuICBjb25zdCBzaXplID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemUnKS52YWx1ZTtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKHNpemUpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIikucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWxjb21lXCIpKTtcbn1cblxuLyogPGZvcm0+XG4gIGE6IDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImFcIiBpZD1cImFcIj48YnI+XG4gIGI6IDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImJcIiBpZD1cImJcIj48YnI+XG4gIDxidXR0b24gb25jbGljaz1cImFkZCgpXCI+QWRkPC9idXR0b24+XG48L2Zvcm0+XG48c2NyaXB0PlxuICBmdW5jdGlvbiBhZGQoKSB7XG4gICAgdmFyIGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYScpLnZhbHVlO1xuICAgIHZhciBiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2InKS52YWx1ZTtcbiAgICB2YXIgc3VtID0gYSArIGI7XG4gICAgYWxlcnQoc3VtKTtcbiAgfVxuPC9zY3JpcHQ+ICovXG5cblxuXG5cbi8vIGltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbi8vIGltcG9ydCBjYW52YXNFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvY2FudmFzXCI7XG4vLyBpbXBvcnQgU3F1YXJlIGZyb20gXCIuL3NjcmlwdHMvc3F1YXJlXCI7XG4vLyBpbXBvcnQgeyBET01FeGFtcGxlIH0gZnJvbSBcIi4vc2NyaXB0cy9ET01FeGFtcGxlXCI7XG4vLyBjb25zdCBjdXJyZW50U3RhdGVPYmogPSB7XG4vLyAgIGN1cnJlbnRFeGFtcGxlOiBudWxsLFxuLy8gICBjdXJyZW50RXZlbnRMaXN0ZW5lcnM6IFtdLFxuLy8gfTtcblxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXMtZGVtb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRDYW52YXMpO1xuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNET00tZGVtb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRET00pO1xuXG4vLyBmdW5jdGlvbiBzdGFydERPTSgpIHtcbi8vICAgdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG4vLyAgIGNsZWFyRGVtbygpO1xuLy8gICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPSBcIkRPTURFTU9cIjtcbi8vICAgRE9NRXhhbXBsZSgpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBzdGFydENhbnZhcygpIHtcbi8vICAgY2xlYXJEZW1vKCk7XG4vLyAgIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuLy8gICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPSBcIkNBTlZBU0RFTU9cIjtcbi8vICAgY29uc3QgY2FudmFzID0gbmV3IGNhbnZhc0V4YW1wbGUoKTtcbi8vICAgY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuLy8gICBjb25zdCBzcXVhcmVzID0gW25ldyBTcXVhcmUoY2FudmFzLmN0eCwgY2FudmFzLmNvb3JkcywgY2FudmFzLmZpbGxDb2xvcildO1xuXG4vLyAgIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuXG4vLyAgIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbi8vICAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbi8vICAgICBpZiAoYW5pbWF0aW5nKSBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS51cGRhdGVTcXVhcmUoY2FudmFzLmZpbGxDb2xvcikpO1xuLy8gICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLmRyYXdTcXVhcmUoKSk7XG4vLyAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuLy8gICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHtcbi8vICAgICAgIGlmIChzcS5jb29yZHNbMF0gKyBzcS5jb29yZHNbMl0gPiB3aW5kb3cuaW5uZXJXaWR0aClcbi8vICAgICAgICAgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xuLy8gICAgICAgaWYgKHNxLmNvb3Jkc1swXSA8IDApIHNxLnJldmVyc2VBbmltYXRpb24oKTtcbi8vICAgICB9KTtcbi8vICAgfTtcblxuLy8gICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG5cbi8vICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuLy8gICAvLyBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnB1c2goW1xuLy8gICAvLyAgIFwid2luZG93XCIsXG4vLyAgIC8vICAgXCJrZXlkb3duXCIsXG4vLyAgIC8vICAgaGFuZGxlS2V5RG93bixcbi8vICAgLy8gXSk7XG5cbi8vICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlTW91c2VEb3duKTtcbi8vICAgLy8gY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcbi8vICAgLy8gICBcIndpbmRvd1wiLFxuLy8gICAvLyAgIFwibW91c2Vkb3duXCIsXG4vLyAgIC8vICAgaGFuZGxlTW91c2VEb3duLFxuLy8gICAvLyBdKTtcblxuLy8gICBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4vLyAgICAgaWYgKGV2ZW50LndoaWNoID09PSAzMikge1xuLy8gICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnJldmVyc2VBbmltYXRpb24oKSk7XG4vLyAgICAgICBjYW52YXMuc2V0Q29sb3IoYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YCk7XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBzcXVhcmVzLnB1c2goXG4vLyAgICAgICBuZXcgU3F1YXJlKFxuLy8gICAgICAgICBjYW52YXMuY3R4LFxuLy8gICAgICAgICBjYW52YXMuY29vcmRzLm1hcCgoY28pID0+IGNvICsgMjUpLFxuLy8gICAgICAgICBjYW52YXMuZmlsbENvbG9yXG4vLyAgICAgICApXG4vLyAgICAgKTtcbi8vICAgICAvLyBhbmltYXRpbmcgPSAhYW5pbWF0aW5nO1xuLy8gICB9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpIHtcbi8vICAgd2hpbGUgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMubGVuZ3RoKSB7XG4vLyAgICAgbGV0IFtcbi8vICAgICAgIHNlbGVjdG9yLFxuLy8gICAgICAgZXZlbnQsXG4vLyAgICAgICBoYW5kbGVyLFxuLy8gICAgIF0gPSBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnBvcCgpO1xuLy8gICAgIGlmIChzZWxlY3RvciA9PT0gXCJ3aW5kb3dcIikge1xuLy8gICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuLy8gICAgICAgY29uc29sZS5sb2coaGFuZGxlcik7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBjbGVhckRlbW8oKSB7XG4vLyAgIGlmIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPT09IFwiQ0FOVkFTREVNT1wiKVxuLy8gICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKSk7XG4vLyAgIGlmIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPT09IFwiRE9NREVNT1wiKSB7XG4vLyAgICAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKV0uZm9yRWFjaCgoZWxlbSkgPT5cbi8vICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbSlcbi8vICAgICApO1xuLy8gICB9XG4vLyB9XG4iLCJjb25zdCBbd2hpdGUsIGJsYWNrLCBlbXB0eSwgbmV1dHJhbF0gPSBbXCJYXCIsIFwiT1wiLCBcIl9cIiwgXCIuXCJdO1xuXG5leHBvcnQgY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3RvcihzaXplKSB7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmZ1bGxTaXplID0gc2l6ZSAqIHNpemU7XG4gICAgdGhpcy5ncmlkID0gdGhpcy5ibGFua0dyaWQoKTtcbiAgICB0aGlzLnByZXZQb3NpdGlvbnMgPSBbXTtcbiAgfVxuXG4gIHN3YXAoY29sb3IpIHtcbiAgICBpZiAoY29sb3IgPT09IGJsYWNrKSByZXR1cm4gd2hpdGU7XG4gICAgaWYgKGNvbG9yID09PSB3aGl0ZSkgcmV0dXJuIGJsYWNrO1xuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIGJsYW5rR3JpZCgpIHtcbiAgICByZXR1cm4gZW1wdHkgKiB0aGlzLmZ1bGxTaXplO1xuICB9XG5cbiAgc1Bvcyhwb3MpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplICogcG9zWzBdICsgcG9zWzFdO1xuICB9XG5cbiAgcG9zKHNQb3MpIHtcbiAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKHNQb3MgLyB0aGlzLnNpemUpO1xuICAgIGNvbnN0IGNvbCA9IHNQb3MgJSB0aGlzLnNpemU7XG4gICAgcmV0dXJuIFtyb3csIGNvbF07XG4gIH1cblxuICB2YWxpZFBvcyhwb3MpIHtcbiAgICBjb25zdCBbeCwgeV0gPSBwb3M7XG4gICAgcmV0dXJuICh4ICUgdGhpcy5zaXplID09PSB4ICYmIHkgJSB0aGlzLnNpemUgPT09IHkpO1xuICB9XG5cbiAgcGxhY2VTdG9uZShjb2xvciwgc1Bvcykge1xuICAgIHRoaXMuZ3JpZCA9IHRoaXMuZ3JpZC5zbGljZSgwLCBzUG9zKSArIGNvbG9yICsgdGhpcy5ncmlkLnNsaWNlKHNQb3MrMSk7XG4gIH1cblxuICBwbGFjZU1hbnlTdG9uZXMoY29sb3IsIHNQb3Nlcykge1xuICAgIGNvbnN0IGFyciA9IHRoaXMuZ3JpZC5zcGxpdChcIlwiKTtcbiAgICBzUG9zZXMuZm9yRWFjaChzUG9zID0+IHtcbiAgICAgIGFycltzUG9zXSA9IGNvbG9yO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmdyaWQgPSBhcnIuam9pbihcIlwiKTtcbiAgfVxuXG4gIG5laWdoYm9ycyhzUG9zKSB7XG4gICAgW3JvdywgY29sXSA9IHRoaXMucG9zKHNQb3MpO1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtbcm93LCBjb2wtMV0sIFtyb3ctMSwgY29sXSwgW3JvdywgY29sKzFdLCBbcm93KzEsIGNvbF1dO1xuICAgIGNvbnN0IG5laWdoYnMgPSBbXTtcbiAgICBwb3NpdGlvbnMuZm9yRWFjaChwb3MgPT4ge1xuICAgICAgaWYgKHRoaXMudmFsaWRQb3MocG9zKSkgbmVpZ2hicy5wdXNoKHRoaXMuc1Bvcyhwb3MpKVxuICAgIH0pXG4gICAgcmV0dXJuIG5laWdoYnM7XG4gIH1cblxuICBmaW5kU3RyaW5nKHNQb3MpIHtcbiAgICBjb25zdCBjb2xvciA9IHRoaXMuZ3JpZFtzUG9zXTtcbiAgICBjb25zdCBzdG9uZVN0cmluZyA9IFtzUG9zXTtcbiAgICBjb25zdCBib3JkZXJlZCA9IFtdO1xuICAgIGNvbnN0IG5leHRJblN0cmluZyA9IFtzUG9zXTtcbiAgICBsZXQgY3VycmVudFN0b25lO1xuICAgIHdoaWxlIChuZXh0SW5TdHJpbmcubGVuZ3RoKSB7XG4gICAgICBjdXJyZW50U3RvbmUgPSBuZXh0SW5TdHJpbmcucG9wKCk7XG4gICAgICBzdG9uZVN0cmluZy5wdXNoKGN1cnJlbnRTdG9uZSk7XG4gICAgICB0aGlzLm5laWdoYm9ycyhjdXJyZW50U3RvbmUpLmZvckVhY2gobmVpZ2hiID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZFtuZWlnaGJdID09PSBjb2xvciBcbiAgICAgICAgICAmJiAhc3RvbmVTdHJpbmcuaW5jbHVkZXMobmVpZ2hiKSkge1xuICAgICAgICAgIG5leHRJblN0cmluZy5wdXNoKG5laWdoYik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ3JpZFtuZWlnaGJdICE9PSBjb2xvcikge1xuICAgICAgICAgIGJvcmRlcmVkLnB1c2gobmVpZ2hiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoe1xuICAgICAgc3RvbmVTdHJpbmcsXG4gICAgICBib3JkZXJlZFxuICAgIH0pO1xuICB9XG5cbiAgY2FwdHVyZVN1cnJvdW5kZWQoc1Bvcykge1xuICAgIGNvbnN0IHsgXG4gICAgICBzdG9uZVN0cmluZywgXG4gICAgICBib3JkZXJlZCBcbiAgICB9ID0gdGhpcy5maW5kU3RyaW5nKHNQb3MpO1xuICAgIGxldCBjYXB0dXJlID0gdHJ1ZTtcbiAgICBib3JkZXJlZC5mb3JFYWNoKHNQb3MgPT4ge1xuICAgICAgaWYgKHRoaXMuZ3JpZFtzUG9zXSA9PT0gZW1wdHkpIHtcbiAgICAgICAgY2FwdHVyZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChjYXB0dXJlKSB7XG4gICAgICB0aGlzLnBsYWNlTWFueVN0b25lcyhlbXB0eSwgc3RvbmVTdHJpbmcpO1xuICAgICAgcmV0dXJuIHN0b25lU3RyaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgcGxheU1vdmUocGxheWVyLCBwb3MpIHtcbiAgICBjb25zdCBjb2xvciA9IHBsYXllci5jb2xvcjtcbiAgICBjb25zdCBzUG9zID0gdGhpcy5zUG9zKHBvcyk7XG4gICAgY29uc3Qgb3Bwb25lbnQgPSBzd2FwKGNvbG9yKTtcbiAgICBjb25zdCBjYXB0dXJlZCA9IDA7XG4gICAgLy9kbyBub3RoaW5nIGlmIHBvc2l0aW9uIGlzIG9jY3VwaWVkXG4gICAgaWYgKHRoaXMuZ3JpZFtzUG9zXSAhPT0gZW1wdHkpIHJldHVybjtcbiAgICB0aGlzLnBsYWNlU3RvbmUoY29sb3IsIHNQb3MpO1xuICAgIC8vZmluZCBvcHBvbmVudCBzdG9uZXMgaW4gbmVpZ2hib3JzLCBjYXB0dXJlIGlmIHBvc3NpYmxlXG4gICAgdGhpcy5uZWlnaGJvcnMoc1BvcykuZm9yRWFjaChuZWlnaGIgPT4ge1xuICAgICAgaWYgKHRoaXMuZ3JpZFtuZWlnaGJdID09PSBvcHBvbmVudCkge1xuICAgICAgICBjYXB0dXJlZCArPSB0aGlzLmNhcHR1cmVTdXJyb3VuZGVkKG5laWdoYikubGVuZ3RoO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vY2hlY2sgZm9yIHN1aWNpZGFsIG1vdmVcbiAgICBpZiAodGhpcy5jYXB0dXJlU3Vycm91bmRlZChzUG9zKS5sZW5ndGgpIHtcbiAgICAgIHRocm93IFwiU3VpY2lkZSEgVHJ5IGFnYWluXCI7XG4gICAgfVxuICAgIC8vY2hlY2sgZm9yIGtvXG4gICAgaWYgKHRoaXMucHJldlBvc2l0aW9ucy5pbmNsdWRlcyh0aGlzLmdyaWQpKSB7XG4gICAgICB0aGlzLmdyaWQgPSB0aGlzLnByZXZQb3NpdGlvbnNbdGhpcy5wcmV2UG9zaXRpb25zLmxlbmd0aCAtIDFdO1xuICAgICAgdGhyb3cgXCJLbyEgSW52YWxpZCBtb3ZlLCB0cnkgYWdhaW5cIjtcbiAgICB9XG4gICAgcGxheWVyLmNhcHR1cmVkICs9IGNhcHR1cmVkO1xuICAgIHRoaXMucHJldlBvc2l0aW9ucy5wdXNoKHRoaXMuZ3JpZCk7XG4gICAgcmV0dXJuIHRoaXMuZ3JpZDtcbiAgfVxuXG4gIHNjb3JlKCkge1xuICAgIC8vZmlsbCBncmlkIHRlcnJpdG9yaWVzIChsb3dlcmNhc2UgbGV0dGVycyBmb3IgdmlzdWFsIGRpZmZlcmVuY2UpXG4gICAgd2hpbGUgKHRoaXMuZ3JpZC5pbmNsdWRlcyhlbXB0eSkpIHtcbiAgICAgIGxldCBpZHggPSB0aGlzLmdyaWQuaW5kZXhPZihlbXB0eSk7XG4gICAgICBsZXQgeyBzdG9uZVN0cmluZywgYm9yZGVyZWQgfSA9IHRoaXMuZmluZFN0cmluZyhpZHgpO1xuICAgICAgbGV0IGJvcmRlckNvbG9ycyA9IGJvcmRlcmVkLm1hcChzUG9zID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZFtzUG9zXS50b1VwcGVyQ2FzZTtcbiAgICAgIH0pO1xuICAgICAgbGV0IG1hdGNoZWQgPSB0cnVlO1xuICAgICAgbGV0IGZpcnN0Q29sb3IgPSBib3JkZXJDb2xvcnNbMF07XG4gICAgICBib3JkZXJDb2xvcnMuZm9yRWFjaChjb2xvciA9PiB7XG4gICAgICAgIGlmIChjb2xvciAhPT0gZmlyc3RDb2xvcikgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICB0aGlzLnBsYWNlTWFueVN0b25lcyhmaXJzdENvbG9yLnRvTG93ZXJDYXNlKCksIHN0b25lU3RyaW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxhY2VNYW55U3RvbmVzKG5ldXRyYWwsIHN0b25lU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy9jb3VudCB1cCB0aGUgZmluYWwgc2NvcmVzXG4gICAgY29uc3Qgc2NvcmVzR3JpZCA9IHRoaXMuZ3JpZC50b1VwcGVyQ2FzZSgpO1xuICAgIGxldCBibGFja1Njb3JlID0gMDtcbiAgICBsZXQgd2hpdGVTY29yZSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY29yZXNHcmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc2NvcmVzR3JpZFtpXSA9PT0gYmxhY2spIGJsYWNrU2NvcmUrKztcbiAgICAgIGlmIChzY29yZXNHcmlkW2ldID09PSB3aGl0ZSkgd2hpdGVTY29yZSsrO1xuICAgIH07XG4gICAgcmV0dXJuICh7XG4gICAgICBibGFja1Njb3JlLFxuICAgICAgd2hpdGVTY29yZSxcbiAgICAgIGdyaWQ6IHRoaXMuZ3JpZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGNvbG9yKSB7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuY2FwdHVyZWQgPSAwO1xuICAgIHRoaXMucGFzcyA9IGZhbHNlO1xuICB9XG5cbiAgdGFrZVR1cm4oKSB7XG5cbiAgfVxufSIsImltcG9ydCB7XG4gIEJvYXJkLFxuICBQbGF5ZXJcbn0gZnJvbSAnLi9ib2FyZCc7XG5pbXBvcnQgXCIuLi9zdHlsZXMvbmF2LmNzc1wiO1xuXG5jb25zdCBibGFjayA9IG5ldyBQbGF5ZXIoJ2JsYWNrJyk7XG5jb25zdCB3aGl0ZSA9IG5ldyBQbGF5ZXIoJ3doaXRlJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihzaXplKSB7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHNpemUpO1xuICAgIGJsYWNrLnBhc3MgPSBmYWxzZTtcbiAgICBibGFjay5jYXB0dXJlZCA9IDA7XG4gICAgd2hpdGUucGFzcyA9IGZhbHNlO1xuICAgIHdoaXRlLmNhcHR1cmVkID0gMDtcbiAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSBibGFjaztcbiAgICB0aGlzLmRvY0JvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB0aGlzLmRvY0JvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJywgJ2JsYWNrJyk7XG4gICAgdGhpcy5maWxsKHNpemUpO1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQodGhpcy5kb2NCb2FyZCk7XG4gICAgdGhpcy5hZGRTdGFycygpO1xuICB9XG5cbiAgZmlsbCgpIHtcbiAgICBsZXQgayA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykge1xuICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICByb3cuY2xhc3NOYW1lID0gJ3Jvdyc7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XG4gICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICBjZWxsLmRhdGFzZXQuaW5kZXggPSBrO1xuICAgICAgICBjZWxsLmRhdGFzZXQuc3RvbmUgPSBcIl9cIjtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICBrKys7XG4gICAgICB9XG4gICAgICB0aGlzLmRvY0JvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICB0aGlzLmRvY0JvYXJkLnN0eWxlLndpZHRoID0gYCR7MzAgKiB0aGlzLnNpemV9cHhgO1xuICAgICAgdGhpcy5kb2NCb2FyZC5zdHlsZS5oZWlnaHQgPSBgJHszMCAqIHRoaXMuc2l6ZX1weGA7XG4gICAgfVxuICB9XG5cbiAgYWRkU3RhcnMoKSB7XG4gICAgbGV0IHN0YXJzID0gW107XG4gICAgc3dpdGNoKHRoaXMuc2l6ZSkge1xuICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgc3RhcnMgPSBbMTJdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCI5XCI6XG4gICAgICAgIHN0YXJzID0gWzIwLCAyNCwgNDAsIDU2LCA2MF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIjEzXCI6XG4gICAgICAgIHN0YXJzID0gWzQyLCA0OCwgODQsIDEyMCwgMTI2XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiMTlcIjpcbiAgICAgICAgc3RhcnMgPSBbNjAsIDY2LCA3MiwgMTc0LCAxODAsIDE4NiwgMjg4LCAyOTQsIDMwMF07XG4gICAgfVxuICAgIGxldCBjZWxsO1xuICAgIHN0YXJzLmZvckVhY2goc3RhciA9PiB7XG4gICAgICBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9XCIke3N0YXJ9XCJdYCk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzdGFyXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgcGxheSgpIHtcblxuICAgIC8vIGZyZXNoIHBsYXllcnMsIGZyZXNoIGJvYXJkXG4gICAgLy8gZ2V0IHVzZXIgaW5wdXRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2FyZCcpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnBsYXlUdXJuKGJvYXJkKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnBhc3NUdXJuKTtcbiAgICAvLyB0YWtlIHR1cm5zXG4gICAgLy8gbGlzdGVuIGZvciB0d28gcGFzc2VzIGluIGEgcm93XG4gICAgLy8gc3RvcCB0aGUgZ2FtZVxuICAgIC8vIHRha2UgdGhlIHNjb3JlLCBkaXNwbGF5IHRoZSB3aW5uZXJcbiAgICAvLyBhZGQgYSByZXBsYXkgYnV0dG9uXG4gIH1cblxuICBzd2FwKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXIgPT09IGJsYWNrKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB3aGl0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gYmxhY2s7XG4gICAgfVxuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9hcmQnKTtcbiAgICBib2FyZC50b2dnbGVDbGFzcygnd2hpdGUnKTtcbiAgICBib2FyZC50b2dnbGVDbGFzcygnYmxhY2snKTtcbiAgfVxuXG4gIHBsYXlUdXJuKGJvYXJkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3aGl0ZScpICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2JsYWNrJykpIHtcbiAgICAgICAgY29uc3QgaWR4ID0gZS50YXJnZXQuY2xhc3NMaXN0XG4gICAgICAgIC8vcGxheSBhIHR1cm4gb24gb3VyIGJvYXJkXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGFzc1R1cm4oYm9hcmQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhgJHt0aGlzLmN1cnJlbnRQbGF5ZXIuY29sb3J9YCkpIHtcbiAgICAgICAgdGhpcy5zd2FwKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIDAgICAgMSAgICAyICAgIDMgICAgNCAgICA1ICAgIDYgICAgNyAgICA4XG4vLyA5ICAgIDEwICAgMTEgICAxMiAgIDEzICAgMTQgICAxNSAgIDE2ICAgMTdcbi8vIDE4ICAgMTkgICAyMCAgIDIxICAgMjIgICAyMyAgIDI0ICAgMjUgICAyNlxuLy8gMjcgICAyOCAgIDI5ICAgMzAgICAzMSAgIDMyICAgMzMgICAzNCAgIDM1XG4vLyAzNiAgIDM3ICAgMzggICAzOSAgIDQwICAgNDEgICA0MiAgIDQzICAgNDRcbi8vIDQ1ICAgNDYgICA0NyAgIDQ4ICAgNDkgICA1MCAgIDUxICAgNTIgICA1M1xuLy8gNTQgICA1NSAgIDU2ICAgNTcgICA1OCAgIDU5ICAgNjAgICA2MSAgIDYyXG4vLyA2MyAgIDY0ICAgNjUgICA2NiAgIDY3ICAgNjggICA2OSAgIDcwICAgNzFcbi8vIDcyICAgNzMgICA3NCAgIDc1ICAgNzYgICA3NyAgIDc4ICAgNzkgICA4MFxuXG4vLyAwICAgIDEgICAgMiAgICAzICAgIDQgICAgNSAgICA2ICAgIDcgICAgOCAgICA5ICAgIDEwICAgMTEgICAxMlxuLy8gMTMgICAxNCAgIDE1ICAgMTYgICAxNyAgIDE4ICAgMTkgICAyMCAgIDIxICAgMjIgICAyMyAgIDI0ICAgMjVcbi8vIDI2ICAgMjcgICAyOCAgIDI5ICAgMzAgICAzMSAgIDMyICAgMzMgICAzNCAgIDM1ICAgMzYgICAzNyAgIDM4XG4vLyAzOSAgIDQwICAgNDEgICA0MiAgIDQzICAgNDQgICA0NSAgIDQ2ICAgNDcgICA0OCAgIDQ5ICAgNTAgICA1MVxuLy8gNTIgICA1MyAgIDU0ICAgNTUgICA1NiAgIDU3ICAgNTggICA1OSAgIDYwICAgNjEgICA2MiAgIDYzICAgNjRcbi8vIDY1ICAgNjYgICA2NyAgIDY4ICAgNjkgICA3MCAgIDcxICAgNzIgICA3MyAgIDc0ICAgNzUgICA3NiAgIDc3XG4vLyA3OCAgIDc5ICAgODAgICA4MSAgIDgyICAgODMgICA4NCAgIDg1ICAgODYgICA4NyAgIDg4ICAgODkgICA5MFxuLy8gOTEgICA5MiAgIDkzICAgOTQgICA5NSAgIDk2ICAgOTcgICA5OCAgIDk5ICAgMTAwICAxMDEgIDEwMiAgMTAzXG4vLyAxMDQgIDEwNSAgMTA2ICAxMDcgIDEwOCAgMTA5ICAxMTAgIDExMSAgMTEyICAxMTMgIDExNCAgMTE1ICAxMTZcbi8vIDExNyAgMTE4ICAxMTkgIDEyMCAgMTIxICAxMjIgIDEyMyAgMTI0ICAxMjUgIDEyNiAgMTI3ICAxMjggIDEyOVxuLy8gMTMwICAxMzEgIDEzMiAgMTMzICAxMzQgIDEzNSAgMTM2ICAxMzcgIDEzOCAgMTM5ICAxNDAgIDE0MSAgMTQyXG4vLyAxNDMgIDE0NCAgMTQ1ICAxNDYgIDE0NyAgMTQ4ICAxNDkgIDE1MCAgMTUxICAxNTIgIDE1MyAgMTU0ICAxNTVcbi8vIDE1NiAgMTU3ICAxNTggIDE1OSAgMTYwICAxNjEgIDE2MiAgMTYzICAxNjQgIDE2NSAgMTY2ICAxNjcgIDE2OFxuXG4vLyAwICAgIDEgICAgMiAgICAzICAgIDQgICAgNSAgICA2ICAgIDcgICAgOCAgICA5ICAgIDEwICAgMTEgICAxMiAgIDEzICAgMTQgICAxNSAgIDE2ICAgMTcgICAxOFxuLy8gMTkgICAyMCAgIDIxICAgMjIgICAyMyAgIDI0ICAgMjUgICAyNiAgIDI3ICAgMjggICAyOSAgIDMwICAgMzEgICAzMiAgIDMzICAgMzQgICAzNSAgIDM2ICAgMzdcbi8vIDM4ICAgMzkgICA0MCAgIDQxICAgNDIgICA0MyAgIDQ0ICAgNDUgICA0NiAgIDQ3ICAgNDggICA0OSAgIDUwICAgNTEgICA1MiAgIDUzICAgNTQgICA1NSAgIDU2XG4vLyA1NyAgIDU4ICAgNTkgICg2MCkgIDYxICAgNjIgICA2MyAgIDY0ICAgNjUgICg2NikgIDY3ICAgNjggICA2OSAgIDcwICAgNzEgICg3MikgIDczICAgNzQgICA3NVxuLy8gNzYgICA3NyAgIDc4ICAgNzkgICA4MCAgIDgxICAgODIgICA4MyAgIDg0ICAgODUgICA4NiAgIDg3ICAgODggICA4OSAgIDkwICAgOTEgICA5MiAgIDkzICAgOTRcbi8vIDk1ICAgOTYgICA5NyAgIDk4ICAgOTkgICAxMDAgIDEwMSAgMTAyICAxMDMgIDEwNCAgMTA1ICAxMDYgIDEwNyAgMTA4ICAxMDkgIDExMCAgMTExICAxMTIgIDExM1xuLy8gMTE0ICAxMTUgIDExNiAgMTE3ICAxMTggIDExOSAgMTIwICAxMjEgIDEyMiAgMTIzICAxMjQgIDEyNSAgMTI2ICAxMjcgIDEyOCAgMTI5ICAxMzAgIDEzMSAgMTMyXG4vLyAxMzMgIDEzNCAgMTM1ICAxMzYgIDEzNyAgMTM4ICAxMzkgIDE0MCAgMTQxICAxNDIgIDE0MyAgMTQ0ICAxNDUgIDE0NiAgMTQ3ICAxNDggIDE0OSAgMTUwICAxNTFcbi8vIDE1MiAgMTUzICAxNTQgIDE1NSAgMTU2ICAxNTcgIDE1OCAgMTU5ICAxNjAgIDE2MSAgMTYyICAxNjMgIDE2NCAgMTY1ICAxNjYgIDE2NyAgMTY4ICAxNjkgIDE3MFxuLy8gMTcxICAxNzIgIDE3MyAoMTc0KSAxNzUgIDE3NiAgMTc3ICAxNzggIDE3OSAoMTgwKSAxODEgIDE4MiAgMTgzICAxODQgIDE4NSAoMTg2KSAxODcgIDE4OCAgMTg5IFxuLy8gMTkwICAxOTEgIDE5MiAgMTkzICAxOTQgIDE5NSAgMTk2ICAxOTcgIDE5OCAgMTk5ICAyMDAgIDIwMSAgMjAyICAyMDMgIDIwNCAgMjA1ICAyMDYgIDIwNyAgMjA4XG4vLyAyMDkgIDIxMCAgMjExICAyMTIgIDIxMyAgMjE0ICAyMTUgIDIxNiAgMjE3ICAyMTggIDIxOSAgMjIwICAyMjEgIDIyMiAgMjIzICAyMjQgIDIyNSAgMjI2ICAyMjdcbi8vIDIyOCAgMjI5ICAyMzAgIDIzMSAgMjMyICAyMzMgIDIzNCAgMjM1ICAyMzYgIDIzNyAgMjM4ICAyMzkgIDI0MCAgMjQxICAyNDIgIDI0MyAgMjQ0ICAyNDUgIDI0NlxuLy8gMjQ3ICAyNDggIDI0OSAgMjUwICAyNTEgIDI1MiAgMjUzICAyNTQgIDI1NSAgMjU2ICAyNTcgIDI1OCAgMjU5ICAyNjAgIDI2MSAgMjYyICAyNjMgIDI2NCAgMjY1XG4vLyAyNjYgIDI2NyAgMjY4ICAyNjkgIDI3MCAgMjcxICAyNzIgIDI3MyAgMjc0ICAyNzUgIDI3NiAgMjc3ICAyNzggIDI3OSAgMjgwICAyODEgIDI4MiAgMjgzICAyODRcbi8vIDI4NSAgMjg2ICAyODcgKDI4OCkgMjg5ICAyOTAgIDI5MSAgMjkyICAyOTMgKDI5NCkgMjk1ICAyOTYgIDI5NyAgMjk4ICAyOTkgKDMwMCkgMzAxICAzMDIgIDMwM1xuLy8gMzA0ICAzMDUgIDMwNiAgMzA3ICAzMDggIDMwOSAgMzEwICAzMTEgIDMxMiAgMzEzICAzMTQgIDMxNSAgMzE2ICAzMTcgIDMxOCAgMzE5ICAzMjAgIDMyMSAgMzIyXG4vLyAzMjMgIDMyNCAgMzI1ICAzMjYgIDMyNyAgMzI4ICAzMjkgIDMzMCAgMzMxICAzMzIgIDMzMyAgMzM0ICAzMzUgIDMzNiAgMzM3ICAzMzggIDMzOSAgMzQwICAzNDFcbi8vIDM0MiAgMzQzICAzNDQgIDM0NSAgMzQ2ICAzNDcgIDM0OCAgMzQ5ICAzNTAgIDM1MSAgMzUyICAzNTMgIDM1NCAgMzU1ICAzNTYgIDM1NyAgMzU4ICAzNTkgIDM2MFxuXG5cblxuXG4vLyAgICAgcG9wdWxhdGUoKSB7XG4vLyAgICAgICAgIGxldCBncmlkID0gW107XG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5oZWlnaHQ7IGkrKykge1xuLy8gICAgICAgICAgICAgbGV0IHJvd0FyciA9IFtdO1xuLy8gICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4vLyAgICAgICAgICAgICByb3cuY2xhc3NOYW1lID0gJ3Jvdyc7XG4vLyAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMud2lkdGg7IGorKykge1xuLy8gICAgICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICdjZWxsJztcbi8vICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQucG9zID0gW2ksIGpdXG4vLyAgICAgICAgICAgICAgICAgcm93QXJyLnB1c2goY2VsbCk7XG5cbi8vICAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4vLyAgICAgICAgICAgICB9IFxuLy8gICAgICAgICAgICAgdGhpcy5yb290LmFwcGVuZENoaWxkKHJvdyk7XG4vLyAgICAgICAgICAgICBncmlkLnB1c2gocm93QXJyKTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIHJldHVybiBncmlkO1xuLy8gICAgIH1cblxuXG5cbi8vIGltcG9ydCBzdGl0Y2hBbmRZb2RhIGZyb20gXCIuLi9pbWFnZXMveW9kYS1zdGl0Y2guanBnXCI7XG4vLyBleHBvcnQgY29uc3QgRE9NRXhhbXBsZSA9ICgpID0+IHtcbi8vICAgY29uc3QgdGVzdE9iaiA9IHtcbi8vICAgICBrZXkxOiBcImhpXCIsXG4vLyAgICAga2V5Mjoge1xuLy8gICAgICAga2V5MzogXCJIZWxsb1wiLFxuLy8gICAgIH0sXG4vLyAgIH07XG5cbi8vICAgY29uc3QgZ3JlZXRpbmcgPSB0ZXN0T2JqPy5rZXkyPy5rZXkzIHx8IHRlc3RPYmoua2V5MTtcbi8vICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiY2VudGVyXCIpO1xuLy8gICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiLCBcImNlbnRlclwiKTtcbi8vICAgY2FyZC5pbm5lckhUTUwgPSBgPGgyPiR7Z3JlZXRpbmd9IFdvcmxkITwvaDI+YDtcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY2FyZCk7XG4vLyAgIGNvbnN0IGltZ0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBpbWdDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIsIFwiaW1hZ2UtY2FyZFwiKTtcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWdDYXJkKTtcbi8vICAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4vLyAgIGltZ0VsZW1lbnQuc3JjID0gYnVpbGRBc3NldFBhdGgoc3RpdGNoQW5kWW9kYSk7XG4vLyAgIGltZ0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIik7XG4vLyAgIGltZ0VsZW1lbnQuc3R5bGUub2JqZWN0Rml0ID0gXCJjb3ZlclwiO1xuLy8gICBpbWdFbGVtZW50LnN0eWxlLmZpbHRlciA9IFwiZ3JheXNjYWxlKDgwJSlcIjtcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcbi8vIH07XG5cbi8vIC8vIHRvIHJlc29sdmUgcGF0aCBpc3N1ZXMgZm9yIGltYWdlcyBpbiBKU1xuXG4vLyBmdW5jdGlvbiBidWlsZEFzc2V0UGF0aChpbWdTcmMpIHtcbi8vICAgcmV0dXJuIGAuL2Rpc3QvJHtpbWdTcmN9YDtcbi8vIH1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=