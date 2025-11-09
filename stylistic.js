// Optional stylistic configuration for ESLint 9
// Use this file for projects that want the deprecated formatting rules

const stylistic = (() => {
	try {
		return require('@stylistic/eslint-plugin');
	} catch {
		// eslint-disable-next-line no-console
		console.warn('@stylistic/eslint-plugin not found. Install it for formatting rules.');
		return null;
	}
})();

const stylisticConfig = stylistic ? {
	plugins: {
		'@stylistic': stylistic,
	},
	rules: {
		// Replaced deprecated max-len with @stylistic equivalent
		'@stylistic/max-len': [
			'error',
			{
				code: 120,
				tabWidth: 4,
				ignoreUrls: true,
				ignoreComments: false,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			},
		],

		// Replaced deprecated indent with @stylistic equivalent
		'@stylistic/indent': ['error', 'tab',
			{
				SwitchCase: 1,
				VariableDeclarator: 1,
				outerIIFEBody: 1,
				MemberExpression: 1,
				FunctionDeclaration: {
					parameters: 1,
					body: 1,
				},
				FunctionExpression: {
					parameters: 1,
					body: 1,
				},
				CallExpression: {
					arguments: 1,
				},
			},
		],
	},
} : {};

module.exports = stylisticConfig;
