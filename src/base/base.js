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

        // create picker container div
        this.container = document.createElement('div');
        this.container.classList.add('nj-picker');

        // init the overlay
        this.overlay = new Background(this.config);
        if (this.config.clickOverlayClose) {
            this.overlay.on('overlay-click', this.hidePicker.bind(this));
        }

        // append the overlay to the picker container
        this.container.append(this.overlay.build(this));
        // attach the picker container to the dom
        document.body.append(this.container);
        this.emitter.emit('ready'); // emit the plugin ready event
    }

    // shows the picker
    showPicker() {
        this.emitter.emit('before.show'); // emit the before pluging show event
        this.overlay.show(); // shows the overlay
        this.emitter.emit('show'); // emit plugin show event
    }

    // hides the picker
    hidePicker() {
        this.emitter.emit('hide'); // emit the plugin hide event
        this.overlay.hide(); // hides the backdrop
        this.emitter.emit('after.hide'); // emit the plugin after hide event
    }

    // create an on method to mask emitter on
    on(name, value) {
        this.emitter.on(name, value);
    }

}

if (typeof global === 'object' && !global.NJPicker) {
    global.NJPicker = NJPicker;
}