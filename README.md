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
### using npm
```sh
npm install --save nj-timepicker
```

## Configuration
| Property        | Values           | Description  |
| :-------------- |:-----------------| :------------|
| target          | DOM Element      | The target DOM elment to hook the plugin |
| targetID        | String           | DOM element ID |
| format          | ```12 | 24```    |    $1 |

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

## License
