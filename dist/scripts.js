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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/tmp/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/tmp/background/background.js":
/*!*******************************************!*\
  !*** ./dist/tmp/background/background.js ***!
  \*******************************************/
/*! exports provided: Background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
class Background {
  // build
  build() {
    this.element = document.createElement('div');
    this.element.className = 'nj-overlay';
    return this.element;
  } // show the back drop


  show() {
    this.element.classList.add('nj-overlay-show');
  } // show the back drop


  hide() {
    this.element.classList.remove('nj-overlay-show');
  }

}

/***/ }),

/***/ "./dist/tmp/base/base.js":
/*!*******************************!*\
  !*** ./dist/tmp/base/base.js ***!
  \*******************************/
/*! exports provided: NJPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NJPicker", function() { return NJPicker; });
/* harmony import */ var _background_background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../background/background */ "./dist/tmp/background/background.js");

class NJPicker {
  constructor(options = {}) {
    if (!options.targetEl && !options.targetID) {
      throw 'NJPicker requires a target element(targetEl) or target element ID(targetID)';
    }

    this.config = Object.assign(this.defaultConfig, options); // merge options with default config

    this.build(); // build the picker
  } // plugin default config


  get defaultConfig() {
    return {
      targetEl: null,
      targetID: null,
      format: '12',
      theming: {}
    };
  } // set the options for building the plugin


  build() {
    if (this.config.targetEl) {
      // check for valid dom element
      if (!document.body.contains(this.config.targetEl)) {
        throw 'targetEl does not exist in the dom';
      }

      this.targetElement = this.config.targetEl;
    } else if (this.config.targetID) {
      // check for valid dom element with ID targetID
      this.targetElement = document.querySelector(`#${this.config.targetID}`);

      if (!this.targetElement) {
        throw 'targetID does not exist in the dom';
      }
    }

    this.container = document.createElement('div'); // create picker container div

    this.container.classList.add('nj-picker'); // add the container class name

    this.bg = new _background_background__WEBPACK_IMPORTED_MODULE_0__["Background"](); // init the backdrop

    this.container.append(this.bg.build()); // append the backdrop to the picker container

    document.body.append(this.container); // attach the picker container to the dom
  } // shows the picker


  showPicker() {
    this.bg.show(); // shows the backdrop
  } // hides the picker


  hidePicker() {
    this.bg.hide(); // hides the backdrop
  }

}

if (typeof global === 'object' && !global.NJPicker) {
  global.NJPicker = NJPicker;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./dist/tmp/index.js":
/*!***************************!*\
  !*** ./dist/tmp/index.js ***!
  \***************************/
/*! exports provided: NJPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/base */ "./dist/tmp/base/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NJPicker", function() { return _base_base__WEBPACK_IMPORTED_MODULE_0__["NJPicker"]; });



