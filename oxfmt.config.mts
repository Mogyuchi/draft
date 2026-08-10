import { defineConfig } from 'oxfmt';

export default defineConfig({
	singleQuote: true,
	sortImports: true,
	sortTailwindcss: true,

	jsdoc: true,

	ignorePatterns: ['.husky/install.mjs'],
});
