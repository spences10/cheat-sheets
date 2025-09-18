<script lang="ts">
	import { page } from '$app/state';
	import { TableOfContents } from '$lib/components';
	import { Alert, GitHub, Info } from '$lib/icons';
	import { ogImageUrl } from '$lib/og-image-url-build.js';
	import { get_headings, update_toc_visibility } from '$lib/utils';
	import { format } from 'date-fns';
	import { Head } from 'svead';

	let { data } = $props();

	let { Sheet, metadata } = data;
	let created = format(new Date(metadata.createdDate), 'yyy MMM do');
	let updated = format(new Date(metadata.updatedDate), 'yyy MMM do');
	let url = page.url.toString();

	let end_of_copy: HTMLElement | null = $state(null);
	let show_table_of_contents = $state(true);
	let headings_promise = $state<
		Promise<{ label: string; href: string }[]> | undefined
	>(undefined);

	$effect(() => {
		headings_promise = get_headings();
	});

	const handle_scroll = () => {
		show_table_of_contents = update_toc_visibility(end_of_copy);
	};
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
		<div class="brutal-card bg-info text-info-content mb-6 p-4">
			<Info size={24} class="mr-2 inline" />
			<span class="font-bold uppercase">LOADING TOC...</span>
		</div>
	{:then headings}
		{#if show_table_of_contents && headings.length > 0}
			<TableOfContents {headings} />
		{/if}
	{:catch error}
		<div class="brutal-card bg-error text-error-content mb-6 p-4">
			<Alert size={24} class="mr-2 inline" />
			<span class="font-bold uppercase"
				>TOC ERROR: {error.message}</span
			>
		</div>
	{/await}
{/if}

<!-- Neu-brutalist Header Section -->
<div class="brutal-card bg-primary text-primary-content mb-8 p-8">
	<div
		class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
	>
		<div class="flex-1">
			<h1
				class="font-display mb-4 -skew-x-2 transform text-5xl tracking-wider uppercase lg:text-7xl"
			>
				{metadata.title}
			</h1>
		</div>
		<div class="flex flex-col gap-4">
			<div
				class="brutal-card bg-success text-success-content !transform-none p-4"
			>
				<div class="text-sm font-black uppercase">CREATED</div>
				<div class="font-bold">{created}</div>
			</div>
			<div
				class="brutal-card bg-warning text-warning-content !transform-none p-4"
			>
				<div class="text-sm font-black uppercase">UPDATED</div>
				<div class="font-bold">{updated}</div>
			</div>
		</div>
	</div>
	<div class="mt-6 text-right">
		<a
			class="brutal-btn btn btn-secondary gap-2 font-black uppercase"
			href={`https://github.com/spences10/cheat-sheets/edit/main/sheets/${metadata.slug}.md`}
			target="_blank"
			rel="noopener noreferrer"
		>
			<GitHub size={24} />
			&gt;&gt; EDIT ON GITHUB &lt;&lt;
		</a>
	</div>
</div>

<div class="brutal-card bg-base-100 mb-8 p-8">
	<div class="all-prose flex flex-auto flex-col">
		<Sheet />
	</div>
</div>

<div
	class="brutal-card bg-accent text-accent-content mb-8 p-4 text-center"
	bind:this={end_of_copy}
>
	<span class="font-black tracking-wider uppercase"
		>&gt;&gt;&gt; END OF CHEAT SHEET &lt;&lt;&lt;</span
	>
</div>
