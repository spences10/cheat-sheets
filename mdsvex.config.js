import { defineMDSveXConfig as defineConfig } from 'mdsvex'
import autolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import slugPlugin from 'rehype-slug'

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool',
	},

	remarkPlugins: [],
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
})

export default config
