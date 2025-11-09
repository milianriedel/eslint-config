// Modern ESLint 9 flat config - React rules
// Note: extends pattern is handled in main config, this provides rule overrides
const reactConfig = {
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		// React-specific rule overrides can be added here
		// The base React plugin config is applied in eslint.config.js
	},
};

module.exports = { reactConfig };
