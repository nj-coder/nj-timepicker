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
    innerText,
    disabled
  }) {
    let item = document.createElement('div');
    item.className = 'nj-item';
    item.innerText = innerText;
    item.setAttribute('data', innerText.toString().toLowerCase());

    if (disabled) {
      item.setAttribute('disabled', 'disabled');
    }

    item.onclick = this.itemClick.bind(this, item);
    container.append(item);
  } // item clicked


  itemClick(item) {
    if (item.hasAttribute('disabled')) return;

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

/***/ "./dist/tmp/header/header.js":
/*!***********************************!*\
  !*** ./dist/tmp/header/header.js ***!
  \***********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
class Header {
  constructor(options) {
    this.config = options;
    this.build();
  }

  build() {
    this.element = document.createElement('div');
    this.element.className = 'nj-header-container';
    this.element.textContent = this.config.headerText;
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
    let disabledHours = Array.isArray(this.config.disabledHours) ? this.config.disabledHours : [];

    for (let i = buttonStart; i <= buttonLimit; i++) {
      super.createItem({
        container: buttonWrapper,
        innerText: i,
        disabled: disabledHours.includes(i)
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
/*! exports provided: NJTimePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NJTimePicker", function() { return NJTimePicker; });
/* harmony import */ var _background_background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background/background */ "./dist/tmp/background/background.js");
/* harmony import */ var nanoevents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoevents */ "./node_modules/nanoevents/index.js");
/* harmony import */ var nanoevents__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nanoevents__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hour_hour__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hour/hour */ "./dist/tmp/hour/hour.js");
/* harmony import */ var _minutes_minute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minutes/minute */ "./dist/tmp/minutes/minute.js");
/* harmony import */ var _ampm_ampm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ampm/ampm */ "./dist/tmp/ampm/ampm.js");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header */ "./dist/tmp/header/header.js");
/* harmony import */ var _button_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button/buttons */ "./dist/tmp/button/buttons.js");







class NJTimePicker {
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
      clickOutsideToClose: true,
      disabledMinutes: [],
      disabledHours: [],
      format: '12',
      headerText: '',
      id: Math.random().toString(36).substring(7),
      minutes: [0, 15, 30, 45],
      targetEl: null,
      targetID: null
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
    this.container.classList.add('nj-picker-container'); // create header

