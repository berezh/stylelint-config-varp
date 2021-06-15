module.exports = {
    extends: [
        "stylelint-config-recommended",
        "stylelint-config-prettier"
    ],
    plugins: [
        "stylelint-order",
        "stylelint-scss",
        "stylelint-selector-bem-pattern"
    ],
    ignoreFiles: ["**/*.js", "**/*.json"],
    rules: {
        "at-rule-no-unknown": null,
        "order/order": [
            "custom-properties",
            "declarations"
        ],
        "order/properties-alphabetical-order": null,
        "no-descending-specificity": null,
        "selector-pseudo-class-no-unknown": [
            true,
            {
                "ignorePseudoClasses": [
                    "global"
                ]
            }
        ],
        "plugin/selector-bem-pattern": {
            "preset": "bem",
            "ignoreSelectors": [
                "\\.recharts-"
            ]
        }
    }
}