import { createRequire } from 'module'
const require = createRequire(import.meta.url)

export const mdsvexConfig = require('./mdsvex.config.cjs')
