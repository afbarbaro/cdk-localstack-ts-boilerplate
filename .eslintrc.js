module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
	},
	plugins: ["@typescript-eslint", "jest", "import", "prettier"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"prettier/@typescript-eslint",
		"plugin:import/errors",
		"plugin:import/typescript",
		"plugin:prettier/recommended"
	],
	rules: {
		// TYPESCRIPT ADDITIONAL RULES - ADDING MORE RULES TO INCREASE STRICTNESS
		"complexity": [2, 8],
		"no-console": ["error", { "allow": ["info", "warn", "error"] }],
		"no-useless-constructor": "off",
		"@typescript-eslint/adjacent-overload-signatures": ["error"],
		"@typescript-eslint/ban-ts-comment": "warn",
		"@typescript-eslint/ban-types": [
			"error",
			{
				"types": {
					"Object": "Avoid using the `Object` type. Did you mean `object`?",
					"Function": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`.",
					"Boolean": "Avoid using the `Boolean` type. Did you mean `boolean`?",
					"Number": "Avoid using the `Number` type. Did you mean `number`?",
					"String": "Avoid using the `String` type. Did you mean `string`?",
					"Symbol": "Avoid using the `Symbol` type. Did you mean `symbol`?",
					"object": false,
					"{}": false
				}
			}
		],
		"@typescript-eslint/consistent-type-assertions": "error",
		"@typescript-eslint/no-empty-function": ["error", { "allow": ["arrowFunctions"] }],
		"@typescript-eslint/no-explicit-any": ["error", { "ignoreRestArgs": true }],
		"@typescript-eslint/no-use-before-define": ["error", {
			functions: false,
			typedefs: false
		}],
		"@typescript-eslint/no-useless-constructor": "error",

		// STYLE RULES
		"brace-style": "error",
		"curly": ["error"],
		"eol-last": ["error", "always"],
		"import/order": ["error", {
			"groups": ["index", "sibling", "parent", "internal", "external", "builtin"],
			"alphabetize": { "order": "asc" }
		}],
		"no-multi-spaces": ["error", { "exceptions": { "VariableDeclarator": true, "AssignmentExpression": true } }],
		"no-multiple-empty-lines": ["error", { "max": 1 }],
		"quotes": ["error", "single"],
		"semi": "off",
		"@typescript-eslint/semi": ["error", "always"],
	}
}