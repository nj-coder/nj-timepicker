export class Background {

    // build
    build() {
        this.element = document.createElement('div');
        this.element.className = 'nj-overlay';
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

}