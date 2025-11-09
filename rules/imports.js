// Modern ESLint 9 flat config - import rules
const importsConfig = {
	rules: {
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					['parent', 'sibling'],
					'index',
				],
				pathGroups: [
					{
						pattern: '..',
						group: 'parent',
					},
				],
				'newlines-between': 'always-and-inside-groups',
			},
		],

		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: true,
			},
		],
	},
};

module.exports = { importsConfig };
