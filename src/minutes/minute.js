export class PickerMinute {

    constructor(options) {
        this.config = options;
    }

    // build
    build() {
        this.element = document.createElement('div');
        this.element.className = 'nj-minutes-container';
        this.element.innerHTML = 'minutes';
        return this.element; // return the element to parent
    }
}