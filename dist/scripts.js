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

/***/ "./dist/tmp/ampm/ampm.js":
/*!*******************************!*\
  !*** ./dist/tmp/ampm/ampm.js ***!
  \*******************************/
/*! exports provided: PickerAMPM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerAMPM", function() { return PickerAMPM; });
/* harmony import */ var _base_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/base */ "./dist/tmp/base/base.js");

class PickerAMPM extends _base_base__WEBPACK_IMPORTED_MODULE_0__["Base"] {
  constructor(options) {
    super(options);
    this.config = options;
    this.currentSelection = null;
    this.currentValue = null;
  } // build


  build() {
    this.element = document.createElement('div');
    this.element.className = 'nj-ampm-container';
    super.createHeader({
      className: 'nj-section-header',
      innerText: 'AM/PM',
      element: this.element
    });
    this.createButtons();
    return this.element; // return the element to parent
  } // create am=pm button


  createButtons() {
    let buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'nj-ampm-wrapper';
    super.createItem({
      container: buttonWrapper,
      innerText: 'AM'
    });
    super.createItem({
      container: buttonWrapper,
      innerText: 'PM'
    });
    this.element.append(buttonWrapper);
  }

}

/***/ }),

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
  constructor() {
    return this.build();
  } // build


  build() {
    this.element = document.createElement('div');
    this.element.className = 'nj-overlay';
    return this.element; // return the element to parent
  }

}

/***/ }),

/***/ "./dist/tmp/base/base.js":
/*!*******************************!*\
  !*** ./dist/tmp/base/base.js ***!
  \*******************************/
/*! exports provided: Base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
class Base {
  constructor(options) {
    this.config = options;
    this.currentSelection = null;
    this.currentValue = null;
  } // create header 


  createHeader({
    className,
    innerText,
    element
  }) {
    let header = document.createElement('div');
    header.className = className;
    header.innerText = innerText;
    element.append(header);
  } // create each item 


  createItem({
    container,
    innerText
  }) {
    let item = document.createElement('div');
    item.className = 'nj-item';
    item.innerText = innerText;
    item.setAttribute('data', innerText.toString().toLowerCase());
    item.onclick = this.itemClick.bind(this, item);
    container.append(item);
  } // item clicked


  itemClick(item) {
    if (this.currentSelection) {
      // remove previous selection
      this.currentSelection.classList.remove('selected');
    }

    item.classList.add('selected');
    this.currentSelection = item;
    this.currentValue = item.getAttribute('data');
  } // sets the component value


  setValue() {} // gets the value of am-pm


  getValue() {
    return this.currentValue || '';
  } // resets the value


  resetValue() {
    if (this.currentSelection) {
      this.currentSelection.classList.remove('selected');
    }

    this.currentSelection = null;
    this.currentValue = null;
  }

}

/***/ }),

/***/ "./dist/tmp/button/buttons.js":
/*!************************************!*\
  !*** ./dist/tmp/button/buttons.js ***!
  \************************************/
/*! exports provided: ActionButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButton", function() { return ActionButton; });
/* harmony import */ var nanoevents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoevents */ "./node_modules/nanoevents/index.js");
/* harmony import */ var nanoevents__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nanoevents__WEBPACK_IMPORTED_MODULE_0__);

class ActionButton {
  constructor(options) {
    this.config = options;
    this.emitter = new nanoevents__WEBPACK_IMPORTED_MODULE_0___default.a();
  } // build


  build() {
    this.element = document.createElement('div');
    this.element.className = 'nj-action-container';
    this.createSaveButton();
    this.createClearButton();
    this.createCloseButton();
    return this.element; // return the element to parent
  } // create save button


  createSaveButton() {
    let save = document.createElement('div');
    save.className = 'nj-action-button nj-action-save';
    save.innerText = 'Save';

    save.onclick = () => {
      this.emitter.emit('save'); // emit plugin save event
    }; // attach click


    this.element.append(save);
  } // create close


  createClearButton() {
    let clear = document.createElement('div');
    clear.className = 'nj-action-button nj-action-clear';
    clear.innerText = 'Clear';

    clear.onclick = () => {
      this.emitter.emit('clear'); // emit plugin clear event
    };

    this.element.append(clear);
  } // create button


  createCloseButton() {
    let close = document.createElement('div');
    close.className = 'nj-action-button nj-action-close';
    close.innerText = 'Close';

    close.onclick = () => {
      this.emitter.emit('close'); // emit plugin close event
    };

    this.element.append(close);
  } // create an on method to mask emitter on


  on(name, value) {
    this.emitter.on(name, value);
  }

}

/***/ }),

/***/ "./dist/tmp/hour/hour.js":
/*!*******************************!*\
  !*** ./dist/tmp/hour/hour.js ***!
  \*******************************/
/*! exports provided: PickerHour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerHour", function() { return PickerHour; });
/* harmony import */ var _base_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/base */ "./dist/tmp/base/base.js");

class PickerHour extends _base_base__WEBPACK_IMPORTED_MODULE_0__["Base"] {
  constructor(options) {
    super(options);
    this.config = options;
    this.currentSelection = null;
    this.currentValue = null;
  } // build


  build() {
    this.element = document.createElement('div');
    this.element.className = 'nj-hours-container';
    super.createHeader({
      className: 'nj-section-header',
      innerText: 'Hours',
      element: this.element
    });
    this.createButtons();
    return this.element; // return the element to parent
  } // create am=pm button


