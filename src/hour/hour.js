import { Base } from '../base/base';

export class PickerHour extends Base {

    constructor(options, emitter) {
        super(options, emitter);
        super.build({
            type: 'hours',
            headerText: this.config.texts.hours
        });
        this.createButtons();
    }

    // create am=pm button
    createButtons() {
        let buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'nj-hours-wrapper';

        let buttonLimit = this.config.format == '12' ? 12 : 23;
        let buttonStart = this.config.format == '12' ? 1 : 0;
        let disabledHours = Array.isArray(this.config.disabledHours) ? this.config.disabledHours : [];

        for (let i = (buttonStart); i <= buttonLimit; i++) {
            super.createItem({
                container: buttonWrapper,
                innerText: i,
                disabled: disabledHours.includes(i)
            });
        }

        this.element.append(buttonWrapper);
    }

}