export class ActionButton {

    constructor(options) {
        this.config = options;
    }

    // build
    build() {
        this.element = document.createElement('div');
        this.element.className = 'nj-action-container';
        this.element.innerHTML = 'action';
        return this.element; // return the element to parent
    }
}