// Modern ESLint 9 flat config - style rules
// Note: Deprecated formatting rules like 'indent' and 'max-len' removed in ESLint 9
// These can be replaced with @stylistic/eslint-plugin if needed
const stylesConfig = {
	rules: {
		// https://eslint.org/docs/rules/no-console
		'no-console': 'warn',
		
		// Deprecated rules removed:
		// - 'indent' -> use @stylistic/indent
		// - 'max-len' -> use @stylistic/max-len
		// These formatting rules are no longer part of ESLint core in v9
	},
};

module.exports = { stylesConfig };
