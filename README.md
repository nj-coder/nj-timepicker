# NJ-TimePicker
<p align="center">
  <img src="http://nj-coder.com/nj-libs/nj-timepicker/images/screen-shot.png">
</p>

NJ-TimePicker is a pure JavaScript based timepicker that enables you to select time both in 12-hour and 24-hour format in a web and mobile friendly user interface. Checkout the [DEMO HERE](http://nj-coder.com/nj-libs/nj-timepicker/index.html)

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [License](#license)

## Installation
NJ-TimePicker can be installed using the Node Package Manager, [NPM](https://www.npmjs.com/) or including direct link to your project.
### Using npm
```
npm install --save nj-timepicker
```
### Direct link
```
<script src="http://nj-coder.com/nj-libs/nj-timepicker/dist/scripts.min.js"></script>
<link rel="stylesheet" href="http://nj-coder.com/nj-libs/nj-timepicker/dist/style.min.css">
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
picker.setValue('12'); // h-12
picker.setValue('12:45'); // h-12, m-45 
picker.setValue('12:45 am'); // h-12, m-45, meridiem-am

// as object
picker.setValue({ // h-12
  key: 'hours',
  value: 12
});
picker.setValue({ // m-45
  key: 'minutes',
  value: 45
});
picker.setValue({ // meridiem-am
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
NJ-TimePicker uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository]https://github.com/nj-coder/nj-timepicker/tags). 

## License
```
MIT License

Copyright (c) [2019] [NJ-Picker]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
