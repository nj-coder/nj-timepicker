import { Base } from '../base/base';

export class PickerAMPM extends Base {

    constructor(options) {
        super(options);
        this.config = options;
        this.currentSelection = null;
        this.currentValue = null;
    }

    // build
    build() {
        this.element = document.createElement('div');
        this.element.className = 'nj-ampm-container';

        super.createHeader({
            className: 'nj-section-header',
            innerText: 'AM/PM',
            element: this.element
        });
        
        this.createButtons();

        return this.element; // return the element to parent
    }

    // create am=pm button
    createButtons() {
        let buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'nj-ampm-wrapper';

        super.createItem({
            container: buttonWrapper,
            innerText: 'AM'
        });

        super.createItem({
            container: buttonWrapper,
            innerText: 'PM'
        });

        this.element.append(buttonWrapper);
    }

}