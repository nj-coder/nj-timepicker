export class PickerMinute {

    constructor(options) {
        this.config = options;
        this.currentSelection = null;
        this.currentValue = null;
    }

    // build
    build() {
        this.element = document.createElement('div');
        this.element.className = 'nj-minutes-container';

        this.createHeader();
        this.createButtons();

        return this.element; // return the element to parent
    }
    // create header 
    createHeader() {
        let header = document.createElement('div');
        header.className = 'nj-section-header';
        header.innerText = 'Minutes';
        this.element.append(header);
    }

    // create am=pm button
    createButtons() {
        let buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'nj-minutes-wrapper';

        let minutes = [0, 15, 30, 45];

        for (let i = 0; i < minutes.length; i++) {
            let item = document.createElement('div');
            item.className = 'nj-item';
            item.innerText = minutes[i];
            item.setAttribute('data', minutes[i]);
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