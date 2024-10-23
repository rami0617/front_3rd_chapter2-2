import globals from 'globals';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import prettier from 'prettier';

const tsConfig = tsPlugin.config(jsPlugin.configs.recommended, ...tsPlugin.configs.recommended);

export default [
  ...tsConfig,
  reactPlugin.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['eslint.config.js'],
    languageOptions: {
      sourceType: 'module',
      globals: { ...globals.browser },
    },
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  prettier,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
];
