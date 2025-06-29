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
		<div class="alert alert-info mb-6">
			<Info size={24} />
			<span>Loading table of contents...</span>
		</div>
	{:then headings}
		{#if show_table_of_contents && headings.length > 0}
			<TableOfContents {headings} />
		{/if}
	{:catch error}
		<div class="alert alert-error mb-6">
			<Alert size={24} />
			<span>Error loading table of contents: {error.message}</span>
		</div>
	{/await}
{/if}

<!-- Header Section -->
<div class="card bg-base-100 mb-8 shadow-xl">
	<div class="card-body">
		<div
			class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
		>
			<div class="flex-1">
				<h1
					class="from-primary to-secondary mb-4 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-wide text-transparent lg:text-5xl"
				>
					{metadata.title}
				</h1>
			</div>
			<div class="stats stats-vertical lg:stats-horizontal shadow">
				<div class="stat">
					<div class="stat-title">Created</div>
					<div class="stat-value text-sm">{created}</div>
				</div>
				<div class="stat">
					<div class="stat-title">Updated</div>
					<div class="stat-value text-sm">{updated}</div>
				</div>
			</div>
		</div>
		<div class="card-actions justify-end">
			<a
				class="btn btn-outline btn-sm gap-2"
				href={`https://github.com/spences10/cheat-sheets/edit/main/sheets/${metadata.slug}.md`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<GitHub size={20} />
				Edit on GitHub
			</a>
		</div>
	</div>
</div>

<div class="card bg-base-100 mb-8 shadow-xl">
	<div class="all-prose flex flex-auto flex-col p-6">
		<Sheet />
	</div>
</div>

<div class="divider mb-8" bind:this={end_of_copy}></div>
