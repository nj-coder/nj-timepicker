import NanoEvents from 'nanoevents';

export class Background {

    constructor(config) {
        this.config = config;
        this.emitter = new NanoEvents();
    }

    // build
    build() {
        this.element = document.createElement('div');
        this.element.className = 'nj-overlay';
        this.element.addEventListener('click', () => {
            this.emitter.emit('overlay-click');
        });
        return this.element; // return the element to parent
    }

    // show the back drop
    show() {
        this.element.classList.add('nj-overlay-show');
    }

    // show the back drop
    hide() {
        this.element.classList.remove('nj-overlay-show');
    }
    // create an on method to mask emitter on
    on(name, value) {
        this.emitter.on(name, value);
    }
}