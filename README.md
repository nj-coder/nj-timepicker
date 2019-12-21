# NJ-TimePicker
<p align="center">
  <img src="https://i.ibb.co/cb6RTVS/12.png">
  <img src="https://i.ibb.co/ydRmPyb/242.png">
</p> 

NJ-TimePicker is a pure JavaScript based timepicker that enables you to select time both in 12-hour and 24-hour format in a web and mobile friendly user interface. Checkout the [DEMO HERE](https://nj-coder.com/nj-libs/nj-timepicker/index.html) or [FIDDLE IT OUT](https://jsfiddle.net/njcoder/5dc0trb9/)

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [License](#license)

## Installation
```
npm install --save nj-timepicker
```

You can use NJ-TimePicker as an ES6 module as follows:

```javascript
import NJTimePicker from 'nj-timepicker'; 

const picker = new NJTimePicker(...);
```

Alertnatively you can include the `njtimepicker.min.js` script before the closing `</body>` tag and then in your JS create a new instance of NJ-TimePicker as below.

```html
<script src="path/to/njtimepicker.min.js"></script>
<script>
    const picker = new NJTimePicker(...);
</script>
```
## Usage
```js
let container = document.querySelector('#container');
// init picker
var picker = new NJTimePicker({
    targetID: 'container'
});
// on save event
picker.on('save', function (data) {
    container.textContent = data.fullResult;
});
```

## Configuration
The plugin ships with various configuration and events that can be used to meet your requirements.

### Initialization Options
| Property           | Values             | Default                  | Description  |
| :----------------- |:-------------------| :------------------------| :------------|
| target             | DOM Element        | --                       | target DOM element |
| targetID           | String             | --                       | the DOM element ID |
| id                 | String             | ```alphanumeric string```| a unique ID for the picker |
| format             | ```12 \| 24```     | ```12```                 | picker display format |
| clickOutsideToClose| ```true \| false```| ```true```               | to close the picker when clicked outside |
| autoSave           | ```true \| false```| ```false```               | save when all values are selected |
| minutes            | `array`            | `[0, 15, 30, 45]`        | a list of minutes |
| disabledHours      | `array`            | `[]`                     | a list of disabled Hours |
| disabledMinutes    | `array`            | `[]`                     | a list of disabled Minutes |
| texts              | `object`           | `{`<br>`header: ''`<br>`hours: 'Hours'`<br>`minutes: 'Minutes'`<br>`ampm: 'AM/PM'`<br>`save: 'Save'`<br>`clear: 'Clear'`<br>`close: 'Close'`<br>`}`| picker texts |

### Methods
NJ-TimePicker ships with methods that can be used to change the picker behaviour. These methods have strict input formatting which helps achive desired result

#### `picker.show()`
This is methods triggers the show event and presents the picker on-screen.

#### `picker.hide()`
This is methods triggers the hide event and hides the picker.

#### `picker.setValue(param)`
The setValue method sets the value of the picker. It take one argument which can be a string or a object
```js
// as string
picker.setValue('12'); // h-12
picker.setValue('12:45'); // h-12, m-45 
picker.setValue('12:45 am'); // h-12, m-45, meridiem-am

// as object
picker.setValue({
    hours: 12, // h-12
    minutes: 45, // m-45 
    ampm: 'am' // meridiem-am
});
```

#### `picker.getValue(param)`
The getValue method gets the value of the picker. It takes an optional argument.
```js
picker.getValue();
// result object
{
  ampm: "am"
  fullResult: "12:45 am"
  hours: "12"
  minutes: "45"
}
// with parameter
picker.getValue('hours'); // outputs hours, 12
picker.getValue('minutes'); // outputs minutes, 45
picker.getValue('am'); // outputs meridiem, am
picker.getValue('fullResult'); // outputs full string, 12:45 am
```
### Events
| Name        | Description  |
| :---------- |:-------------|
| ready       | when plugin initialization is complete |
| show        | picker is presented to the user |
| hide        | when picker is hidden |
| save        | on save button click |
| cancel      | on cancel button click |
| clear       | on clear button click |

### Theming
You can overridde the default theme by changing the following [css variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
```css
:root {
    /* save button */ 
    --save-button-bg: #008000;
    --save-button-fc: #ffffff;

    /* clear button */
    --clear-button-bg: #ffa500;
    --clear-button-fc: #ffffff;

    /* close button */
    --close-button-bg: #ff0000;
    --close-button-fc: #ffffff;

    /* header */ 
    --header-text-color: #ffffff;  
    --header-text-align: left;
    --header-bg: #414141;

    /* picker container */
    --picker-bg: #fff;
    --picker-selection-bg: #0000ff;
    --picker-selection-fc: #fff; 
    --picker-max-width: 400px;
    --picker-min-width: 350px;
}
```
## How to Contribute
1. Clone repo and create a new branch: `$ git checkout https://github.com/nj-coder/nj-timepicker -b name_for_new_branch`.
2. Make changes and test
3. Submit Pull Request with comprehensive description of changes

## Releases and Changes
Check out the [Releases](https://github.com/nj-coder/nj-timepicker/releases) and [Change Logs](https://github.com/nj-coder/nj-timepicker/blob/master/Changelog.md) for more information. 

## Copyright and License
[The MIT license](LICENSE.md) 
