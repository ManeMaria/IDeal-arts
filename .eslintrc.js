module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': 'warn',
    'function-paren-newline': 'warn',
    'object-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-plusplus': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/no-array-index-key': 'off',
  },
};
