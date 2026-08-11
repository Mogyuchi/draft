import type { Configuration } from 'lint-staged';

export default {
	'*': 'pnpm run fmt:check --no-error-on-unmatched-pattern --',
	'*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}': 'pnpm run lint:check --',
} satisfies Configuration;
