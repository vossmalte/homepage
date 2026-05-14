export default {
  extends: ['stylelint-config-html', 'stylelint-config-standard'],
  rules: {
    'value-keyword-case': ['lower', { ignoreKeywords: ['clientWidth'] }]
  }
};
