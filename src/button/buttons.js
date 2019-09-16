import NanoEvents from 'nanoevents';

export class ActionButton {

    constructor(options) {
        this.config = options;
        this.emitter = new NanoEvents();
    }

    // build
    build() {
        this.element = document.createElement('div');
        this.element.className = 'nj-action-container';

        this.createSaveButton();
        this.createClearButton();
        this.createCloseButton();

        return this.element; // return the element to parent
    }
    // create save button
    createSaveButton() {
        let save = document.createElement('div');
        save.className = 'nj-action-button nj-action-save';
        save.innerText = 'Save';
        save.onclick = () => {
            this.emitter.emit('save'); // emit plugin save event
        }; // attach click
        this.element.append(save);
    }

    // create close
    createClearButton() {
        let clear = document.createElement('div');
        clear.className = 'nj-action-button nj-action-clear';
        clear.innerText = 'Clear';
        clear.onclick = () => {
            this.emitter.emit('clear'); // emit plugin clear event
        };
        this.element.append(clear);
    }

    // create button
    createCloseButton() {
        let close = document.createElement('div');
        close.className = 'nj-action-button nj-action-close';
        close.innerText = 'Close';
        close.onclick = () => {
            this.emitter.emit('close'); // emit plugin close event
        };
        this.element.append(close);
    }

    // create an on method to mask emitter on
    on(name, value) {
        this.emitter.on(name, value);
    }
}