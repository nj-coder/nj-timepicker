(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('NJTimePicker', factory) :
  (global = global || self, global.NJTimePicker = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function () {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var Background = function Background() {
    _classCallCheck(this, Background);

    var element = document.createElement('div');
    element.className = 'nj-overlay';
    return element; // return the element to parent
  };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var script_min = createCommonjsModule(function (module, exports) {
    !function (e, t) {
       module.exports = t() ;
    }(commonjsGlobal, function () {

      return /*#__PURE__*/function () {
        function _class() {
          _classCallCheck(this, _class);

          this.events = {}, this.listeners = {};
        }

        _createClass(_class, [{
          key: "on",
          value: function on(e, t, s) {
            if ("function" != typeof t) throw "invalid listener.";
            var i = s || Math.random().toString(36).substring(7);
            return (this.events[e] = this.events[e] || []).push(i), this.listeners[i] = {
              cb: t,
              ev: e
            }, i;
          }
        }, {
          key: "once",
          value: function once(e, t, s) {
            var i = this.on(e, t, s);
            this.listeners[i].once = !0;
          }
        }, {
          key: "off",
          value: function off(e) {
            var _this = this;

            if (this.events[e]) this.events[e].forEach(function (e) {
              delete _this.listeners[e];
            }), delete this.events[e];else if (this.listeners[e]) {
              var t = this.listeners[e];
              this.events[t.ev].splice(e, 1), delete this.listeners[e];
            }
          }
        }, {
          key: "emit",
          value: function emit(e) {
            var _this2 = this;

            var t = [].slice.call(arguments, 1);
            (this.events[e] || []).forEach(function (s) {
              var i = _this2.listeners[s];
              i.cb(1 == t.length ? t[0] : t), i.once && _this2.off(e);
            });
          }
        }]);

        return _class;
      }();
    });
  });

  var Base = /*#__PURE__*/function () {
    function Base(options, emitter) {
      _classCallCheck(this, Base);

      this.config = options;
      this.emitter = emitter;
      this.resetValue();
    } // build contanier


    _createClass(Base, [{
      key: "build",
      value: function build(_ref) {
        var type = _ref.type,
            headerText = _ref.headerText;
        this.element = document.createElement('div');
        this.element.className = "nj-".concat(type, "-container");
        this.createHeader({
          className: 'nj-section-header',
          innerText: headerText || type,
          element: this.element
        });
      } // create header 

    }, {
      key: "createHeader",
      value: function createHeader(_ref2) {
        var className = _ref2.className,
            innerText = _ref2.innerText,
            element = _ref2.element;
        var header = document.createElement('div');
        header.className = className;
        header.innerText = innerText;
        element.append(header);
      } // create each item 

    }, {
      key: "createItem",
      value: function createItem(_ref3) {
        var container = _ref3.container,
            innerText = _ref3.innerText,
            disabled = _ref3.disabled;
        var item = document.createElement('div');
        item.className = 'nj-item';
        item.innerText = innerText;
        item.setAttribute('data', innerText.toString().toLowerCase());

        if (disabled) {
          item.setAttribute('disabled', 'disabled');
        }

        item.onclick = this.itemClick.bind(this, item);
        container.append(item);
      } // item clicked

    }, {
      key: "itemClick",
      value: function itemClick(item) {
        if (item.hasAttribute('disabled')) return;

        if (this.currentSelection) {
          // remove previous selection
          this.currentSelection.classList.remove('selected');
        }

        item.classList.add('selected');
        this.currentSelection = item;
        this.currentValue = item.getAttribute('data');
        this.emitter.emit('selection');
      } // sets the component value

    }, {
      key: "setValue",
      value: function setValue(value) {
        var el = this.element.querySelector("div[data=\"".concat(value, "\"]"));

        if (el) {
          this.itemClick(el);
        }
      } // gets the value of the component

    }, {
      key: "getValue",
      value: function getValue() {
        return this.currentValue;
      } // resets the value

    }, {
      key: "resetValue",
      value: function resetValue() {
        if (this.currentSelection) {
          this.currentSelection.classList.remove('selected');
        }

        this.currentSelection = this.currentValue = null;
      }
    }]);

    return Base;
  }();

  var PickerHour = /*#__PURE__*/function (_Base) {
    _inherits(PickerHour, _Base);

    var _super = _createSuper(PickerHour);

    function PickerHour(options, emitter) {
      var _thisSuper, _this;

      _classCallCheck(this, PickerHour);

      _this = _super.call(this, options, emitter);

      _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(PickerHour.prototype)), "build", _thisSuper).call(_thisSuper, {
        type: 'hours',
        headerText: _this.config.texts.hours
      });

      _this.createButtons();

      return _this;
    } // create am=pm button


    _createClass(PickerHour, [{
      key: "createButtons",
      value: function createButtons() {
        var buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'nj-hours-wrapper';
        var buttonLimit = this.config.format == '12' ? 12 : 23;
        var buttonStart = this.config.format == '12' ? 1 : 0;
        var disabledHours = Array.isArray(this.config.disabledHours) ? this.config.disabledHours : [];

        for (var i = buttonStart; i <= buttonLimit; i++) {
          _get(_getPrototypeOf(PickerHour.prototype), "createItem", this).call(this, {
            container: buttonWrapper,
            innerText: i,
            disabled: disabledHours.includes(i)
          });
        }

        this.element.append(buttonWrapper);
      }
    }]);

    return PickerHour;
  }(Base);

  var PickerMinute = /*#__PURE__*/function (_Base) {
    _inherits(PickerMinute, _Base);

    var _super = _createSuper(PickerMinute);

    function PickerMinute(options, emitter) {
      var _thisSuper, _this;

      _classCallCheck(this, PickerMinute);

      _this = _super.call(this, options, emitter);

      _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(PickerMinute.prototype)), "build", _thisSuper).call(_thisSuper, {
        type: 'minutes',
        headerText: _this.config.texts.minutes
      });

      _this.createButtons();

      return _this;
    } // create am=pm button


    _createClass(PickerMinute, [{
      key: "createButtons",
      value: function createButtons() {
        var _this2 = this;

        var buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'nj-minutes-wrapper';
        var minutes = this.config.minutes || [0, 15, 30, 45];
        var disabledMinutes = Array.isArray(this.config.disabledMinutes) ? this.config.disabledMinutes : [];
        minutes.forEach(function (minute) {
          if (typeof minute == 'number' && minute < 60) {
            _get(_getPrototypeOf(PickerMinute.prototype), "createItem", _this2).call(_this2, {
              container: buttonWrapper,
              innerText: minute,
              disabled: disabledMinutes.includes(minute)
            });
          }
        });
        this.element.append(buttonWrapper);
      }
    }]);

    return PickerMinute;
  }(Base);

  var PickerAMPM = /*#__PURE__*/function (_Base) {
    _inherits(PickerAMPM, _Base);

    var _super = _createSuper(PickerAMPM);

    function PickerAMPM(options, emitter) {
      var _thisSuper, _this;

      _classCallCheck(this, PickerAMPM);

      _this = _super.call(this, options, emitter);
      _this.config = options;
      _this.currentSelection = null;
      _this.currentValue = null;

      _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(PickerAMPM.prototype)), "build", _thisSuper).call(_thisSuper, {
        type: 'ampm',
        headerText: _this.config.texts.ampm || 'AM/PM'
      });

      _this.createButtons();

      return _this;
    } // create am=pm button


    _createClass(PickerAMPM, [{
      key: "createButtons",
      value: function createButtons() {
        var buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'nj-ampm-wrapper';

        _get(_getPrototypeOf(PickerAMPM.prototype), "createItem", this).call(this, {
          container: buttonWrapper,
          innerText: 'AM'
        });

        _get(_getPrototypeOf(PickerAMPM.prototype), "createItem", this).call(this, {
          container: buttonWrapper,
          innerText: 'PM'
        });

        this.element.append(buttonWrapper);
      }
    }]);

    return PickerAMPM;
  }(Base);

  var Header = /*#__PURE__*/function () {
    function Header(options) {
      _classCallCheck(this, Header);

      this.config = options;
      this.build();
    }

    _createClass(Header, [{
      key: "build",
      value: function build() {
        this.element = document.createElement('div');
        this.element.className = 'nj-header-container';

        if (this.config.headerText) {
          console.warn('headerText is deprecated and will be removed soon. Please use texts.header instead.');
        }

        this.element.textContent = this.config.headerText || this.config.texts.header;
      }
    }]);

    return Header;
  }();

  var ActionButton = /*#__PURE__*/function () {
    function ActionButton(options, emitter) {
      _classCallCheck(this, ActionButton);

      this.config = options;
      this.emitter = emitter;
    } // build


    _createClass(ActionButton, [{
      key: "build",
      value: function build() {
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

    }, {
      key: "createButton",
      value: function createButton(_ref) {
        var _this = this;

        var type = _ref.type,
            text = _ref.text;
        var el = document.createElement('div');
        el.className = "nj-action-button nj-action-".concat(type);
        el.innerText = text;

        el.onclick = function () {
          _this.emitter.emit("btn-".concat(type)); // emit plugin save event

        }; // attach click


        this.element.append(el);
      }
    }]);

    return ActionButton;
  }();

  var NJTimePicker = /*#__PURE__*/function () {
    function NJTimePicker() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, NJTimePicker);

      // checks for a valid target element
      this.checkTarget(options.targetEl || options.targetID); // merge options with default config

      this.config = this.extend({
        options: options
      });
      this.emitter = new script_min();
      this.pickerVisible = false;
      this.allowAutoSave = false;
      this.build(); // build the picker
    } // plugin default config


    _createClass(NJTimePicker, [{
      key: "extend",
      // merge user config with defaults
      value: function extend(_ref) {
        var _ref$target = _ref.target,
            target = _ref$target === void 0 ? {} : _ref$target,
            options = _ref.options,
            _ref$defaults = _ref.defaults,
            defaults = _ref$defaults === void 0 ? this.defaultConfig : _ref$defaults;
        Object.keys(defaults).forEach(function (key) {
          if (_typeof(defaults[key]) == 'object' && key == 'texts') {
            target[key] = {};
            Object.keys(defaults[key]).forEach(function (e) {
              target[key][e] = options[key] && options[key][e] ? options[key][e] : defaults[key][e];
            });
          } else {
            target[key] = options[key] || defaults[key];
          }
        });
        return target;
      } // check if the target element exist in the dom

    }, {
      key: "checkTarget",
      value: function checkTarget(el) {
        if (el instanceof HTMLElement) {
          // check for valid dom element
          this.targetElement = el;
        } else if (document.querySelector("#".concat(el))) {
          // check for valid dom element with ID targetID
          this.targetElement = document.querySelector("#".concat(el));
        } else {
          throw 'NJPicker requires a valid target element(targetEl) or target element ID(targetID)';
        }
      } // set the options for building the plugin

    }, {
      key: "build",
      value: function build() {
        var _this = this;

        // attach the click to show picker
        this.targetElement.addEventListener('click', this.show.bind(this)); // create picker wrapper div

        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('nj-picker');
        this.wrapper.setAttribute('id', this.config.id); // init the overlay

        this.overlay = new Background();

        if (this.config.clickOutsideToClose) {
          // check if clickOutsideToClose is true
          this.overlay.addEventListener('click', this.hide.bind(this));
        } // append the overlay to the picker wrapper


        this.wrapper.append(this.overlay); // create the container

        this.container = document.createElement('div');
        this.container.classList.add('nj-picker-container'); // create header

        if (this.config.headerText || this.config.texts.header) {
          this.header = new Header(this.config);
          this.container.append(this.header.element);
        }

        this.buildItems();
        this.buildButtons(); // configure picker buttons
        // attach the picker container to the wrapper

        this.wrapper.append(this.container); // attach the picker wrapper to the dom

        document.body.append(this.wrapper);
        setTimeout(function () {
          _this.emitter.emit('ready', {}); // emit the plugin ready event

        });
        this.emitter.on('selection', function () {
          if (_this.pickerVisible && _this.config.autoSave && _this.allowAutoSave) {
            var val = _this.getValue();

            if (val.hours && val.minutes && val.ampm) _this.onSave();
          }
        });
      } // create buttons contianer

    }, {
      key: "buildButtons",
      value: function buildButtons() {
        var _this2 = this;

        this.buttons = new ActionButton(this.config, this.emitter);
        this.emitter.on('btn-save', function () {
          // set the value of the target if its an input 
          if (_this2.targetElement.type == 'text' && _this2.targetElement.nodeName === 'INPUT') {
            _this2.targetElement.value = _this2.getValue().fullResult;
          }

          _this2.onSave();
        });
        this.emitter.on('btn-clear', function () {
          _this2.hours.resetValue(); // resets the hours


          _this2.minutes.resetValue(); // reset minutes


          if (_this2.config.format == '12') {
            _this2.ampm.resetValue(); // resets am-pm

          }

          _this2.emitter.emit('clear');
        });
        this.emitter.on('btn-close', function () {
          _this2.emitter.emit('close');

          _this2.hide();
        });
        this.container.append(this.buttons.build(this.config));
      } // build individual items

    }, {
      key: "buildItems",
      value: function buildItems() {
        // create hours contianer
        this.hours = new PickerHour(this.config, this.emitter);
        this.container.append(this.hours.element); // create minutes contianer

        this.minutes = new PickerMinute(this.config, this.emitter);
        this.container.append(this.minutes.element); // create ampm contianer

        if (this.config.format == '12') {
          this.ampm = new PickerAMPM(this.config, this.emitter);
          this.container.append(this.ampm.element);
        }
      }
    }, {
      key: "onSave",
      value: function onSave() {
        this.emitter.emit('save', this.getValue());
        this.hide();
      } // get the picker value

    }, {
      key: "getValue",
      value: function getValue(key) {
        var result = {
          hours: this.hours.getValue(),
          minutes: this.minutes.getValue(),
          fullResult: undefined
        };

        if (this.config.format == '12') {
          result.ampm = this.ampm.getValue();
          if (result.hours && result.minutes && result.ampm) result.fullResult = "".concat(("0" + result.hours).slice(-2), ":").concat(("0" + result.minutes).slice(-2), " ").concat(result.ampm);
        } else {
          if (result.hours && result.minutes) result.fullResult = "".concat(("0" + result.hours).slice(-2), ":").concat(("0" + result.minutes).slice(-2));
        }

        if (key) {
          return result[key];
        }

        return result || {};
      } // set picker value

    }, {
      key: "setValue",
      value: function setValue(input) {
        if (typeof input == 'string') {
          // hh:mm am
          try {
            var split_1 = input.split(':');

            if (typeof split_1[0] != 'undefined' && split_1[0] != '') {
              this.hours.setValue(split_1[0]);
            }

            if (typeof split_1[1] != 'undefined' && split_1[1] != '') {
              var split_2 = split_1[1].split(' ');
              this.minutes.setValue(split_2[0]);
              this.ampm.setValue(split_2[1]);
            }
          } catch (e) {//
          }
        } else if (_typeof(input) == 'object') {
          for (var item in input) {
            if (input[item] && this[item] && this[item].setValue) {
              this[item].setValue(input[item].toString().toLowerCase());
            }
          }
        }
      } // shows the picker

    }, {
      key: "show",
      value: function show() {
        var val = this.getValue();
        this.allowAutoSave = !(val.hours && val.minutes && val.ampm);
        this.pickerVisible = true;
        this.wrapper.classList.add('nj-picker-show');
        this.emitter.emit('show'); // emit plugin show event
      } // hides the picker

    }, {
      key: "hide",
      value: function hide() {
        this.pickerVisible = false;
        this.wrapper.classList.remove('nj-picker-show');
        this.emitter.emit('hide'); // emit the plugin hide event
      } // create an on method to mask emitter on

    }, {
      key: "on",
      value: function on(name, value) {
        this.emitter.on(name, value);
      }
    }, {
      key: "defaultConfig",
      get: function get() {
        return {
          clickOutsideToClose: true,
          autoSave: false,
          // auto save if for the first time
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
      }
    }], [{
      key: "version",
      get: function get() {
        return '1.3.118';
      }
    }]);

    return NJTimePicker;
  }();

  return NJTimePicker;

})));
