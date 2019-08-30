# Calcium

[![Greenkeeper badge](https://badges.greenkeeper.io/chancedigital/calcium.svg)](https://greenkeeper.io/)

The Chance Digital Web Style Guide and Pattern Library. A fork of the similar style guide, Juniper, published by [Human Made](https://github.com/humanmade/hm-pattern-library).

### Contributing and Development

#### Set up

Run these commands to get it running locally

1. `git clone --recursive git@github.com:chancedigital/calcium.git calcium.dev`
2. `cd calcium.dev`
3. If you do not have gulp installed on your machine, install it globally by running `npm install gulp-cli -g`
4. `npm install`
5. The sass and html can be compiled by running the command `gulp`.

The library generates flat HTML and does not require a web server to be loaded. Once compiled, the HTML can be opened in your browser via the file system. You can simply access the compiled index file directly at `…/dist/index.html`

#### Workflow.

All local development should be done against master. `dist` which contains the compiled files is ignored from version control and must be created using the `gulp` task. Releases are just the content of `dist` and nothing else.

#### Creating a branch

All contributions should relate to an issues. If the issue does not exist, open an issue in the original repository, this will give your issue a number.

When creating a branch, name your branch `[issue-number]-short-summary`.

#### Submitting a pull request

Before submitting a pull request, you will need to confirm your sass meets our coding standards by running `gulp lint-sass`.

When you push your branch, you will be able to submit a pull request. Travis CI runs on the repository and will need to pass on all pull requests.

If Travis CI fails, you can push further commits to the branch to fix the build.

#### CSS Naming convention

This project follows the [BEM](http://getbem.com/) CSS naming convention.

#### Components

Follow the BEM naming conventions. Sub-components are indicated with an `__`, variants with a `--`

* `block`
* `block__child`
* `block__child--variant`

In the styles/components directory, components should be placed in a file named for the component, `_component.scss`.

#### Utilities

Utilities are prefixed with `util-`, for example `util-clearfix`. A utility should be placed in the styles/utilities directory in a file named for the utility, `_clearfix.scss`.

#### Vendor files

Class names in vendor files should not be changed, the files should be placed in the styles/vendor directory and included as any other file would be included. These files do not need to meet our linting standards.

**1.0.0**

* First stable release
