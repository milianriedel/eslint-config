// Modern ESLint 9 flat config - React rules
// Note: extends pattern is handled in main config, this provides rule overrides
const reactConfig = {
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		// React 17+ JSX Transform - no need to import React
		'react/react-in-jsx-scope': 'off',
		'react/jsx-uses-react': 'off',
	},
};

module.exports = { reactConfig };
