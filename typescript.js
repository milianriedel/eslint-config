const files = require('./files');
const styles = require('./rules/styles');

// Check if we can use eslint-config-airbnb-typescript
let useAirbnbTypescript = true;
let tsEslintPlugin;

try {
	require.resolve('eslint-config-airbnb-typescript');
	tsEslintPlugin = require('@typescript-eslint/eslint-plugin/package.json');
	if (tsEslintPlugin.version.startsWith('8.')) {
		// TypeScript ESLint v8 - airbnb-typescript doesn't support it yet
		useAirbnbTypescript = false;
	}
} catch (error) {
	// Ignore error - optional dependency not found
	// eslint-disable-next-line no-console
	console.log('Optional dependency not available:', error.code);
	useAirbnbTypescript = false;
}

const baseConfig = {
	extends: [
		'./.eslintrc',
		'./rules/react',
	],

	settings: {
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

		'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
	},

	overrides: [{
		files: files.typescript,

		parser: '@typescript-eslint/parser',
		plugins: ['@typescript-eslint'],

		extends: useAirbnbTypescript
			? ['airbnb-typescript']
			: ['airbnb', '@typescript-eslint/eslint-plugin/configs/recommended'],

		parserOptions: {
			project: './tsconfig.json',
			sourceType: 'module',
			warnOnUnsupportedTypeScriptVersion: true,
		},

		rules: {
			'@typescript-eslint/indent': styles.rules.indent,
			'react/prop-types': 'off',
			'react/require-default-props': 'off',
			// Additional TypeScript-specific rules for v8 compatibility
			...(useAirbnbTypescript ? {} : {
				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': 'error',
				'no-shadow': 'off',
				'@typescript-eslint/no-shadow': 'error',
				'no-use-before-define': 'off',
				'@typescript-eslint/no-use-before-define': 'error',
			}),
		},
	}],
};

module.exports = baseConfig;