  createButtons() {
    let buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'nj-hours-wrapper';
    let buttonLimit = this.config.format == '12' ? 12 : 23;
    let buttonStart = this.config.format == '12' ? 1 : 0;

    for (let i = buttonStart; i <= buttonLimit; i++) {
      super.createItem({
        container: buttonWrapper,
        innerText: i
      });
    }

    this.element.append(buttonWrapper);
  }

}

/***/ }),

/***/ "./dist/tmp/index.js":
/*!***************************!*\
  !*** ./dist/tmp/index.js ***!
  \***************************/
/*! exports provided: NJPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NJPicker", function() { return NJPicker; });
/* harmony import */ var _background_background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background/background */ "./dist/tmp/background/background.js");
/* harmony import */ var nanoevents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoevents */ "./node_modules/nanoevents/index.js");
/* harmony import */ var nanoevents__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nanoevents__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hour_hour__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hour/hour */ "./dist/tmp/hour/hour.js");
/* harmony import */ var _minutes_minute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minutes/minute */ "./dist/tmp/minutes/minute.js");
/* harmony import */ var _ampm_ampm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ampm/ampm */ "./dist/tmp/ampm/ampm.js");
/* harmony import */ var _button_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button/buttons */ "./dist/tmp/button/buttons.js");






class NJPicker {
  constructor(options = {}) {
    if (!options.targetEl && !options.targetID) {
      throw 'NJPicker requires a target element(targetEl) or target element ID(targetID)';
    } // merge options with default config


    this.config = Object.assign(this.defaultConfig, options); // checks for a valid target element

    this.checkTarget();
    this.emitter = new nanoevents__WEBPACK_IMPORTED_MODULE_1___default.a();
    this.build(); // build the picker
  } // plugin default config


  get defaultConfig() {
    return {
      id: Math.random().toString(36).substring(7),
      targetEl: null,
      targetID: null,
      clickOutsideToClose: true,
      format: '12'
    };
  } // check if the target element exist in the dom


  checkTarget() {
    if (this.config.targetEl) {
      // check for valid dom element
      if (this.config.targetEl.nodeType != Node.ELEMENT_NODE) {
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
  } // set the options for building the plugin


  build() {
    // attach the click to show picker
    this.targetElement.addEventListener('click', this.showPicker.bind(this)); // create picker wrapper div

    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('nj-picker');
    this.wrapper.setAttribute('id', this.config.id); // init the overlay

    this.overlay = new _background_background__WEBPACK_IMPORTED_MODULE_0__["Background"]();

    if (this.config.clickOutsideToClose) {
      // check if clickOutsideToClose is true
      this.overlay.addEventListener('click', this.hidePicker.bind(this));
    } // append the overlay to the picker wrapper


    this.wrapper.append(this.overlay); // create the container

    this.container = document.createElement('div');
    this.container.classList.add('nj-picker-container');
    this.buildHours();
    this.buildMinutes();
    this.buildAMPM(); // configure ampm container

    this.buildButtons(); // configure picker buttons
    // attach the picker container to the wrapper

    this.wrapper.append(this.container); // attach the picker wrapper to the dom

    document.body.append(this.wrapper);
    this.emitter.emit('ready'); // emit the plugin ready event
  } // shows the picker


  showPicker() {
    this.wrapper.classList.add('nj-picker-show');
    this.emitter.emit('show'); // emit plugin show event
  } // hides the picker


  hidePicker() {
    this.wrapper.classList.remove('nj-picker-show');
    this.emitter.emit('hide'); // emit the plugin hide event
  } // create buttons contianer


  buildButtons() {
    this.buttons = new _button_buttons__WEBPACK_IMPORTED_MODULE_5__["ActionButton"](this.config);
    this.buttons.on('save', () => {
      this.emitter.emit('save', this.getValue());
      this.hidePicker();
    });
    this.buttons.on('clear', () => {
      this.hours.resetValue(); // resets the hours

      this.minutes.resetValue(); // reset minutes

      this.ampm.resetValue(); // resets am-pm

      this.emitter.emit('clear');
    });
    this.buttons.on('close', () => {
      this.emitter.emit('close');
      this.hidePicker();
    });
    this.container.append(this.buttons.build(this.config));
  } // create hours contianer


  buildHours() {
    this.hours = new _hour_hour__WEBPACK_IMPORTED_MODULE_2__["PickerHour"](this.config);
    this.container.append(this.hours.build());
  } // create minutes contianer


  buildMinutes() {
    this.minutes = new _minutes_minute__WEBPACK_IMPORTED_MODULE_3__["PickerMinute"](this.config);
    this.container.append(this.minutes.build());
  } // create ampm contianer


  buildAMPM() {
    if (this.config.format == '12') {
      this.ampm = new _ampm_ampm__WEBPACK_IMPORTED_MODULE_4__["PickerAMPM"](this.config);
      this.container.append(this.ampm.build());
    }
  } // get the picker value


  getValue(key) {
    let result = {
      hours: this.hours.getValue(),
      minutes: this.minutes.getValue()
    };

    if (this.config.format == '12') {
      result.ampm = this.ampm.getValue();
      result.fullResult = `${result.hours}:${result.minutes} ${result.ampm}`;
    } else {
      result.fullResult = `${result.hours}:${result.minutes}`;
    }

    if (key) {
      return result[key];
    }

    return result || {};
  } // set picker value


  setValue() {} // create an on method to mask emitter on


  on(name, value) {
    this.emitter.on(name, value);
  }

}

if (typeof global === 'object' && !global.NJPicker) {
  global.NJPicker = NJPicker;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./dist/tmp/minutes/minute.js":
/*!************************************!*\
  !*** ./dist/tmp/minutes/minute.js ***!
  \************************************/
/*! exports provided: PickerMinute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerMinute", function() { return PickerMinute; });
/* harmony import */ var _base_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/base */ "./dist/tmp/base/base.js");

class PickerMinute extends _base_base__WEBPACK_IMPORTED_MODULE_0__["Base"] {
  constructor(options) {
    super(options);
    this.config = options;
    this.currentSelection = null;
    this.currentValue = null;
  } // build


  build() {
    this.element = document.createElement('div');
    this.element.className = 'nj-minutes-container';
    super.createHeader({
      className: 'nj-section-header',
      innerText: 'Minutes',
      element: this.element
    });
    this.createButtons();
    return this.element; // return the element to parent
  } // create am=pm button


  createButtons() {
    let buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'nj-minutes-wrapper';
    let minutes = [0, 15, 30, 45];

    for (let i = 0; i < minutes.length; i++) {
      super.createItem({
        container: buttonWrapper,
        innerText: i
      });
    }

    this.element.append(buttonWrapper);
  }

}

/***/ }),

