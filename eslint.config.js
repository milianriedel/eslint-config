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

// Import modern ESLint 9 configs
const { globalConfig } = require('./rules/global');
const { importsConfig } = require('./rules/imports');
const { stylesConfig } = require('./rules/styles');
const { errorsConfig } = require('./rules/errors');
const { reactConfig } = require('./rules/react');

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
				// React 19 JSX runtime globals
				React: 'readonly',
				JSX: 'readonly',
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
			...globalConfig.rules,
			...importsConfig.rules,
			...stylesConfig.rules,
			...errorsConfig.rules,
			...reactConfig.rules,
			// React 19 optimizations - automatic JSX runtime
			...reactPlugin.configs.recommended.rules,
			...reactPlugin.configs['jsx-runtime'].rules,
			...reactHooksPlugin.configs.recommended.rules,
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
			// React 19 specific optimizations
			'react/jsx-key': ['error', { 
				checkFragmentShorthand: true,
				checkKeyMustBeforeSpread: true,
				warnOnDuplicates: true
			}],
			'react/no-deprecated': 'error',
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
			// Note: @typescript-eslint/member-delimiter-style was deprecated and removed
			// Use @stylistic/member-delimiter-style if formatting rules are needed
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'no-shadow': 'off',
			'@typescript-eslint/no-shadow': 'error',
			'no-use-before-define': 'off',
			'@typescript-eslint/no-use-before-define': 'error',
			// Adjust strict rules for practical development
			'@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
		},
	});
}

module.exports = configs;
