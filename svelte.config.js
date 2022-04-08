import adapter from '@sveltejs/adapter-vercel'
import { mdsvex } from 'mdsvex'
import path from 'path'
import preprocess from 'svelte-preprocess'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  kit: {
    adapter: adapter(),
    vite: {
      server: {
        fs: {
          // Allow serving files from one level up to the project root
          // posts, copy
          allow: ['..'],
        },
      },
      resolve: {
        alias: {
          '$lib': path.resolve('./src/lib'),
        },
      },
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex(mdsvexConfig),
  ],
}

export default config
