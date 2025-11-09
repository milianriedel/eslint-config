const nextPlugin = require('eslint-config-next');

const baseConfig = require('./eslint.config');

module.exports = [
	...baseConfig,
	{
		plugins: {
			'@next/next': nextPlugin,
		},
		rules: {
			...nextPlugin.rules,
		},
	},
	// TypeScript overrides for Next.js
	{
		files: ['**/*.{ts,tsx}'],
		rules: {
			'react/prop-types': 'off',
			'react/require-default-props': 'off',
			'jsx-a11y/control-has-associated-label': 'off',
		},
	},
];
