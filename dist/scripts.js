(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
    const element = document.createElement('div');
    element.className = 'nj-overlay';
    return element; // return the element to parent
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
    this.resetValue();
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
    let el = this.element.querySelector(`div[data="${value}"]`);

    if (el) {
      this.itemClick(el);
    }
  } // gets the value of the component


  getValue() {
    return this.currentValue;
  } // resets the value


  resetValue() {
    if (this.currentSelection) {
      this.currentSelection.classList.remove('selected');
    }

    this.currentSelection = this.currentValue = null;
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
class ActionButton {
  constructor(options, emitter) {
    this.config = options;
    this.emitter = emitter;
  } // build


  build() {
    this.element = document.createElement('div');
    this.element.className = 'nj-action-container';
    this.createButton({
      type: 'save',
      text: this.config.texts.save || 'Save'
    });
    this.createButton({
      type: 'clear',
      text: this.config.texts.clear || 'Clear'
    });
    this.createButton({
      type: 'close',
      text: this.config.texts.close || 'Close'
    });
    return this.element; // return the element to parent
  } // create picker button


  createButton({
    type,
    text
  }) {
    let el = document.createElement('div');
    el.className = `nj-action-button nj-action-${type}`;
    el.innerText = text;

    el.onclick = () => {
      this.emitter.emit('btn-' + text.toLocaleLowerCase()); // emit plugin save event
    }; // attach click


    this.element.append(el);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NJTimePicker", function() { return NJTimePicker; });
/* harmony import */ var _background_background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background/background */ "./dist/tmp/background/background.js");
/* harmony import */ var nj_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nj-events */ "./node_modules/nj-events/src/index.js");
/* harmony import */ var _hour_hour__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hour/hour */ "./dist/tmp/hour/hour.js");
/* harmony import */ var _minutes_minute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minutes/minute */ "./dist/tmp/minutes/minute.js");
/* harmony import */ var _ampm_ampm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ampm/ampm */ "./dist/tmp/ampm/ampm.js");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header */ "./dist/tmp/header/header.js");
/* harmony import */ var _button_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button/buttons */ "./dist/tmp/button/buttons.js");







class NJTimePicker {
  constructor(options = {}) {
    // checks for a valid target element
    this.checkTarget(options.targetEl || options.targetID); // merge options with default config

    this.config = this.extend({
      options
    });
    this.emitter = new nj_events__WEBPACK_IMPORTED_MODULE_1__["default"]();
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


  checkTarget(el) {
    if (el instanceof HTMLElement) {
      // check for valid dom element
      this.targetElement = el;
    } else if (document.querySelector(`#${el}`)) {
      // check for valid dom element with ID targetID
      this.targetElement = document.querySelector(`#${el}`);
    } else {
      throw 'NJPicker requires a valid target element(targetEl) or target element ID(targetID)';
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

    this.buildItems();
    this.buildButtons(); // configure picker buttons
    // attach the picker container to the wrapper

    this.wrapper.append(this.container); // attach the picker wrapper to the dom

    document.body.append(this.wrapper);
    this.emitter.emit('ready'); // emit the plugin ready event
  } // create buttons contianer


  buildButtons() {
    this.buttons = new _button_buttons__WEBPACK_IMPORTED_MODULE_6__["ActionButton"](this.config, this.emitter);
    this.emitter.on('btn-save', () => {
      // set the value of the target if its an input 
      if (this.targetElement.type == 'text' && this.targetElement.nodeName === 'INPUT') {
        this.targetElement.value = this.getValue().fullResult;
      }

      this.emitter.emit('save', this.getValue());
      this.hide();
    });
    this.emitter.on('btn-clear', () => {
      this.hours.resetValue(); // resets the hours

      this.minutes.resetValue(); // reset minutes

      if (this.config.format == '12') {
        this.ampm.resetValue(); // resets am-pm
      }

      this.emitter.emit('clear');
    });
    this.emitter.on('btn-close', () => {
      this.emitter.emit('close');
      this.hide();
    });
    this.container.append(this.buttons.build(this.config));
  } // build individual items


  buildItems() {
    // create hours contianer
    this.hours = new _hour_hour__WEBPACK_IMPORTED_MODULE_2__["PickerHour"](this.config);
    this.container.append(this.hours.element); // create minutes contianer

    this.minutes = new _minutes_minute__WEBPACK_IMPORTED_MODULE_3__["PickerMinute"](this.config);
    this.container.append(this.minutes.element); // create ampm contianer

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
  } // shows the picker


  show() {
    this.wrapper.classList.add('nj-picker-show');
    this.emitter.emit('show'); // emit plugin show event
  } // hides the picker


  hide() {
    this.wrapper.classList.remove('nj-picker-show');
    this.emitter.emit('hide'); // emit the plugin hide event
  } // create an on method to mask emitter on


  on(name, value) {
    this.emitter.on(name, value);
  }

}

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
    minutes.forEach(minute => {
      if (typeof minute == 'number' && minute < 60) {
        super.createItem({
          container: buttonWrapper,
          innerText: minute,
          disabled: disabledMinutes.includes(minute)
        });
      }
    });
    this.element.append(buttonWrapper);
  }

}

