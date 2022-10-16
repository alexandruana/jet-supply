module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended',
		'prettier'
	],
	plugins: [],
	// add your custom rules here
	rules: {
		indent: [
			'error',
			'tab'
		],
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true
			}
		],
		'vue/html-indent':
			[
				'error',
				'tab',
				{
					attribute: 1,
					baseIndent: 1,
					closeBracket: 0,
					alignAttributesVertically: true,
					ignores:
						[]
				}
			],
		'vue/multi-word-component-names':
			[
				'error',
				{
					ignores:
						[
							'default'
						]
				}
			]
	}
}
