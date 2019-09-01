export class NJPicker {

    constructor(options) {
        if (typeof (options) != 'Object') {
            throw "No options passed for initilization";
        } else {
            this.config = options;
            initPlugin();
        }
    }

    // set the options for building the plugin
    initPlugin() {
        let default_config = {};
    }

}

if (typeof global === 'object' && !global.NJPicker) {
    global.NJPicker = NJPicker;
}