// Modern ESLint 9 flat config - global rules for React 19
const globalConfig = {
	rules: {
		'no-tabs': 'off',
		// Note: react/jsx-indent and react/jsx-indent-props are deprecated
		// Use @stylistic/jsx-indent and @stylistic/jsx-indent-props if formatting is needed
	},
};

module.exports = { globalConfig };
