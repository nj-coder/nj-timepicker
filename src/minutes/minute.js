import { Base } from '../base/base';

export class PickerMinute extends Base {

    constructor(options) {
        super(options);
        this.config = options;
        this.currentSelection = null;
        this.currentValue = null;
        super.build({
            type: 'minutes',
            headerText: this.config.texts.minutes
        });
        this.createButtons();
    }

    // create am=pm button
    createButtons() {
        let buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'nj-minutes-wrapper';

        let minutes = this.config.minutes || [0, 15, 30, 45];
        let disabledMinutes = Array.isArray(this.config.disabledMinutes) ? this.config.disabledMinutes : [];
        for (let i = 0; i < minutes.length; i++) {
            if (typeof (minutes[i]) == 'number' && minutes[i] < 60) {
                super.createItem({
                    container: buttonWrapper,
                    innerText: minutes[i],
                    disabled: disabledMinutes.includes(minutes[i])
                });
            }
        }

        this.element.append(buttonWrapper);
    }
}