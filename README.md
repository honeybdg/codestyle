@honeybdg/codestyle
===================
Tooling and configuration for code style enforcement

Available configurations
-----------------
1. [ESLint](#eslint)
2. [Stylelint](#stylelint)

<a name="eslint">ESLint</a>
---------------

Import the rules into eslint.config.js
```js
// esm
import { eslint } from '@honeybdg/codestyle';
export default eslint;

// cjs
const { eslint } = require('@honeybdg/codestyle');
module.exports = eslint;
```

<a name="stylelint">Stylelint</a>
---------------

Import the rules into stylelint.config.js
```js
// esm
import { stylelint } from '@honeybdg/codestyle';
export default stylelint;

// cjs
const { stylelint } = require('@honeybdg/codestyle');
module.exports = stylelint;
```
