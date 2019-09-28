import { Base } from '../base/base';

export class PickerMinute extends Base {

    constructor(options) {
        super(options);
        this.config = options;
        this.currentSelection = null;
        this.currentValue = null;
        super.build({
            type: 'minutes'
        });
        this.createButtons();
    }

    // create am=pm button
    createButtons() {
        let buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'nj-minutes-wrapper';

        let minutes = [0, 15, 30, 45];

        for (let i = 0; i < minutes.length; i++) {
            super.createItem({
                container: buttonWrapper,
                innerText: minutes[i]
            });
        }

        this.element.append(buttonWrapper);
    }
}