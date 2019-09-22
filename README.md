# NJ-Picker
[NJ-Picker](http://nj-coder.com/) is a pure JavaScript based timepicker that enables you to select time both in 12-hour and 24-hour format in a web and mobile friendly user interface. Checkout the [DEMO HERE](http://nj-coder.com/)

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [License](#license)

## Installation
NJ-Picker can be installed using the Node Package Manager, [NPM](https://www.npmjs.com/) or including direct link to your project.
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

## Configuration
The plugin ships with various configuration and events that can be used to meet your requirements.

### Initialization Options
| Property        | Values           | Default      | Description  |
| :-------------- |:-----------------| :------------| :------------|
| target          | DOM Element      | --           | target DOM elment |
| targetID        | String           | --           | DOM element ID |
| format          | ```12 \| 24```   | ```12```     | Time display format |
| clickOutsideToClose| ```true \| false```   | ```true```     | Click outside to close |

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
You can overridde the default theme by changing the following css variables.
```js
:root {
    // save button 
    --save-button-bg: #008000;
    --save-button-fc: #ffffff;

    // clear button
    --clear-button-bg: #ffa500;
    --clear-button-fc: #ffffff;

    // close button
    --close-button-bg: #ff0000;
    --close-button-fc: #ffffff;
}
```

## Usage
```js
let container = document.querySelector('#container');
// init picker
var picker = new NJPicker({
    targetID: 'container'
});
// on save event
picker.on('save', function (data) {
    container.textContent = data.fullResult;
});
```

## How to Contribute
1. Clone repo and create a new branch: `$ git checkout https://github.com/nj-coder/nj-timepicker -b name_for_new_branch`.
2. Make changes and test
3. Submit Pull Request with comprehensive description of changes

## Versioning
NJ-Picker uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
