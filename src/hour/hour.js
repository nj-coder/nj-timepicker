import { Base } from '../base/base';

export class PickerHour extends Base {

    constructor(options) {
        super(options);
        this.config = options;
        this.currentSelection = null;
        this.currentValue = null;
    }

    // build
    build() {
        this.element = document.createElement('div');
        this.element.className = 'nj-hours-container';

        super.createHeader({
            className: 'nj-section-header',
            innerText: 'Hours',
            element: this.element
        });
        this.createButtons();

        return this.element; // return the element to parent
    }

    // create am=pm button
    createButtons() {
        let buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'nj-hours-wrapper';

        let buttonLimit = this.config.format == '12' ? 12 : 23;
        let buttonStart = this.config.format == '12' ? 1 : 0;

        for (let i = buttonStart; i <= buttonLimit; i++) {
            super.createItem({
                container: buttonWrapper,
                innerText: i
            });
        }

        this.element.append(buttonWrapper);
    }

}