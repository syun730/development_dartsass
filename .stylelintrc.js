module.exports = {
  plugins: ["stylelint-scss"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-property-sort-order-smacss"
  ],
  ignoreFiles: ["**/node_modules/**", "src/scss/vendor/**"],
  rules: {
    indentation: 2,
    "scss/selector-no-union-class-name": true,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "font-family-no-missing-generic-family-keyword": null
  }
};
