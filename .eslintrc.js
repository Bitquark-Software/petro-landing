// eslint-disable-next-line no-undef
module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"overrides": [
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"no-multiple-empty-lines": [
			"error",
			{ "max": 1 }
		],
		"camelcase": [
			"error",
			{
				"properties": "always"
			}
		],
		"jsx-quotes": [
			"error",
			"prefer-double"
		],
		"keyword-spacing": [
			"error",
			{
				"before": true,
				"after": true
			}
		]
	}
};
