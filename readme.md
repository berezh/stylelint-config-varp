# stylelint-config-varp

<a href="https://www.npmjs.com/package/stylelint-config-varp">
    <img src="https://nodei.co/npm/stylelint-config-varp.png?mini=true">
</a>

## Set up

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

3. Add `.stylelintignore` with content:

```
.*/
!*.scss
```

4. Add `.vscode/settings.json` with content:
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

5. Add new scripts to package.json:

```json
"scripts": {
    "stylelint": "stylelint \"**/*.scss\"",
    "stylelint:fix": "stylelint \"**/*.scss\" --fix"
}
```

6. Call `stylelint` with `eslint`:

```json
"scripts": {
    "lint": "eslint . && stylelint \"**/*.scss\"",
    "lint:fix": "eslint . --fix && stylelint \"**/*.scss\" --fix"
}
```

## Cases

### Override folder

```js
module.exports = {
    extends: "../.stylelintrc.js",
    rules: {
        /* Overrided rules */
    }
};
```
