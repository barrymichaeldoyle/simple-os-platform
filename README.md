<!-- TITLE/ -->

<h1>GUID</h1>

<!-- /TITLE -->


<!-- DESCRIPTION/ -->

A helper that returns a guid

<!-- /DESCRIPTION -->


<!-- BADGES/ -->

<span class="badge-nodeico"><a href="https://www.npmjs.com/package/@iplatformglobal/guid" title="Nodei.co badge"><img src="https://nodei.co/npm/@iplatformglobal/guid.png" alt="Nodei.co badge" /></a></span>
<br class="badge-separator" />
<span class="badge-travisci"><a href="http://travis-ci.org/iPlatformGlobal/guid" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/iPlatformGlobal/guid/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/@iplatformglobal/guid" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@iplatformglobal/guid.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/@iplatformglobal/guid" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@iplatformglobal/guid.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/iPlatformGlobal/guid" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/iPlatformGlobal/guid.svg" alt="Dependency Status" /></a></span>

<!-- /BADGES -->


## Installation
```
yarn add @iplatformglobal/guid or

or

npm install @iplatformglobal/guid
```

## Usage

Returns a guid

```javascript
import guid from '@iplatformglobal/guid'

// Generate a guid and store it in a variable named id
const id = guid();

// Eg. id: "045d480f-8b07-0728-a39f-cdcb5bbf5730"

```
## Testing

Testing is handled by `Jest` and the packages has the following commands setup

* `yarn test`
* `yarn test:watch`

## Contributing

All contributions are welcome, and can be done by cloning the repo and running `yarn install`.

Ensure that there are no errors in the tests or linter and ensure that your commit messages comply to the following format:

* break: COMMIT_MSG - changes in the code that changes the way other users would need to implement it.
* feat: COMMIT_MSG - adding a new feature or capability to the helper.
* fix: COMMIT_MSG - any bugs or minor updates that fixes the existing code without adding or removing any capabilities.
* none: COMMIT_MSG - used for simple updates like documentation, aka NO code has changed.

There are git hooks configured to ensure commit message format as well as test and linter compliance.


<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/iPlatformGlobal/guid/releases">Discover the release history by heading on over to the releases page.</a>

<!-- /HISTORY -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2017+ <a href="http://www.iplatform.com">iPlatform</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
