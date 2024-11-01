<script lang="ts">
	import { page } from '$app/stores'
	import { TableOfContents } from '$lib/components'
	import { ogImageUrl } from '$lib/og-image-url-build.js'
	import { get_headings, update_toc_visibility } from '$lib/utils'
	import { format } from 'date-fns'
	import { Head } from 'svead'

	let { data } = $props()

	let { Sheet, metadata } = data
	let created = format(new Date(metadata.createdDate), 'yyy MMM do')
	let updated = format(new Date(metadata.updatedDate), 'yyy MMM do')
	let url = $page.url.toString()

	let end_of_copy: HTMLElement | null = $state(null)
	let show_table_of_contents = $state(true)
	let headings_promise:
		| Promise<{ label: string; href: string }[]>
		| undefined = $state(undefined)

	$effect(() => {
		headings_promise = get_headings().then(headings => {
			return headings
		})
	})

	const handle_scroll = () => {
		show_table_of_contents = update_toc_visibility(end_of_copy)
	}
</script>

<svelte:window onscroll={handle_scroll} />

<Head
	title={`${metadata.title} · Cheat Sheets`}
	description={`${metadata.description}`}
	image={ogImageUrl(
		'Scott Spence',
		'cheatsheets.xyz',
		metadata.title,
	)}
	{url}
/>

{#if headings_promise}
	{#await headings_promise}
		<p>Loading table of contents...</p>
	{:then headings}
		{#if show_table_of_contents && headings.length > 0}
			<TableOfContents {headings} />
		{/if}
	{:catch error}
		<p>Error loading table of contents: {error.message}</p>
	{/await}
{/if}

<div class="mb-16 flex justify-between">
	<h1 class="text-5xl font-bold tracking-wide">
		{metadata.title}
	</h1>
	<div class="opacity-75">
		<p class="text-xs font-semibold">Created: {created}</p>
		<p class="text-xs font-semibold">Updated: {updated}</p>
		<a
			class="text-xs font-semibold underline hover:no-underline"
			href={`https://github.com/spences10/cheat-sheets/edit/main/sheets/${metadata.slug}.md`}
		>
			Edit this page on GitHub
		</a>
	</div>
</div>

<article class="all-prose mb-16">
	<Sheet />
</article>

<div class="mb-5 mt-10 flex w-full flex-col" bind:this={end_of_copy}>
	<div class="divider"></div>
</div>
