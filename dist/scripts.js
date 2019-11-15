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
      headerText: this.config.texts.ampm || 'AM/PM'
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
    save.innerText = this.config.texts.save || 'Save';

    save.onclick = () => {
      this.emitter.emit('save'); // emit plugin save event
    }; // attach click


    this.element.append(save);
  } // create close


  createClearButton() {
    let clear = document.createElement('div');
    clear.className = 'nj-action-button nj-action-clear';
    clear.innerText = this.config.texts.clear || 'Clear';

    clear.onclick = () => {
      this.emitter.emit('clear'); // emit plugin clear event
    };

    this.element.append(clear);
  } // create button


  createCloseButton() {
    let close = document.createElement('div');
    close.className = 'nj-action-button nj-action-close';
    close.innerText = this.config.texts.close || 'Close';

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

    if (this.config.headerText) {
      console.warn('headerText is deprecated and will be removed soon. Please use texts.header instead.');
    }

    this.element.textContent = this.config.headerText || this.config.texts.header;
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
      type: 'hours',
      headerText: this.config.texts.hours
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


    this.config = this.extend({
      options
    }); // checks for a valid target element

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
      texts: {
        header: '',
        hours: 'Hours',
        minutes: 'Minutes',
        close: 'Close',
        save: 'Save',
        clear: 'Clear',
        ampm: 'AM/PM'
      },
      headerText: '',
      id: Math.random().toString(36).substring(7),
      minutes: [0, 15, 30, 45],
      targetEl: null,
      targetID: null
    };
  } // merge user config with defaults


  extend({
    target = {},
    options,
    defaults = this.defaultConfig
  }) {
    Object.keys(defaults).forEach(key => {
      if (typeof defaults[key] == 'object' && key == 'texts') {
        target[key] = {};
        Object.keys(defaults[key]).forEach(e => {
          target[key][e] = options[key] && options[key][e] ? options[key][e] : defaults[key][e];
        });
      } else {
        target[key] = options[key] || defaults[key];
      }
    });
    return target;
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

    if (this.config.headerText || this.config.texts.header) {
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
  global.NJTimePicker.version = 'v1.3.100';
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
      type: 'minutes',
      headerText: this.config.texts.minutes
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC90bXAvYW1wbS9hbXBtLmpzIiwid2VicGFjazovLy8uL2Rpc3QvdG1wL2JhY2tncm91bmQvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3RtcC9iYXNlL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC90bXAvYnV0dG9uL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC90bXAvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3RtcC9ob3VyL2hvdXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC90bXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC90bXAvbWludXRlcy9taW51dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25hbm9ldmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtR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Q0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7QUMzRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Rpc3QvdG1wL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gJy4uL2Jhc2UvYmFzZSc7XG5leHBvcnQgY2xhc3MgUGlja2VyQU1QTSBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5jb25maWcgPSBvcHRpb25zO1xuICAgIHRoaXMuY3VycmVudFNlbGVjdGlvbiA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUgPSBudWxsO1xuICAgIHN1cGVyLmJ1aWxkKHtcbiAgICAgIHR5cGU6ICdhbXBtJyxcbiAgICAgIGhlYWRlclRleHQ6IHRoaXMuY29uZmlnLnRleHRzLmFtcG0gfHwgJ0FNL1BNJ1xuICAgIH0pO1xuICAgIHRoaXMuY3JlYXRlQnV0dG9ucygpO1xuICB9IC8vIGNyZWF0ZSBhbT1wbSBidXR0b25cblxuXG4gIGNyZWF0ZUJ1dHRvbnMoKSB7XG4gICAgbGV0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25XcmFwcGVyLmNsYXNzTmFtZSA9ICduai1hbXBtLXdyYXBwZXInO1xuICAgIHN1cGVyLmNyZWF0ZUl0ZW0oe1xuICAgICAgY29udGFpbmVyOiBidXR0b25XcmFwcGVyLFxuICAgICAgaW5uZXJUZXh0OiAnQU0nXG4gICAgfSk7XG4gICAgc3VwZXIuY3JlYXRlSXRlbSh7XG4gICAgICBjb250YWluZXI6IGJ1dHRvbldyYXBwZXIsXG4gICAgICBpbm5lclRleHQ6ICdQTSdcbiAgICB9KTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKGJ1dHRvbldyYXBwZXIpO1xuICB9XG5cbn0iLCJleHBvcnQgY2xhc3MgQmFja2dyb3VuZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkKCk7XG4gIH0gLy8gYnVpbGRcblxuXG4gIGJ1aWxkKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnbmotb3ZlcmxheSc7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDsgLy8gcmV0dXJuIHRoZSBlbGVtZW50IHRvIHBhcmVudFxuICB9XG5cbn0iLCJleHBvcnQgY2xhc3MgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmNvbmZpZyA9IG9wdGlvbnM7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IG51bGw7XG4gIH0gLy8gYnVpbGQgY29udGFuaWVyXG5cblxuICBidWlsZCh7XG4gICAgdHlwZSxcbiAgICBoZWFkZXJUZXh0XG4gIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gYG5qLSR7dHlwZX0tY29udGFpbmVyYDtcbiAgICB0aGlzLmNyZWF0ZUhlYWRlcih7XG4gICAgICBjbGFzc05hbWU6ICduai1zZWN0aW9uLWhlYWRlcicsXG4gICAgICBpbm5lclRleHQ6IGhlYWRlclRleHQgfHwgdHlwZSxcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudFxuICAgIH0pO1xuICB9IC8vIGNyZWF0ZSBoZWFkZXIgXG5cblxuICBjcmVhdGVIZWFkZXIoe1xuICAgIGNsYXNzTmFtZSxcbiAgICBpbm5lclRleHQsXG4gICAgZWxlbWVudFxuICB9KSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IGlubmVyVGV4dDtcbiAgICBlbGVtZW50LmFwcGVuZChoZWFkZXIpO1xuICB9IC8vIGNyZWF0ZSBlYWNoIGl0ZW0gXG5cblxuICBjcmVhdGVJdGVtKHtcbiAgICBjb250YWluZXIsXG4gICAgaW5uZXJUZXh0LFxuICAgIGRpc2FibGVkXG4gIH0pIHtcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0uY2xhc3NOYW1lID0gJ25qLWl0ZW0nO1xuICAgIGl0ZW0uaW5uZXJUZXh0ID0gaW5uZXJUZXh0O1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhJywgaW5uZXJUZXh0LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIH1cblxuICAgIGl0ZW0ub25jbGljayA9IHRoaXMuaXRlbUNsaWNrLmJpbmQodGhpcywgaXRlbSk7XG4gICAgY29udGFpbmVyLmFwcGVuZChpdGVtKTtcbiAgfSAvLyBpdGVtIGNsaWNrZWRcblxuXG4gIGl0ZW1DbGljayhpdGVtKSB7XG4gICAgaWYgKGl0ZW0uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5jdXJyZW50U2VsZWN0aW9uKSB7XG4gICAgICAvLyByZW1vdmUgcHJldmlvdXMgc2VsZWN0aW9uXG4gICAgICB0aGlzLmN1cnJlbnRTZWxlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICB9XG5cbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uID0gaXRlbTtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gIH0gLy8gc2V0cyB0aGUgY29tcG9uZW50IHZhbHVlXG5cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IGVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhPVwiJHt2YWx1ZX1cIl1gKTtcblxuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIHRoaXMuaXRlbUNsaWNrKGVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gZ2V0cyB0aGUgdmFsdWUgb2YgdGhlIGNvbXBvbmVudFxuXG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlO1xuICB9IC8vIHJlc2V0cyB0aGUgdmFsdWVcblxuXG4gIHJlc2V0VmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFNlbGVjdGlvbikge1xuICAgICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IG51bGw7XG4gIH1cblxufSIsImltcG9ydCBOYW5vRXZlbnRzIGZyb20gJ25hbm9ldmVudHMnO1xuZXhwb3J0IGNsYXNzIEFjdGlvbkJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmNvbmZpZyA9IG9wdGlvbnM7XG4gICAgdGhpcy5lbWl0dGVyID0gbmV3IE5hbm9FdmVudHMoKTtcbiAgfSAvLyBidWlsZFxuXG5cbiAgYnVpbGQoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICduai1hY3Rpb24tY29udGFpbmVyJztcbiAgICB0aGlzLmNyZWF0ZVNhdmVCdXR0b24oKTtcbiAgICB0aGlzLmNyZWF0ZUNsZWFyQnV0dG9uKCk7XG4gICAgdGhpcy5jcmVhdGVDbG9zZUJ1dHRvbigpO1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7IC8vIHJldHVybiB0aGUgZWxlbWVudCB0byBwYXJlbnRcbiAgfSAvLyBjcmVhdGUgc2F2ZSBidXR0b25cblxuXG4gIGNyZWF0ZVNhdmVCdXR0b24oKSB7XG4gICAgbGV0IHNhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYXZlLmNsYXNzTmFtZSA9ICduai1hY3Rpb24tYnV0dG9uIG5qLWFjdGlvbi1zYXZlJztcbiAgICBzYXZlLmlubmVyVGV4dCA9IHRoaXMuY29uZmlnLnRleHRzLnNhdmUgfHwgJ1NhdmUnO1xuXG4gICAgc2F2ZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoJ3NhdmUnKTsgLy8gZW1pdCBwbHVnaW4gc2F2ZSBldmVudFxuICAgIH07IC8vIGF0dGFjaCBjbGlja1xuXG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHNhdmUpO1xuICB9IC8vIGNyZWF0ZSBjbG9zZVxuXG5cbiAgY3JlYXRlQ2xlYXJCdXR0b24oKSB7XG4gICAgbGV0IGNsZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2xlYXIuY2xhc3NOYW1lID0gJ25qLWFjdGlvbi1idXR0b24gbmotYWN0aW9uLWNsZWFyJztcbiAgICBjbGVhci5pbm5lclRleHQgPSB0aGlzLmNvbmZpZy50ZXh0cy5jbGVhciB8fCAnQ2xlYXInO1xuXG4gICAgY2xlYXIub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdjbGVhcicpOyAvLyBlbWl0IHBsdWdpbiBjbGVhciBldmVudFxuICAgIH07XG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKGNsZWFyKTtcbiAgfSAvLyBjcmVhdGUgYnV0dG9uXG5cblxuICBjcmVhdGVDbG9zZUJ1dHRvbigpIHtcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjbG9zZS5jbGFzc05hbWUgPSAnbmotYWN0aW9uLWJ1dHRvbiBuai1hY3Rpb24tY2xvc2UnO1xuICAgIGNsb3NlLmlubmVyVGV4dCA9IHRoaXMuY29uZmlnLnRleHRzLmNsb3NlIHx8ICdDbG9zZSc7XG5cbiAgICBjbG9zZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoJ2Nsb3NlJyk7IC8vIGVtaXQgcGx1Z2luIGNsb3NlIGV2ZW50XG4gICAgfTtcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoY2xvc2UpO1xuICB9IC8vIGNyZWF0ZSBhbiBvbiBtZXRob2QgdG8gbWFzayBlbWl0dGVyIG9uXG5cblxuICBvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMuZW1pdHRlci5vbihuYW1lLCB2YWx1ZSk7XG4gIH1cblxufSIsImV4cG9ydCBjbGFzcyBIZWFkZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5jb25maWcgPSBvcHRpb25zO1xuICAgIHRoaXMuYnVpbGQoKTtcbiAgfVxuXG4gIGJ1aWxkKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnbmotaGVhZGVyLWNvbnRhaW5lcic7XG5cbiAgICBpZiAodGhpcy5jb25maWcuaGVhZGVyVGV4dCkge1xuICAgICAgY29uc29sZS53YXJuKCdoZWFkZXJUZXh0IGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBzb29uLiBQbGVhc2UgdXNlIHRleHRzLmhlYWRlciBpbnN0ZWFkLicpO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuY29uZmlnLmhlYWRlclRleHQgfHwgdGhpcy5jb25maWcudGV4dHMuaGVhZGVyO1xuICB9XG5cbn0iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSAnLi4vYmFzZS9iYXNlJztcbmV4cG9ydCBjbGFzcyBQaWNrZXJIb3VyIGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLmNvbmZpZyA9IG9wdGlvbnM7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IG51bGw7XG4gICAgc3VwZXIuYnVpbGQoe1xuICAgICAgdHlwZTogJ2hvdXJzJyxcbiAgICAgIGhlYWRlclRleHQ6IHRoaXMuY29uZmlnLnRleHRzLmhvdXJzXG4gICAgfSk7XG4gICAgdGhpcy5jcmVhdGVCdXR0b25zKCk7XG4gIH0gLy8gY3JlYXRlIGFtPXBtIGJ1dHRvblxuXG5cbiAgY3JlYXRlQnV0dG9ucygpIHtcbiAgICBsZXQgYnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbldyYXBwZXIuY2xhc3NOYW1lID0gJ25qLWhvdXJzLXdyYXBwZXInO1xuICAgIGxldCBidXR0b25MaW1pdCA9IHRoaXMuY29uZmlnLmZvcm1hdCA9PSAnMTInID8gMTIgOiAyMztcbiAgICBsZXQgYnV0dG9uU3RhcnQgPSB0aGlzLmNvbmZpZy5mb3JtYXQgPT0gJzEyJyA/IDEgOiAwO1xuICAgIGxldCBkaXNhYmxlZEhvdXJzID0gQXJyYXkuaXNBcnJheSh0aGlzLmNvbmZpZy5kaXNhYmxlZEhvdXJzKSA/IHRoaXMuY29uZmlnLmRpc2FibGVkSG91cnMgOiBbXTtcblxuICAgIGZvciAobGV0IGkgPSBidXR0b25TdGFydDsgaSA8PSBidXR0b25MaW1pdDsgaSsrKSB7XG4gICAgICBzdXBlci5jcmVhdGVJdGVtKHtcbiAgICAgICAgY29udGFpbmVyOiBidXR0b25XcmFwcGVyLFxuICAgICAgICBpbm5lclRleHQ6IGksXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZEhvdXJzLmluY2x1ZGVzKGkpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKGJ1dHRvbldyYXBwZXIpO1xuICB9XG5cbn0iLCJpbXBvcnQgeyBCYWNrZ3JvdW5kIH0gZnJvbSAnLi9iYWNrZ3JvdW5kL2JhY2tncm91bmQnO1xuaW1wb3J0IE5hbm9FdmVudHMgZnJvbSAnbmFub2V2ZW50cyc7XG5pbXBvcnQgeyBQaWNrZXJIb3VyIGFzIGhvdXJzIH0gZnJvbSAnLi9ob3VyL2hvdXInO1xuaW1wb3J0IHsgUGlja2VyTWludXRlIGFzIG1pbnV0ZXMgfSBmcm9tICcuL21pbnV0ZXMvbWludXRlJztcbmltcG9ydCB7IFBpY2tlckFNUE0gYXMgYW1wbSB9IGZyb20gJy4vYW1wbS9hbXBtJztcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vaGVhZGVyL2hlYWRlcic7XG5pbXBvcnQgeyBBY3Rpb25CdXR0b24gYXMgYnV0dG9ucyB9IGZyb20gJy4vYnV0dG9uL2J1dHRvbnMnO1xuZXhwb3J0IGNsYXNzIE5KVGltZVBpY2tlciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghb3B0aW9ucy50YXJnZXRFbCAmJiAhb3B0aW9ucy50YXJnZXRJRCkge1xuICAgICAgdGhyb3cgJ05KUGlja2VyIHJlcXVpcmVzIGEgdGFyZ2V0IGVsZW1lbnQodGFyZ2V0RWwpIG9yIHRhcmdldCBlbGVtZW50IElEKHRhcmdldElEKSc7XG4gICAgfSAvLyBtZXJnZSBvcHRpb25zIHdpdGggZGVmYXVsdCBjb25maWdcblxuXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmV4dGVuZCh7XG4gICAgICBvcHRpb25zXG4gICAgfSk7IC8vIGNoZWNrcyBmb3IgYSB2YWxpZCB0YXJnZXQgZWxlbWVudFxuXG4gICAgdGhpcy5jaGVja1RhcmdldCgpO1xuICAgIHRoaXMuZW1pdHRlciA9IG5ldyBOYW5vRXZlbnRzKCk7XG4gICAgdGhpcy5idWlsZCgpOyAvLyBidWlsZCB0aGUgcGlja2VyXG4gIH0gLy8gcGx1Z2luIGRlZmF1bHQgY29uZmlnXG5cblxuICBnZXQgZGVmYXVsdENvbmZpZygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZTogdHJ1ZSxcbiAgICAgIGRpc2FibGVkTWludXRlczogW10sXG4gICAgICBkaXNhYmxlZEhvdXJzOiBbXSxcbiAgICAgIGZvcm1hdDogJzEyJyxcbiAgICAgIHRleHRzOiB7XG4gICAgICAgIGhlYWRlcjogJycsXG4gICAgICAgIGhvdXJzOiAnSG91cnMnLFxuICAgICAgICBtaW51dGVzOiAnTWludXRlcycsXG4gICAgICAgIGNsb3NlOiAnQ2xvc2UnLFxuICAgICAgICBzYXZlOiAnU2F2ZScsXG4gICAgICAgIGNsZWFyOiAnQ2xlYXInLFxuICAgICAgICBhbXBtOiAnQU0vUE0nXG4gICAgICB9LFxuICAgICAgaGVhZGVyVGV4dDogJycsXG4gICAgICBpZDogTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLFxuICAgICAgbWludXRlczogWzAsIDE1LCAzMCwgNDVdLFxuICAgICAgdGFyZ2V0RWw6IG51bGwsXG4gICAgICB0YXJnZXRJRDogbnVsbFxuICAgIH07XG4gIH0gLy8gbWVyZ2UgdXNlciBjb25maWcgd2l0aCBkZWZhdWx0c1xuXG5cbiAgZXh0ZW5kKHtcbiAgICB0YXJnZXQgPSB7fSxcbiAgICBvcHRpb25zLFxuICAgIGRlZmF1bHRzID0gdGhpcy5kZWZhdWx0Q29uZmlnXG4gIH0pIHtcbiAgICBPYmplY3Qua2V5cyhkZWZhdWx0cykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBkZWZhdWx0c1trZXldID09ICdvYmplY3QnICYmIGtleSA9PSAndGV4dHMnKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGRlZmF1bHRzW2tleV0pLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgdGFyZ2V0W2tleV1bZV0gPSBvcHRpb25zW2tleV0gJiYgb3B0aW9uc1trZXldW2VdID8gb3B0aW9uc1trZXldW2VdIDogZGVmYXVsdHNba2V5XVtlXTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRba2V5XSA9IG9wdGlvbnNba2V5XSB8fCBkZWZhdWx0c1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0gLy8gY2hlY2sgaWYgdGhlIHRhcmdldCBlbGVtZW50IGV4aXN0IGluIHRoZSBkb21cblxuXG4gIGNoZWNrVGFyZ2V0KCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy50YXJnZXRFbCkge1xuICAgICAgLy8gY2hlY2sgZm9yIHZhbGlkIGRvbSBlbGVtZW50XG4gICAgICBpZiAodGhpcy5jb25maWcudGFyZ2V0RWwubm9kZVR5cGUgIT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgdGhyb3cgJ3RhcmdldEVsIGRvZXMgbm90IGV4aXN0IGluIHRoZSBkb20nO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRhcmdldEVsZW1lbnQgPSB0aGlzLmNvbmZpZy50YXJnZXRFbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLnRhcmdldElEKSB7XG4gICAgICAvLyBjaGVjayBmb3IgdmFsaWQgZG9tIGVsZW1lbnQgd2l0aCBJRCB0YXJnZXRJRFxuICAgICAgdGhpcy50YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5jb25maWcudGFyZ2V0SUR9YCk7XG5cbiAgICAgIGlmICghdGhpcy50YXJnZXRFbGVtZW50KSB7XG4gICAgICAgIHRocm93ICd0YXJnZXRJRCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgZG9tJztcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gc2V0IHRoZSBvcHRpb25zIGZvciBidWlsZGluZyB0aGUgcGx1Z2luXG5cblxuICBidWlsZCgpIHtcbiAgICAvLyBhdHRhY2ggdGhlIGNsaWNrIHRvIHNob3cgcGlja2VyXG4gICAgdGhpcy50YXJnZXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93LmJpbmQodGhpcykpOyAvLyBjcmVhdGUgcGlja2VyIHdyYXBwZXIgZGl2XG5cbiAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbmotcGlja2VyJyk7XG4gICAgdGhpcy53cmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmNvbmZpZy5pZCk7IC8vIGluaXQgdGhlIG92ZXJsYXlcblxuICAgIHRoaXMub3ZlcmxheSA9IG5ldyBCYWNrZ3JvdW5kKCk7XG5cbiAgICBpZiAodGhpcy5jb25maWcuY2xpY2tPdXRzaWRlVG9DbG9zZSkge1xuICAgICAgLy8gY2hlY2sgaWYgY2xpY2tPdXRzaWRlVG9DbG9zZSBpcyB0cnVlXG4gICAgICB0aGlzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGUuYmluZCh0aGlzKSk7XG4gICAgfSAvLyBhcHBlbmQgdGhlIG92ZXJsYXkgdG8gdGhlIHBpY2tlciB3cmFwcGVyXG5cblxuICAgIHRoaXMud3JhcHBlci5hcHBlbmQodGhpcy5vdmVybGF5KTsgLy8gY3JlYXRlIHRoZSBjb250YWluZXJcblxuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmotcGlja2VyLWNvbnRhaW5lcicpOyAvLyBjcmVhdGUgaGVhZGVyXG5cbiAgICBpZiAodGhpcy5jb25maWcuaGVhZGVyVGV4dCB8fCB0aGlzLmNvbmZpZy50ZXh0cy5oZWFkZXIpIHtcbiAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcih0aGlzLmNvbmZpZyk7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5oZWFkZXIuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5idWlsZEhvdXJzKCk7XG4gICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcbiAgICB0aGlzLmJ1aWxkQU1QTSgpOyAvLyBjb25maWd1cmUgYW1wbSBjb250YWluZXJcblxuICAgIHRoaXMuYnVpbGRCdXR0b25zKCk7IC8vIGNvbmZpZ3VyZSBwaWNrZXIgYnV0dG9uc1xuICAgIC8vIGF0dGFjaCB0aGUgcGlja2VyIGNvbnRhaW5lciB0byB0aGUgd3JhcHBlclxuXG4gICAgdGhpcy53cmFwcGVyLmFwcGVuZCh0aGlzLmNvbnRhaW5lcik7IC8vIGF0dGFjaCB0aGUgcGlja2VyIHdyYXBwZXIgdG8gdGhlIGRvbVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy53cmFwcGVyKTtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCgncmVhZHknKTsgLy8gZW1pdCB0aGUgcGx1Z2luIHJlYWR5IGV2ZW50XG4gIH0gLy8gc2hvd3MgdGhlIHBpY2tlclxuXG5cbiAgc2hvdygpIHtcbiAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbmotcGlja2VyLXNob3cnKTtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnc2hvdycpOyAvLyBlbWl0IHBsdWdpbiBzaG93IGV2ZW50XG4gIH0gLy8gaGlkZXMgdGhlIHBpY2tlclxuXG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnbmotcGlja2VyLXNob3cnKTtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnaGlkZScpOyAvLyBlbWl0IHRoZSBwbHVnaW4gaGlkZSBldmVudFxuICB9IC8vIGNyZWF0ZSBidXR0b25zIGNvbnRpYW5lclxuXG5cbiAgYnVpbGRCdXR0b25zKCkge1xuICAgIHRoaXMuYnV0dG9ucyA9IG5ldyBidXR0b25zKHRoaXMuY29uZmlnKTtcbiAgICB0aGlzLmJ1dHRvbnMub24oJ3NhdmUnLCAoKSA9PiB7XG4gICAgICAvLyBzZXQgdGhlIHZhbHVlIG9mIHRoZSB0YXJnZXQgaWYgaXRzIGFuIGlucHV0IFxuICAgICAgaWYgKHRoaXMudGFyZ2V0RWxlbWVudC50eXBlID09ICd0ZXh0JyAmJiB0aGlzLnRhcmdldEVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcpIHtcbiAgICAgICAgdGhpcy50YXJnZXRFbGVtZW50LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLmZ1bGxSZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdzYXZlJywgdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuYnV0dG9ucy5vbignY2xlYXInLCAoKSA9PiB7XG4gICAgICB0aGlzLmhvdXJzLnJlc2V0VmFsdWUoKTsgLy8gcmVzZXRzIHRoZSBob3Vyc1xuXG4gICAgICB0aGlzLm1pbnV0ZXMucmVzZXRWYWx1ZSgpOyAvLyByZXNldCBtaW51dGVzXG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5mb3JtYXQgPT0gJzEyJykge1xuICAgICAgICB0aGlzLmFtcG0ucmVzZXRWYWx1ZSgpOyAvLyByZXNldHMgYW0tcG1cbiAgICAgIH1cblxuICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoJ2NsZWFyJyk7XG4gICAgfSk7XG4gICAgdGhpcy5idXR0b25zLm9uKCdjbG9zZScsICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdjbG9zZScpO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuYnV0dG9ucy5idWlsZCh0aGlzLmNvbmZpZykpO1xuICB9IC8vIGNyZWF0ZSBob3VycyBjb250aWFuZXJcblxuXG4gIGJ1aWxkSG91cnMoKSB7XG4gICAgdGhpcy5ob3VycyA9IG5ldyBob3Vycyh0aGlzLmNvbmZpZyk7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuaG91cnMuZWxlbWVudCk7XG4gIH0gLy8gY3JlYXRlIG1pbnV0ZXMgY29udGlhbmVyXG5cblxuICBidWlsZE1pbnV0ZXMoKSB7XG4gICAgdGhpcy5taW51dGVzID0gbmV3IG1pbnV0ZXModGhpcy5jb25maWcpO1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLm1pbnV0ZXMuZWxlbWVudCk7XG4gIH0gLy8gY3JlYXRlIGFtcG0gY29udGlhbmVyXG5cblxuICBidWlsZEFNUE0oKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmZvcm1hdCA9PSAnMTInKSB7XG4gICAgICB0aGlzLmFtcG0gPSBuZXcgYW1wbSh0aGlzLmNvbmZpZyk7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5hbXBtLmVsZW1lbnQpO1xuICAgIH1cbiAgfSAvLyBnZXQgdGhlIHBpY2tlciB2YWx1ZVxuXG5cbiAgZ2V0VmFsdWUoa2V5KSB7XG4gICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgIGhvdXJzOiB0aGlzLmhvdXJzLmdldFZhbHVlKCksXG4gICAgICBtaW51dGVzOiB0aGlzLm1pbnV0ZXMuZ2V0VmFsdWUoKSxcbiAgICAgIGZ1bGxSZXN1bHQ6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5jb25maWcuZm9ybWF0ID09ICcxMicpIHtcbiAgICAgIHJlc3VsdC5hbXBtID0gdGhpcy5hbXBtLmdldFZhbHVlKCk7XG4gICAgICBpZiAocmVzdWx0LmhvdXJzICYmIHJlc3VsdC5taW51dGVzICYmIHJlc3VsdC5hbXBtKSByZXN1bHQuZnVsbFJlc3VsdCA9IGAkeyhcIjBcIiArIHJlc3VsdC5ob3Vycykuc2xpY2UoLTIpfTokeyhcIjBcIiArIHJlc3VsdC5taW51dGVzKS5zbGljZSgtMil9ICR7cmVzdWx0LmFtcG19YDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlc3VsdC5ob3VycyAmJiByZXN1bHQubWludXRlcykgcmVzdWx0LmZ1bGxSZXN1bHQgPSBgJHsoXCIwXCIgKyByZXN1bHQuaG91cnMpLnNsaWNlKC0yKX06JHsoXCIwXCIgKyByZXN1bHQubWludXRlcykuc2xpY2UoLTIpfWA7XG4gICAgfVxuXG4gICAgaWYgKGtleSkge1xuICAgICAgcmV0dXJuIHJlc3VsdFtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQgfHwge307XG4gIH0gLy8gc2V0IHBpY2tlciB2YWx1ZVxuXG5cbiAgc2V0VmFsdWUoaW5wdXQpIHtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBoaDptbSBhbVxuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHNwbGl0XzEgPSBpbnB1dC5zcGxpdCgnOicpO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygc3BsaXRfMVswXSAhPSAndW5kZWZpbmVkJyAmJiBzcGxpdF8xWzBdICE9ICcnKSB7XG4gICAgICAgICAgdGhpcy5ob3Vycy5zZXRWYWx1ZShzcGxpdF8xWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygc3BsaXRfMVsxXSAhPSAndW5kZWZpbmVkJyAmJiBzcGxpdF8xWzFdICE9ICcnKSB7XG4gICAgICAgICAgbGV0IHNwbGl0XzIgPSBzcGxpdF8xWzFdLnNwbGl0KCcgJyk7XG4gICAgICAgICAgdGhpcy5taW51dGVzLnNldFZhbHVlKHNwbGl0XzJbMF0pO1xuICAgICAgICAgIHRoaXMuYW1wbS5zZXRWYWx1ZShzcGxpdF8yWzFdKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkgey8vXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChpbnB1dC5rZXkgJiYgdHlwZW9mIGlucHV0LnZhbHVlICE9ICd1bmRlZmluZWQnICYmIHRoaXNbaW5wdXQua2V5XSkge1xuICAgICAgICB0aGlzW2lucHV0LmtleV0uc2V0VmFsdWUoaW5wdXQudmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gY3JlYXRlIGFuIG9uIG1ldGhvZCB0byBtYXNrIGVtaXR0ZXIgb25cblxuXG4gIG9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5lbWl0dGVyLm9uKG5hbWUsIHZhbHVlKTtcbiAgfVxuXG59XG5cbmlmICh0eXBlb2YgZ2xvYmFsID09PSAnb2JqZWN0JyAmJiAhZ2xvYmFsLk5KVGltZVBpY2tlcikge1xuICBnbG9iYWwuTkpUaW1lUGlja2VyID0gTkpUaW1lUGlja2VyO1xuICBnbG9iYWwuTkpUaW1lUGlja2VyLnZlcnNpb24gPSAndjEuMy4xMDAnO1xufSIsImltcG9ydCB7IEJhc2UgfSBmcm9tICcuLi9iYXNlL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIFBpY2tlck1pbnV0ZSBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5jb25maWcgPSBvcHRpb25zO1xuICAgIHRoaXMuY3VycmVudFNlbGVjdGlvbiA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUgPSBudWxsO1xuICAgIHN1cGVyLmJ1aWxkKHtcbiAgICAgIHR5cGU6ICdtaW51dGVzJyxcbiAgICAgIGhlYWRlclRleHQ6IHRoaXMuY29uZmlnLnRleHRzLm1pbnV0ZXNcbiAgICB9KTtcbiAgICB0aGlzLmNyZWF0ZUJ1dHRvbnMoKTtcbiAgfSAvLyBjcmVhdGUgYW09cG0gYnV0dG9uXG5cblxuICBjcmVhdGVCdXR0b25zKCkge1xuICAgIGxldCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uV3JhcHBlci5jbGFzc05hbWUgPSAnbmotbWludXRlcy13cmFwcGVyJztcbiAgICBsZXQgbWludXRlcyA9IHRoaXMuY29uZmlnLm1pbnV0ZXMgfHwgWzAsIDE1LCAzMCwgNDVdO1xuICAgIGxldCBkaXNhYmxlZE1pbnV0ZXMgPSBBcnJheS5pc0FycmF5KHRoaXMuY29uZmlnLmRpc2FibGVkTWludXRlcykgPyB0aGlzLmNvbmZpZy5kaXNhYmxlZE1pbnV0ZXMgOiBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWludXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHR5cGVvZiBtaW51dGVzW2ldID09ICdudW1iZXInICYmIG1pbnV0ZXNbaV0gPCA2MCkge1xuICAgICAgICBzdXBlci5jcmVhdGVJdGVtKHtcbiAgICAgICAgICBjb250YWluZXI6IGJ1dHRvbldyYXBwZXIsXG4gICAgICAgICAgaW5uZXJUZXh0OiBtaW51dGVzW2ldLFxuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZE1pbnV0ZXMuaW5jbHVkZXMobWludXRlc1tpXSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZChidXR0b25XcmFwcGVyKTtcbiAgfVxuXG59IiwiKFxyXG4gIC8qKlxyXG4gICAqIEludGVyZmFjZSBmb3IgZXZlbnQgc3Vic2NyaXB0aW9uLlxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiB2YXIgTmFub0V2ZW50cyA9IHJlcXVpcmUoJ25hbm9ldmVudHMnKVxyXG4gICAqXHJcbiAgICogY2xhc3MgVGlja2VyIHtcclxuICAgKiAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAqICAgICB0aGlzLmVtaXR0ZXIgPSBuZXcgTmFub0V2ZW50cygpXHJcbiAgICogICB9XHJcbiAgICogICBvbigpIHtcclxuICAgKiAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5vbi5hcHBseSh0aGlzLmV2ZW50cywgYXJndW1lbnRzKVxyXG4gICAqICAgfVxyXG4gICAqICAgdGljaygpIHtcclxuICAgKiAgICAgdGhpcy5lbWl0dGVyLmVtaXQoJ3RpY2snKVxyXG4gICAqICAgfVxyXG4gICAqIH1cclxuICAgKlxyXG4gICAqIEBhbGlhcyBOYW5vRXZlbnRzXHJcbiAgICogQGNsYXNzXHJcbiAgICovXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBOYW5vRXZlbnRzICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogRXZlbnQgbmFtZXMgaW4ga2V5cyBhbmQgYXJyYXlzIHdpdGggbGlzdGVuZXJzIGluIHZhbHVlcy5cclxuICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgKlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIE9iamVjdC5rZXlzKGVlLmV2ZW50cylcclxuICAgICAqXHJcbiAgICAgKiBAYWxpYXMgTmFub0V2ZW50cyNldmVudHNcclxuICAgICAqL1xyXG4gICAgdGhpcy5ldmVudHMgPSB7IH1cclxuICB9XHJcbikucHJvdG90eXBlID0ge1xyXG5cclxuICAvKipcclxuICAgKiBDYWxscyBlYWNoIG9mIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cclxuICAgKiBAcGFyYW0gey4uLip9IGFyZ3VtZW50cyBUaGUgYXJndW1lbnRzIGZvciBsaXN0ZW5lcnMuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9XHJcbiAgICpcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIGVlLmVtaXQoJ3RpY2snLCB0aWNrVHlwZSwgdGlja0R1cmF0aW9uKVxyXG4gICAqXHJcbiAgICogQGFsaWFzIE5hbm9FdmVudHMjZW1pdFxyXG4gICAqIEBtZXRob2RcclxuICAgKi9cclxuICBlbWl0OiBmdW5jdGlvbiBlbWl0IChldmVudCkge1xyXG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcclxuICAgIC8vIEFycmF5LnByb3RvdHlwZS5jYWxsKCkgcmV0dXJucyBlbXB0eSBhcnJheSBpZiBjb250ZXh0IGlzIG5vdCBhcnJheS1saWtlXHJcbiAgICA7W10uc2xpY2UuY2FsbCh0aGlzLmV2ZW50c1tldmVudF0gfHwgW10pLmZpbHRlcihmdW5jdGlvbiAoaSkge1xyXG4gICAgICBpLmFwcGx5KG51bGwsIGFyZ3MpXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBhIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBVbmJpbmQgbGlzdGVuZXIgZnJvbSBldmVudC5cclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogY29uc3QgdW5iaW5kID0gZWUub24oJ3RpY2snLCAodGlja1R5cGUsIHRpY2tEdXJhdGlvbikgPT4ge1xyXG4gICAqICAgY291bnQgKz0gMVxyXG4gICAqIH0pXHJcbiAgICpcclxuICAgKiBkaXNhYmxlICgpIHtcclxuICAgKiAgIHVuYmluZCgpXHJcbiAgICogfVxyXG4gICAqXHJcbiAgICogQGFsaWFzIE5hbm9FdmVudHMjb25cclxuICAgKiBAbWV0aG9kXHJcbiAgICovXHJcbiAgb246IGZ1bmN0aW9uIG9uIChldmVudCwgY2IpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpXHJcbiAgICB9XHJcblxyXG4gICAgKHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XSB8fCBbXSkucHVzaChjYilcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB0aGlzLmV2ZW50c1tldmVudF0uZmlsdGVyKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgcmV0dXJuIGkgIT09IGNiXHJcbiAgICAgIH0pXHJcbiAgICB9LmJpbmQodGhpcylcclxuICB9XHJcbn1cclxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==