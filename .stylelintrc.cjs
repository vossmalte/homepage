module.exports = {
  extends: ['stylelint-config-html', 'stylelint-config-standard'],
  rules: {
    'function-no-unknown': [true, { ignoreFunctions: ['theme'] }],
    'value-keyword-case': ['lower', { ignoreKeywords: ['clientWidth'] }]
  }
};