/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC90bXAvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL2Rpc3QvdG1wL2Jhc2UvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3RtcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUEsQzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFzRDtBQUMvQztBQUNQLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUEsNkRBQTZEOztBQUU3RCxpQkFBaUI7QUFDakIsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzREFBc0QscUJBQXFCOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQ7O0FBRW5ELDhDQUE4Qzs7QUFFOUMsa0JBQWtCLGlFQUFVLEdBQUc7O0FBRS9CLDJDQUEyQzs7QUFFM0MseUNBQXlDO0FBQ3pDLEdBQUc7OztBQUdIO0FBQ0EsbUJBQW1CO0FBQ25CLEdBQUc7OztBQUdIO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7O0FDakVBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGlzdC90bXAvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY2xhc3MgQmFja2dyb3VuZCB7XG4gIC8vIGJ1aWxkXG4gIGJ1aWxkKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnbmotb3ZlcmxheSc7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfSAvLyBzaG93IHRoZSBiYWNrIGRyb3BcblxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25qLW92ZXJsYXktc2hvdycpO1xuICB9IC8vIHNob3cgdGhlIGJhY2sgZHJvcFxuXG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbmotb3ZlcmxheS1zaG93Jyk7XG4gIH1cblxufSIsImltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tICcuLi9iYWNrZ3JvdW5kL2JhY2tncm91bmQnO1xuZXhwb3J0IGNsYXNzIE5KUGlja2VyIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCFvcHRpb25zLnRhcmdldEVsICYmICFvcHRpb25zLnRhcmdldElEKSB7XG4gICAgICB0aHJvdyAnTkpQaWNrZXIgcmVxdWlyZXMgYSB0YXJnZXQgZWxlbWVudCh0YXJnZXRFbCkgb3IgdGFyZ2V0IGVsZW1lbnQgSUQodGFyZ2V0SUQpJztcbiAgICB9XG5cbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24odGhpcy5kZWZhdWx0Q29uZmlnLCBvcHRpb25zKTsgLy8gbWVyZ2Ugb3B0aW9ucyB3aXRoIGRlZmF1bHQgY29uZmlnXG5cbiAgICB0aGlzLmJ1aWxkKCk7IC8vIGJ1aWxkIHRoZSBwaWNrZXJcbiAgfSAvLyBwbHVnaW4gZGVmYXVsdCBjb25maWdcblxuXG4gIGdldCBkZWZhdWx0Q29uZmlnKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0YXJnZXRFbDogbnVsbCxcbiAgICAgIHRhcmdldElEOiBudWxsLFxuICAgICAgZm9ybWF0OiAnMTInLFxuICAgICAgdGhlbWluZzoge31cbiAgICB9O1xuICB9IC8vIHNldCB0aGUgb3B0aW9ucyBmb3IgYnVpbGRpbmcgdGhlIHBsdWdpblxuXG5cbiAgYnVpbGQoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnRhcmdldEVsKSB7XG4gICAgICAvLyBjaGVjayBmb3IgdmFsaWQgZG9tIGVsZW1lbnRcbiAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLmNvbmZpZy50YXJnZXRFbCkpIHtcbiAgICAgICAgdGhyb3cgJ3RhcmdldEVsIGRvZXMgbm90IGV4aXN0IGluIHRoZSBkb20nO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRhcmdldEVsZW1lbnQgPSB0aGlzLmNvbmZpZy50YXJnZXRFbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLnRhcmdldElEKSB7XG4gICAgICAvLyBjaGVjayBmb3IgdmFsaWQgZG9tIGVsZW1lbnQgd2l0aCBJRCB0YXJnZXRJRFxuICAgICAgdGhpcy50YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5jb25maWcudGFyZ2V0SUR9YCk7XG5cbiAgICAgIGlmICghdGhpcy50YXJnZXRFbGVtZW50KSB7XG4gICAgICAgIHRocm93ICd0YXJnZXRJRCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgZG9tJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBjcmVhdGUgcGlja2VyIGNvbnRhaW5lciBkaXZcblxuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25qLXBpY2tlcicpOyAvLyBhZGQgdGhlIGNvbnRhaW5lciBjbGFzcyBuYW1lXG5cbiAgICB0aGlzLmJnID0gbmV3IEJhY2tncm91bmQoKTsgLy8gaW5pdCB0aGUgYmFja2Ryb3BcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmJnLmJ1aWxkKCkpOyAvLyBhcHBlbmQgdGhlIGJhY2tkcm9wIHRvIHRoZSBwaWNrZXIgY29udGFpbmVyXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNvbnRhaW5lcik7IC8vIGF0dGFjaCB0aGUgcGlja2VyIGNvbnRhaW5lciB0byB0aGUgZG9tXG4gIH0gLy8gc2hvd3MgdGhlIHBpY2tlclxuXG5cbiAgc2hvd1BpY2tlcigpIHtcbiAgICB0aGlzLmJnLnNob3coKTsgLy8gc2hvd3MgdGhlIGJhY2tkcm9wXG4gIH0gLy8gaGlkZXMgdGhlIHBpY2tlclxuXG5cbiAgaGlkZVBpY2tlcigpIHtcbiAgICB0aGlzLmJnLmhpZGUoKTsgLy8gaGlkZXMgdGhlIGJhY2tkcm9wXG4gIH1cblxufVxuXG5pZiAodHlwZW9mIGdsb2JhbCA9PT0gJ29iamVjdCcgJiYgIWdsb2JhbC5OSlBpY2tlcikge1xuICBnbG9iYWwuTkpQaWNrZXIgPSBOSlBpY2tlcjtcbn0iLCJleHBvcnQgKiBmcm9tICcuL2Jhc2UvYmFzZSc7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==