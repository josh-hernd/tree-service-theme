import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$content: path.resolve("./src/content")
		}
	}
};

export default config;
