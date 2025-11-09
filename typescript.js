// Modern ESLint 9 flat config for TypeScript files
const js = require('@eslint/js');
const globals = require('globals');


// Import plugins
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const importPlugin = require('eslint-plugin-import');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');

const files = require('./files');

// Conditionally import TypeScript plugins
let typescriptPlugin;
let typescriptParser;
try {
	typescriptPlugin = require('@typescript-eslint/eslint-plugin');
	typescriptParser = require('@typescript-eslint/parser');
} catch {
	// eslint-disable-next-line no-console
	console.warn('TypeScript ESLint plugins not found. Please install @typescript-eslint/eslint-plugin and @typescript-eslint/parser');
	typescriptPlugin = null;
	typescriptParser = null;
}

const configs = [
	js.configs.recommended,
];

// Add base JavaScript/React configuration
configs.push({
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
			version: '19.0',
		},
		'import/resolver': {
			node: {
				extensions: [
					'.web.mjs',
					'.mjs',
					'.web.js',
					'.js',
					'.web.ts',
					'.ts',
					'.web.tsx',
					'.tsx',
					'.json',
					'.web.jsx',
					'.jsx',
				],
			},
		},
	},
	rules: {
		...reactPlugin.configs.recommended.rules,
		...reactPlugin.configs['jsx-runtime'].rules,
		...reactHooksPlugin.configs.recommended.rules,
		// React 19 optimizations
		'react/react-in-jsx-scope': 'off',
		'react/jsx-uses-react': 'off',
		'react/jsx-key': ['error', { 
			checkFragmentShorthand: true,
			checkKeyMustBeforeSpread: true,
			warnOnDuplicates: true
		}],
		'react/no-deprecated': 'error',
		'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
	},
});

// Add TypeScript configuration if available
if (typescriptPlugin && typescriptParser) {
	configs.push({
		files: files.typescript,
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
				project: './tsconfig.json',
				warnOnUnsupportedTypeScriptVersion: true,
			},
		},
		plugins: {
			'@typescript-eslint': typescriptPlugin,
		},
		rules: {
			...typescriptPlugin.configs.recommended.rules,
			// Note: @typescript-eslint/member-delimiter-style was deprecated and removed
			// Use @stylistic/member-delimiter-style if formatting rules are needed
			// React 17+ JSX Transform - no need to import React
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
			'react/prop-types': 'off',
			'react/require-default-props': 'off',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'no-shadow': 'off',
			'@typescript-eslint/no-shadow': 'error',
			'no-use-before-define': 'off',
			'@typescript-eslint/no-use-before-define': 'error',
			// Note: @typescript-eslint/indent is deprecated in ESLint v9
			// Use @stylistic/indent if formatting rules are needed
		},
	});
}

module.exports = configs;
