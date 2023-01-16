module.exports = {
    extends: [
        "stylelint-config-standard-scss"
    ],
    plugins: [
        "stylelint-order",
    ],
    ignoreFiles: ["**/*.js", "**/*.json"],
    rules: {
        // ORIGINAL
        "at-rule-no-unknown": null,        
        "no-descending-specificity": null,
        "selector-pseudo-class-no-unknown": [
            true,
            {
                "ignorePseudoClasses": [
                    "global"
                ]
            }
        ],
        "rule-empty-line-before": [
            "always",
            {
                "except": [
                    "after-single-line-comment",
                    "first-nested"
                ]
            }
        ],
        "indentation": 2,
        'block-opening-brace-space-before': ["always"],
        "color-function-notation": ["legacy"],
        // ORDER
        "order/order": [
            "custom-properties",
            "declarations"
        ],
        "order/properties-alphabetical-order": null
    }
}