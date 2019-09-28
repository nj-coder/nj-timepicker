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
    super.build({
      type: 'ampm',
      headerText: 'AM/PM'
    });
    this.createButtons();
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
  } // build contanier


  build({
    type,
    headerText
  }) {
    this.element = document.createElement('div');
    this.element.className = `nj-${type}-container`;
    this.createHeader({
      className: 'nj-section-header',
      innerText: headerText || type,
      element: this.element
    });
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


  setValue(value) {
    if (value) {
      let el = this.element.querySelector(`div[data="${value}"]`);

      if (el) {
        this.itemClick(el);
      }
    }
  } // gets the value of the component


  getValue() {
    return this.currentValue;
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
    super.build({
      type: 'hours'
    });
    this.createButtons();
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
    this.targetElement.addEventListener('click', this.show.bind(this)); // create picker wrapper div

    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('nj-picker');
    this.wrapper.setAttribute('id', this.config.id); // init the overlay

    this.overlay = new _background_background__WEBPACK_IMPORTED_MODULE_0__["Background"]();

    if (this.config.clickOutsideToClose) {
      // check if clickOutsideToClose is true
      this.overlay.addEventListener('click', this.hide.bind(this));
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


  show() {
    this.wrapper.classList.add('nj-picker-show');
    this.emitter.emit('show'); // emit plugin show event
  } // hides the picker


  hide() {
    this.wrapper.classList.remove('nj-picker-show');
    this.emitter.emit('hide'); // emit the plugin hide event
  } // create buttons contianer


  buildButtons() {
    this.buttons = new _button_buttons__WEBPACK_IMPORTED_MODULE_5__["ActionButton"](this.config);
    this.buttons.on('save', () => {
      this.emitter.emit('save', this.getValue());
      this.hide();
    });
    this.buttons.on('clear', () => {
      this.hours.resetValue(); // resets the hours

      this.minutes.resetValue(); // reset minutes

      this.ampm.resetValue(); // resets am-pm

      this.emitter.emit('clear');
    });
    this.buttons.on('close', () => {
      this.emitter.emit('close');
      this.hide();
    });
    this.container.append(this.buttons.build(this.config));
  } // create hours contianer


  buildHours() {
    this.hours = new _hour_hour__WEBPACK_IMPORTED_MODULE_2__["PickerHour"](this.config);
    this.container.append(this.hours.element);
  } // create minutes contianer


  buildMinutes() {
    this.minutes = new _minutes_minute__WEBPACK_IMPORTED_MODULE_3__["PickerMinute"](this.config);
    this.container.append(this.minutes.element);
  } // create ampm contianer


  buildAMPM() {
    if (this.config.format == '12') {
      this.ampm = new _ampm_ampm__WEBPACK_IMPORTED_MODULE_4__["PickerAMPM"](this.config);
      this.container.append(this.ampm.element);
    }
  } // get the picker value


  getValue(key) {
    let result = {
      hours: this.hours.getValue(),
      minutes: this.minutes.getValue(),
      fullResult: undefined
    };

    if (this.config.format == '12') {
      result.ampm = this.ampm.getValue();
      if (result.hours && result.minutes && result.ampm) result.fullResult = `${result.hours}:${result.minutes} ${result.ampm}`;
    } else {
      if (result.hours && result.minutes) result.fullResult = `${result.hours}:${result.minutes}`;
    }

    if (key) {
      return result[key];
    }

    return result || {};
  } // set picker value


  setValue(input) {
    if (typeof input == 'string') {
      // hh:mm am
      try {
        let split_1 = input.split(':');

        if (typeof split_1[0] != 'undefined' && split_1[0] != '') {
          this.hours.setValue(split_1[0]);
        }

        if (typeof split_1[1] != 'undefined' && split_1[1] != '') {
          let split_2 = split_1[1].split(' ');
          this.minutes.setValue(split_2[0]);
          this.ampm.setValue(split_2[1]);
        }
      } catch (e) {//
      }
    } else if (typeof input == 'object') {
      if (input.key && typeof input.value != 'undefined' && this[input.key]) {
        this[input.key].setValue(input.value.toString().toLowerCase());
      }
    }
  } // create an on method to mask emitter on


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
    super.build({
      type: 'minutes'
    });
    this.createButtons();
  } // create am=pm button


  createButtons() {
    let buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'nj-minutes-wrapper';
    let minutes = [0, 15, 30, 45];

    for (let i = 0; i < minutes.length; i++) {
      super.createItem({
        container: buttonWrapper,
        innerText: minutes[i]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC90bXAvYW1wbS9hbXBtLmpzIiwid2VicGFjazovLy8uL2Rpc3QvdG1wL2JhY2tncm91bmQvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3RtcC9iYXNlL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC90bXAvYnV0dG9uL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC90bXAvaG91ci9ob3VyLmpzIiwid2VicGFjazovLy8uL2Rpc3QvdG1wL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rpc3QvdG1wL21pbnV0ZXMvbWludXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uYW5vZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBb0M7QUFDN0IseUJBQXlCLCtDQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsQzs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUEsQzs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxtQ0FBbUMsS0FBSztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSx1REFBdUQsTUFBTTs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEM7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUFBO0FBQUE7QUFBQTtBQUFvQztBQUM3QjtBQUNQO0FBQ0E7QUFDQSx1QkFBdUIsaURBQVU7QUFDakMsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDLE1BQU07OztBQUdOO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakM7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQztBQUNqQzs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQSxDOzs7Ozs7Ozs7Ozs7QUM5REE7QUFBQTtBQUFBO0FBQW9DO0FBQzdCLHlCQUF5QiwrQ0FBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLGtCQUFrQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQSxDOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFEO0FBQ2pCO0FBQ2M7QUFDUztBQUNWO0FBQ1U7QUFDcEQ7QUFDUCwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLEtBQUs7OztBQUdMLDZEQUE2RDs7QUFFN0Q7QUFDQSx1QkFBdUIsaURBQVU7QUFDakMsaUJBQWlCO0FBQ2pCLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzREFBc0QscUJBQXFCOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSx1RUFBdUU7O0FBRXZFO0FBQ0E7QUFDQSxvREFBb0Q7O0FBRXBELHVCQUF1QixpRUFBVTs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0wsc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckIsd0JBQXdCO0FBQ3hCOztBQUVBLHdDQUF3Qzs7QUFFeEM7QUFDQSwrQkFBK0I7QUFDL0IsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLEdBQUc7OztBQUdIO0FBQ0EsdUJBQXVCLDREQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDhCQUE4Qjs7QUFFOUIsZ0NBQWdDOztBQUVoQyw2QkFBNkI7O0FBRTdCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7OztBQUdIO0FBQ0EscUJBQXFCLHFEQUFLO0FBQzFCO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQSx1QkFBdUIsNERBQU87QUFDOUI7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFJO0FBQzFCO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdGQUFnRixhQUFhLEdBQUcsZUFBZSxHQUFHLFlBQVk7QUFDOUgsS0FBSztBQUNMLGlFQUFpRSxhQUFhLEdBQUcsZUFBZTtBQUNoRzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxZQUFZO0FBQ25CO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7O0FDbk1BO0FBQUE7QUFBQTtBQUFvQztBQUM3QiwyQkFBMkIsK0NBQUk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBLEM7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLEtBQUs7QUFDbEI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGlzdC90bXAvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSAnLi4vYmFzZS9iYXNlJztcbmV4cG9ydCBjbGFzcyBQaWNrZXJBTVBNIGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLmNvbmZpZyA9IG9wdGlvbnM7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IG51bGw7XG4gICAgc3VwZXIuYnVpbGQoe1xuICAgICAgdHlwZTogJ2FtcG0nLFxuICAgICAgaGVhZGVyVGV4dDogJ0FNL1BNJ1xuICAgIH0pO1xuICAgIHRoaXMuY3JlYXRlQnV0dG9ucygpO1xuICB9IC8vIGNyZWF0ZSBhbT1wbSBidXR0b25cblxuXG4gIGNyZWF0ZUJ1dHRvbnMoKSB7XG4gICAgbGV0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25XcmFwcGVyLmNsYXNzTmFtZSA9ICduai1hbXBtLXdyYXBwZXInO1xuICAgIHN1cGVyLmNyZWF0ZUl0ZW0oe1xuICAgICAgY29udGFpbmVyOiBidXR0b25XcmFwcGVyLFxuICAgICAgaW5uZXJUZXh0OiAnQU0nXG4gICAgfSk7XG4gICAgc3VwZXIuY3JlYXRlSXRlbSh7XG4gICAgICBjb250YWluZXI6IGJ1dHRvbldyYXBwZXIsXG4gICAgICBpbm5lclRleHQ6ICdQTSdcbiAgICB9KTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKGJ1dHRvbldyYXBwZXIpO1xuICB9XG5cbn0iLCJleHBvcnQgY2xhc3MgQmFja2dyb3VuZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkKCk7XG4gIH0gLy8gYnVpbGRcblxuXG4gIGJ1aWxkKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnbmotb3ZlcmxheSc7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDsgLy8gcmV0dXJuIHRoZSBlbGVtZW50IHRvIHBhcmVudFxuICB9XG5cbn0iLCJleHBvcnQgY2xhc3MgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmNvbmZpZyA9IG9wdGlvbnM7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IG51bGw7XG4gIH0gLy8gYnVpbGQgY29udGFuaWVyXG5cblxuICBidWlsZCh7XG4gICAgdHlwZSxcbiAgICBoZWFkZXJUZXh0XG4gIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gYG5qLSR7dHlwZX0tY29udGFpbmVyYDtcbiAgICB0aGlzLmNyZWF0ZUhlYWRlcih7XG4gICAgICBjbGFzc05hbWU6ICduai1zZWN0aW9uLWhlYWRlcicsXG4gICAgICBpbm5lclRleHQ6IGhlYWRlclRleHQgfHwgdHlwZSxcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudFxuICAgIH0pO1xuICB9IC8vIGNyZWF0ZSBoZWFkZXIgXG5cblxuICBjcmVhdGVIZWFkZXIoe1xuICAgIGNsYXNzTmFtZSxcbiAgICBpbm5lclRleHQsXG4gICAgZWxlbWVudFxuICB9KSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IGlubmVyVGV4dDtcbiAgICBlbGVtZW50LmFwcGVuZChoZWFkZXIpO1xuICB9IC8vIGNyZWF0ZSBlYWNoIGl0ZW0gXG5cblxuICBjcmVhdGVJdGVtKHtcbiAgICBjb250YWluZXIsXG4gICAgaW5uZXJUZXh0XG4gIH0pIHtcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0uY2xhc3NOYW1lID0gJ25qLWl0ZW0nO1xuICAgIGl0ZW0uaW5uZXJUZXh0ID0gaW5uZXJUZXh0O1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhJywgaW5uZXJUZXh0LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XG4gICAgaXRlbS5vbmNsaWNrID0gdGhpcy5pdGVtQ2xpY2suYmluZCh0aGlzLCBpdGVtKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGl0ZW0pO1xuICB9IC8vIGl0ZW0gY2xpY2tlZFxuXG5cbiAgaXRlbUNsaWNrKGl0ZW0pIHtcbiAgICBpZiAodGhpcy5jdXJyZW50U2VsZWN0aW9uKSB7XG4gICAgICAvLyByZW1vdmUgcHJldmlvdXMgc2VsZWN0aW9uXG4gICAgICB0aGlzLmN1cnJlbnRTZWxlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICB9XG5cbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uID0gaXRlbTtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gIH0gLy8gc2V0cyB0aGUgY29tcG9uZW50IHZhbHVlXG5cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IGVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhPVwiJHt2YWx1ZX1cIl1gKTtcblxuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIHRoaXMuaXRlbUNsaWNrKGVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gZ2V0cyB0aGUgdmFsdWUgb2YgdGhlIGNvbXBvbmVudFxuXG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlO1xuICB9IC8vIHJlc2V0cyB0aGUgdmFsdWVcblxuXG4gIHJlc2V0VmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFNlbGVjdGlvbikge1xuICAgICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IG51bGw7XG4gIH1cblxufSIsImltcG9ydCBOYW5vRXZlbnRzIGZyb20gJ25hbm9ldmVudHMnO1xuZXhwb3J0IGNsYXNzIEFjdGlvbkJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmNvbmZpZyA9IG9wdGlvbnM7XG4gICAgdGhpcy5lbWl0dGVyID0gbmV3IE5hbm9FdmVudHMoKTtcbiAgfSAvLyBidWlsZFxuXG5cbiAgYnVpbGQoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICduai1hY3Rpb24tY29udGFpbmVyJztcbiAgICB0aGlzLmNyZWF0ZVNhdmVCdXR0b24oKTtcbiAgICB0aGlzLmNyZWF0ZUNsZWFyQnV0dG9uKCk7XG4gICAgdGhpcy5jcmVhdGVDbG9zZUJ1dHRvbigpO1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7IC8vIHJldHVybiB0aGUgZWxlbWVudCB0byBwYXJlbnRcbiAgfSAvLyBjcmVhdGUgc2F2ZSBidXR0b25cblxuXG4gIGNyZWF0ZVNhdmVCdXR0b24oKSB7XG4gICAgbGV0IHNhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYXZlLmNsYXNzTmFtZSA9ICduai1hY3Rpb24tYnV0dG9uIG5qLWFjdGlvbi1zYXZlJztcbiAgICBzYXZlLmlubmVyVGV4dCA9ICdTYXZlJztcblxuICAgIHNhdmUub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdzYXZlJyk7IC8vIGVtaXQgcGx1Z2luIHNhdmUgZXZlbnRcbiAgICB9OyAvLyBhdHRhY2ggY2xpY2tcblxuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZChzYXZlKTtcbiAgfSAvLyBjcmVhdGUgY2xvc2VcblxuXG4gIGNyZWF0ZUNsZWFyQnV0dG9uKCkge1xuICAgIGxldCBjbGVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNsZWFyLmNsYXNzTmFtZSA9ICduai1hY3Rpb24tYnV0dG9uIG5qLWFjdGlvbi1jbGVhcic7XG4gICAgY2xlYXIuaW5uZXJUZXh0ID0gJ0NsZWFyJztcblxuICAgIGNsZWFyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnY2xlYXInKTsgLy8gZW1pdCBwbHVnaW4gY2xlYXIgZXZlbnRcbiAgICB9O1xuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZChjbGVhcik7XG4gIH0gLy8gY3JlYXRlIGJ1dHRvblxuXG5cbiAgY3JlYXRlQ2xvc2VCdXR0b24oKSB7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2xvc2UuY2xhc3NOYW1lID0gJ25qLWFjdGlvbi1idXR0b24gbmotYWN0aW9uLWNsb3NlJztcbiAgICBjbG9zZS5pbm5lclRleHQgPSAnQ2xvc2UnO1xuXG4gICAgY2xvc2Uub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdjbG9zZScpOyAvLyBlbWl0IHBsdWdpbiBjbG9zZSBldmVudFxuICAgIH07XG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKGNsb3NlKTtcbiAgfSAvLyBjcmVhdGUgYW4gb24gbWV0aG9kIHRvIG1hc2sgZW1pdHRlciBvblxuXG5cbiAgb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLmVtaXR0ZXIub24obmFtZSwgdmFsdWUpO1xuICB9XG5cbn0iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSAnLi4vYmFzZS9iYXNlJztcbmV4cG9ydCBjbGFzcyBQaWNrZXJIb3VyIGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLmNvbmZpZyA9IG9wdGlvbnM7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IG51bGw7XG4gICAgc3VwZXIuYnVpbGQoe1xuICAgICAgdHlwZTogJ2hvdXJzJ1xuICAgIH0pO1xuICAgIHRoaXMuY3JlYXRlQnV0dG9ucygpO1xuICB9IC8vIGNyZWF0ZSBhbT1wbSBidXR0b25cblxuXG4gIGNyZWF0ZUJ1dHRvbnMoKSB7XG4gICAgbGV0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25XcmFwcGVyLmNsYXNzTmFtZSA9ICduai1ob3Vycy13cmFwcGVyJztcbiAgICBsZXQgYnV0dG9uTGltaXQgPSB0aGlzLmNvbmZpZy5mb3JtYXQgPT0gJzEyJyA/IDEyIDogMjM7XG4gICAgbGV0IGJ1dHRvblN0YXJ0ID0gdGhpcy5jb25maWcuZm9ybWF0ID09ICcxMicgPyAxIDogMDtcblxuICAgIGZvciAobGV0IGkgPSBidXR0b25TdGFydDsgaSA8PSBidXR0b25MaW1pdDsgaSsrKSB7XG4gICAgICBzdXBlci5jcmVhdGVJdGVtKHtcbiAgICAgICAgY29udGFpbmVyOiBidXR0b25XcmFwcGVyLFxuICAgICAgICBpbm5lclRleHQ6IGlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoYnV0dG9uV3JhcHBlcik7XG4gIH1cblxufSIsImltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tICcuL2JhY2tncm91bmQvYmFja2dyb3VuZCc7XG5pbXBvcnQgTmFub0V2ZW50cyBmcm9tICduYW5vZXZlbnRzJztcbmltcG9ydCB7IFBpY2tlckhvdXIgYXMgaG91cnMgfSBmcm9tICcuL2hvdXIvaG91cic7XG5pbXBvcnQgeyBQaWNrZXJNaW51dGUgYXMgbWludXRlcyB9IGZyb20gJy4vbWludXRlcy9taW51dGUnO1xuaW1wb3J0IHsgUGlja2VyQU1QTSBhcyBhbXBtIH0gZnJvbSAnLi9hbXBtL2FtcG0nO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uIGFzIGJ1dHRvbnMgfSBmcm9tICcuL2J1dHRvbi9idXR0b25zJztcbmV4cG9ydCBjbGFzcyBOSlBpY2tlciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghb3B0aW9ucy50YXJnZXRFbCAmJiAhb3B0aW9ucy50YXJnZXRJRCkge1xuICAgICAgdGhyb3cgJ05KUGlja2VyIHJlcXVpcmVzIGEgdGFyZ2V0IGVsZW1lbnQodGFyZ2V0RWwpIG9yIHRhcmdldCBlbGVtZW50IElEKHRhcmdldElEKSc7XG4gICAgfSAvLyBtZXJnZSBvcHRpb25zIHdpdGggZGVmYXVsdCBjb25maWdcblxuXG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHRoaXMuZGVmYXVsdENvbmZpZywgb3B0aW9ucyk7IC8vIGNoZWNrcyBmb3IgYSB2YWxpZCB0YXJnZXQgZWxlbWVudFxuXG4gICAgdGhpcy5jaGVja1RhcmdldCgpO1xuICAgIHRoaXMuZW1pdHRlciA9IG5ldyBOYW5vRXZlbnRzKCk7XG4gICAgdGhpcy5idWlsZCgpOyAvLyBidWlsZCB0aGUgcGlja2VyXG4gIH0gLy8gcGx1Z2luIGRlZmF1bHQgY29uZmlnXG5cblxuICBnZXQgZGVmYXVsdENvbmZpZygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KSxcbiAgICAgIHRhcmdldEVsOiBudWxsLFxuICAgICAgdGFyZ2V0SUQ6IG51bGwsXG4gICAgICBjbGlja091dHNpZGVUb0Nsb3NlOiB0cnVlLFxuICAgICAgZm9ybWF0OiAnMTInXG4gICAgfTtcbiAgfSAvLyBjaGVjayBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgZXhpc3QgaW4gdGhlIGRvbVxuXG5cbiAgY2hlY2tUYXJnZXQoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnRhcmdldEVsKSB7XG4gICAgICAvLyBjaGVjayBmb3IgdmFsaWQgZG9tIGVsZW1lbnRcbiAgICAgIGlmICh0aGlzLmNvbmZpZy50YXJnZXRFbC5ub2RlVHlwZSAhPSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB0aHJvdyAndGFyZ2V0RWwgZG9lcyBub3QgZXhpc3QgaW4gdGhlIGRvbSc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudGFyZ2V0RWxlbWVudCA9IHRoaXMuY29uZmlnLnRhcmdldEVsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcudGFyZ2V0SUQpIHtcbiAgICAgIC8vIGNoZWNrIGZvciB2YWxpZCBkb20gZWxlbWVudCB3aXRoIElEIHRhcmdldElEXG4gICAgICB0aGlzLnRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmNvbmZpZy50YXJnZXRJRH1gKTtcblxuICAgICAgaWYgKCF0aGlzLnRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgdGhyb3cgJ3RhcmdldElEIGRvZXMgbm90IGV4aXN0IGluIHRoZSBkb20nO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBzZXQgdGhlIG9wdGlvbnMgZm9yIGJ1aWxkaW5nIHRoZSBwbHVnaW5cblxuXG4gIGJ1aWxkKCkge1xuICAgIC8vIGF0dGFjaCB0aGUgY2xpY2sgdG8gc2hvdyBwaWNrZXJcbiAgICB0aGlzLnRhcmdldEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3cuYmluZCh0aGlzKSk7IC8vIGNyZWF0ZSBwaWNrZXIgd3JhcHBlciBkaXZcblxuICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCduai1waWNrZXInKTtcbiAgICB0aGlzLndyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuY29uZmlnLmlkKTsgLy8gaW5pdCB0aGUgb3ZlcmxheVxuXG4gICAgdGhpcy5vdmVybGF5ID0gbmV3IEJhY2tncm91bmQoKTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5jbGlja091dHNpZGVUb0Nsb3NlKSB7XG4gICAgICAvLyBjaGVjayBpZiBjbGlja091dHNpZGVUb0Nsb3NlIGlzIHRydWVcbiAgICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZS5iaW5kKHRoaXMpKTtcbiAgICB9IC8vIGFwcGVuZCB0aGUgb3ZlcmxheSB0byB0aGUgcGlja2VyIHdyYXBwZXJcblxuXG4gICAgdGhpcy53cmFwcGVyLmFwcGVuZCh0aGlzLm92ZXJsYXkpOyAvLyBjcmVhdGUgdGhlIGNvbnRhaW5lclxuXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduai1waWNrZXItY29udGFpbmVyJyk7XG4gICAgdGhpcy5idWlsZEhvdXJzKCk7XG4gICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcbiAgICB0aGlzLmJ1aWxkQU1QTSgpOyAvLyBjb25maWd1cmUgYW1wbSBjb250YWluZXJcblxuICAgIHRoaXMuYnVpbGRCdXR0b25zKCk7IC8vIGNvbmZpZ3VyZSBwaWNrZXIgYnV0dG9uc1xuICAgIC8vIGF0dGFjaCB0aGUgcGlja2VyIGNvbnRhaW5lciB0byB0aGUgd3JhcHBlclxuXG4gICAgdGhpcy53cmFwcGVyLmFwcGVuZCh0aGlzLmNvbnRhaW5lcik7IC8vIGF0dGFjaCB0aGUgcGlja2VyIHdyYXBwZXIgdG8gdGhlIGRvbVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy53cmFwcGVyKTtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCgncmVhZHknKTsgLy8gZW1pdCB0aGUgcGx1Z2luIHJlYWR5IGV2ZW50XG4gIH0gLy8gc2hvd3MgdGhlIHBpY2tlclxuXG5cbiAgc2hvdygpIHtcbiAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbmotcGlja2VyLXNob3cnKTtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnc2hvdycpOyAvLyBlbWl0IHBsdWdpbiBzaG93IGV2ZW50XG4gIH0gLy8gaGlkZXMgdGhlIHBpY2tlclxuXG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnbmotcGlja2VyLXNob3cnKTtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnaGlkZScpOyAvLyBlbWl0IHRoZSBwbHVnaW4gaGlkZSBldmVudFxuICB9IC8vIGNyZWF0ZSBidXR0b25zIGNvbnRpYW5lclxuXG5cbiAgYnVpbGRCdXR0b25zKCkge1xuICAgIHRoaXMuYnV0dG9ucyA9IG5ldyBidXR0b25zKHRoaXMuY29uZmlnKTtcbiAgICB0aGlzLmJ1dHRvbnMub24oJ3NhdmUnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnc2F2ZScsIHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9KTtcbiAgICB0aGlzLmJ1dHRvbnMub24oJ2NsZWFyJywgKCkgPT4ge1xuICAgICAgdGhpcy5ob3Vycy5yZXNldFZhbHVlKCk7IC8vIHJlc2V0cyB0aGUgaG91cnNcblxuICAgICAgdGhpcy5taW51dGVzLnJlc2V0VmFsdWUoKTsgLy8gcmVzZXQgbWludXRlc1xuXG4gICAgICB0aGlzLmFtcG0ucmVzZXRWYWx1ZSgpOyAvLyByZXNldHMgYW0tcG1cblxuICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoJ2NsZWFyJyk7XG4gICAgfSk7XG4gICAgdGhpcy5idXR0b25zLm9uKCdjbG9zZScsICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdjbG9zZScpO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuYnV0dG9ucy5idWlsZCh0aGlzLmNvbmZpZykpO1xuICB9IC8vIGNyZWF0ZSBob3VycyBjb250aWFuZXJcblxuXG4gIGJ1aWxkSG91cnMoKSB7XG4gICAgdGhpcy5ob3VycyA9IG5ldyBob3Vycyh0aGlzLmNvbmZpZyk7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuaG91cnMuZWxlbWVudCk7XG4gIH0gLy8gY3JlYXRlIG1pbnV0ZXMgY29udGlhbmVyXG5cblxuICBidWlsZE1pbnV0ZXMoKSB7XG4gICAgdGhpcy5taW51dGVzID0gbmV3IG1pbnV0ZXModGhpcy5jb25maWcpO1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLm1pbnV0ZXMuZWxlbWVudCk7XG4gIH0gLy8gY3JlYXRlIGFtcG0gY29udGlhbmVyXG5cblxuICBidWlsZEFNUE0oKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmZvcm1hdCA9PSAnMTInKSB7XG4gICAgICB0aGlzLmFtcG0gPSBuZXcgYW1wbSh0aGlzLmNvbmZpZyk7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5hbXBtLmVsZW1lbnQpO1xuICAgIH1cbiAgfSAvLyBnZXQgdGhlIHBpY2tlciB2YWx1ZVxuXG5cbiAgZ2V0VmFsdWUoa2V5KSB7XG4gICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgIGhvdXJzOiB0aGlzLmhvdXJzLmdldFZhbHVlKCksXG4gICAgICBtaW51dGVzOiB0aGlzLm1pbnV0ZXMuZ2V0VmFsdWUoKSxcbiAgICAgIGZ1bGxSZXN1bHQ6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5jb25maWcuZm9ybWF0ID09ICcxMicpIHtcbiAgICAgIHJlc3VsdC5hbXBtID0gdGhpcy5hbXBtLmdldFZhbHVlKCk7XG4gICAgICBpZiAocmVzdWx0LmhvdXJzICYmIHJlc3VsdC5taW51dGVzICYmIHJlc3VsdC5hbXBtKSByZXN1bHQuZnVsbFJlc3VsdCA9IGAke3Jlc3VsdC5ob3Vyc306JHtyZXN1bHQubWludXRlc30gJHtyZXN1bHQuYW1wbX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVzdWx0LmhvdXJzICYmIHJlc3VsdC5taW51dGVzKSByZXN1bHQuZnVsbFJlc3VsdCA9IGAke3Jlc3VsdC5ob3Vyc306JHtyZXN1bHQubWludXRlc31gO1xuICAgIH1cblxuICAgIGlmIChrZXkpIHtcbiAgICAgIHJldHVybiByZXN1bHRba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0IHx8IHt9O1xuICB9IC8vIHNldCBwaWNrZXIgdmFsdWVcblxuXG4gIHNldFZhbHVlKGlucHV0KSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PSAnc3RyaW5nJykge1xuICAgICAgLy8gaGg6bW0gYW1cbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBzcGxpdF8xID0gaW5wdXQuc3BsaXQoJzonKTtcblxuICAgICAgICBpZiAodHlwZW9mIHNwbGl0XzFbMF0gIT0gJ3VuZGVmaW5lZCcgJiYgc3BsaXRfMVswXSAhPSAnJykge1xuICAgICAgICAgIHRoaXMuaG91cnMuc2V0VmFsdWUoc3BsaXRfMVswXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHNwbGl0XzFbMV0gIT0gJ3VuZGVmaW5lZCcgJiYgc3BsaXRfMVsxXSAhPSAnJykge1xuICAgICAgICAgIGxldCBzcGxpdF8yID0gc3BsaXRfMVsxXS5zcGxpdCgnICcpO1xuICAgICAgICAgIHRoaXMubWludXRlcy5zZXRWYWx1ZShzcGxpdF8yWzBdKTtcbiAgICAgICAgICB0aGlzLmFtcG0uc2V0VmFsdWUoc3BsaXRfMlsxXSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHsvL1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoaW5wdXQua2V5ICYmIHR5cGVvZiBpbnB1dC52YWx1ZSAhPSAndW5kZWZpbmVkJyAmJiB0aGlzW2lucHV0LmtleV0pIHtcbiAgICAgICAgdGhpc1tpbnB1dC5rZXldLnNldFZhbHVlKGlucHV0LnZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIGNyZWF0ZSBhbiBvbiBtZXRob2QgdG8gbWFzayBlbWl0dGVyIG9uXG5cblxuICBvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMuZW1pdHRlci5vbihuYW1lLCB2YWx1ZSk7XG4gIH1cblxufVxuXG5pZiAodHlwZW9mIGdsb2JhbCA9PT0gJ29iamVjdCcgJiYgIWdsb2JhbC5OSlBpY2tlcikge1xuICBnbG9iYWwuTkpQaWNrZXIgPSBOSlBpY2tlcjtcbn0iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSAnLi4vYmFzZS9iYXNlJztcbmV4cG9ydCBjbGFzcyBQaWNrZXJNaW51dGUgZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMuY29uZmlnID0gb3B0aW9ucztcbiAgICB0aGlzLmN1cnJlbnRTZWxlY3Rpb24gPSBudWxsO1xuICAgIHRoaXMuY3VycmVudFZhbHVlID0gbnVsbDtcbiAgICBzdXBlci5idWlsZCh7XG4gICAgICB0eXBlOiAnbWludXRlcydcbiAgICB9KTtcbiAgICB0aGlzLmNyZWF0ZUJ1dHRvbnMoKTtcbiAgfSAvLyBjcmVhdGUgYW09cG0gYnV0dG9uXG5cblxuICBjcmVhdGVCdXR0b25zKCkge1xuICAgIGxldCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uV3JhcHBlci5jbGFzc05hbWUgPSAnbmotbWludXRlcy13cmFwcGVyJztcbiAgICBsZXQgbWludXRlcyA9IFswLCAxNSwgMzAsIDQ1XTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWludXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgc3VwZXIuY3JlYXRlSXRlbSh7XG4gICAgICAgIGNvbnRhaW5lcjogYnV0dG9uV3JhcHBlcixcbiAgICAgICAgaW5uZXJUZXh0OiBtaW51dGVzW2ldXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKGJ1dHRvbldyYXBwZXIpO1xuICB9XG5cbn0iLCIoXHJcbiAgLyoqXHJcbiAgICogSW50ZXJmYWNlIGZvciBldmVudCBzdWJzY3JpcHRpb24uXHJcbiAgICpcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIHZhciBOYW5vRXZlbnRzID0gcmVxdWlyZSgnbmFub2V2ZW50cycpXHJcbiAgICpcclxuICAgKiBjbGFzcyBUaWNrZXIge1xyXG4gICAqICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICogICAgIHRoaXMuZW1pdHRlciA9IG5ldyBOYW5vRXZlbnRzKClcclxuICAgKiAgIH1cclxuICAgKiAgIG9uKCkge1xyXG4gICAqICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLm9uLmFwcGx5KHRoaXMuZXZlbnRzLCBhcmd1bWVudHMpXHJcbiAgICogICB9XHJcbiAgICogICB0aWNrKCkge1xyXG4gICAqICAgICB0aGlzLmVtaXR0ZXIuZW1pdCgndGljaycpXHJcbiAgICogICB9XHJcbiAgICogfVxyXG4gICAqXHJcbiAgICogQGFsaWFzIE5hbm9FdmVudHNcclxuICAgKiBAY2xhc3NcclxuICAgKi9cclxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIE5hbm9FdmVudHMgKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFdmVudCBuYW1lcyBpbiBrZXlzIGFuZCBhcnJheXMgd2l0aCBsaXN0ZW5lcnMgaW4gdmFsdWVzLlxyXG4gICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAqXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogT2JqZWN0LmtleXMoZWUuZXZlbnRzKVxyXG4gICAgICpcclxuICAgICAqIEBhbGlhcyBOYW5vRXZlbnRzI2V2ZW50c1xyXG4gICAgICovXHJcbiAgICB0aGlzLmV2ZW50cyA9IHsgfVxyXG4gIH1cclxuKS5wcm90b3R5cGUgPSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxzIGVhY2ggb2YgdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxyXG4gICAqIEBwYXJhbSB7Li4uKn0gYXJndW1lbnRzIFRoZSBhcmd1bWVudHMgZm9yIGxpc3RlbmVycy5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge3VuZGVmaW5lZH1cclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogZWUuZW1pdCgndGljaycsIHRpY2tUeXBlLCB0aWNrRHVyYXRpb24pXHJcbiAgICpcclxuICAgKiBAYWxpYXMgTmFub0V2ZW50cyNlbWl0XHJcbiAgICogQG1ldGhvZFxyXG4gICAqL1xyXG4gIGVtaXQ6IGZ1bmN0aW9uIGVtaXQgKGV2ZW50KSB7XHJcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxyXG4gICAgLy8gQXJyYXkucHJvdG90eXBlLmNhbGwoKSByZXR1cm5zIGVtcHR5IGFycmF5IGlmIGNvbnRleHQgaXMgbm90IGFycmF5LWxpa2VcclxuICAgIDtbXS5zbGljZS5jYWxsKHRoaXMuZXZlbnRzW2V2ZW50XSB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgIGkuYXBwbHkobnVsbCwgYXJncylcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7ZnVuY3Rpb259IFVuYmluZCBsaXN0ZW5lciBmcm9tIGV2ZW50LlxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBjb25zdCB1bmJpbmQgPSBlZS5vbigndGljaycsICh0aWNrVHlwZSwgdGlja0R1cmF0aW9uKSA9PiB7XHJcbiAgICogICBjb3VudCArPSAxXHJcbiAgICogfSlcclxuICAgKlxyXG4gICAqIGRpc2FibGUgKCkge1xyXG4gICAqICAgdW5iaW5kKClcclxuICAgKiB9XHJcbiAgICpcclxuICAgKiBAYWxpYXMgTmFub0V2ZW50cyNvblxyXG4gICAqIEBtZXRob2RcclxuICAgKi9cclxuICBvbjogZnVuY3Rpb24gb24gKGV2ZW50LCBjYikge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJylcclxuICAgIH1cclxuXHJcbiAgICAodGhpcy5ldmVudHNbZXZlbnRdID0gdGhpcy5ldmVudHNbZXZlbnRdIHx8IFtdKS5wdXNoKGNiKVxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICByZXR1cm4gaSAhPT0gY2JcclxuICAgICAgfSlcclxuICAgIH0uYmluZCh0aGlzKVxyXG4gIH1cclxufVxyXG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9