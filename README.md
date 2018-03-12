<!-- TITLE/ -->

<h1>get-os</h1>

<!-- /TITLE -->


<!-- DESCRIPTION/ -->
<h2>NB: This package hasn't been deployed to npm yet, and lacks test coverage. That will be coming soon!</h2>

A helper that returns the current user's operating system. Eg. "Windows", "Linux", "Android", "MacOS", "iOS" etc.

<!-- /DESCRIPTION -->


<!-- BADGES/ -->

<span class="badge-nodeico"><a href="https://www.npmjs.com/package/@BarryMichaelDoyle/get-os" title="Nodei.co badge"><img src="https://nodei.co/npm/@BarryMichaelDoyle/get-os.png" alt="Nodei.co badge" /></a></span>
<br class="badge-separator" />
<span class="badge-travisci"><a href="http://travis-ci.org/BarryMichaelDoyle/get-os" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/BarryMichaelDoyle/get-os/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/@BarryMichaelDoyle/get-os" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@BarryMichaelDoyle/get-os.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/@BarryMichaelDoyle/get-os" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@BarryMichaelDoyle/get-os.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/BarryMichaelDoyle/get-os" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/BarryMichaelDoyle/get-os.svg" alt="Dependency Status" /></a></span>

<!-- /BADGES -->

## List of Possible Results

<ul>
  <li>Android</li>
  <li>BlackBerry</li>
  <li>Firefox OS</li>
  <li>FreeBSD</li>
  <li>iOS</li>
  <li>Linux</li>
  <li>Mac</li>
  <li>Nintendo</li>
  <li>OpenBSD</li>
  <li>Palm</li>
  <li>PlayStation</li>
  <li>SunOS</li>
  <li>Symbian</li>
  <li>Windows</li>
</ul>

If the user's operating system doesn't fall under the category of any of these list items, then the `window.navigator.platform` result will be returned instead.

## Installation
```
yarn add @barrymichaeldoyle/get-os or

or

npm install @barrymichaeldoyle/get-os
```

## Usage

Here's an example of a component that renders a shortcut phrase based off the user's operating system:

```javascript
import getOS from '@barrymichaeldoyle/get-os'

const ShortcutPhrase = () => `${getOS() === 'Mac' ? 'cmd' : 'ctrl'} + click`;

export default ShortcutPhrase;

```

If the user's operating system is a Mac, the shortcut phrase renders 'cmd + click', otherwise it renders 'ctrl + click'.

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

<a href="https://github.com/BarryMichaelDoyle/get-os/releases">Discover the release history by heading on over to the releases page.</a>

<!-- /HISTORY -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; <a href="https://www.barrymichaeldoyle.com">Barry Michael Doyle</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
