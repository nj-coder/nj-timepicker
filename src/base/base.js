export class Base {

    constructor(options) {
        this.config = options;
        this.currentSelection = null;
        this.currentValue = null;
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
        innerText
    }){
        let item = document.createElement('div');
        item.className = 'nj-item';
        item.innerText = innerText;
        item.setAttribute('data', innerText.toString().toLowerCase());
        item.onclick = this.itemClick.bind(this, item);
        container.append(item);
    }

    // item clicked
    itemClick(item) {
        if (this.currentSelection) { // remove previous selection
            this.currentSelection.classList.remove('selected');
        }
        item.classList.add('selected');
        this.currentSelection = item;
        this.currentValue = item.getAttribute('data');
    }

    // sets the component value
    setValue() { }

    // gets the value of am-pm
    getValue() {
        return this.currentValue || '';
    }
    // resets the value
    resetValue() {
        if (this.currentSelection) {
            this.currentSelection.classList.remove('selected');
        }
        this.currentSelection = null;
        this.currentValue = null;
    }
}