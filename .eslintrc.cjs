module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: [
    'standard',
    'standard-jsx'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    'multiline-ternary': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-closing-tag-location': 'off',
    indent: 'off',
    'react/jsx-curly-brace-presence': 'off',
    'no-extra-boolean-cast': 'off',
    'jsx-quotes': 'off',
    'no-undef-init': 'off',
    'no-useless-catch': 'off',
    'no-multiple-empty-lines': 'off',
    'comma-dangle': ['error', 'never'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'import/first': 'off',
    'no-floating-decimal': 'off'
  }
}
