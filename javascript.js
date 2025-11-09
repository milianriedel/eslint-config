// Modern ESLint 9 flat config for JavaScript files
const js = require('@eslint/js');
const globals = require('globals');

const files = require('./files');

module.exports = [
	js.configs.recommended,
	{
		files: files.javascript,
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2022,
			},
		},
		rules: {
			'react/react-in-jsx-scope': 'off',
		},
	},
];
