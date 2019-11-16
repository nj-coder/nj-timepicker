export class Background {

    constructor() {
        const element = document.createElement('div');
        element.className = 'nj-overlay';
        return element; // return the element to parent
    }
}