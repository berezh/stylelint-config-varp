module.exports = {
    extends: [
        "stylelint-config-standard-scss"
    ],
    plugins: [
        "stylelint-order",
    ],
    rules: {
        // COMMON
        "at-rule-no-unknown": null,
        "indentation": 2,
        'block-opening-brace-space-before': ['always'],
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
        // ORDER
        "order/order": [
            "custom-properties",
            "declarations"
        ],
        "order/properties-alphabetical-order": null,
    }
}