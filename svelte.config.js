/** @type {import('@sveltejs/kit').Config} */
import { mdsvex } from 'mdsvex'
import preprocess from 'svelte-preprocess'
import { mdsvexConfig } from './mdsvex.config.js'

const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex(mdsvexConfig),
  ],
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
  },
}

export default config
