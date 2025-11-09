const eslintrc = require('./.eslintrc');

module.exports = [
	{
		languageOptions: {
			globals: eslintrc.env
				? Object.keys(eslintrc.env).reduce((acc, env) => {
					if (eslintrc.env[env]) {
						// Add globals for each environment
						switch (env) {
							case 'browser':
								return { ...acc, window: 'readonly', document: 'readonly' };
							case 'node':
								return { ...acc, process: 'readonly', global: 'readonly' };
							case 'es6':
								return { ...acc, Promise: 'readonly', Symbol: 'readonly' };
							default:
								return acc;
						}
					}
					return acc;
				}, {})
				: {},
		},
		rules: eslintrc.rules || {},
	},
];
