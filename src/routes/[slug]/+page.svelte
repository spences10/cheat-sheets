<script lang="ts">
	import { page } from '$app/stores'
	import { TableOfContents } from '$lib/components'
	import { ogImageUrl } from '$lib/og-image-url-build.js'
	import { get_headings, update_toc_visibility } from '$lib/utils'
	import { format } from 'date-fns'
	import { Head } from 'svead'
	import { onMount } from 'svelte'

	export let data

	let { Sheet, metadata } = data
	let created = format(new Date(metadata.createdDate), 'yyy MMM do')
	let updated = format(new Date(metadata.updatedDate), 'yyy MMM do')
	let url = $page.url.toString()

	let end_of_copy: HTMLElement | null
	let show_table_of_contents = true
	let headings_promise: Promise<{ label: string; href: string }[]>

	onMount(() => {
		headings_promise = get_headings()
	})

	const handle_scroll = () => {
		show_table_of_contents = update_toc_visibility(end_of_copy)
	}
</script>

<svelte:window on:scroll={handle_scroll} />

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

{#await headings_promise}
	Loading...
{:then headings}
	{#if show_table_of_contents}
		<TableOfContents {headings} />
	{/if}
{:catch error}
	<p>Failed to load table of contents: {error.message}</p>
{/await}

<div class="flex justify-between mb-16">
	<h1 class="font-bold tracking-wide text-5xl">
		{metadata.title}
	</h1>
	<div class="opacity-75">
		<p class="font-semibold text-xs">Created: {created}</p>
		<p class="font-semibold text-xs">Updated: {updated}</p>
		<a
			class="font-semibold text-xs underline hover:no-underline"
			href={`https://github.com/spences10/cheat-sheets/edit/main/sheets/${metadata.slug}.md`}
		>
			Edit this page on GitHub
		</a>
	</div>
</div>

<article class="mb-16 all-prose">
	<svelte:component this={Sheet} />
</article>

<div class="flex flex-col w-full mt-10 mb-5" bind:this={end_of_copy}>
	<div class="divider" />
</div>
