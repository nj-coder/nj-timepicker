export class Header {
    constructor(options) {
        this.config = options;
        this.build();
    }

    build() {
        this.element = document.createElement('div');
        this.element.className = 'nj-header-container';
        this.element.textContent = this.config.headerText;
    }
}