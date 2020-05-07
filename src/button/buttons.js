export class ActionButton {

    constructor(options, emitter) {
        this.config = options;
        this.emitter = emitter;
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
            this.emitter.emit(`btn-${type}`); // emit plugin save event
        }; // attach click
        this.element.append(el);
    }
}