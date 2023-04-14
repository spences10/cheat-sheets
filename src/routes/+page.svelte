<script lang="ts">
	import { author, description, name, website } from '$lib/info'
	import { ogImageUrl } from '$lib/og-image-url-build.js'
	import { Head } from 'svead'

	export let data
	let { sheets } = data

	let query = ''

	$: results = sheets.filter(sheet => {
		if (!sheet.published) {
			return false
		}
		if (query === '') {
			return true
		}
		return sheet.title.toLowerCase().includes(query.toLowerCase())
	})
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
		class="input input-primary input-bordered text-xl mb-10 shadow-xl"
	/>
</div>

<ul
	class="mb-10 grid gap-5 grid-cols-1 xs:grid-cols-2 md:grid-cols-3"
>
	{#if results.length === 0}
		{#each sheets as sheet}
			{#if sheet.published}
				<li
					class="font-medium text-3xl border border-primary rounded-2xl p-5 shadow-xl"
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
				class="font-medium text-3xl border border-primary rounded-2xl p-5 shadow-xl"
			>
				<a class="link" href={result.slug}>
					{result.title}
				</a>
			</li>
		{/each}
	{/if}
</ul>
