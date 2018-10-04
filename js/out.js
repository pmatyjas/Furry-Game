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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Game = __webpack_require__(/*! ./game.js */ \"./js/game.js\");\n\nvar gra = new Game;\ngra.showFurry();\ngra.showCoin();\ndocument.addEventListener('keydown', function (event) {\n    gra.turnFurry(event)\n});\n\n\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/coin.js":
/*!********************!*\
  !*** ./js/coin.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Coin = function () {\n  this.x = Math.floor(Math.random() * 10);\n  this.y = Math.floor(Math.random() * 10);\n};\n\nmodule.exports = Coin;\n\n\n//# sourceURL=webpack:///./js/coin.js?");

/***/ }),

/***/ "./js/furry.js":
/*!*********************!*\
  !*** ./js/furry.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Furry = function (x, y, direction) {\n  this.x = 0;\n  this.y = 0;\n  this.direction = \"right\";\n};\n\nmodule.exports = Furry;\n\n\n//# sourceURL=webpack:///./js/furry.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Furry = __webpack_require__(/*! ./furry.js */ \"./js/furry.js\");\nvar Coin = __webpack_require__(/*! ./coin.js */ \"./js/coin.js\");\n\n\nvar Game = function () {\n  this.board = document.querySelectorAll(\"#board div\");\n  this.furry = new Furry();\n  this.coin = new Coin();\n  this.index = function (x, y) {\n    return x + (y * 10);\n  };\n  this.showFurry = function () {\n\n    this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');\n\n  };\n  this.showCoin = function () {\n    this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');\n  };\n  this.startGame = setInterval(function () {\n    self.moveFurry()\n  }, 250);\n\n  var self = this;\n\n  this.moveFurry = function () {\n\n    this.hideVisibleFurry();\n\n    if (this.furry.direction === \"right\") {\n      this.furry.x = this.furry.x + 1;\n    } else if (this.furry.direction === \"left\") {\n      this.furry.x = this.furry.x - 1;\n    } else if (this.furry.direction === \"up\") {\n      this.furry.y = this.furry.y - 1;\n    } else if (this.furry.direction === \"down\") {\n      this.furry.y = this.furry.y + 1;\n    }\n\n    this.gameOver();\n    this.checkCoinColision();\n\n\n  };\n  this.hideVisibleFurry = function () {\n    document.querySelector(\".furry\").classList.remove('furry');\n  };\n\n  this.turnFurry = function (event) {\n    switch (event.which) {\n      case 37:\n        this.furry.direction = 'left';\n        break;\n      case 39:\n        this.furry.direction = 'right';\n        break;\n      case 38:\n        this.furry.direction = 'up';\n        break;\n      case 40:\n        this.furry.direction = 'down';\n        break;\n    }\n  };\n\n  this.checkCoinColision = function () {\n    if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {\n      document.querySelector(\".coin\").classList.remove(\"coin\");\n\n      var result = document.querySelector(\"#score strong\");\n      result.innerText = parseInt(result.innerText) + 1;\n\n      this.coin = new Coin;\n      this.showCoin();\n    }\n  };\n\n  this.gameOver = function () {\n    if ((this.furry.x < 0 || this.furry.x > 9) ||\n      (this.furry.y < 0 || this.furry.y > 9)) {\n      clearInterval(this.startGame);\n      board.style.backgroundColor = \"red\";\n      // console.log(\"game over\");\n    } else {\n      this.showFurry()\n    }\n  }\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ })

/******/ });