import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import autolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import slugPlugin from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			smartypants: true,
			rehypePlugins: [
				slugPlugin,
				[
					autolinkHeadings,
					{
						behavior: 'wrap',
					},
				],
				// external links open in a new tab
				[
					rehypeExternalLinks,
					{ target: '_blank', rel: 'noopener noreferrer' },
				],
			],
		}),
	],

	kit: {
		adapter: adapter(),
	},

	extensions: ['.svelte', '.md'],
};

export default config;
