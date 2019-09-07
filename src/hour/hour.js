export class PickerHour {

    constructor(options) {
        this.config = options;
    }

    // build
    build() {
        this.element = document.createElement('div');
        this.element.className = 'nj-hours-container';
        this.element.innerHTML = 'hours';
        return this.element; // return the element to parent
    }

}