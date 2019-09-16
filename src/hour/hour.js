export class PickerHour {

    constructor(options) {
        this.config = options;
        this.currentSelection = null;
        this.currentValue = null;
    }

    // build
    build() {
        this.element = document.createElement('div');
        this.element.className = 'nj-hours-container';

        this.createHeader();
        this.createButtons();

        return this.element; // return the element to parent
    }
    // create header 
    createHeader() {
        let header = document.createElement('div');
        header.className = 'nj-section-header';
        header.innerText = 'Hours';
        this.element.append(header);
    }

    // create am=pm button
    createButtons() {
        let buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'nj-hours-wrapper';

        let buttonLimit = this.config.format == '12' ? 12 : 24;
        let buttonStart = this.config.format == '12' ? 1 : 0;

        for (let i = buttonStart; i <= buttonLimit; i++) {
            let item = document.createElement('div');
            item.className = 'nj-item';
            item.innerText = i;
            item.setAttribute('data', i);
            item.onclick = this.itemClick.bind(this, item);
            buttonWrapper.append(item);
        }


        this.element.append(buttonWrapper);
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

    setValue() { }

    // gets the value of am-pm
    getValue() { }

    // resets the value
    resetValue() {
        if (this.currentSelection) {
            this.currentSelection.classList.remove('selected');
        }
        this.currentSelection = null;
        this.currentValue = null;
    }

    // validation
    validateInput() { }

}