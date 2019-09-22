# NJ-Picker
> A simple and user-friendly timepicker using pure JavaScript

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
### Plugin Init Options
| Property        | Values           | Default      | Description  |
| :-------------- |:-----------------| :------------| :------------|
| target          | DOM Element      | --           | The target DOM elment to hook the plugin |
| targetID        | String           | --           | DOM element ID |
| format          | ```12 \| 24```   | ```12```     | Time display format |
| clickOutsideToClose| ```true \| false```   | ```true```     | Click outside to close |

### Events
| Name        | Description  |
| :---------- |:-------------|
| save        | on save button click |

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
