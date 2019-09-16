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
            id: new Date().getTime(),
            targetEl: null,
            targetID: null,
            clickOverlayClose: true,
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
        if (this.config.clickOverlayClose) { // check if clickOverlayClose is true
            this.overlay.addEventListener('click', this.hidePicker.bind(this));
        }
        // append the overlay to the picker wrapper
        this.wrapper.append(this.overlay);

        // create the container
        this.container = document.createElement('div');
        this.container.classList.add('nj-picker-container');

        // create hours contianer
        this.hours = new hours();
        this.container.append(this.hours.build(this.config));

        // create minutes contianer
        this.minutes = new minutes();
        this.container.append(this.minutes.build(this.config));

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
        this.buttons = new buttons();
        this.buttons.on('save', () => {
            this.emitter.emit('save');
            this.hidePicker();
        });
        this.buttons.on('clear', () => {
            this.emitter.emit('clear');
        });
        this.buttons.on('close', () => {
            this.emitter.emit('close');
            this.hidePicker();
        });
        this.container.append(this.buttons.build(this.config));
    }

    // create ampm contianer
    buildAMPM() {
        if (this.config.format == '12') {
            this.ampm = new ampm();
            this.container.append(this.ampm.build(this.config));
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