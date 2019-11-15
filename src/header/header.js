export class Header {
    constructor(options) {
        this.config = options;
        this.build();
    }

    build() {
        this.element = document.createElement('div');
        this.element.className = 'nj-header-container';
        if (this.config.headerText) {
            console.warn('headerText is deprecated and will be removed soon. Please use texts.header instead.');
        }
        this.element.textContent = this.config.headerText || this.config.texts.header;
    }
}