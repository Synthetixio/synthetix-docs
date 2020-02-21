module.exports = {
	env: {
		es6: true,
		// jest: true,
		node: true,
	},
	extends: 'eslint:recommended',
	plugins: ['import'],
	parserOptions: {
		ecmaVersion: 2017,
	},
	rules: {
		'no-console': 'off',
		indent: ['error', 2],
		'import/no-unresolved': ['error', { commonjs: true }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		strict: ['error', 'global'],
		semi: ['error', 'always'],
	},
};
