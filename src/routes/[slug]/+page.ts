import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
	try {
		const Sheet = await import(`../../../sheets/${params.slug}.md`)

		return {
			Sheet: Sheet.default,
			metadata: Sheet.metadata,
		}
	} catch (e) {
		throw error(404, 'Sheet not found')
	}
}
