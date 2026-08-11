import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import starlightMarkdoc from '@astrojs/starlight-markdoc';

// https://docs.astro.build/en/guides/integrations-guide/markdoc/
export default defineMarkdocConfig({
	// oxlint-disable-next-line typescript/no-unsafe-call
	extends: [starlightMarkdoc()],
});
