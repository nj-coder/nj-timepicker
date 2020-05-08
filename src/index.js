import { Background } from './background/background';
import NJEvents from 'nj-events';
import { PickerHour as hours } from './hour/hour';
import { PickerMinute as minutes } from './minutes/minute';
import { PickerAMPM as ampm } from './ampm/ampm';
import { Header } from './header/header';
import { ActionButton as buttons } from './button/buttons';

export default class NJTimePicker {

    constructor(options = {}) {
        // checks for a valid target element
        this.checkTarget(options.targetEl || options.targetID);

        // merge options with default config
        this.config = this.extend({
            options
        });

        this.emitter = new NJEvents();
        this.pickerVisible = false;
        this.allowAutoSave = false;
        this.build(); // build the picker
    }

    // plugin default config
    get defaultConfig() {
        return {
            clickOutsideToClose: true,
            autoSave: false, // auto save if for the first time
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

    // merge user config with defaults
    extend({
        target = {},
        options,
        defaults = this.defaultConfig
    }) {
        Object.keys(defaults).forEach(key => {
            if (typeof (defaults[key]) == 'object' && key == 'texts') {
                target[key] = {};
                Object.keys(defaults[key]).forEach(e => {
                    target[key][e] = (options[key] && options[key][e]) ?
                        options[key][e] : defaults[key][e];
                });
            } else {
                target[key] = options[key] || defaults[key];
            }
        });

        return target;
    }
    // check if the target element exist in the dom
    checkTarget(el) {
        if (el instanceof HTMLElement) { // check for valid dom element
            this.targetElement = el;
        } else if (document.querySelector(`#${el}`)) { // check for valid dom element with ID targetID
            this.targetElement = document.querySelector(`#${el}`);
        } else {
            throw ('NJPicker requires a valid target element(targetEl) or target element ID(targetID)');
        }
    }

    // set the options for building the plugin
    build() {
        // attach the click to show picker
        this.targetElement.addEventListener('click', this.show.bind(this));

        // create picker wrapper div
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('nj-picker');
        this.wrapper.setAttribute('id', this.config.id);

        // init the overlay
        this.overlay = new Background();
        if (this.config.clickOutsideToClose) { // check if clickOutsideToClose is true
            this.overlay.addEventListener('click', this.hide.bind(this));
        }
        // append the overlay to the picker wrapper
        this.wrapper.append(this.overlay);

        // create the container
        this.container = document.createElement('div');
        this.container.classList.add('nj-picker-container');

        // create header
        if (this.config.headerText || this.config.texts.header) {
            this.header = new Header(this.config);
            this.container.append(this.header.element);
        }

        this.buildItems();
        this.buildButtons(); // configure picker buttons

        // attach the picker container to the wrapper
        this.wrapper.append(this.container);
        // attach the picker wrapper to the dom
        document.body.append(this.wrapper);
        setTimeout(() => {
            this.emitter.emit('ready', {}); // emit the plugin ready event
        });

        this.emitter.on('selection', () => {
            if (this.pickerVisible && this.config.autoSave && this.allowAutoSave) {
                let val = this.getValue();
                if (val.hours && val.minutes && val.ampm)
                    this.onSave();
            }
        });
    }

    // create buttons contianer
    buildButtons() {
        this.buttons = new buttons(this.config, this.emitter);
        this.emitter.on('btn-save', () => {
            // set the value of the target if its an input 
            if (this.targetElement.type == 'text' && this.targetElement.nodeName === 'INPUT') {
                this.targetElement.value = this.getValue().fullResult;
            }
            this.onSave();
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
    }

    // build individual items
    buildItems() {
        // create hours contianer
        this.hours = new hours(this.config, this.emitter);
        this.container.append(this.hours.element);
        // create minutes contianer
        this.minutes = new minutes(this.config, this.emitter);
        this.container.append(this.minutes.element);
        // create ampm contianer
        if (this.config.format == '12') {
            this.ampm = new ampm(this.config, this.emitter);
            this.container.append(this.ampm.element);
        }
    }

    onSave() {
        this.emitter.emit('save', this.getValue());
        this.hide();
    }
    // get the picker value
    getValue(key) {
        let result = {
            hours: this.hours.getValue(),
            minutes: this.minutes.getValue(),
            fullResult: undefined
        };
        if (this.config.format == '12') {
            result.ampm = this.ampm.getValue();
            if (result.hours && result.minutes && result.ampm)
                result.fullResult = `${("0" + result.hours).slice(-2)}:${("0" + result.minutes).slice(-2)} ${result.ampm}`;
        } else {
            if (result.hours && result.minutes)
                result.fullResult = `${("0" + result.hours).slice(-2)}:${("0" + result.minutes).slice(-2)}`;
        }

        if (key) {
            return result[key];
        }

        return result || {};
    }

    // set picker value
    setValue(input) {
        if (typeof (input) == 'string') { // hh:mm am
            try {
                let split_1 = input.split(':');
                if (typeof (split_1[0]) != 'undefined' && split_1[0] != '') {
                    this.hours.setValue(split_1[0]);
                }
                if (typeof (split_1[1]) != 'undefined' && split_1[1] != '') {
                    let split_2 = split_1[1].split(' ');
                    this.minutes.setValue(split_2[0]);
                    this.ampm.setValue(split_2[1]);
                }
            } catch (e) {
                //
            }
        } else if (typeof (input) == 'object') {
            for (let item in input) {
                if (input[item] && this[item] && this[item].setValue) {
                    this[item].setValue(input[item].toString().toLowerCase());
                }
            }
        }
    }

    // shows the picker
    show() {
        let val = this.getValue();
        this.allowAutoSave = !(val.hours && val.minutes && val.ampm);
        this.pickerVisible = true;
        this.wrapper.classList.add('nj-picker-show');
        this.emitter.emit('show'); // emit plugin show event
    }

    // hides the picker
    hide() {
        this.pickerVisible = false;
        this.wrapper.classList.remove('nj-picker-show');
        this.emitter.emit('hide'); // emit the plugin hide event
    }

    // create an on method to mask emitter on
    on(name, value) {
        this.emitter.on(name, value);
    }

    static get version() { 
        return '1.3.118';
    }

}