# NJ-TimePicker
[NJ-TimePicker](http://nj-coder.com/) is a pure JavaScript based timepicker that enables you to select time both in 12-hour and 24-hour format in a web and mobile friendly user interface. Checkout the [DEMO HERE](http://nj-coder.com/)

<div style="text-align:center;">
    ![nj-timepicker](http://nj-coder.com/nj-libs/nj-timepicker/images/screen-shot.png)
</div>

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [License](#license)

## Installation
NJ-TimePicker can be installed using the Node Package Manager, [NPM](https://www.npmjs.com/) or including direct link to your project.
### using npm
```
npm install --save nj-timepicker
```
### direct link
```
<script src="../dist/scripts.js"></script>
```
```
<link rel="stylesheet" href="../dist/style.css">
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
| minutes            | `array`            | `[0, 15, 30, 45]`        | a list of minutes |

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
picker.setValue('12'); // h -> 12
picker.setValue('12:45'); // h -> 12, m - > 45 
picker.setValue('12:45 am'); // h -> 12, m - > 45, meridiem -> am

// as object
picker.setValue({ // h -> 12
  key: 'hours',
  value: 12
});
picker.setValue({ // m -> 45
  key: 'minutes',
  value: 45
});
picker.setValue({ // meridiem -> am
  key: 'ampm',
  value: 'am'
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
}
```
## How to Contribute
1. Clone repo and create a new branch: `$ git checkout https://github.com/nj-coder/nj-timepicker -b name_for_new_branch`.
2. Make changes and test
3. Submit Pull Request with comprehensive description of changes

## Versioning
NJ-TimePicker uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
