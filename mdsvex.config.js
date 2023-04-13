import { defineMDSveXConfig as defineConfig } from 'mdsvex'
import autolinkHeadings from 'rehype-autolink-headings'
import slugPlugin from 'rehype-slug'
import remarkExternalLinks from 'remark-external-links'

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool',
	},

	remarkPlugins: [
		// external links open in a new tab
		[
			remarkExternalLinks,
			{ target: '_blank', rel: 'noopener noreferrer' },
		],
	],
	rehypePlugins: [
		slugPlugin,
		[
			autolinkHeadings,
			{
				behavior: 'wrap',
			},
		],
	],
})

export default config
