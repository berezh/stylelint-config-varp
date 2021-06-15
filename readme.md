# stylelint-config-varp

<a href="https://www.npmjs.com/package/stylelint-config-varp">
    <img src="https://nodei.co/npm/stylelint-config-varp.png?mini=true">
</a>

## How to set up

1. Install with peer dependencies:

```js
npx install-peerdeps --dev stylelint-config-varp
```

2. Create `.stylelintrc.js` with content:

```js
module.exports = {
    extends: ["stylelint-config-varp"],
    rules: {
        /* Additional rules */
    }
};
```

3. Add `.vscode/settings.json` with content:
```json
{
  "[scss]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "stylelint.validate": [
    "scss"
  ],
  "stylelint.snippet": [
    "scss"
  ]
}
```

4. Add `.stylelintignore` with content:

```
node_modules
*.*
!*.scss
```

5. Add new scripts to package.json:

```json
"scripts": {
  "stylelint": "stylelint .",
  "stylelint:fix": "stylelint . --fix"
}
```

6. Call `stylelint` with `eslint`:

```json
"scripts": {
        "lint": "stylelint . && eslint .",
        "lint:fix": "stylelint . --fix && eslint . --fix"
}
```

