<script lang="ts">
	import { author, description, name, website } from '$lib/info';
	import { ogImageUrl } from '$lib/og-image-url-build.js';
	import { Head } from 'svead';

	let { data } = $props();
	let { sheets } = data;

	let query = $state('');

	let results = $derived(
		sheets.filter((sheet) => {
			if (!sheet.published) {
				return false;
			}
			if (query === '') {
				return true;
			}
			return sheet.title.toLowerCase().includes(query.toLowerCase());
		}),
	);
</script>

<Head
	title={`Home · ${name}`}
	{description}
	image={ogImageUrl(author, 'cheatsheets.xyz', 'Cheat Sheets')}
	url={website}
/>

<div class="form-control">
	<label for="search" class="label">
		<span id="search" class="label-text-alt">
			Search for a technology...
		</span>
	</label>
	<input
		type="text"
		bind:value={query}
		placeholder="Search"
		class="input input-bordered input-primary mb-10 text-xl shadow-xl"
	/>
</div>

<ul
	class="xs:grid-cols-2 mb-10 grid grid-cols-1 gap-5 md:grid-cols-3"
>
	{#if results.length === 0}
		{#each sheets as sheet}
			{#if sheet.published}
				<li
					class="all-prose border-primary rounded-2xl border p-5 text-3xl font-medium shadow-xl"
				>
					<a class="link" href={`/${sheet.slug}`}>
						{sheet.title}
					</a>
				</li>
			{/if}
		{/each}
	{:else}
		{#each results as result}
			<li
				class="all-prose border-primary rounded-2xl border p-5 text-3xl font-medium shadow-xl"
			>
				<a class="link" href={result.slug}>
					{result.title}
				</a>
			</li>
		{/each}
	{/if}
</ul>
