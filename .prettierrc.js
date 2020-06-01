module.exports = {
	semi: true,
	trailingComma: 'all',
	singleQuote: true,
	printWidth: 120,
	arrowParens: 'avoid',
	useTabs: true,
	overrides: [
		{
			files: '*.md',
			options: {
				useTabs: false,
			},
		},
	],
};
