import { Background } from '../background/background';
import NanoEvents from 'nanoevents';
import { PickerHour as hours } from '../hour/hour';
import { PickerMinute as minutes } from '../minutes/minute';
import { PickerAMPM as ampm } from '../ampm/ampm';
import { ActionButton as buttons } from '../button/buttons';

export class NJPicker {

    constructor(options = {}) {
        if (!options.targetEl && !options.targetID) {
            throw ('NJPicker requires a target element(targetEl) or target element ID(targetID)');
        }
        // merge options with default config
        this.config = Object.assign(this.defaultConfig, options);
        // checks for a valid target element
        this.checkTarget();

        this.emitter = new NanoEvents();
        this.build(); // build the picker
    }
    // plugin default config
    get defaultConfig() {
        return {
            id: Math.random().toString(36).substring(7),
            targetEl: null,
            targetID: null,
            clickOutsideToClose: true,
            format: '12'
        };
    }
    // check if the target element exist in the dom
    checkTarget() {
        if (this.config.targetEl) { // check for valid dom element
            if (this.config.targetEl.nodeType != Node.ELEMENT_NODE) {
                throw ('targetEl does not exist in the dom');
            }
            this.targetElement = this.config.targetEl;
        } else if (this.config.targetID) { // check for valid dom element with ID targetID
            this.targetElement = document.querySelector(`#${this.config.targetID}`);
            if (!this.targetElement) {
                throw ('targetID does not exist in the dom');
            }
        }
    }
    // set the options for building the plugin
    build() {
        // attach the click to show picker
        this.targetElement.addEventListener('click', this.showPicker.bind(this));

        // create picker wrapper div
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('nj-picker');
        this.wrapper.setAttribute('id', this.config.id);

        // init the overlay
        this.overlay = new Background();
        if (this.config.clickOutsideToClose) { // check if clickOutsideToClose is true
            this.overlay.addEventListener('click', this.hidePicker.bind(this));
        }
        // append the overlay to the picker wrapper
        this.wrapper.append(this.overlay);

        // create the container
        this.container = document.createElement('div');
        this.container.classList.add('nj-picker-container');

        this.buildHours();
        this.buildMinutes();
        this.buildAMPM(); // configure ampm container
        this.buildButtons(); // configure picker buttons

        // attach the picker container to the wrapper
        this.wrapper.append(this.container);
        // attach the picker wrapper to the dom
        document.body.append(this.wrapper);
        this.emitter.emit('ready'); // emit the plugin ready event
    }

    // shows the picker
    showPicker() {
        this.wrapper.classList.add('nj-picker-show');
        this.emitter.emit('show'); // emit plugin show event
    }

    // hides the picker
    hidePicker() {
        this.wrapper.classList.remove('nj-picker-show');
        this.emitter.emit('hide'); // emit the plugin hide event
    }

    // create buttons contianer
    buildButtons() {
        this.buttons = new buttons(this.config);
        this.buttons.on('save', () => {
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
            this.emitter.emit('save', result);
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
    }

    // create hours contianer
    buildHours() {
        this.hours = new hours(this.config);
        this.container.append(this.hours.build());
    }

    // create minutes contianer
    buildMinutes() {
        this.minutes = new minutes(this.config);
        this.container.append(this.minutes.build());
    }

    // create ampm contianer
    buildAMPM() {
        if (this.config.format == '12') {
            this.ampm = new ampm(this.config);
            this.container.append(this.ampm.build());
        }
    }

    // create an on method to mask emitter on
    on(name, value) {
        this.emitter.on(name, value);
    }

}

if (typeof global === 'object' && !global.NJPicker) {
    global.NJPicker = NJPicker;
}