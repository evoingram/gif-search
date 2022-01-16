module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		node: true,
		jest: true
	},
	extends: [
		'standard'
	],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		indent: [2, 'tab'],
		'no-tabs': [2, { allowIndentationTabs: true }],
		semi: [2, 'always']
	}
};
