<script lang="ts">
	import { page } from '$app/state';
	import { TableOfContents } from '$lib/components';
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
			<svg
				class="h-6 w-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				></path>
			</svg>
			<span>Loading table of contents...</span>
		</div>
	{:then headings}
		{#if show_table_of_contents && headings.length > 0}
			<TableOfContents {headings} />
		{/if}
	{:catch error}
		<div class="alert alert-error mb-6">
			<svg
				class="h-6 w-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				></path>
			</svg>
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
				<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
					/>
				</svg>
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