/***/ }),

/***/ "./node_modules/nj-events/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/nj-events/src/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NJEvents; });
class NJEvents {
    constructor() {
        this.events = {};
        this.listeners = {};
    }

    /**
     * register event
     * @param {string} event
     * @param {function} cb
     * @param {string} id
     */
    on(name, cb, id) {
        if (typeof (cb) != 'function') {
            throw ('invalid listener.');
        }
        let evID = id || Math.random().toString(36).substring(7);
        (this.events[name] = this.events[name] || []).push(evID);
        this.listeners[evID] = {
            cb: cb, // call back
            ev: name // event name
        };
        return evID;
    }
    /** 
     * register a one time event 
    */
    once(event, listener, id) {
        let key = this.on(event, listener, id);
        this.listeners[key].once = true;
    }
    /**
     * unregister event
     * @param {string} event 
     * @param {string} evID 
     */
    off(key) {
        if (this.events[key]) { // check if key matches a event name
            this.events[key].forEach(ev => {
                delete this.listeners[ev];
            });
            delete this.events[key];
        } else if (this.listeners[key]) { // check if key matches a listener name
            let listener = this.listeners[key];
            let event = this.events[listener.ev];
            event.splice(key, 1);
            delete this.listeners[key];
        }
    }
    /**
     * emit event
     * @param {string} event 
     */
    emit(name) {
        var args = [].slice.call(arguments, 1);
        (this.events[name] || []).forEach(key => {
            let listener = this.listeners[key];
            listener.cb(args.length == 1 ? args[0] : args);
            if (listener.once)
                this.off(name);
        });
    }
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9kaXN0L3RtcC9hbXBtL2FtcG0uanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC90bXAvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL2Rpc3QvdG1wL2Jhc2UvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3RtcC9idXR0b24vYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3RtcC9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Rpc3QvdG1wL2hvdXIvaG91ci5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3RtcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3RtcC9taW51dGVzL21pbnV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmotZXZlbnRzL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7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a1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Rpc3QvdG1wL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gJy4uL2Jhc2UvYmFzZSc7XG5leHBvcnQgY2xhc3MgUGlja2VyQU1QTSBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5jb25maWcgPSBvcHRpb25zO1xuICAgIHRoaXMuY3VycmVudFNlbGVjdGlvbiA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUgPSBudWxsO1xuICAgIHN1cGVyLmJ1aWxkKHtcbiAgICAgIHR5cGU6ICdhbXBtJyxcbiAgICAgIGhlYWRlclRleHQ6IHRoaXMuY29uZmlnLnRleHRzLmFtcG0gfHwgJ0FNL1BNJ1xuICAgIH0pO1xuICAgIHRoaXMuY3JlYXRlQnV0dG9ucygpO1xuICB9IC8vIGNyZWF0ZSBhbT1wbSBidXR0b25cblxuXG4gIGNyZWF0ZUJ1dHRvbnMoKSB7XG4gICAgbGV0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25XcmFwcGVyLmNsYXNzTmFtZSA9ICduai1hbXBtLXdyYXBwZXInO1xuICAgIHN1cGVyLmNyZWF0ZUl0ZW0oe1xuICAgICAgY29udGFpbmVyOiBidXR0b25XcmFwcGVyLFxuICAgICAgaW5uZXJUZXh0OiAnQU0nXG4gICAgfSk7XG4gICAgc3VwZXIuY3JlYXRlSXRlbSh7XG4gICAgICBjb250YWluZXI6IGJ1dHRvbldyYXBwZXIsXG4gICAgICBpbm5lclRleHQ6ICdQTSdcbiAgICB9KTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKGJ1dHRvbldyYXBwZXIpO1xuICB9XG5cbn0iLCJleHBvcnQgY2xhc3MgQmFja2dyb3VuZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICduai1vdmVybGF5JztcbiAgICByZXR1cm4gZWxlbWVudDsgLy8gcmV0dXJuIHRoZSBlbGVtZW50IHRvIHBhcmVudFxuICB9XG5cbn0iLCJleHBvcnQgY2xhc3MgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmNvbmZpZyA9IG9wdGlvbnM7XG4gICAgdGhpcy5yZXNldFZhbHVlKCk7XG4gIH0gLy8gYnVpbGQgY29udGFuaWVyXG5cblxuICBidWlsZCh7XG4gICAgdHlwZSxcbiAgICBoZWFkZXJUZXh0XG4gIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gYG5qLSR7dHlwZX0tY29udGFpbmVyYDtcbiAgICB0aGlzLmNyZWF0ZUhlYWRlcih7XG4gICAgICBjbGFzc05hbWU6ICduai1zZWN0aW9uLWhlYWRlcicsXG4gICAgICBpbm5lclRleHQ6IGhlYWRlclRleHQgfHwgdHlwZSxcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudFxuICAgIH0pO1xuICB9IC8vIGNyZWF0ZSBoZWFkZXIgXG5cblxuICBjcmVhdGVIZWFkZXIoe1xuICAgIGNsYXNzTmFtZSxcbiAgICBpbm5lclRleHQsXG4gICAgZWxlbWVudFxuICB9KSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IGlubmVyVGV4dDtcbiAgICBlbGVtZW50LmFwcGVuZChoZWFkZXIpO1xuICB9IC8vIGNyZWF0ZSBlYWNoIGl0ZW0gXG5cblxuICBjcmVhdGVJdGVtKHtcbiAgICBjb250YWluZXIsXG4gICAgaW5uZXJUZXh0LFxuICAgIGRpc2FibGVkXG4gIH0pIHtcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0uY2xhc3NOYW1lID0gJ25qLWl0ZW0nO1xuICAgIGl0ZW0uaW5uZXJUZXh0ID0gaW5uZXJUZXh0O1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhJywgaW5uZXJUZXh0LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIH1cblxuICAgIGl0ZW0ub25jbGljayA9IHRoaXMuaXRlbUNsaWNrLmJpbmQodGhpcywgaXRlbSk7XG4gICAgY29udGFpbmVyLmFwcGVuZChpdGVtKTtcbiAgfSAvLyBpdGVtIGNsaWNrZWRcblxuXG4gIGl0ZW1DbGljayhpdGVtKSB7XG4gICAgaWYgKGl0ZW0uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5jdXJyZW50U2VsZWN0aW9uKSB7XG4gICAgICAvLyByZW1vdmUgcHJldmlvdXMgc2VsZWN0aW9uXG4gICAgICB0aGlzLmN1cnJlbnRTZWxlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICB9XG5cbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uID0gaXRlbTtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gIH0gLy8gc2V0cyB0aGUgY29tcG9uZW50IHZhbHVlXG5cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGxldCBlbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YT1cIiR7dmFsdWV9XCJdYCk7XG5cbiAgICBpZiAoZWwpIHtcbiAgICAgIHRoaXMuaXRlbUNsaWNrKGVsKTtcbiAgICB9XG4gIH0gLy8gZ2V0cyB0aGUgdmFsdWUgb2YgdGhlIGNvbXBvbmVudFxuXG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlO1xuICB9IC8vIHJlc2V0cyB0aGUgdmFsdWVcblxuXG4gIHJlc2V0VmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFNlbGVjdGlvbikge1xuICAgICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50U2VsZWN0aW9uID0gdGhpcy5jdXJyZW50VmFsdWUgPSBudWxsO1xuICB9XG5cbn0iLCJleHBvcnQgY2xhc3MgQWN0aW9uQnV0dG9uIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucywgZW1pdHRlcikge1xuICAgIHRoaXMuY29uZmlnID0gb3B0aW9ucztcbiAgICB0aGlzLmVtaXR0ZXIgPSBlbWl0dGVyO1xuICB9IC8vIGJ1aWxkXG5cblxuICBidWlsZCgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ25qLWFjdGlvbi1jb250YWluZXInO1xuICAgIHRoaXMuY3JlYXRlQnV0dG9uKHtcbiAgICAgIHR5cGU6ICdzYXZlJyxcbiAgICAgIHRleHQ6IHRoaXMuY29uZmlnLnRleHRzLnNhdmUgfHwgJ1NhdmUnXG4gICAgfSk7XG4gICAgdGhpcy5jcmVhdGVCdXR0b24oe1xuICAgICAgdHlwZTogJ2NsZWFyJyxcbiAgICAgIHRleHQ6IHRoaXMuY29uZmlnLnRleHRzLmNsZWFyIHx8ICdDbGVhcidcbiAgICB9KTtcbiAgICB0aGlzLmNyZWF0ZUJ1dHRvbih7XG4gICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgdGV4dDogdGhpcy5jb25maWcudGV4dHMuY2xvc2UgfHwgJ0Nsb3NlJ1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7IC8vIHJldHVybiB0aGUgZWxlbWVudCB0byBwYXJlbnRcbiAgfSAvLyBjcmVhdGUgcGlja2VyIGJ1dHRvblxuXG5cbiAgY3JlYXRlQnV0dG9uKHtcbiAgICB0eXBlLFxuICAgIHRleHRcbiAgfSkge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsLmNsYXNzTmFtZSA9IGBuai1hY3Rpb24tYnV0dG9uIG5qLWFjdGlvbi0ke3R5cGV9YDtcbiAgICBlbC5pbm5lclRleHQgPSB0ZXh0O1xuXG4gICAgZWwub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdidG4tJyArIHRleHQudG9Mb2NhbGVMb3dlckNhc2UoKSk7IC8vIGVtaXQgcGx1Z2luIHNhdmUgZXZlbnRcbiAgICB9OyAvLyBhdHRhY2ggY2xpY2tcblxuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZChlbCk7XG4gIH1cblxufSIsImV4cG9ydCBjbGFzcyBIZWFkZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5jb25maWcgPSBvcHRpb25zO1xuICAgIHRoaXMuYnVpbGQoKTtcbiAgfVxuXG4gIGJ1aWxkKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnbmotaGVhZGVyLWNvbnRhaW5lcic7XG5cbiAgICBpZiAodGhpcy5jb25maWcuaGVhZGVyVGV4dCkge1xuICAgICAgY29uc29sZS53YXJuKCdoZWFkZXJUZXh0IGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBzb29uLiBQbGVhc2UgdXNlIHRleHRzLmhlYWRlciBpbnN0ZWFkLicpO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuY29uZmlnLmhlYWRlclRleHQgfHwgdGhpcy5jb25maWcudGV4dHMuaGVhZGVyO1xuICB9XG5cbn0iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSAnLi4vYmFzZS9iYXNlJztcbmV4cG9ydCBjbGFzcyBQaWNrZXJIb3VyIGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICBzdXBlci5idWlsZCh7XG4gICAgICB0eXBlOiAnaG91cnMnLFxuICAgICAgaGVhZGVyVGV4dDogdGhpcy5jb25maWcudGV4dHMuaG91cnNcbiAgICB9KTtcbiAgICB0aGlzLmNyZWF0ZUJ1dHRvbnMoKTtcbiAgfSAvLyBjcmVhdGUgYW09cG0gYnV0dG9uXG5cblxuICBjcmVhdGVCdXR0b25zKCkge1xuICAgIGxldCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uV3JhcHBlci5jbGFzc05hbWUgPSAnbmotaG91cnMtd3JhcHBlcic7XG4gICAgbGV0IGJ1dHRvbkxpbWl0ID0gdGhpcy5jb25maWcuZm9ybWF0ID09ICcxMicgPyAxMiA6IDIzO1xuICAgIGxldCBidXR0b25TdGFydCA9IHRoaXMuY29uZmlnLmZvcm1hdCA9PSAnMTInID8gMSA6IDA7XG4gICAgbGV0IGRpc2FibGVkSG91cnMgPSBBcnJheS5pc0FycmF5KHRoaXMuY29uZmlnLmRpc2FibGVkSG91cnMpID8gdGhpcy5jb25maWcuZGlzYWJsZWRIb3VycyA6IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IGJ1dHRvblN0YXJ0OyBpIDw9IGJ1dHRvbkxpbWl0OyBpKyspIHtcbiAgICAgIHN1cGVyLmNyZWF0ZUl0ZW0oe1xuICAgICAgICBjb250YWluZXI6IGJ1dHRvbldyYXBwZXIsXG4gICAgICAgIGlubmVyVGV4dDogaSxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkSG91cnMuaW5jbHVkZXMoaSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoYnV0dG9uV3JhcHBlcik7XG4gIH1cblxufSIsImltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tICcuL2JhY2tncm91bmQvYmFja2dyb3VuZCc7XG5pbXBvcnQgTkpFdmVudHMgZnJvbSAnbmotZXZlbnRzJztcbmltcG9ydCB7IFBpY2tlckhvdXIgYXMgaG91cnMgfSBmcm9tICcuL2hvdXIvaG91cic7XG5pbXBvcnQgeyBQaWNrZXJNaW51dGUgYXMgbWludXRlcyB9IGZyb20gJy4vbWludXRlcy9taW51dGUnO1xuaW1wb3J0IHsgUGlja2VyQU1QTSBhcyBhbXBtIH0gZnJvbSAnLi9hbXBtL2FtcG0nO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyJztcbmltcG9ydCB7IEFjdGlvbkJ1dHRvbiBhcyBidXR0b25zIH0gZnJvbSAnLi9idXR0b24vYnV0dG9ucyc7XG5leHBvcnQgY2xhc3MgTkpUaW1lUGlja2VyIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgLy8gY2hlY2tzIGZvciBhIHZhbGlkIHRhcmdldCBlbGVtZW50XG4gICAgdGhpcy5jaGVja1RhcmdldChvcHRpb25zLnRhcmdldEVsIHx8IG9wdGlvbnMudGFyZ2V0SUQpOyAvLyBtZXJnZSBvcHRpb25zIHdpdGggZGVmYXVsdCBjb25maWdcblxuICAgIHRoaXMuY29uZmlnID0gdGhpcy5leHRlbmQoe1xuICAgICAgb3B0aW9uc1xuICAgIH0pO1xuICAgIHRoaXMuZW1pdHRlciA9IG5ldyBOSkV2ZW50cygpO1xuICAgIHRoaXMuYnVpbGQoKTsgLy8gYnVpbGQgdGhlIHBpY2tlclxuICB9IC8vIHBsdWdpbiBkZWZhdWx0IGNvbmZpZ1xuXG5cbiAgZ2V0IGRlZmF1bHRDb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IHRydWUsXG4gICAgICBkaXNhYmxlZE1pbnV0ZXM6IFtdLFxuICAgICAgZGlzYWJsZWRIb3VyczogW10sXG4gICAgICBmb3JtYXQ6ICcxMicsXG4gICAgICB0ZXh0czoge1xuICAgICAgICBoZWFkZXI6ICcnLFxuICAgICAgICBob3VyczogJ0hvdXJzJyxcbiAgICAgICAgbWludXRlczogJ01pbnV0ZXMnLFxuICAgICAgICBjbG9zZTogJ0Nsb3NlJyxcbiAgICAgICAgc2F2ZTogJ1NhdmUnLFxuICAgICAgICBjbGVhcjogJ0NsZWFyJyxcbiAgICAgICAgYW1wbTogJ0FNL1BNJ1xuICAgICAgfSxcbiAgICAgIGhlYWRlclRleHQ6ICcnLFxuICAgICAgaWQ6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KSxcbiAgICAgIG1pbnV0ZXM6IFswLCAxNSwgMzAsIDQ1XSxcbiAgICAgIHRhcmdldEVsOiBudWxsLFxuICAgICAgdGFyZ2V0SUQ6IG51bGxcbiAgICB9O1xuICB9IC8vIG1lcmdlIHVzZXIgY29uZmlnIHdpdGggZGVmYXVsdHNcblxuXG4gIGV4dGVuZCh7XG4gICAgdGFyZ2V0ID0ge30sXG4gICAgb3B0aW9ucyxcbiAgICBkZWZhdWx0cyA9IHRoaXMuZGVmYXVsdENvbmZpZ1xuICB9KSB7XG4gICAgT2JqZWN0LmtleXMoZGVmYXVsdHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmICh0eXBlb2YgZGVmYXVsdHNba2V5XSA9PSAnb2JqZWN0JyAmJiBrZXkgPT0gJ3RleHRzJykge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhkZWZhdWx0c1trZXldKS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgIHRhcmdldFtrZXldW2VdID0gb3B0aW9uc1trZXldICYmIG9wdGlvbnNba2V5XVtlXSA/IG9wdGlvbnNba2V5XVtlXSA6IGRlZmF1bHRzW2tleV1bZV07XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBvcHRpb25zW2tleV0gfHwgZGVmYXVsdHNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9IC8vIGNoZWNrIGlmIHRoZSB0YXJnZXQgZWxlbWVudCBleGlzdCBpbiB0aGUgZG9tXG5cblxuICBjaGVja1RhcmdldChlbCkge1xuICAgIGlmIChlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAvLyBjaGVjayBmb3IgdmFsaWQgZG9tIGVsZW1lbnRcbiAgICAgIHRoaXMudGFyZ2V0RWxlbWVudCA9IGVsO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZWx9YCkpIHtcbiAgICAgIC8vIGNoZWNrIGZvciB2YWxpZCBkb20gZWxlbWVudCB3aXRoIElEIHRhcmdldElEXG4gICAgICB0aGlzLnRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtlbH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgJ05KUGlja2VyIHJlcXVpcmVzIGEgdmFsaWQgdGFyZ2V0IGVsZW1lbnQodGFyZ2V0RWwpIG9yIHRhcmdldCBlbGVtZW50IElEKHRhcmdldElEKSc7XG4gICAgfVxuICB9IC8vIHNldCB0aGUgb3B0aW9ucyBmb3IgYnVpbGRpbmcgdGhlIHBsdWdpblxuXG5cbiAgYnVpbGQoKSB7XG4gICAgLy8gYXR0YWNoIHRoZSBjbGljayB0byBzaG93IHBpY2tlclxuICAgIHRoaXMudGFyZ2V0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvdy5iaW5kKHRoaXMpKTsgLy8gY3JlYXRlIHBpY2tlciB3cmFwcGVyIGRpdlxuXG4gICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ25qLXBpY2tlcicpO1xuICAgIHRoaXMud3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5jb25maWcuaWQpOyAvLyBpbml0IHRoZSBvdmVybGF5XG5cbiAgICB0aGlzLm92ZXJsYXkgPSBuZXcgQmFja2dyb3VuZCgpO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmNsaWNrT3V0c2lkZVRvQ2xvc2UpIHtcbiAgICAgIC8vIGNoZWNrIGlmIGNsaWNrT3V0c2lkZVRvQ2xvc2UgaXMgdHJ1ZVxuICAgICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlLmJpbmQodGhpcykpO1xuICAgIH0gLy8gYXBwZW5kIHRoZSBvdmVybGF5IHRvIHRoZSBwaWNrZXIgd3JhcHBlclxuXG5cbiAgICB0aGlzLndyYXBwZXIuYXBwZW5kKHRoaXMub3ZlcmxheSk7IC8vIGNyZWF0ZSB0aGUgY29udGFpbmVyXG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25qLXBpY2tlci1jb250YWluZXInKTsgLy8gY3JlYXRlIGhlYWRlclxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmhlYWRlclRleHQgfHwgdGhpcy5jb25maWcudGV4dHMuaGVhZGVyKSB7XG4gICAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIodGhpcy5jb25maWcpO1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuaGVhZGVyLmVsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuYnVpbGRJdGVtcygpO1xuICAgIHRoaXMuYnVpbGRCdXR0b25zKCk7IC8vIGNvbmZpZ3VyZSBwaWNrZXIgYnV0dG9uc1xuICAgIC8vIGF0dGFjaCB0aGUgcGlja2VyIGNvbnRhaW5lciB0byB0aGUgd3JhcHBlclxuXG4gICAgdGhpcy53cmFwcGVyLmFwcGVuZCh0aGlzLmNvbnRhaW5lcik7IC8vIGF0dGFjaCB0aGUgcGlja2VyIHdyYXBwZXIgdG8gdGhlIGRvbVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy53cmFwcGVyKTtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCgncmVhZHknKTsgLy8gZW1pdCB0aGUgcGx1Z2luIHJlYWR5IGV2ZW50XG4gIH0gLy8gY3JlYXRlIGJ1dHRvbnMgY29udGlhbmVyXG5cblxuICBidWlsZEJ1dHRvbnMoKSB7XG4gICAgdGhpcy5idXR0b25zID0gbmV3IGJ1dHRvbnModGhpcy5jb25maWcsIHRoaXMuZW1pdHRlcik7XG4gICAgdGhpcy5lbWl0dGVyLm9uKCdidG4tc2F2ZScsICgpID0+IHtcbiAgICAgIC8vIHNldCB0aGUgdmFsdWUgb2YgdGhlIHRhcmdldCBpZiBpdHMgYW4gaW5wdXQgXG4gICAgICBpZiAodGhpcy50YXJnZXRFbGVtZW50LnR5cGUgPT0gJ3RleHQnICYmIHRoaXMudGFyZ2V0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJykge1xuICAgICAgICB0aGlzLnRhcmdldEVsZW1lbnQudmFsdWUgPSB0aGlzLmdldFZhbHVlKCkuZnVsbFJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoJ3NhdmUnLCB0aGlzLmdldFZhbHVlKCkpO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5lbWl0dGVyLm9uKCdidG4tY2xlYXInLCAoKSA9PiB7XG4gICAgICB0aGlzLmhvdXJzLnJlc2V0VmFsdWUoKTsgLy8gcmVzZXRzIHRoZSBob3Vyc1xuXG4gICAgICB0aGlzLm1pbnV0ZXMucmVzZXRWYWx1ZSgpOyAvLyByZXNldCBtaW51dGVzXG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5mb3JtYXQgPT0gJzEyJykge1xuICAgICAgICB0aGlzLmFtcG0ucmVzZXRWYWx1ZSgpOyAvLyByZXNldHMgYW0tcG1cbiAgICAgIH1cblxuICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoJ2NsZWFyJyk7XG4gICAgfSk7XG4gICAgdGhpcy5lbWl0dGVyLm9uKCdidG4tY2xvc2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnY2xvc2UnKTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmJ1dHRvbnMuYnVpbGQodGhpcy5jb25maWcpKTtcbiAgfSAvLyBidWlsZCBpbmRpdmlkdWFsIGl0ZW1zXG5cblxuICBidWlsZEl0ZW1zKCkge1xuICAgIC8vIGNyZWF0ZSBob3VycyBjb250aWFuZXJcbiAgICB0aGlzLmhvdXJzID0gbmV3IGhvdXJzKHRoaXMuY29uZmlnKTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5ob3Vycy5lbGVtZW50KTsgLy8gY3JlYXRlIG1pbnV0ZXMgY29udGlhbmVyXG5cbiAgICB0aGlzLm1pbnV0ZXMgPSBuZXcgbWludXRlcyh0aGlzLmNvbmZpZyk7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMubWludXRlcy5lbGVtZW50KTsgLy8gY3JlYXRlIGFtcG0gY29udGlhbmVyXG5cbiAgICBpZiAodGhpcy5jb25maWcuZm9ybWF0ID09ICcxMicpIHtcbiAgICAgIHRoaXMuYW1wbSA9IG5ldyBhbXBtKHRoaXMuY29uZmlnKTtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmFtcG0uZWxlbWVudCk7XG4gICAgfVxuICB9IC8vIGdldCB0aGUgcGlja2VyIHZhbHVlXG5cblxuICBnZXRWYWx1ZShrZXkpIHtcbiAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgaG91cnM6IHRoaXMuaG91cnMuZ2V0VmFsdWUoKSxcbiAgICAgIG1pbnV0ZXM6IHRoaXMubWludXRlcy5nZXRWYWx1ZSgpLFxuICAgICAgZnVsbFJlc3VsdDogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5mb3JtYXQgPT0gJzEyJykge1xuICAgICAgcmVzdWx0LmFtcG0gPSB0aGlzLmFtcG0uZ2V0VmFsdWUoKTtcbiAgICAgIGlmIChyZXN1bHQuaG91cnMgJiYgcmVzdWx0Lm1pbnV0ZXMgJiYgcmVzdWx0LmFtcG0pIHJlc3VsdC5mdWxsUmVzdWx0ID0gYCR7KFwiMFwiICsgcmVzdWx0LmhvdXJzKS5zbGljZSgtMil9OiR7KFwiMFwiICsgcmVzdWx0Lm1pbnV0ZXMpLnNsaWNlKC0yKX0gJHtyZXN1bHQuYW1wbX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVzdWx0LmhvdXJzICYmIHJlc3VsdC5taW51dGVzKSByZXN1bHQuZnVsbFJlc3VsdCA9IGAkeyhcIjBcIiArIHJlc3VsdC5ob3Vycykuc2xpY2UoLTIpfTokeyhcIjBcIiArIHJlc3VsdC5taW51dGVzKS5zbGljZSgtMil9YDtcbiAgICB9XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICByZXR1cm4gcmVzdWx0W2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdCB8fCB7fTtcbiAgfSAvLyBzZXQgcGlja2VyIHZhbHVlXG5cblxuICBzZXRWYWx1ZShpbnB1dCkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGhoOm1tIGFtXG4gICAgICB0cnkge1xuICAgICAgICBsZXQgc3BsaXRfMSA9IGlucHV0LnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzcGxpdF8xWzBdICE9ICd1bmRlZmluZWQnICYmIHNwbGl0XzFbMF0gIT0gJycpIHtcbiAgICAgICAgICB0aGlzLmhvdXJzLnNldFZhbHVlKHNwbGl0XzFbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzcGxpdF8xWzFdICE9ICd1bmRlZmluZWQnICYmIHNwbGl0XzFbMV0gIT0gJycpIHtcbiAgICAgICAgICBsZXQgc3BsaXRfMiA9IHNwbGl0XzFbMV0uc3BsaXQoJyAnKTtcbiAgICAgICAgICB0aGlzLm1pbnV0ZXMuc2V0VmFsdWUoc3BsaXRfMlswXSk7XG4gICAgICAgICAgdGhpcy5hbXBtLnNldFZhbHVlKHNwbGl0XzJbMV0pO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7Ly9cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKGlucHV0LmtleSAmJiB0eXBlb2YgaW5wdXQudmFsdWUgIT0gJ3VuZGVmaW5lZCcgJiYgdGhpc1tpbnB1dC5rZXldKSB7XG4gICAgICAgIHRoaXNbaW5wdXQua2V5XS5zZXRWYWx1ZShpbnB1dC52YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBzaG93cyB0aGUgcGlja2VyXG5cblxuICBzaG93KCkge1xuICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCduai1waWNrZXItc2hvdycpO1xuICAgIHRoaXMuZW1pdHRlci5lbWl0KCdzaG93Jyk7IC8vIGVtaXQgcGx1Z2luIHNob3cgZXZlbnRcbiAgfSAvLyBoaWRlcyB0aGUgcGlja2VyXG5cblxuICBoaWRlKCkge1xuICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCduai1waWNrZXItc2hvdycpO1xuICAgIHRoaXMuZW1pdHRlci5lbWl0KCdoaWRlJyk7IC8vIGVtaXQgdGhlIHBsdWdpbiBoaWRlIGV2ZW50XG4gIH0gLy8gY3JlYXRlIGFuIG9uIG1ldGhvZCB0byBtYXNrIGVtaXR0ZXIgb25cblxuXG4gIG9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5lbWl0dGVyLm9uKG5hbWUsIHZhbHVlKTtcbiAgfVxuXG59IiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gJy4uL2Jhc2UvYmFzZSc7XG5leHBvcnQgY2xhc3MgUGlja2VyTWludXRlIGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICBzdXBlci5idWlsZCh7XG4gICAgICB0eXBlOiAnbWludXRlcycsXG4gICAgICBoZWFkZXJUZXh0OiB0aGlzLmNvbmZpZy50ZXh0cy5taW51dGVzXG4gICAgfSk7XG4gICAgdGhpcy5jcmVhdGVCdXR0b25zKCk7XG4gIH0gLy8gY3JlYXRlIGFtPXBtIGJ1dHRvblxuXG5cbiAgY3JlYXRlQnV0dG9ucygpIHtcbiAgICBsZXQgYnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbldyYXBwZXIuY2xhc3NOYW1lID0gJ25qLW1pbnV0ZXMtd3JhcHBlcic7XG4gICAgbGV0IG1pbnV0ZXMgPSB0aGlzLmNvbmZpZy5taW51dGVzIHx8IFswLCAxNSwgMzAsIDQ1XTtcbiAgICBsZXQgZGlzYWJsZWRNaW51dGVzID0gQXJyYXkuaXNBcnJheSh0aGlzLmNvbmZpZy5kaXNhYmxlZE1pbnV0ZXMpID8gdGhpcy5jb25maWcuZGlzYWJsZWRNaW51dGVzIDogW107XG4gICAgbWludXRlcy5mb3JFYWNoKG1pbnV0ZSA9PiB7XG4gICAgICBpZiAodHlwZW9mIG1pbnV0ZSA9PSAnbnVtYmVyJyAmJiBtaW51dGUgPCA2MCkge1xuICAgICAgICBzdXBlci5jcmVhdGVJdGVtKHtcbiAgICAgICAgICBjb250YWluZXI6IGJ1dHRvbldyYXBwZXIsXG4gICAgICAgICAgaW5uZXJUZXh0OiBtaW51dGUsXG4gICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkTWludXRlcy5pbmNsdWRlcyhtaW51dGUpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoYnV0dG9uV3JhcHBlcik7XG4gIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5KRXZlbnRzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0ge307XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlZ2lzdGVyIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcclxuICAgICAqL1xyXG4gICAgb24obmFtZSwgY2IsIGlkKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAoY2IpICE9ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhyb3cgKCdpbnZhbGlkIGxpc3RlbmVyLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZXZJRCA9IGlkIHx8IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcclxuICAgICAgICAodGhpcy5ldmVudHNbbmFtZV0gPSB0aGlzLmV2ZW50c1tuYW1lXSB8fCBbXSkucHVzaChldklEKTtcclxuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldklEXSA9IHtcclxuICAgICAgICAgICAgY2I6IGNiLCAvLyBjYWxsIGJhY2tcclxuICAgICAgICAgICAgZXY6IG5hbWUgLy8gZXZlbnQgbmFtZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGV2SUQ7XHJcbiAgICB9XHJcbiAgICAvKiogXHJcbiAgICAgKiByZWdpc3RlciBhIG9uZSB0aW1lIGV2ZW50IFxyXG4gICAgKi9cclxuICAgIG9uY2UoZXZlbnQsIGxpc3RlbmVyLCBpZCkge1xyXG4gICAgICAgIGxldCBrZXkgPSB0aGlzLm9uKGV2ZW50LCBsaXN0ZW5lciwgaWQpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzW2tleV0ub25jZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHVucmVnaXN0ZXIgZXZlbnRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldklEIFxyXG4gICAgICovXHJcbiAgICBvZmYoa2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2tleV0pIHsgLy8gY2hlY2sgaWYga2V5IG1hdGNoZXMgYSBldmVudCBuYW1lXHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2tleV0uZm9yRWFjaChldiA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbZXZdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZXZlbnRzW2tleV07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxpc3RlbmVyc1trZXldKSB7IC8vIGNoZWNrIGlmIGtleSBtYXRjaGVzIGEgbGlzdGVuZXIgbmFtZVxyXG4gICAgICAgICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1trZXldO1xyXG4gICAgICAgICAgICBsZXQgZXZlbnQgPSB0aGlzLmV2ZW50c1tsaXN0ZW5lci5ldl07XHJcbiAgICAgICAgICAgIGV2ZW50LnNwbGljZShrZXksIDEpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGVtaXQgZXZlbnRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBcclxuICAgICAqL1xyXG4gICAgZW1pdChuYW1lKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XHJcbiAgICAgICAgKHRoaXMuZXZlbnRzW25hbWVdIHx8IFtdKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2tleV07XHJcbiAgICAgICAgICAgIGxpc3RlbmVyLmNiKGFyZ3MubGVuZ3RoID09IDEgPyBhcmdzWzBdIDogYXJncyk7XHJcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lci5vbmNlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vZmYobmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9