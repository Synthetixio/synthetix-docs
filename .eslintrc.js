module.exports = {
	env: {
		es6: true,
		// jest: true,
		node: true,
	},
	extends: 'eslint:recommended',
	plugins: ['import'],
	parserOptions: {
		ecmaVersion: 9,
	},
	rules: {
		'no-console': 'off',
		indent: ['error', 'tab', { ignoredNodes: ['TemplateLiteral > *'] }],
		'prettier/prettier': 'off',
		'import/no-unresolved': ['error', { commonjs: true }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		strict: ['error', 'global'],
		semi: ['error', 'always'],
	},
};
