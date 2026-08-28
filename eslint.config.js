import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
	{
		ignores: ["dist", "node_modules", "build"],
	},
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: "module",
			parser: tsParser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				project: false,
			},
		},
	},
	{
		files: ["**/*.{js,jsx}"],
		rules: js.configs.recommended.rules,
	},
	{
		files: ["**/*.{ts,tsx}"],
		plugins: {
			"@typescript-eslint": tsPlugin,
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
		},
		languageOptions: {
			parser: tsParser,
		},
	},
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
		},
	},
];
