import { Base } from '../base/base';

export class PickerAMPM extends Base {

    constructor(options, emitter) {
        super(options, emitter);
        this.config = options;
        this.currentSelection = null;
        this.currentValue = null;
        super.build({
            type: 'ampm',
            headerText: this.config.texts.ampm || 'AM/PM'
        });
        this.createButtons();
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