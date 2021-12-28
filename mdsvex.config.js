import relativeImages from 'mdsvex-relative-images'
import path from 'path'
import autolinkHeadings from 'rehype-autolink-headings'
import slugPlugin from 'rehype-slug'
import remarkExternalLinks from 'remark-external-links'
import preview, { htmlFormatter, textFormatter } from 'remark-preview'
import { visit } from 'unist-util-visit'

export default {
  extensions: ['.svx', '.md'],
  smartypants: {
    dashes: 'oldschool',
  },
  remarkPlugins: [
    // Add a text preview snippet (no formatting) so we can use it in the meta description tag
    preview(
      textFormatter({ length: 250, maxBlocks: 2, headings: 1 })
    ),

    // Add an HTML preview snippet (formatted) so we can use it when displaying all posts
    preview(
      htmlFormatter({
        length: 250,
        maxBlocks: 2,
        headings: 1,
      }),
      {
        attribute: 'previewHtml',
      }
    ),
    // external links open in a new tab
    [remarkExternalLinks, { target: '_blank', rel: 'noopener' }],
    posts,
    videos,
    relativeImages,
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
}

/**
 * Add slug to metadata and convert `date` timezone to UTC
 */
function posts() {
  return (_, file) => {
    const parsed = path.parse(file.filename)
    const slug =
      parsed.name === 'index'
        ? path.parse(file.filename).dir.split('/').pop()
        : parsed.name

    file.data.fm = {
      ...file.data.fm,
      slug,

      // remove timezone from parsed date
      date: file.data.fm.date
        ? new Date(file.data.fm.date).toLocaleDateString()
        : undefined,
    }
  }
}

/**
 * Adds support to video files in markdown image links
 */
function videos() {
  const extensions = ['mp4', 'webm']
  return function transformer(tree) {
    visit(tree, 'image', node => {
      if (extensions.some(ext => node.url.endsWith(ext))) {
        node.type = 'html'
        node.value = `
            <video 
              src="${node.url}"
              autoplay
              muted
              playsinline
              loop
              title="${node.alt}"
            />
          `
      }
    })
  }
}
