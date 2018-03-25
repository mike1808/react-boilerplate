module.exports = {
  env: {
    browser: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'max-len': ['error', { 'code': 100, 'ignoreUrls': true }],
  },
  overrides: [
    {
      files: [
        '*.test.js',
        '*.test.jsx'
      ],
      env: {
        'jest': true
      },
      globals: {
        shallow: true,
        render: true,
        mount: true,
      },
      rules: {
        'function-paren-newline': 'off',
        'global-require': 'off',
        'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
        'react/prop-types': 'off'
      }
    },
    {
      files: [
        'webpack.config.js',
      ],
      env: {
        node: true,
      },
    }
  ]
};
