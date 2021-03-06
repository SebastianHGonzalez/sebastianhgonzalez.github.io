module.exports = {
    extends: [
        'airbnb',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
      'import',
      '@typescript-eslint',
      'prettier',
      'better-styled-components',
      'jest'
    ],
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {},
        node: {
          paths: ["src"]
        }
      },
    },
    env: {
      "jest/globals": true
    },
    rules: {
      'better-styled-components/sort-declarations-alphabetically': 2,

      'import/extensions': 0,
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.tsx', '**/test.ts'] }],
      '@typescript-eslint/indent': [2, 2],

      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  };
  