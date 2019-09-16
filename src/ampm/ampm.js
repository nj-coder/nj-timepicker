export class PickerAMPM {

    constructor(options) {
        this.config = options;
    }

    // build
    build() {
        this.element = document.createElement('div');
        this.element.className = 'nj-ampm-container';

        this.createHeader();
        this.createButtons();

        return this.element; // return the element to parent
    }

    // create header 
    createHeader() {
        let header = document.createElement('div');
        header.className = 'nj-section-header';
        header.innerText = 'AM/PM';
        this.element.append(header);
    }

    // create am=pm button
    createButtons() {
        let buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'nj-ampm-wrapper';

        let am = document.createElement('div');
        am.className = 'nj-item';
        am.innerText = 'AM';
        am.setAttribute('data', 'am');
        am.onclick = this.itemClick.bind(this, am);
        buttonWrapper.append(am);

        let pm = document.createElement('div');
        pm.className = 'nj-item';
        pm.innerText = 'PM';
        am.setAttribute('data', 'pm');
        pm.onclick = this.itemClick.bind(this, pm);
        buttonWrapper.append(pm);

        this.element.append(buttonWrapper);
    }

    // item clicked
    itemClick(item) {
        if (item.classList.contains('selected')) {
            item.classList.remove('selected');
        } else {
            item.classList.add('selected');
        }
    }

    setValue(){}

    // gets the value of am-pm
    getValue(){}

    // validation
    validateInput(){}

}