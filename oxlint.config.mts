import { defineConfig } from 'oxlint';

export default defineConfig({
	plugins: ['eslint', 'typescript', 'unicorn', 'oxc'],

	categories: {
		correctness: 'error',
		suspicious: 'error',
		pedantic: 'error',
		perf: 'error',
		style: 'error',
		restriction: 'off',
		nursery: 'off',
	},

	rules: {
		// Oxfmtと責務が重なる
		'sort-imports': 'off',

		// Restrictionカテゴリから個別採用
		'no-var': 'error',
		'typescript/no-explicit-any': 'error',
		'typescript/no-import-type-side-effects': 'error',
		'typescript/use-unknown-in-catch-callback-variable': 'error',
		'unicorn/no-abusive-eslint-disable': 'error',
		'unicorn/prefer-node-protocol': 'error',
	},

	overrides: [
		{
			files: ['**/*.config.{js,mjs,cjs,ts,mts,cts}', '.textlintrc.cjs'],
			rules: {
				'sort-keys': 'off',
			},
		},
	],

	env: {
		builtin: true,
	},

	options: {
		typeAware: true,
		typeCheck: true,
		reportUnusedDisableDirectives: 'error',
	},

	ignorePatterns: ['.husky/install.mjs'],
});
