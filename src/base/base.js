import { Background } from '../background/background';

export class NJPicker {

    constructor(options) {
        this.config = options || {};

        this.build();
    }

    // set the options for building the plugin
    build() {
        this.container = document.createElement('div'); // create picker container div
        this.container.classList.add('nj-picker'); // add the container class name
        this.bg = new Background(); // init the backdrop

        this.container.append(this.bg.build()); // append the backdrop to the picker container

        document.body.append(this.container); // attach the picker container to the dom
    }

    // shows the picker
    showPicker() {
        this.bg.show(); // shows the backdrop
    }

    // hides the picker
    hidePicker() {
        this.bg.show(); // hides the backdrop
    }

}

if (typeof global === 'object' && !global.NJPicker) {
    global.NJPicker = NJPicker;
}