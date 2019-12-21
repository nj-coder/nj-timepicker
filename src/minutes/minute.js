import { Base } from '../base/base';

export class PickerMinute extends Base {

    constructor(options, emitter) {
        super(options, emitter);
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
        minutes.forEach(minute => {
            if (typeof (minute) == 'number' && minute < 60) {
                super.createItem({
                    container: buttonWrapper,
                    innerText: minute,
                    disabled: (disabledMinutes).includes(minute)
                });
            }
        });

        this.element.append(buttonWrapper);
    }
}