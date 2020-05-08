# Change Log
All notable changes to this project will be documented in this file. For transparency into release cycles and in striving to maintain backward compatibility, the project is maintained under [the Semantic Versioning guidelines](https://semver.org/). 

The below format is based on [Keep a Changelog](http://keepachangelog.com/).

## [Unreleased]
### Added
- enhancement - added `autoSave` config to close the picker after selection ([4a8e091
](https://github.com/nj-coder/nj-timepicker/commit/4a8e091
)) closes [#7](https://github.com/nj-coder/nj-timepicker/issues/7)
### Changed
- updated event emitter to [NJ-Events](https://github.com/nj-coder/nj-events)
- updated build process to [gulp-better-rollup](https://www.npmjs.com/package/gulp-better-rollup)
- `setValue()` method to accept object, instead of indivual key-value pair
### Fixed
 - fix - After changing button text, ie: close: 'Cerrar', buttons become non-functional. ([571724b](https://github.com/nj-coder/nj-timepicker/commit/571724b)) closes [#8](https://github.com/nj-coder/nj-timepicker/issues/8)

## [1.3.100] - 2019-11-16
### Added
 - enhancement - auto fill value if the target element is an input ([0d00cdd](https://github.com/nj-coder/nj-timepicker/commit/0d00cdd)) closes [#4](https://github.com/nj-coder/nj-timepicker/issues/4)
 - enhancement - picker texts can be configured by providing in the `texts` configuration ([4409f99](https://github.com/nj-coder/nj-timepicker/commit/4409f99)) closes [#5](https://github.com/nj-coder/nj-timepicker/issues/5)
 - enhancement - added more variables for theming ([4409f99](https://github.com/nj-coder/nj-timepicker/commit/4409f99))
 - zoom in animation when picker is shown ([91641da](https://github.com/nj-coder/nj-timepicker/commit/91641da))

### Deprecated
- `headerText` instead use `texts` to configure the header 

## [1.2.102] - 2019-11-07 
### Added
 - `disabledHours` and `disabledMinutes` config
 - `headerText` config
### Fixed
 - An issue which returns || when save is pressed without selecting any values
 - fix - DIV renders at top of page, irregardless of page scrolling ([81de097](https://github.com/nj-coder/nj-timepicker/commit/81de097)) closes [#3](https://github.com/nj-coder/nj-timepicker/issues/3)

## [1.1.100] - 2019-09-28
### Added
 - Base component
 - Minutes configuration
 - set and get value methods
 
## [0.0.100] - 2019-08-15
### Added
 - Inital layout and configuration
