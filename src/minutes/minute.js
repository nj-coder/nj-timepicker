import { Base } from '../base/base';

export class PickerMinute extends Base {

    constructor(options) {
        super(options);
        this.config = options;
        this.currentSelection = null;
        this.currentValue = null;
    }

    // build
    build() {
        this.element = document.createElement('div');
        this.element.className = 'nj-minutes-container';

        super.createHeader({
            className: 'nj-section-header',
            innerText: 'Minutes',
            element: this.element
        });
        this.createButtons();

        return this.element; // return the element to parent
    }

    // create am=pm button
    createButtons() {
        let buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'nj-minutes-wrapper';

        let minutes = [0, 15, 30, 45];

        for (let i = 0; i < minutes.length; i++) {
            super.createItem({
                container: buttonWrapper,
                innerText: i
            });
        }

        this.element.append(buttonWrapper);
    }
}