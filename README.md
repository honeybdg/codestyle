@honeybdg/codestyle
===================
Tooling and configuration for code style enforcement

## Installation

Basic installation:
```bash
npm install -D @honeybdg/codestyle eslint
```
If your project uses TypeScript, Stylelint, install them as dev dependencies:
```bash
npm install -D @honeybdg/codestyle eslint typescript stylelint
```

Available configurations
-----------------
1. [ESLint](#eslint)
2. [Stylelint](#stylelint)

<a name="eslint">ESLint</a>
---------------

Import the rules into eslint.config.js
```js
import base, { typescript, react, angular } from '@honeybdg/codestyle/eslint';
/** @type {import('eslint').Linter.Config[]} */
export default [...base, ...typescript ...react ...angular];
```

<a name="stylelint">Stylelint</a>
---------------

Import the rules into stylelint.config.js
```js
import config from '@honeybdg/codestyle/stylelint';
/** @type {import('stylelint').Config} */
export default config;
```
