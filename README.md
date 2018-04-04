<!-- TITLE/ -->

<h1>Simple OS Platform</h1>

<!-- /TITLE -->


<!-- DESCRIPTION/ -->

A helper that returns the current user's operating system. Eg. "Windows", "Linux", "Android", "MacOS", "iOS" etc.

<!-- /DESCRIPTION -->


<!-- BADGES/ -->

<span class="badge-nodeico"><a href="https://www.npmjs.com/package/simple-os-platform" title="Nodei.co badge"><img src="https://nodei.co/npm/simple-os-platform.png" alt="Nodei.co badge" /></a></span>
<br class="badge-separator" />
<span class="badge-travisci"><a href="http://travis-ci.org/barrymichaeldoyle/simple-os-platform" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/barrymichaeldoyle/simple-os-platform/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/simple-os-platform" title="View this project on NPM"><img src="https://img.shields.io/npm/v/simple-os-platform.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/simple-os-platform" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/simple-os-platform.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/BarryMichaelDoyle/simple-os-platform" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/BarryMichaelDoyle/simple-os-platform.svg" alt="Dependency Status" /></a></span>

<!-- /BADGES -->

## Installation

`yarn add simple-os-platform`

or

`npm install simple-os-platform`

## Usage

Here's an example of a component that renders a shortcut phrase based off the user's operating system:

```javascript
// ES6/ES7/ESNext
import { getOS isMac, isNotMac } from 'simple-os-platform'

getOS(); // returns your Operating System Eg. Mac, Windows etc (see list below)
isMac(); // returns true if your operating system is a Mac
isNotMac(); // returns false if your operating system is a Mac

// CommonJS
var simpleOSPlatform = require('simple-os-platform');

simpleOSPlatform.getOS(); // returns your Operating System Eg. Mac, Windows etc (see list below)
simpleOSPlatform.isMac(); // returns true if your operating system is a Mac
simpleOSPlatform.isNotMac(); // returns false if your operating system is a Mac
```

If the user's operating system is a `Mac`, the shortcut phrase renders `cmd + click`, otherwise it renders `ctrl + click`.

## List of Possible Results [helper boolean functions]

<ul>
  <li>Android [isAndroid, isNotAndroid]</li>
  <li>BlackBerry [isBlackBerry, isNotBlackBerry]</li>
  <li>FirefoxOS [isFirefoxOS, isNotFirefoxOs]</li>
  <li>FreeBSD [isFreeBSD, isNotFreeBSD]</li>
  <li>iOS [isIOS, isNotIOS]</li>
  <li>Linux [isLinux, isNotLinux]</li>
  <li>Mac [isMac, isNotMac]</li>
  <li>Nintendo [isNintendo, isNotNintendo]</li>
  <li>OpenBSD [isOpenBSD, isNotOpenBSD]</li>
  <li>Palm [isPalm, isNotPalm]</li>
  <li>PlayStation [isPlayStation, isNotPlayStation]</li>
  <li>SunOS [isSunOS, isNotSunOS]</li>
  <li>Symbian [isSymbian, isNotSymbian]</li>
  <li>Windows [isWindows, isNotWindows]</li>
</ul>

If the user's operating system doesn't fall under the category of any of these list items, then the `window.navigator.platform` result will be returned instead.

## Testing

Testing is handled by `Jest` and the packages has the following commands setup

* `yarn test`
* `yarn test:watch`

## Contributing

<strong>TODO:</strong> Write Unit Tests for the isHelpers

All contributions are welcome, and can be done by cloning the repo and running `yarn install`.

Ensure that there are no errors in the tests or linter and ensure that your commit messages comply to the following format:

* break: COMMIT_MSG - changes in the code that changes the way other users would need to implement it.
* feat: COMMIT_MSG - adding a new feature or capability to the helper.
* fix: COMMIT_MSG - any bugs or minor updates that fixes the existing code without adding or removing any capabilities.
* none: COMMIT_MSG - used for simple updates like documentation, aka NO code has changed.

There are git hooks configured to ensure commit message format as well as test and linter compliance.

<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/BarryMichaelDoyle/simple-os-platform/releases">Discover the release history by heading on over to the releases page.</a>

<!-- /HISTORY -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; <a href="https://www.barrymichaeldoyle.com">Barry Michael Doyle</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
