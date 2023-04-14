import { get_sheets } from '$lib/get-sheets'

interface Sheet {
	title: string
	createdDate: string
	updatedDate: string
	published: boolean
	slug: string
	description: string
}

export async function GET() {
	const sheets = await get_sheets()

	const sheetsList: Sheet[] = sheets.map(sheet => ({
		title: sheet.title,
		createdDate: sheet.createdDate,
		updatedDate: sheet.updatedDate,
		published: sheet.published,
		slug: sheet.slug,
		description: sheet.description,
	}))
	const body = generateSitemapXml(sheetsList)

	const headers = {
		'Cache-Control': `max-age=0, s-max-age=${600}`,
		'Content-Type': 'application/xml',
	}

	return new Response(body, { headers })
}

function generateSitemapXml(sheets: Sheet[]): string {
	return `<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
		>
		<url>
			<loc>https://cheatsheets.xyz</loc>
			<changefreq>daily</changefreq>
			<priority>0.7</priority>
		</url>
		${sheets
			.map(
				({ slug }) => `
			<url>
				<loc>https://cheatsheets.xyz/${slug}</loc>
				<changefreq>daily</changefreq>
				<priority>0.7</priority>
			</url>
			`
			)
			.join('')}
		</urlset>
	`
}
