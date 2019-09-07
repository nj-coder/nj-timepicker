import { Background } from '../background/background';
import NanoEvents from 'nanoevents';

export class NJPicker {

    constructor(options = {}) {
        if (!options.targetEl && !options.targetID) {
            throw ('NJPicker requires a target element(targetEl) or target element ID(targetID)');
        }
        this.config = Object.assign(this.defaultConfig, options); // merge options with default config
        this.checkTarget(); // checks for a valid target element
        this.emitter = new NanoEvents();
        this.build(); // build the picker
    }
    // plugin default config
    get defaultConfig() {
        return {
            targetEl: null,
            targetID: null,
            format: '12',
            theming: {}
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
        this.targetElement.addEventListener('click', this.showPicker.bind(this)); // attach the click to show picker

        this.container = document.createElement('div'); // create picker container div
        this.container.classList.add('nj-picker'); // add the container class name
        this.overlay = new Background(); // init the overlay

        this.container.append(this.overlay.build()); // append the overlay to the picker container
        document.body.append(this.container); // attach the picker container to the dom
        this.emitter.emit('ready'); // emit the plugin ready event
    }

    // shows the picker
    showPicker() {
        this.overlay.show(); // shows the overlay
    }

    // hides the picker
    hidePicker() {
        this.overlay.hide(); // hides the backdrop
    }

    // 
    on(name, value) {
        this.emitter.on(name, value);
    }

}

if (typeof global === 'object' && !global.NJPicker) {
    global.NJPicker = NJPicker;
}