export class Base {

    constructor(options, emitter) {
        this.config = options;
        this.emitter = emitter;
        this.resetValue();
    }

    // build contanier
    build({
        type,
        headerText
    }) {
        this.element = document.createElement('div');
        this.element.className = `nj-${type}-container`;
        this.createHeader({
            className: 'nj-section-header',
            innerText: headerText || type,
            element: this.element
        });
    }

    // create header 
    createHeader({
        className,
        innerText,
        element
    }) {
        let header = document.createElement('div');
        header.className = className;
        header.innerText = innerText;
        element.append(header);
    }

    // create each item 
    createItem({
        container,
        innerText,
        disabled
    }) {
        let item = document.createElement('div');
        item.className = 'nj-item';
        item.innerText = innerText;
        item.setAttribute('data', innerText.toString().toLowerCase());
        if (disabled) {
            item.setAttribute('disabled', 'disabled');
        }
        item.onclick = this.itemClick.bind(this, item);
        container.append(item);
    }

    // item clicked
    itemClick(item) {
        if (item.hasAttribute('disabled'))
            return;
        if (this.currentSelection) { // remove previous selection
            this.currentSelection.classList.remove('selected');
        }
        item.classList.add('selected');
        this.currentSelection = item;
        this.currentValue = item.getAttribute('data');
        this.emitter.emit('selection');
    }

    // sets the component value
    setValue(value) {
        let el = this.element.querySelector(`div[data="${value}"]`);
        if (el) {
            this.itemClick(el);
        }
    }

    // gets the value of the component
    getValue() {
        return this.currentValue;
    }
    // resets the value
    resetValue() {
        if (this.currentSelection) {
            this.currentSelection.classList.remove('selected');
        }
        this.currentSelection = this.currentValue = null;
    }
}