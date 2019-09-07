export class Background {

    constructor() {
        return this.build();
    }

    // build
    build() {
        this.element = document.createElement('div');
        this.element.className = 'nj-overlay';
        return this.element; // return the element to parent
    }
}