import { error } from '@sveltejs/kit'

export const GET = async ({ params }) => {
	const { author } = params
	const res = await fetch(`https://api.github.com/users/${author}`)

	if (res.ok) return new Response(JSON.stringify(await res.json()))

	throw error(500, 'Something went wrong')
}
