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
    }
    // create picker button
    createButton({
        type,
        text
    }) {
        let el = document.createElement('div');
        el.className = `nj-action-button nj-action-${type}`;
        el.innerText = text;
        el.onclick = () => {
            this.emitter.emit(text.toLocaleLowerCase()); // emit plugin save event
        }; // attach click
        this.element.append(el);
    }

    // create an on method to mask emitter on
    on(name, value) {
        this.emitter.on(name, value);
    }
}