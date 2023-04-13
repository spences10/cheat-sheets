<script lang="ts">
	import { page } from '$app/stores'
	import TableOfContents from '$lib/components/table-of-contents.svelte'
	import { ogImageUrl } from '$lib/og-image-url-build'
	import { format } from 'date-fns'
	import { Head } from 'svead'
	import { onMount } from 'svelte'

	export let data
	let { Post, metadata } = data
	let created = format(new Date(metadata.createdDate), 'yyy MMM do')
	let updated = format(new Date(metadata.updatedDate), 'yyy MMM do')

	let headingNodeList
	let headings: { label: string; href: string }[]
	async function getHeadings() {
		await headings
	}

	onMount(() => {
		headingNodeList = document.querySelectorAll('h2')

		headings = Array.from(headingNodeList).map(h2 => {
			return {
				label: h2.innerText,
				href: `#${h2.id}`,
			}
		})
	})
	let url = $page.url.toString()
</script>

<Head
	title={`${metadata.title} · Cheat Sheets`}
	description={`${metadata.description}`}
	image={ogImageUrl(
		'Scott Spence',
		'cheatsheets.xyz',
		metadata.title
	)}
	{url}
/>

{#await getHeadings()}
	Loading...
{:then}
	<TableOfContents {headings} />
{/await}

<div class="flex justify-between mb-16">
	<h1 class="font-medium text-5xl">
		{metadata.title}
	</h1>
	<div class="opacity-75">
		<p class="font-semibold text-xs">Created: {created}</p>
		<p class="font-semibold text-xs">Updated: {updated}</p>
		<a
			class="font-semibold text-xs underline hover:no-underline"
			href={`https://github.com/spences10/cheat-sheets/edit/main/sheets/${metadata.slug}.md`}
			>Edit this page on GitHub</a
		>
	</div>
</div>

<article class="mb-16 prose md:prose-lg lg:prose-xl">
	<svelte:component this={Post} />
</article>