/***/ "./node_modules/nanoevents/index.js":
/*!******************************************!*\
  !*** ./node_modules/nanoevents/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(
  /**
   * Interface for event subscription.
   *
   * @example
   * var NanoEvents = require('nanoevents')
   *
   * class Ticker {
   *   constructor() {
   *     this.emitter = new NanoEvents()
   *   }
   *   on() {
   *     return this.emitter.on.apply(this.events, arguments)
   *   }
   *   tick() {
   *     this.emitter.emit('tick')
   *   }
   * }
   *
   * @alias NanoEvents
   * @class
   */
  module.exports = function NanoEvents () {
    /**
     * Event names in keys and arrays with listeners in values.
     * @type {object}
     *
     * @example
     * Object.keys(ee.events)
     *
     * @alias NanoEvents#events
     */
    this.events = { }
  }
).prototype = {

  /**
   * Calls each of the listeners registered for a given event.
   *
   * @param {string} event The event name.
   * @param {...*} arguments The arguments for listeners.
   *
   * @return {undefined}
   *
   * @example
   * ee.emit('tick', tickType, tickDuration)
   *
   * @alias NanoEvents#emit
   * @method
   */
  emit: function emit (event) {
    var args = [].slice.call(arguments, 1)
    // Array.prototype.call() returns empty array if context is not array-like
    ;[].slice.call(this.events[event] || []).filter(function (i) {
      i.apply(null, args)
    })
  },

  /**
   * Add a listener for a given event.
   *
   * @param {string} event The event name.
   * @param {function} cb The listener function.
   *
   * @return {function} Unbind listener from event.
   *
   * @example
   * const unbind = ee.on('tick', (tickType, tickDuration) => {
   *   count += 1
   * })
   *
   * disable () {
   *   unbind()
   * }
   *
   * @alias NanoEvents#on
   * @method
   */
  on: function on (event, cb) {
    if ( true && typeof cb !== 'function') {
      throw new Error('Listener must be a function')
    }

    (this.events[event] = this.events[event] || []).push(cb)

    return function () {
      this.events[event] = this.events[event].filter(function (i) {
        return i !== cb
      })
    }.bind(this)
  }
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC90bXAvYW1wbS9hbXBtLmpzIiwid2VicGFjazovLy8uL2Rpc3QvdG1wL2JhY2tncm91bmQvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3RtcC9iYXNlL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC90bXAvYnV0dG9uL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC90bXAvaG91ci9ob3VyLmpzIiwid2VicGFjazovLy8uL2Rpc3QvdG1wL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rpc3QvdG1wL21pbnV0ZXMvbWludXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uYW5vZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLEtBQUs7QUFDbEI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGlzdC90bXAvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSAnLi4vYmFzZS9iYXNlJztcbmV4cG9ydCBjbGFzcyBQaWNrZXJBTVBNIGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLmNvbmZpZyA9IG9wdGlvbnM7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IG51bGw7XG4gIH0gLy8gYnVpbGRcblxuXG4gIGJ1aWxkKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnbmotYW1wbS1jb250YWluZXInO1xuICAgIHN1cGVyLmNyZWF0ZUhlYWRlcih7XG4gICAgICBjbGFzc05hbWU6ICduai1zZWN0aW9uLWhlYWRlcicsXG4gICAgICBpbm5lclRleHQ6ICdBTS9QTScsXG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRcbiAgICB9KTtcbiAgICB0aGlzLmNyZWF0ZUJ1dHRvbnMoKTtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50OyAvLyByZXR1cm4gdGhlIGVsZW1lbnQgdG8gcGFyZW50XG4gIH0gLy8gY3JlYXRlIGFtPXBtIGJ1dHRvblxuXG5cbiAgY3JlYXRlQnV0dG9ucygpIHtcbiAgICBsZXQgYnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbldyYXBwZXIuY2xhc3NOYW1lID0gJ25qLWFtcG0td3JhcHBlcic7XG4gICAgc3VwZXIuY3JlYXRlSXRlbSh7XG4gICAgICBjb250YWluZXI6IGJ1dHRvbldyYXBwZXIsXG4gICAgICBpbm5lclRleHQ6ICdBTSdcbiAgICB9KTtcbiAgICBzdXBlci5jcmVhdGVJdGVtKHtcbiAgICAgIGNvbnRhaW5lcjogYnV0dG9uV3JhcHBlcixcbiAgICAgIGlubmVyVGV4dDogJ1BNJ1xuICAgIH0pO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoYnV0dG9uV3JhcHBlcik7XG4gIH1cblxufSIsImV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGQoKTtcbiAgfSAvLyBidWlsZFxuXG5cbiAgYnVpbGQoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICduai1vdmVybGF5JztcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50OyAvLyByZXR1cm4gdGhlIGVsZW1lbnQgdG8gcGFyZW50XG4gIH1cblxufSIsImV4cG9ydCBjbGFzcyBCYXNlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuY29uZmlnID0gb3B0aW9ucztcbiAgICB0aGlzLmN1cnJlbnRTZWxlY3Rpb24gPSBudWxsO1xuICAgIHRoaXMuY3VycmVudFZhbHVlID0gbnVsbDtcbiAgfSAvLyBjcmVhdGUgaGVhZGVyIFxuXG5cbiAgY3JlYXRlSGVhZGVyKHtcbiAgICBjbGFzc05hbWUsXG4gICAgaW5uZXJUZXh0LFxuICAgIGVsZW1lbnRcbiAgfSkge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSBpbm5lclRleHQ7XG4gICAgZWxlbWVudC5hcHBlbmQoaGVhZGVyKTtcbiAgfSAvLyBjcmVhdGUgZWFjaCBpdGVtIFxuXG5cbiAgY3JlYXRlSXRlbSh7XG4gICAgY29udGFpbmVyLFxuICAgIGlubmVyVGV4dFxuICB9KSB7XG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtLmNsYXNzTmFtZSA9ICduai1pdGVtJztcbiAgICBpdGVtLmlubmVyVGV4dCA9IGlubmVyVGV4dDtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgnZGF0YScsIGlubmVyVGV4dC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpO1xuICAgIGl0ZW0ub25jbGljayA9IHRoaXMuaXRlbUNsaWNrLmJpbmQodGhpcywgaXRlbSk7XG4gICAgY29udGFpbmVyLmFwcGVuZChpdGVtKTtcbiAgfSAvLyBpdGVtIGNsaWNrZWRcblxuXG4gIGl0ZW1DbGljayhpdGVtKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFNlbGVjdGlvbikge1xuICAgICAgLy8gcmVtb3ZlIHByZXZpb3VzIHNlbGVjdGlvblxuICAgICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIHRoaXMuY3VycmVudFNlbGVjdGlvbiA9IGl0ZW07XG4gICAgdGhpcy5jdXJyZW50VmFsdWUgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICB9IC8vIHNldHMgdGhlIGNvbXBvbmVudCB2YWx1ZVxuXG5cbiAgc2V0VmFsdWUoKSB7fSAvLyBnZXRzIHRoZSB2YWx1ZSBvZiBhbS1wbVxuXG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlIHx8ICcnO1xuICB9IC8vIHJlc2V0cyB0aGUgdmFsdWVcblxuXG4gIHJlc2V0VmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFNlbGVjdGlvbikge1xuICAgICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IG51bGw7XG4gIH1cblxufSIsImltcG9ydCBOYW5vRXZlbnRzIGZyb20gJ25hbm9ldmVudHMnO1xuZXhwb3J0IGNsYXNzIEFjdGlvbkJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmNvbmZpZyA9IG9wdGlvbnM7XG4gICAgdGhpcy5lbWl0dGVyID0gbmV3IE5hbm9FdmVudHMoKTtcbiAgfSAvLyBidWlsZFxuXG5cbiAgYnVpbGQoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICduai1hY3Rpb24tY29udGFpbmVyJztcbiAgICB0aGlzLmNyZWF0ZVNhdmVCdXR0b24oKTtcbiAgICB0aGlzLmNyZWF0ZUNsZWFyQnV0dG9uKCk7XG4gICAgdGhpcy5jcmVhdGVDbG9zZUJ1dHRvbigpO1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7IC8vIHJldHVybiB0aGUgZWxlbWVudCB0byBwYXJlbnRcbiAgfSAvLyBjcmVhdGUgc2F2ZSBidXR0b25cblxuXG4gIGNyZWF0ZVNhdmVCdXR0b24oKSB7XG4gICAgbGV0IHNhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYXZlLmNsYXNzTmFtZSA9ICduai1hY3Rpb24tYnV0dG9uIG5qLWFjdGlvbi1zYXZlJztcbiAgICBzYXZlLmlubmVyVGV4dCA9ICdTYXZlJztcblxuICAgIHNhdmUub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdzYXZlJyk7IC8vIGVtaXQgcGx1Z2luIHNhdmUgZXZlbnRcbiAgICB9OyAvLyBhdHRhY2ggY2xpY2tcblxuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZChzYXZlKTtcbiAgfSAvLyBjcmVhdGUgY2xvc2VcblxuXG4gIGNyZWF0ZUNsZWFyQnV0dG9uKCkge1xuICAgIGxldCBjbGVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNsZWFyLmNsYXNzTmFtZSA9ICduai1hY3Rpb24tYnV0dG9uIG5qLWFjdGlvbi1jbGVhcic7XG4gICAgY2xlYXIuaW5uZXJUZXh0ID0gJ0NsZWFyJztcblxuICAgIGNsZWFyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnY2xlYXInKTsgLy8gZW1pdCBwbHVnaW4gY2xlYXIgZXZlbnRcbiAgICB9O1xuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZChjbGVhcik7XG4gIH0gLy8gY3JlYXRlIGJ1dHRvblxuXG5cbiAgY3JlYXRlQ2xvc2VCdXR0b24oKSB7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2xvc2UuY2xhc3NOYW1lID0gJ25qLWFjdGlvbi1idXR0b24gbmotYWN0aW9uLWNsb3NlJztcbiAgICBjbG9zZS5pbm5lclRleHQgPSAnQ2xvc2UnO1xuXG4gICAgY2xvc2Uub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdjbG9zZScpOyAvLyBlbWl0IHBsdWdpbiBjbG9zZSBldmVudFxuICAgIH07XG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKGNsb3NlKTtcbiAgfSAvLyBjcmVhdGUgYW4gb24gbWV0aG9kIHRvIG1hc2sgZW1pdHRlciBvblxuXG5cbiAgb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLmVtaXR0ZXIub24obmFtZSwgdmFsdWUpO1xuICB9XG5cbn0iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSAnLi4vYmFzZS9iYXNlJztcbmV4cG9ydCBjbGFzcyBQaWNrZXJIb3VyIGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLmNvbmZpZyA9IG9wdGlvbnM7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IG51bGw7XG4gIH0gLy8gYnVpbGRcblxuXG4gIGJ1aWxkKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnbmotaG91cnMtY29udGFpbmVyJztcbiAgICBzdXBlci5jcmVhdGVIZWFkZXIoe1xuICAgICAgY2xhc3NOYW1lOiAnbmotc2VjdGlvbi1oZWFkZXInLFxuICAgICAgaW5uZXJUZXh0OiAnSG91cnMnLFxuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50XG4gICAgfSk7XG4gICAgdGhpcy5jcmVhdGVCdXR0b25zKCk7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDsgLy8gcmV0dXJuIHRoZSBlbGVtZW50IHRvIHBhcmVudFxuICB9IC8vIGNyZWF0ZSBhbT1wbSBidXR0b25cblxuXG4gIGNyZWF0ZUJ1dHRvbnMoKSB7XG4gICAgbGV0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25XcmFwcGVyLmNsYXNzTmFtZSA9ICduai1ob3Vycy13cmFwcGVyJztcbiAgICBsZXQgYnV0dG9uTGltaXQgPSB0aGlzLmNvbmZpZy5mb3JtYXQgPT0gJzEyJyA/IDEyIDogMjM7XG4gICAgbGV0IGJ1dHRvblN0YXJ0ID0gdGhpcy5jb25maWcuZm9ybWF0ID09ICcxMicgPyAxIDogMDtcblxuICAgIGZvciAobGV0IGkgPSBidXR0b25TdGFydDsgaSA8PSBidXR0b25MaW1pdDsgaSsrKSB7XG4gICAgICBzdXBlci5jcmVhdGVJdGVtKHtcbiAgICAgICAgY29udGFpbmVyOiBidXR0b25XcmFwcGVyLFxuICAgICAgICBpbm5lclRleHQ6IGlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoYnV0dG9uV3JhcHBlcik7XG4gIH1cblxufSIsImltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tICcuL2JhY2tncm91bmQvYmFja2dyb3VuZCc7XG5pbXBvcnQgTmFub0V2ZW50cyBmcm9tICduYW5vZXZlbnRzJztcbmltcG9ydCB7IFBpY2tlckhvdXIgYXMgaG91cnMgfSBmcm9tICcuL2hvdXIvaG91cic7XG5pbXBvcnQgeyBQaWNrZXJNaW51dGUgYXMgbWludXRlcyB9IGZyb20gJy4vbWludXRlcy9taW51dGUnO1xuaW1wb3J0IHsgUGlja2VyQU1QTSBhcyBhbXBtIH0gZnJvbSAnLi9hbXBtL2FtcG0nO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uIGFzIGJ1dHRvbnMgfSBmcm9tICcuL2J1dHRvbi9idXR0b25zJztcbmV4cG9ydCBjbGFzcyBOSlBpY2tlciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghb3B0aW9ucy50YXJnZXRFbCAmJiAhb3B0aW9ucy50YXJnZXRJRCkge1xuICAgICAgdGhyb3cgJ05KUGlja2VyIHJlcXVpcmVzIGEgdGFyZ2V0IGVsZW1lbnQodGFyZ2V0RWwpIG9yIHRhcmdldCBlbGVtZW50IElEKHRhcmdldElEKSc7XG4gICAgfSAvLyBtZXJnZSBvcHRpb25zIHdpdGggZGVmYXVsdCBjb25maWdcblxuXG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHRoaXMuZGVmYXVsdENvbmZpZywgb3B0aW9ucyk7IC8vIGNoZWNrcyBmb3IgYSB2YWxpZCB0YXJnZXQgZWxlbWVudFxuXG4gICAgdGhpcy5jaGVja1RhcmdldCgpO1xuICAgIHRoaXMuZW1pdHRlciA9IG5ldyBOYW5vRXZlbnRzKCk7XG4gICAgdGhpcy5idWlsZCgpOyAvLyBidWlsZCB0aGUgcGlja2VyXG4gIH0gLy8gcGx1Z2luIGRlZmF1bHQgY29uZmlnXG5cblxuICBnZXQgZGVmYXVsdENvbmZpZygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KSxcbiAgICAgIHRhcmdldEVsOiBudWxsLFxuICAgICAgdGFyZ2V0SUQ6IG51bGwsXG4gICAgICBjbGlja091dHNpZGVUb0Nsb3NlOiB0cnVlLFxuICAgICAgZm9ybWF0OiAnMTInXG4gICAgfTtcbiAgfSAvLyBjaGVjayBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgZXhpc3QgaW4gdGhlIGRvbVxuXG5cbiAgY2hlY2tUYXJnZXQoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnRhcmdldEVsKSB7XG4gICAgICAvLyBjaGVjayBmb3IgdmFsaWQgZG9tIGVsZW1lbnRcbiAgICAgIGlmICh0aGlzLmNvbmZpZy50YXJnZXRFbC5ub2RlVHlwZSAhPSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB0aHJvdyAndGFyZ2V0RWwgZG9lcyBub3QgZXhpc3QgaW4gdGhlIGRvbSc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudGFyZ2V0RWxlbWVudCA9IHRoaXMuY29uZmlnLnRhcmdldEVsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcudGFyZ2V0SUQpIHtcbiAgICAgIC8vIGNoZWNrIGZvciB2YWxpZCBkb20gZWxlbWVudCB3aXRoIElEIHRhcmdldElEXG4gICAgICB0aGlzLnRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmNvbmZpZy50YXJnZXRJRH1gKTtcblxuICAgICAgaWYgKCF0aGlzLnRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgdGhyb3cgJ3RhcmdldElEIGRvZXMgbm90IGV4aXN0IGluIHRoZSBkb20nO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBzZXQgdGhlIG9wdGlvbnMgZm9yIGJ1aWxkaW5nIHRoZSBwbHVnaW5cblxuXG4gIGJ1aWxkKCkge1xuICAgIC8vIGF0dGFjaCB0aGUgY2xpY2sgdG8gc2hvdyBwaWNrZXJcbiAgICB0aGlzLnRhcmdldEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dQaWNrZXIuYmluZCh0aGlzKSk7IC8vIGNyZWF0ZSBwaWNrZXIgd3JhcHBlciBkaXZcblxuICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCduai1waWNrZXInKTtcbiAgICB0aGlzLndyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuY29uZmlnLmlkKTsgLy8gaW5pdCB0aGUgb3ZlcmxheVxuXG4gICAgdGhpcy5vdmVybGF5ID0gbmV3IEJhY2tncm91bmQoKTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5jbGlja091dHNpZGVUb0Nsb3NlKSB7XG4gICAgICAvLyBjaGVjayBpZiBjbGlja091dHNpZGVUb0Nsb3NlIGlzIHRydWVcbiAgICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZVBpY2tlci5iaW5kKHRoaXMpKTtcbiAgICB9IC8vIGFwcGVuZCB0aGUgb3ZlcmxheSB0byB0aGUgcGlja2VyIHdyYXBwZXJcblxuXG4gICAgdGhpcy53cmFwcGVyLmFwcGVuZCh0aGlzLm92ZXJsYXkpOyAvLyBjcmVhdGUgdGhlIGNvbnRhaW5lclxuXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduai1waWNrZXItY29udGFpbmVyJyk7XG4gICAgdGhpcy5idWlsZEhvdXJzKCk7XG4gICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcbiAgICB0aGlzLmJ1aWxkQU1QTSgpOyAvLyBjb25maWd1cmUgYW1wbSBjb250YWluZXJcblxuICAgIHRoaXMuYnVpbGRCdXR0b25zKCk7IC8vIGNvbmZpZ3VyZSBwaWNrZXIgYnV0dG9uc1xuICAgIC8vIGF0dGFjaCB0aGUgcGlja2VyIGNvbnRhaW5lciB0byB0aGUgd3JhcHBlclxuXG4gICAgdGhpcy53cmFwcGVyLmFwcGVuZCh0aGlzLmNvbnRhaW5lcik7IC8vIGF0dGFjaCB0aGUgcGlja2VyIHdyYXBwZXIgdG8gdGhlIGRvbVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy53cmFwcGVyKTtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCgncmVhZHknKTsgLy8gZW1pdCB0aGUgcGx1Z2luIHJlYWR5IGV2ZW50XG4gIH0gLy8gc2hvd3MgdGhlIHBpY2tlclxuXG5cbiAgc2hvd1BpY2tlcigpIHtcbiAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbmotcGlja2VyLXNob3cnKTtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnc2hvdycpOyAvLyBlbWl0IHBsdWdpbiBzaG93IGV2ZW50XG4gIH0gLy8gaGlkZXMgdGhlIHBpY2tlclxuXG5cbiAgaGlkZVBpY2tlcigpIHtcbiAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnbmotcGlja2VyLXNob3cnKTtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnaGlkZScpOyAvLyBlbWl0IHRoZSBwbHVnaW4gaGlkZSBldmVudFxuICB9IC8vIGNyZWF0ZSBidXR0b25zIGNvbnRpYW5lclxuXG5cbiAgYnVpbGRCdXR0b25zKCkge1xuICAgIHRoaXMuYnV0dG9ucyA9IG5ldyBidXR0b25zKHRoaXMuY29uZmlnKTtcbiAgICB0aGlzLmJ1dHRvbnMub24oJ3NhdmUnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnc2F2ZScsIHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICB0aGlzLmhpZGVQaWNrZXIoKTtcbiAgICB9KTtcbiAgICB0aGlzLmJ1dHRvbnMub24oJ2NsZWFyJywgKCkgPT4ge1xuICAgICAgdGhpcy5ob3Vycy5yZXNldFZhbHVlKCk7IC8vIHJlc2V0cyB0aGUgaG91cnNcblxuICAgICAgdGhpcy5taW51dGVzLnJlc2V0VmFsdWUoKTsgLy8gcmVzZXQgbWludXRlc1xuXG4gICAgICB0aGlzLmFtcG0ucmVzZXRWYWx1ZSgpOyAvLyByZXNldHMgYW0tcG1cblxuICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoJ2NsZWFyJyk7XG4gICAgfSk7XG4gICAgdGhpcy5idXR0b25zLm9uKCdjbG9zZScsICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdjbG9zZScpO1xuICAgICAgdGhpcy5oaWRlUGlja2VyKCk7XG4gICAgfSk7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuYnV0dG9ucy5idWlsZCh0aGlzLmNvbmZpZykpO1xuICB9IC8vIGNyZWF0ZSBob3VycyBjb250aWFuZXJcblxuXG4gIGJ1aWxkSG91cnMoKSB7XG4gICAgdGhpcy5ob3VycyA9IG5ldyBob3Vycyh0aGlzLmNvbmZpZyk7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuaG91cnMuYnVpbGQoKSk7XG4gIH0gLy8gY3JlYXRlIG1pbnV0ZXMgY29udGlhbmVyXG5cblxuICBidWlsZE1pbnV0ZXMoKSB7XG4gICAgdGhpcy5taW51dGVzID0gbmV3IG1pbnV0ZXModGhpcy5jb25maWcpO1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLm1pbnV0ZXMuYnVpbGQoKSk7XG4gIH0gLy8gY3JlYXRlIGFtcG0gY29udGlhbmVyXG5cblxuICBidWlsZEFNUE0oKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmZvcm1hdCA9PSAnMTInKSB7XG4gICAgICB0aGlzLmFtcG0gPSBuZXcgYW1wbSh0aGlzLmNvbmZpZyk7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5hbXBtLmJ1aWxkKCkpO1xuICAgIH1cbiAgfSAvLyBnZXQgdGhlIHBpY2tlciB2YWx1ZVxuXG5cbiAgZ2V0VmFsdWUoa2V5KSB7XG4gICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgIGhvdXJzOiB0aGlzLmhvdXJzLmdldFZhbHVlKCksXG4gICAgICBtaW51dGVzOiB0aGlzLm1pbnV0ZXMuZ2V0VmFsdWUoKVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5jb25maWcuZm9ybWF0ID09ICcxMicpIHtcbiAgICAgIHJlc3VsdC5hbXBtID0gdGhpcy5hbXBtLmdldFZhbHVlKCk7XG4gICAgICByZXN1bHQuZnVsbFJlc3VsdCA9IGAke3Jlc3VsdC5ob3Vyc306JHtyZXN1bHQubWludXRlc30gJHtyZXN1bHQuYW1wbX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuZnVsbFJlc3VsdCA9IGAke3Jlc3VsdC5ob3Vyc306JHtyZXN1bHQubWludXRlc31gO1xuICAgIH1cblxuICAgIGlmIChrZXkpIHtcbiAgICAgIHJldHVybiByZXN1bHRba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0IHx8IHt9O1xuICB9IC8vIHNldCBwaWNrZXIgdmFsdWVcblxuXG4gIHNldFZhbHVlKCkge30gLy8gY3JlYXRlIGFuIG9uIG1ldGhvZCB0byBtYXNrIGVtaXR0ZXIgb25cblxuXG4gIG9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5lbWl0dGVyLm9uKG5hbWUsIHZhbHVlKTtcbiAgfVxuXG59XG5cbmlmICh0eXBlb2YgZ2xvYmFsID09PSAnb2JqZWN0JyAmJiAhZ2xvYmFsLk5KUGlja2VyKSB7XG4gIGdsb2JhbC5OSlBpY2tlciA9IE5KUGlja2VyO1xufSIsImltcG9ydCB7IEJhc2UgfSBmcm9tICcuLi9iYXNlL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIFBpY2tlck1pbnV0ZSBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5jb25maWcgPSBvcHRpb25zO1xuICAgIHRoaXMuY3VycmVudFNlbGVjdGlvbiA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUgPSBudWxsO1xuICB9IC8vIGJ1aWxkXG5cblxuICBidWlsZCgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ25qLW1pbnV0ZXMtY29udGFpbmVyJztcbiAgICBzdXBlci5jcmVhdGVIZWFkZXIoe1xuICAgICAgY2xhc3NOYW1lOiAnbmotc2VjdGlvbi1oZWFkZXInLFxuICAgICAgaW5uZXJUZXh0OiAnTWludXRlcycsXG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRcbiAgICB9KTtcbiAgICB0aGlzLmNyZWF0ZUJ1dHRvbnMoKTtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50OyAvLyByZXR1cm4gdGhlIGVsZW1lbnQgdG8gcGFyZW50XG4gIH0gLy8gY3JlYXRlIGFtPXBtIGJ1dHRvblxuXG5cbiAgY3JlYXRlQnV0dG9ucygpIHtcbiAgICBsZXQgYnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbldyYXBwZXIuY2xhc3NOYW1lID0gJ25qLW1pbnV0ZXMtd3JhcHBlcic7XG4gICAgbGV0IG1pbnV0ZXMgPSBbMCwgMTUsIDMwLCA0NV07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pbnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN1cGVyLmNyZWF0ZUl0ZW0oe1xuICAgICAgICBjb250YWluZXI6IGJ1dHRvbldyYXBwZXIsXG4gICAgICAgIGlubmVyVGV4dDogaVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZChidXR0b25XcmFwcGVyKTtcbiAgfVxuXG59IiwiKFxyXG4gIC8qKlxyXG4gICAqIEludGVyZmFjZSBmb3IgZXZlbnQgc3Vic2NyaXB0aW9uLlxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiB2YXIgTmFub0V2ZW50cyA9IHJlcXVpcmUoJ25hbm9ldmVudHMnKVxyXG4gICAqXHJcbiAgICogY2xhc3MgVGlja2VyIHtcclxuICAgKiAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAqICAgICB0aGlzLmVtaXR0ZXIgPSBuZXcgTmFub0V2ZW50cygpXHJcbiAgICogICB9XHJcbiAgICogICBvbigpIHtcclxuICAgKiAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5vbi5hcHBseSh0aGlzLmV2ZW50cywgYXJndW1lbnRzKVxyXG4gICAqICAgfVxyXG4gICAqICAgdGljaygpIHtcclxuICAgKiAgICAgdGhpcy5lbWl0dGVyLmVtaXQoJ3RpY2snKVxyXG4gICAqICAgfVxyXG4gICAqIH1cclxuICAgKlxyXG4gICAqIEBhbGlhcyBOYW5vRXZlbnRzXHJcbiAgICogQGNsYXNzXHJcbiAgICovXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBOYW5vRXZlbnRzICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogRXZlbnQgbmFtZXMgaW4ga2V5cyBhbmQgYXJyYXlzIHdpdGggbGlzdGVuZXJzIGluIHZhbHVlcy5cclxuICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgKlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIE9iamVjdC5rZXlzKGVlLmV2ZW50cylcclxuICAgICAqXHJcbiAgICAgKiBAYWxpYXMgTmFub0V2ZW50cyNldmVudHNcclxuICAgICAqL1xyXG4gICAgdGhpcy5ldmVudHMgPSB7IH1cclxuICB9XHJcbikucHJvdG90eXBlID0ge1xyXG5cclxuICAvKipcclxuICAgKiBDYWxscyBlYWNoIG9mIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cclxuICAgKiBAcGFyYW0gey4uLip9IGFyZ3VtZW50cyBUaGUgYXJndW1lbnRzIGZvciBsaXN0ZW5lcnMuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9XHJcbiAgICpcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIGVlLmVtaXQoJ3RpY2snLCB0aWNrVHlwZSwgdGlja0R1cmF0aW9uKVxyXG4gICAqXHJcbiAgICogQGFsaWFzIE5hbm9FdmVudHMjZW1pdFxyXG4gICAqIEBtZXRob2RcclxuICAgKi9cclxuICBlbWl0OiBmdW5jdGlvbiBlbWl0IChldmVudCkge1xyXG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcclxuICAgIC8vIEFycmF5LnByb3RvdHlwZS5jYWxsKCkgcmV0dXJucyBlbXB0eSBhcnJheSBpZiBjb250ZXh0IGlzIG5vdCBhcnJheS1saWtlXHJcbiAgICA7W10uc2xpY2UuY2FsbCh0aGlzLmV2ZW50c1tldmVudF0gfHwgW10pLmZpbHRlcihmdW5jdGlvbiAoaSkge1xyXG4gICAgICBpLmFwcGx5KG51bGwsIGFyZ3MpXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBhIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBVbmJpbmQgbGlzdGVuZXIgZnJvbSBldmVudC5cclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogY29uc3QgdW5iaW5kID0gZWUub24oJ3RpY2snLCAodGlja1R5cGUsIHRpY2tEdXJhdGlvbikgPT4ge1xyXG4gICAqICAgY291bnQgKz0gMVxyXG4gICAqIH0pXHJcbiAgICpcclxuICAgKiBkaXNhYmxlICgpIHtcclxuICAgKiAgIHVuYmluZCgpXHJcbiAgICogfVxyXG4gICAqXHJcbiAgICogQGFsaWFzIE5hbm9FdmVudHMjb25cclxuICAgKiBAbWV0aG9kXHJcbiAgICovXHJcbiAgb246IGZ1bmN0aW9uIG9uIChldmVudCwgY2IpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpXHJcbiAgICB9XHJcblxyXG4gICAgKHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XSB8fCBbXSkucHVzaChjYilcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB0aGlzLmV2ZW50c1tldmVudF0uZmlsdGVyKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgcmV0dXJuIGkgIT09IGNiXHJcbiAgICAgIH0pXHJcbiAgICB9LmJpbmQodGhpcylcclxuICB9XHJcbn1cclxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==