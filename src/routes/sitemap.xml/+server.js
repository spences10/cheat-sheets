export async function GET() {
	const posts = import.meta.globEager('../../sheets/*.md')

	const postsList = Object.values(posts)
	const postsMeta = postsList.map(post => {
		return post.metadata
	})
	const body = render(postsMeta)

	const headers = {
		'Cache-Control': `max-age=0, s-max-age=${600}`,
		'Content-Type': 'application/xml',
	}
	return {
		headers,
		body,
	}
}

const render = postsMeta => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>https://cheatsheets.xyz</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${postsMeta
		.map(
			meta => `
  <url>
    <loc>https://cheatsheets.xyz/${meta.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `
		)
		.join('')}
</urlset>
`
