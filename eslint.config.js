const js = require('@eslint/js');
const globals = require('globals');

// Import plugins
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const importPlugin = require('eslint-plugin-import');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');

// Conditionally import TypeScript if available
let typescriptPlugin;
let typescriptParser;
try {
	typescriptPlugin = require('@typescript-eslint/eslint-plugin');
	typescriptParser = require('@typescript-eslint/parser');
} catch {
	// TypeScript ESLint not available - will be handled in conditional config
	typescriptPlugin = null;
	typescriptParser = null;
}

// Import rules
const globalRules = require('./rules/global');
const importRules = require('./rules/imports');
const stylesRules = require('./rules/styles');
const errorsRules = require('./rules/errors');
const reactRules = require('./rules/react');

const configs = [
	// Base configuration
	js.configs.recommended,
	
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2022,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
			import: importPlugin,
			'jsx-a11y': jsxA11yPlugin,
		},

		settings: {
			react: {
				version: 'detect',
			},
			'import/resolver': {
				node: {
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
			},
		},

		rules: {
			...globalRules.rules,
			...importRules.rules,
			...stylesRules.rules,
			...errorsRules.rules,
			...reactRules.rules,
		},
	},
];

// Add TypeScript configuration if available
if (typescriptPlugin && typescriptParser) {
	configs.push({
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			'@typescript-eslint': typescriptPlugin,
		},
		rules: {
			...typescriptPlugin.configs.recommended.rules,
			'@typescript-eslint/member-delimiter-style': ['error', {
				multiline: {
					delimiter: 'comma',
					requireLast: true,
				},
				singleline: {
					delimiter: 'comma',
					requireLast: false,
				},
			}],
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'no-shadow': 'off',
			'@typescript-eslint/no-shadow': 'error',
			'no-use-before-define': 'off',
			'@typescript-eslint/no-use-before-define': 'error',
		},
	});
}

module.exports = configs;
