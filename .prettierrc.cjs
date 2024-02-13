module.exports = {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  overrides: [
    {
      files: ['**/*.css', '**/*.scss', '**/*.html'],
      options: {
        singleQuote: false,
        string: 'lower',
      },
    },
  ],
};
