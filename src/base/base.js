import { Background } from '../background/background';
import NanoEvents from 'nanoevents';

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
            targetEl: null,
            targetID: null,
            clickOverlayClose: true
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
        this.container.innerHTML = 'd';

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

    // create an on method to mask emitter on
    on(name, value) {
        this.emitter.on(name, value);
    }

}

if (typeof global === 'object' && !global.NJPicker) {
    global.NJPicker = NJPicker;
}