export class PickerAMPM {

    constructor(options) {
        this.config = options;
    }

    // build
    build() {
        this.element = document.createElement('div');
        this.element.className = 'nj-ampm-container';
        this.element.innerHTML = 'ampm';
        return this.element; // return the element to parent
    }

}