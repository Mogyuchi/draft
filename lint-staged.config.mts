import type { Configuration } from 'lint-staged';

export default {
	'*': 'pnpm run fmt:check --no-error-on-unmatched-pattern --',
} satisfies Configuration;
