(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else {
    var a = factory();

    for (var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
  }
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/index.js");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./node_modules/nj-events/src/index.js":
      /*!*********************************************!*\
        !*** ./node_modules/nj-events/src/index.js ***!
        \*********************************************/

      /*! exports provided: default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "default", function () {
          return NJEvents;
        });

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
            if (typeof cb != 'function') {
              throw 'invalid listener.';
            }

            let evID = id || Math.random().toString(36).substring(7);
            (this.events[name] = this.events[name] || []).push(evID);
            this.listeners[evID] = {
              cb: cb,
              // call back
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
            if (this.events[key]) {
              // check if key matches a event name
              this.events[key].forEach(ev => {
                delete this.listeners[ev];
              });
              delete this.events[key];
            } else if (this.listeners[key]) {
              // check if key matches a listener name
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
              if (listener.once) this.off(name);
            });
          }

        }
        /***/

      },

      /***/
      "./src/ampm/ampm.js":
      /*!**************************!*\
        !*** ./src/ampm/ampm.js ***!
        \**************************/

      /*! exports provided: PickerAMPM */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "PickerAMPM", function () {
          return PickerAMPM;
        });
        /* harmony import */


        var _base_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../base/base */
        "./src/base/base.js");

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
        /***/

      },

      /***/
      "./src/background/background.js":
      /*!**************************************!*\
        !*** ./src/background/background.js ***!
        \**************************************/

      /*! exports provided: Background */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Background", function () {
          return Background;
        });

        class Background {
          constructor() {
            const element = document.createElement('div');
            element.className = 'nj-overlay';
            return element; // return the element to parent
          }

        }
        /***/

      },

      /***/
      "./src/base/base.js":
      /*!**************************!*\
        !*** ./src/base/base.js ***!
        \**************************/

      /*! exports provided: Base */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Base", function () {
          return Base;
        });

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
        /***/

      },

      /***/
      "./src/button/buttons.js":
      /*!*******************************!*\
        !*** ./src/button/buttons.js ***!
        \*******************************/

      /*! exports provided: ActionButton */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ActionButton", function () {
          return ActionButton;
        });

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
        /***/

      },

      /***/
      "./src/header/header.js":
      /*!******************************!*\
        !*** ./src/header/header.js ***!
        \******************************/

      /*! exports provided: Header */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Header", function () {
          return Header;
        });

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
        /***/

      },

      /***/
      "./src/hour/hour.js":
      /*!**************************!*\
        !*** ./src/hour/hour.js ***!
        \**************************/

      /*! exports provided: PickerHour */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "PickerHour", function () {
          return PickerHour;
        });
        /* harmony import */


        var _base_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../base/base */
        "./src/base/base.js");

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
        /***/

      },

      /***/
      "./src/index.js":
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/

      /*! exports provided: NJTimePicker */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "NJTimePicker", function () {
          return NJTimePicker;
        });
        /* harmony import */


        var _background_background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./background/background */
        "./src/background/background.js");
        /* harmony import */


        var nj_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! nj-events */
        "./node_modules/nj-events/src/index.js");
        /* harmony import */


        var _hour_hour__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./hour/hour */
        "./src/hour/hour.js");
        /* harmony import */


        var _minutes_minute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./minutes/minute */
        "./src/minutes/minute.js");
        /* harmony import */


        var _ampm_ampm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./ampm/ampm */
        "./src/ampm/ampm.js");
        /* harmony import */


        var _header_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./header/header */
        "./src/header/header.js");
        /* harmony import */


        var _button_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ./button/buttons */
        "./src/button/buttons.js");

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
        /***/

      },

      /***/
      "./src/minutes/minute.js":
      /*!*******************************!*\
        !*** ./src/minutes/minute.js ***!
        \*******************************/

      /*! exports provided: PickerMinute */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "PickerMinute", function () {
          return PickerMinute;
        });
        /* harmony import */


        var _base_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../base/base */
        "./src/base/base.js");

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
        /***/

      }
      /******/

    })
  );
});