    if (this.config.headerText) {
      this.header = new _header_header__WEBPACK_IMPORTED_MODULE_5__["Header"](this.config);
      this.container.append(this.header.element);
    }

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
    this.buttons = new _button_buttons__WEBPACK_IMPORTED_MODULE_6__["ActionButton"](this.config);
    this.buttons.on('save', () => {
      // set the value of the target if its an input 
      if (this.targetElement.type == 'text' && this.targetElement.nodeName === 'INPUT') {
        this.targetElement.value = this.getValue().fullResult;
      }

      this.emitter.emit('save', this.getValue());
      this.hide();
    });
    this.buttons.on('clear', () => {
      this.hours.resetValue(); // resets the hours

      this.minutes.resetValue(); // reset minutes

      if (this.config.format == '12') {
        this.ampm.resetValue(); // resets am-pm
      }

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
      if (result.hours && result.minutes && result.ampm) result.fullResult = `${("0" + result.hours).slice(-2)}:${("0" + result.minutes).slice(-2)} ${result.ampm}`;
    } else {
      if (result.hours && result.minutes) result.fullResult = `${("0" + result.hours).slice(-2)}:${("0" + result.minutes).slice(-2)}`;
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

if (typeof global === 'object' && !global.NJTimePicker) {
  global.NJTimePicker = NJTimePicker;
  global.NJTimePicker.version = 'v1.2.103';
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
    let minutes = this.config.minutes || [0, 15, 30, 45];
    let disabledMinutes = Array.isArray(this.config.disabledMinutes) ? this.config.disabledMinutes : [];

    for (let i = 0; i < minutes.length; i++) {
      if (typeof minutes[i] == 'number' && minutes[i] < 60) {
        super.createItem({
          container: buttonWrapper,
          innerText: minutes[i],
          disabled: disabledMinutes.includes(minutes[i])
        });
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC90bXAvYW1wbS9hbXBtLmpzIiwid2VicGFjazovLy8uL2Rpc3QvdG1wL2JhY2tncm91bmQvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3RtcC9iYXNlL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC90bXAvYnV0dG9uL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC90bXAvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3RtcC9ob3VyL2hvdXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC90bXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC90bXAvbWludXRlcy9taW51dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25hbm9ldmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtR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RUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7QUMzRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Rpc3QvdG1wL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gJy4uL2Jhc2UvYmFzZSc7XG5leHBvcnQgY2xhc3MgUGlja2VyQU1QTSBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5jb25maWcgPSBvcHRpb25zO1xuICAgIHRoaXMuY3VycmVudFNlbGVjdGlvbiA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUgPSBudWxsO1xuICAgIHN1cGVyLmJ1aWxkKHtcbiAgICAgIHR5cGU6ICdhbXBtJyxcbiAgICAgIGhlYWRlclRleHQ6ICdBTS9QTSdcbiAgICB9KTtcbiAgICB0aGlzLmNyZWF0ZUJ1dHRvbnMoKTtcbiAgfSAvLyBjcmVhdGUgYW09cG0gYnV0dG9uXG5cblxuICBjcmVhdGVCdXR0b25zKCkge1xuICAgIGxldCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uV3JhcHBlci5jbGFzc05hbWUgPSAnbmotYW1wbS13cmFwcGVyJztcbiAgICBzdXBlci5jcmVhdGVJdGVtKHtcbiAgICAgIGNvbnRhaW5lcjogYnV0dG9uV3JhcHBlcixcbiAgICAgIGlubmVyVGV4dDogJ0FNJ1xuICAgIH0pO1xuICAgIHN1cGVyLmNyZWF0ZUl0ZW0oe1xuICAgICAgY29udGFpbmVyOiBidXR0b25XcmFwcGVyLFxuICAgICAgaW5uZXJUZXh0OiAnUE0nXG4gICAgfSk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZChidXR0b25XcmFwcGVyKTtcbiAgfVxuXG59IiwiZXhwb3J0IGNsYXNzIEJhY2tncm91bmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZCgpO1xuICB9IC8vIGJ1aWxkXG5cblxuICBidWlsZCgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ25qLW92ZXJsYXknO1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7IC8vIHJldHVybiB0aGUgZWxlbWVudCB0byBwYXJlbnRcbiAgfVxuXG59IiwiZXhwb3J0IGNsYXNzIEJhc2Uge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5jb25maWcgPSBvcHRpb25zO1xuICAgIHRoaXMuY3VycmVudFNlbGVjdGlvbiA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUgPSBudWxsO1xuICB9IC8vIGJ1aWxkIGNvbnRhbmllclxuXG5cbiAgYnVpbGQoe1xuICAgIHR5cGUsXG4gICAgaGVhZGVyVGV4dFxuICB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9IGBuai0ke3R5cGV9LWNvbnRhaW5lcmA7XG4gICAgdGhpcy5jcmVhdGVIZWFkZXIoe1xuICAgICAgY2xhc3NOYW1lOiAnbmotc2VjdGlvbi1oZWFkZXInLFxuICAgICAgaW5uZXJUZXh0OiBoZWFkZXJUZXh0IHx8IHR5cGUsXG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRcbiAgICB9KTtcbiAgfSAvLyBjcmVhdGUgaGVhZGVyIFxuXG5cbiAgY3JlYXRlSGVhZGVyKHtcbiAgICBjbGFzc05hbWUsXG4gICAgaW5uZXJUZXh0LFxuICAgIGVsZW1lbnRcbiAgfSkge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSBpbm5lclRleHQ7XG4gICAgZWxlbWVudC5hcHBlbmQoaGVhZGVyKTtcbiAgfSAvLyBjcmVhdGUgZWFjaCBpdGVtIFxuXG5cbiAgY3JlYXRlSXRlbSh7XG4gICAgY29udGFpbmVyLFxuICAgIGlubmVyVGV4dCxcbiAgICBkaXNhYmxlZFxuICB9KSB7XG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtLmNsYXNzTmFtZSA9ICduai1pdGVtJztcbiAgICBpdGVtLmlubmVyVGV4dCA9IGlubmVyVGV4dDtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgnZGF0YScsIGlubmVyVGV4dC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBpdGVtLm9uY2xpY2sgPSB0aGlzLml0ZW1DbGljay5iaW5kKHRoaXMsIGl0ZW0pO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoaXRlbSk7XG4gIH0gLy8gaXRlbSBjbGlja2VkXG5cblxuICBpdGVtQ2xpY2soaXRlbSkge1xuICAgIGlmIChpdGVtLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuY3VycmVudFNlbGVjdGlvbikge1xuICAgICAgLy8gcmVtb3ZlIHByZXZpb3VzIHNlbGVjdGlvblxuICAgICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIHRoaXMuY3VycmVudFNlbGVjdGlvbiA9IGl0ZW07XG4gICAgdGhpcy5jdXJyZW50VmFsdWUgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICB9IC8vIHNldHMgdGhlIGNvbXBvbmVudCB2YWx1ZVxuXG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBlbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YT1cIiR7dmFsdWV9XCJdYCk7XG5cbiAgICAgIGlmIChlbCkge1xuICAgICAgICB0aGlzLml0ZW1DbGljayhlbCk7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIGdldHMgdGhlIHZhbHVlIG9mIHRoZSBjb21wb25lbnRcblxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRWYWx1ZTtcbiAgfSAvLyByZXNldHMgdGhlIHZhbHVlXG5cblxuICByZXNldFZhbHVlKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTZWxlY3Rpb24pIHtcbiAgICAgIHRoaXMuY3VycmVudFNlbGVjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFNlbGVjdGlvbiA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUgPSBudWxsO1xuICB9XG5cbn0iLCJpbXBvcnQgTmFub0V2ZW50cyBmcm9tICduYW5vZXZlbnRzJztcbmV4cG9ydCBjbGFzcyBBY3Rpb25CdXR0b24ge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5jb25maWcgPSBvcHRpb25zO1xuICAgIHRoaXMuZW1pdHRlciA9IG5ldyBOYW5vRXZlbnRzKCk7XG4gIH0gLy8gYnVpbGRcblxuXG4gIGJ1aWxkKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnbmotYWN0aW9uLWNvbnRhaW5lcic7XG4gICAgdGhpcy5jcmVhdGVTYXZlQnV0dG9uKCk7XG4gICAgdGhpcy5jcmVhdGVDbGVhckJ1dHRvbigpO1xuICAgIHRoaXMuY3JlYXRlQ2xvc2VCdXR0b24oKTtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50OyAvLyByZXR1cm4gdGhlIGVsZW1lbnQgdG8gcGFyZW50XG4gIH0gLy8gY3JlYXRlIHNhdmUgYnV0dG9uXG5cblxuICBjcmVhdGVTYXZlQnV0dG9uKCkge1xuICAgIGxldCBzYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2F2ZS5jbGFzc05hbWUgPSAnbmotYWN0aW9uLWJ1dHRvbiBuai1hY3Rpb24tc2F2ZSc7XG4gICAgc2F2ZS5pbm5lclRleHQgPSAnU2F2ZSc7XG5cbiAgICBzYXZlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnc2F2ZScpOyAvLyBlbWl0IHBsdWdpbiBzYXZlIGV2ZW50XG4gICAgfTsgLy8gYXR0YWNoIGNsaWNrXG5cblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoc2F2ZSk7XG4gIH0gLy8gY3JlYXRlIGNsb3NlXG5cblxuICBjcmVhdGVDbGVhckJ1dHRvbigpIHtcbiAgICBsZXQgY2xlYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjbGVhci5jbGFzc05hbWUgPSAnbmotYWN0aW9uLWJ1dHRvbiBuai1hY3Rpb24tY2xlYXInO1xuICAgIGNsZWFyLmlubmVyVGV4dCA9ICdDbGVhcic7XG5cbiAgICBjbGVhci5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoJ2NsZWFyJyk7IC8vIGVtaXQgcGx1Z2luIGNsZWFyIGV2ZW50XG4gICAgfTtcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoY2xlYXIpO1xuICB9IC8vIGNyZWF0ZSBidXR0b25cblxuXG4gIGNyZWF0ZUNsb3NlQnV0dG9uKCkge1xuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNsb3NlLmNsYXNzTmFtZSA9ICduai1hY3Rpb24tYnV0dG9uIG5qLWFjdGlvbi1jbG9zZSc7XG4gICAgY2xvc2UuaW5uZXJUZXh0ID0gJ0Nsb3NlJztcblxuICAgIGNsb3NlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnY2xvc2UnKTsgLy8gZW1pdCBwbHVnaW4gY2xvc2UgZXZlbnRcbiAgICB9O1xuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZChjbG9zZSk7XG4gIH0gLy8gY3JlYXRlIGFuIG9uIG1ldGhvZCB0byBtYXNrIGVtaXR0ZXIgb25cblxuXG4gIG9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5lbWl0dGVyLm9uKG5hbWUsIHZhbHVlKTtcbiAgfVxuXG59IiwiZXhwb3J0IGNsYXNzIEhlYWRlciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmNvbmZpZyA9IG9wdGlvbnM7XG4gICAgdGhpcy5idWlsZCgpO1xuICB9XG5cbiAgYnVpbGQoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICduai1oZWFkZXItY29udGFpbmVyJztcbiAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLmNvbmZpZy5oZWFkZXJUZXh0O1xuICB9XG5cbn0iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSAnLi4vYmFzZS9iYXNlJztcbmV4cG9ydCBjbGFzcyBQaWNrZXJIb3VyIGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLmNvbmZpZyA9IG9wdGlvbnM7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IG51bGw7XG4gICAgc3VwZXIuYnVpbGQoe1xuICAgICAgdHlwZTogJ2hvdXJzJ1xuICAgIH0pO1xuICAgIHRoaXMuY3JlYXRlQnV0dG9ucygpO1xuICB9IC8vIGNyZWF0ZSBhbT1wbSBidXR0b25cblxuXG4gIGNyZWF0ZUJ1dHRvbnMoKSB7XG4gICAgbGV0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25XcmFwcGVyLmNsYXNzTmFtZSA9ICduai1ob3Vycy13cmFwcGVyJztcbiAgICBsZXQgYnV0dG9uTGltaXQgPSB0aGlzLmNvbmZpZy5mb3JtYXQgPT0gJzEyJyA/IDEyIDogMjM7XG4gICAgbGV0IGJ1dHRvblN0YXJ0ID0gdGhpcy5jb25maWcuZm9ybWF0ID09ICcxMicgPyAxIDogMDtcbiAgICBsZXQgZGlzYWJsZWRIb3VycyA9IEFycmF5LmlzQXJyYXkodGhpcy5jb25maWcuZGlzYWJsZWRIb3VycykgPyB0aGlzLmNvbmZpZy5kaXNhYmxlZEhvdXJzIDogW107XG5cbiAgICBmb3IgKGxldCBpID0gYnV0dG9uU3RhcnQ7IGkgPD0gYnV0dG9uTGltaXQ7IGkrKykge1xuICAgICAgc3VwZXIuY3JlYXRlSXRlbSh7XG4gICAgICAgIGNvbnRhaW5lcjogYnV0dG9uV3JhcHBlcixcbiAgICAgICAgaW5uZXJUZXh0OiBpLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWRIb3Vycy5pbmNsdWRlcyhpKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZChidXR0b25XcmFwcGVyKTtcbiAgfVxuXG59IiwiaW1wb3J0IHsgQmFja2dyb3VuZCB9IGZyb20gJy4vYmFja2dyb3VuZC9iYWNrZ3JvdW5kJztcbmltcG9ydCBOYW5vRXZlbnRzIGZyb20gJ25hbm9ldmVudHMnO1xuaW1wb3J0IHsgUGlja2VySG91ciBhcyBob3VycyB9IGZyb20gJy4vaG91ci9ob3VyJztcbmltcG9ydCB7IFBpY2tlck1pbnV0ZSBhcyBtaW51dGVzIH0gZnJvbSAnLi9taW51dGVzL21pbnV0ZSc7XG5pbXBvcnQgeyBQaWNrZXJBTVBNIGFzIGFtcG0gfSBmcm9tICcuL2FtcG0vYW1wbSc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL2hlYWRlci9oZWFkZXInO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uIGFzIGJ1dHRvbnMgfSBmcm9tICcuL2J1dHRvbi9idXR0b25zJztcbmV4cG9ydCBjbGFzcyBOSlRpbWVQaWNrZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIW9wdGlvbnMudGFyZ2V0RWwgJiYgIW9wdGlvbnMudGFyZ2V0SUQpIHtcbiAgICAgIHRocm93ICdOSlBpY2tlciByZXF1aXJlcyBhIHRhcmdldCBlbGVtZW50KHRhcmdldEVsKSBvciB0YXJnZXQgZWxlbWVudCBJRCh0YXJnZXRJRCknO1xuICAgIH0gLy8gbWVyZ2Ugb3B0aW9ucyB3aXRoIGRlZmF1bHQgY29uZmlnXG5cblxuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih0aGlzLmRlZmF1bHRDb25maWcsIG9wdGlvbnMpOyAvLyBjaGVja3MgZm9yIGEgdmFsaWQgdGFyZ2V0IGVsZW1lbnRcblxuICAgIHRoaXMuY2hlY2tUYXJnZXQoKTtcbiAgICB0aGlzLmVtaXR0ZXIgPSBuZXcgTmFub0V2ZW50cygpO1xuICAgIHRoaXMuYnVpbGQoKTsgLy8gYnVpbGQgdGhlIHBpY2tlclxuICB9IC8vIHBsdWdpbiBkZWZhdWx0IGNvbmZpZ1xuXG5cbiAgZ2V0IGRlZmF1bHRDb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IHRydWUsXG4gICAgICBkaXNhYmxlZE1pbnV0ZXM6IFtdLFxuICAgICAgZGlzYWJsZWRIb3VyczogW10sXG4gICAgICBmb3JtYXQ6ICcxMicsXG4gICAgICBoZWFkZXJUZXh0OiAnJyxcbiAgICAgIGlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyksXG4gICAgICBtaW51dGVzOiBbMCwgMTUsIDMwLCA0NV0sXG4gICAgICB0YXJnZXRFbDogbnVsbCxcbiAgICAgIHRhcmdldElEOiBudWxsXG4gICAgfTtcbiAgfSAvLyBjaGVjayBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgZXhpc3QgaW4gdGhlIGRvbVxuXG5cbiAgY2hlY2tUYXJnZXQoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnRhcmdldEVsKSB7XG4gICAgICAvLyBjaGVjayBmb3IgdmFsaWQgZG9tIGVsZW1lbnRcbiAgICAgIGlmICh0aGlzLmNvbmZpZy50YXJnZXRFbC5ub2RlVHlwZSAhPSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB0aHJvdyAndGFyZ2V0RWwgZG9lcyBub3QgZXhpc3QgaW4gdGhlIGRvbSc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudGFyZ2V0RWxlbWVudCA9IHRoaXMuY29uZmlnLnRhcmdldEVsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcudGFyZ2V0SUQpIHtcbiAgICAgIC8vIGNoZWNrIGZvciB2YWxpZCBkb20gZWxlbWVudCB3aXRoIElEIHRhcmdldElEXG4gICAgICB0aGlzLnRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmNvbmZpZy50YXJnZXRJRH1gKTtcblxuICAgICAgaWYgKCF0aGlzLnRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgdGhyb3cgJ3RhcmdldElEIGRvZXMgbm90IGV4aXN0IGluIHRoZSBkb20nO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBzZXQgdGhlIG9wdGlvbnMgZm9yIGJ1aWxkaW5nIHRoZSBwbHVnaW5cblxuXG4gIGJ1aWxkKCkge1xuICAgIC8vIGF0dGFjaCB0aGUgY2xpY2sgdG8gc2hvdyBwaWNrZXJcbiAgICB0aGlzLnRhcmdldEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3cuYmluZCh0aGlzKSk7IC8vIGNyZWF0ZSBwaWNrZXIgd3JhcHBlciBkaXZcblxuICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCduai1waWNrZXInKTtcbiAgICB0aGlzLndyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuY29uZmlnLmlkKTsgLy8gaW5pdCB0aGUgb3ZlcmxheVxuXG4gICAgdGhpcy5vdmVybGF5ID0gbmV3IEJhY2tncm91bmQoKTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5jbGlja091dHNpZGVUb0Nsb3NlKSB7XG4gICAgICAvLyBjaGVjayBpZiBjbGlja091dHNpZGVUb0Nsb3NlIGlzIHRydWVcbiAgICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZS5iaW5kKHRoaXMpKTtcbiAgICB9IC8vIGFwcGVuZCB0aGUgb3ZlcmxheSB0byB0aGUgcGlja2VyIHdyYXBwZXJcblxuXG4gICAgdGhpcy53cmFwcGVyLmFwcGVuZCh0aGlzLm92ZXJsYXkpOyAvLyBjcmVhdGUgdGhlIGNvbnRhaW5lclxuXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduai1waWNrZXItY29udGFpbmVyJyk7IC8vIGNyZWF0ZSBoZWFkZXJcblxuICAgIGlmICh0aGlzLmNvbmZpZy5oZWFkZXJUZXh0KSB7XG4gICAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIodGhpcy5jb25maWcpO1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuaGVhZGVyLmVsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuYnVpbGRIb3VycygpO1xuICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XG4gICAgdGhpcy5idWlsZEFNUE0oKTsgLy8gY29uZmlndXJlIGFtcG0gY29udGFpbmVyXG5cbiAgICB0aGlzLmJ1aWxkQnV0dG9ucygpOyAvLyBjb25maWd1cmUgcGlja2VyIGJ1dHRvbnNcbiAgICAvLyBhdHRhY2ggdGhlIHBpY2tlciBjb250YWluZXIgdG8gdGhlIHdyYXBwZXJcblxuICAgIHRoaXMud3JhcHBlci5hcHBlbmQodGhpcy5jb250YWluZXIpOyAvLyBhdHRhY2ggdGhlIHBpY2tlciB3cmFwcGVyIHRvIHRoZSBkb21cblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMud3JhcHBlcik7XG4gICAgdGhpcy5lbWl0dGVyLmVtaXQoJ3JlYWR5Jyk7IC8vIGVtaXQgdGhlIHBsdWdpbiByZWFkeSBldmVudFxuICB9IC8vIHNob3dzIHRoZSBwaWNrZXJcblxuXG4gIHNob3coKSB7XG4gICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ25qLXBpY2tlci1zaG93Jyk7XG4gICAgdGhpcy5lbWl0dGVyLmVtaXQoJ3Nob3cnKTsgLy8gZW1pdCBwbHVnaW4gc2hvdyBldmVudFxuICB9IC8vIGhpZGVzIHRoZSBwaWNrZXJcblxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ25qLXBpY2tlci1zaG93Jyk7XG4gICAgdGhpcy5lbWl0dGVyLmVtaXQoJ2hpZGUnKTsgLy8gZW1pdCB0aGUgcGx1Z2luIGhpZGUgZXZlbnRcbiAgfSAvLyBjcmVhdGUgYnV0dG9ucyBjb250aWFuZXJcblxuXG4gIGJ1aWxkQnV0dG9ucygpIHtcbiAgICB0aGlzLmJ1dHRvbnMgPSBuZXcgYnV0dG9ucyh0aGlzLmNvbmZpZyk7XG4gICAgdGhpcy5idXR0b25zLm9uKCdzYXZlJywgKCkgPT4ge1xuICAgICAgLy8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIGl0cyBhbiBpbnB1dCBcbiAgICAgIGlmICh0aGlzLnRhcmdldEVsZW1lbnQudHlwZSA9PSAndGV4dCcgJiYgdGhpcy50YXJnZXRFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0RWxlbWVudC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKS5mdWxsUmVzdWx0O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnc2F2ZScsIHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9KTtcbiAgICB0aGlzLmJ1dHRvbnMub24oJ2NsZWFyJywgKCkgPT4ge1xuICAgICAgdGhpcy5ob3Vycy5yZXNldFZhbHVlKCk7IC8vIHJlc2V0cyB0aGUgaG91cnNcblxuICAgICAgdGhpcy5taW51dGVzLnJlc2V0VmFsdWUoKTsgLy8gcmVzZXQgbWludXRlc1xuXG4gICAgICBpZiAodGhpcy5jb25maWcuZm9ybWF0ID09ICcxMicpIHtcbiAgICAgICAgdGhpcy5hbXBtLnJlc2V0VmFsdWUoKTsgLy8gcmVzZXRzIGFtLXBtXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdjbGVhcicpO1xuICAgIH0pO1xuICAgIHRoaXMuYnV0dG9ucy5vbignY2xvc2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnY2xvc2UnKTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmJ1dHRvbnMuYnVpbGQodGhpcy5jb25maWcpKTtcbiAgfSAvLyBjcmVhdGUgaG91cnMgY29udGlhbmVyXG5cblxuICBidWlsZEhvdXJzKCkge1xuICAgIHRoaXMuaG91cnMgPSBuZXcgaG91cnModGhpcy5jb25maWcpO1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmhvdXJzLmVsZW1lbnQpO1xuICB9IC8vIGNyZWF0ZSBtaW51dGVzIGNvbnRpYW5lclxuXG5cbiAgYnVpbGRNaW51dGVzKCkge1xuICAgIHRoaXMubWludXRlcyA9IG5ldyBtaW51dGVzKHRoaXMuY29uZmlnKTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5taW51dGVzLmVsZW1lbnQpO1xuICB9IC8vIGNyZWF0ZSBhbXBtIGNvbnRpYW5lclxuXG5cbiAgYnVpbGRBTVBNKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5mb3JtYXQgPT0gJzEyJykge1xuICAgICAgdGhpcy5hbXBtID0gbmV3IGFtcG0odGhpcy5jb25maWcpO1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuYW1wbS5lbGVtZW50KTtcbiAgICB9XG4gIH0gLy8gZ2V0IHRoZSBwaWNrZXIgdmFsdWVcblxuXG4gIGdldFZhbHVlKGtleSkge1xuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICBob3VyczogdGhpcy5ob3Vycy5nZXRWYWx1ZSgpLFxuICAgICAgbWludXRlczogdGhpcy5taW51dGVzLmdldFZhbHVlKCksXG4gICAgICBmdWxsUmVzdWx0OiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmZvcm1hdCA9PSAnMTInKSB7XG4gICAgICByZXN1bHQuYW1wbSA9IHRoaXMuYW1wbS5nZXRWYWx1ZSgpO1xuICAgICAgaWYgKHJlc3VsdC5ob3VycyAmJiByZXN1bHQubWludXRlcyAmJiByZXN1bHQuYW1wbSkgcmVzdWx0LmZ1bGxSZXN1bHQgPSBgJHsoXCIwXCIgKyByZXN1bHQuaG91cnMpLnNsaWNlKC0yKX06JHsoXCIwXCIgKyByZXN1bHQubWludXRlcykuc2xpY2UoLTIpfSAke3Jlc3VsdC5hbXBtfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZXN1bHQuaG91cnMgJiYgcmVzdWx0Lm1pbnV0ZXMpIHJlc3VsdC5mdWxsUmVzdWx0ID0gYCR7KFwiMFwiICsgcmVzdWx0LmhvdXJzKS5zbGljZSgtMil9OiR7KFwiMFwiICsgcmVzdWx0Lm1pbnV0ZXMpLnNsaWNlKC0yKX1gO1xuICAgIH1cblxuICAgIGlmIChrZXkpIHtcbiAgICAgIHJldHVybiByZXN1bHRba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0IHx8IHt9O1xuICB9IC8vIHNldCBwaWNrZXIgdmFsdWVcblxuXG4gIHNldFZhbHVlKGlucHV0KSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PSAnc3RyaW5nJykge1xuICAgICAgLy8gaGg6bW0gYW1cbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBzcGxpdF8xID0gaW5wdXQuc3BsaXQoJzonKTtcblxuICAgICAgICBpZiAodHlwZW9mIHNwbGl0XzFbMF0gIT0gJ3VuZGVmaW5lZCcgJiYgc3BsaXRfMVswXSAhPSAnJykge1xuICAgICAgICAgIHRoaXMuaG91cnMuc2V0VmFsdWUoc3BsaXRfMVswXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHNwbGl0XzFbMV0gIT0gJ3VuZGVmaW5lZCcgJiYgc3BsaXRfMVsxXSAhPSAnJykge1xuICAgICAgICAgIGxldCBzcGxpdF8yID0gc3BsaXRfMVsxXS5zcGxpdCgnICcpO1xuICAgICAgICAgIHRoaXMubWludXRlcy5zZXRWYWx1ZShzcGxpdF8yWzBdKTtcbiAgICAgICAgICB0aGlzLmFtcG0uc2V0VmFsdWUoc3BsaXRfMlsxXSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHsvL1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoaW5wdXQua2V5ICYmIHR5cGVvZiBpbnB1dC52YWx1ZSAhPSAndW5kZWZpbmVkJyAmJiB0aGlzW2lucHV0LmtleV0pIHtcbiAgICAgICAgdGhpc1tpbnB1dC5rZXldLnNldFZhbHVlKGlucHV0LnZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIGNyZWF0ZSBhbiBvbiBtZXRob2QgdG8gbWFzayBlbWl0dGVyIG9uXG5cblxuICBvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMuZW1pdHRlci5vbihuYW1lLCB2YWx1ZSk7XG4gIH1cblxufVxuXG5pZiAodHlwZW9mIGdsb2JhbCA9PT0gJ29iamVjdCcgJiYgIWdsb2JhbC5OSlRpbWVQaWNrZXIpIHtcbiAgZ2xvYmFsLk5KVGltZVBpY2tlciA9IE5KVGltZVBpY2tlcjtcbiAgZ2xvYmFsLk5KVGltZVBpY2tlci52ZXJzaW9uID0gJ3YxLjIuMTAzJztcbn0iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSAnLi4vYmFzZS9iYXNlJztcbmV4cG9ydCBjbGFzcyBQaWNrZXJNaW51dGUgZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMuY29uZmlnID0gb3B0aW9ucztcbiAgICB0aGlzLmN1cnJlbnRTZWxlY3Rpb24gPSBudWxsO1xuICAgIHRoaXMuY3VycmVudFZhbHVlID0gbnVsbDtcbiAgICBzdXBlci5idWlsZCh7XG4gICAgICB0eXBlOiAnbWludXRlcydcbiAgICB9KTtcbiAgICB0aGlzLmNyZWF0ZUJ1dHRvbnMoKTtcbiAgfSAvLyBjcmVhdGUgYW09cG0gYnV0dG9uXG5cblxuICBjcmVhdGVCdXR0b25zKCkge1xuICAgIGxldCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uV3JhcHBlci5jbGFzc05hbWUgPSAnbmotbWludXRlcy13cmFwcGVyJztcbiAgICBsZXQgbWludXRlcyA9IHRoaXMuY29uZmlnLm1pbnV0ZXMgfHwgWzAsIDE1LCAzMCwgNDVdO1xuICAgIGxldCBkaXNhYmxlZE1pbnV0ZXMgPSBBcnJheS5pc0FycmF5KHRoaXMuY29uZmlnLmRpc2FibGVkTWludXRlcykgPyB0aGlzLmNvbmZpZy5kaXNhYmxlZE1pbnV0ZXMgOiBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWludXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHR5cGVvZiBtaW51dGVzW2ldID09ICdudW1iZXInICYmIG1pbnV0ZXNbaV0gPCA2MCkge1xuICAgICAgICBzdXBlci5jcmVhdGVJdGVtKHtcbiAgICAgICAgICBjb250YWluZXI6IGJ1dHRvbldyYXBwZXIsXG4gICAgICAgICAgaW5uZXJUZXh0OiBtaW51dGVzW2ldLFxuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZE1pbnV0ZXMuaW5jbHVkZXMobWludXRlc1tpXSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZChidXR0b25XcmFwcGVyKTtcbiAgfVxuXG59IiwiKFxyXG4gIC8qKlxyXG4gICAqIEludGVyZmFjZSBmb3IgZXZlbnQgc3Vic2NyaXB0aW9uLlxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiB2YXIgTmFub0V2ZW50cyA9IHJlcXVpcmUoJ25hbm9ldmVudHMnKVxyXG4gICAqXHJcbiAgICogY2xhc3MgVGlja2VyIHtcclxuICAgKiAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAqICAgICB0aGlzLmVtaXR0ZXIgPSBuZXcgTmFub0V2ZW50cygpXHJcbiAgICogICB9XHJcbiAgICogICBvbigpIHtcclxuICAgKiAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5vbi5hcHBseSh0aGlzLmV2ZW50cywgYXJndW1lbnRzKVxyXG4gICAqICAgfVxyXG4gICAqICAgdGljaygpIHtcclxuICAgKiAgICAgdGhpcy5lbWl0dGVyLmVtaXQoJ3RpY2snKVxyXG4gICAqICAgfVxyXG4gICAqIH1cclxuICAgKlxyXG4gICAqIEBhbGlhcyBOYW5vRXZlbnRzXHJcbiAgICogQGNsYXNzXHJcbiAgICovXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBOYW5vRXZlbnRzICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogRXZlbnQgbmFtZXMgaW4ga2V5cyBhbmQgYXJyYXlzIHdpdGggbGlzdGVuZXJzIGluIHZhbHVlcy5cclxuICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgKlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIE9iamVjdC5rZXlzKGVlLmV2ZW50cylcclxuICAgICAqXHJcbiAgICAgKiBAYWxpYXMgTmFub0V2ZW50cyNldmVudHNcclxuICAgICAqL1xyXG4gICAgdGhpcy5ldmVudHMgPSB7IH1cclxuICB9XHJcbikucHJvdG90eXBlID0ge1xyXG5cclxuICAvKipcclxuICAgKiBDYWxscyBlYWNoIG9mIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cclxuICAgKiBAcGFyYW0gey4uLip9IGFyZ3VtZW50cyBUaGUgYXJndW1lbnRzIGZvciBsaXN0ZW5lcnMuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9XHJcbiAgICpcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIGVlLmVtaXQoJ3RpY2snLCB0aWNrVHlwZSwgdGlja0R1cmF0aW9uKVxyXG4gICAqXHJcbiAgICogQGFsaWFzIE5hbm9FdmVudHMjZW1pdFxyXG4gICAqIEBtZXRob2RcclxuICAgKi9cclxuICBlbWl0OiBmdW5jdGlvbiBlbWl0IChldmVudCkge1xyXG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcclxuICAgIC8vIEFycmF5LnByb3RvdHlwZS5jYWxsKCkgcmV0dXJucyBlbXB0eSBhcnJheSBpZiBjb250ZXh0IGlzIG5vdCBhcnJheS1saWtlXHJcbiAgICA7W10uc2xpY2UuY2FsbCh0aGlzLmV2ZW50c1tldmVudF0gfHwgW10pLmZpbHRlcihmdW5jdGlvbiAoaSkge1xyXG4gICAgICBpLmFwcGx5KG51bGwsIGFyZ3MpXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBhIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBVbmJpbmQgbGlzdGVuZXIgZnJvbSBldmVudC5cclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogY29uc3QgdW5iaW5kID0gZWUub24oJ3RpY2snLCAodGlja1R5cGUsIHRpY2tEdXJhdGlvbikgPT4ge1xyXG4gICAqICAgY291bnQgKz0gMVxyXG4gICAqIH0pXHJcbiAgICpcclxuICAgKiBkaXNhYmxlICgpIHtcclxuICAgKiAgIHVuYmluZCgpXHJcbiAgICogfVxyXG4gICAqXHJcbiAgICogQGFsaWFzIE5hbm9FdmVudHMjb25cclxuICAgKiBAbWV0aG9kXHJcbiAgICovXHJcbiAgb246IGZ1bmN0aW9uIG9uIChldmVudCwgY2IpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpXHJcbiAgICB9XHJcblxyXG4gICAgKHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XSB8fCBbXSkucHVzaChjYilcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB0aGlzLmV2ZW50c1tldmVudF0uZmlsdGVyKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgcmV0dXJuIGkgIT09IGNiXHJcbiAgICAgIH0pXHJcbiAgICB9LmJpbmQodGhpcylcclxuICB9XHJcbn1cclxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==