import { tick } from 'svelte'

export const get_headings = async (headings: string = 'h2') => {
	await tick()

	// Clear previous headings
	const previous_headings = document.querySelectorAll('.toc-heading')
	previous_headings.forEach(heading => heading.remove())

	const heading_elements = document.querySelectorAll(headings)
	return Array.from(heading_elements).map((element, index) => {
		const href = element.id || `heading-${index}`
		element.id = href
		element.classList.add('toc-heading')
		return { label: element.textContent || '', href: `#${href}` }
	})
}
