<script lang="ts">
	import { author, description, name, website } from '$lib/info';
	import { ogImageUrl } from '$lib/og-image-url-build';
	import { Head } from 'svead';

	interface Sheet {
		title: string;
		slug: string;
		published: boolean;
	}

	let { data } = $props();
	let { sheets } = data;

	let query = $state('');
	let filtered_sheets = $state<Sheet[]>([]);

	$effect(() => {
		filtered_sheets = sheets.filter((sheet) => {
			if (!sheet.published) return false;
			if (query === '') return true;
			return sheet.title.toLowerCase().includes(query.toLowerCase());
		});
	});
</script>

<Head
	title={`Home · ${name}`}
	{description}
	image={ogImageUrl(author, 'cheatsheets.xyz', 'Cheat Sheets')}
	url={website}
/>

<fieldset>
	<div class="flex flex-col">
		<label for="search" class="label-text mb-2 text-sm">
			Search for a technology...
		</label>
		<input
			id="search"
			type="text"
			bind:value={query}
			placeholder="Search"
			class="input input-bordered input-lg input-primary rounded-box mb-10 w-full text-xl shadow-xl"
		/>
	</div>
</fieldset>

<ul
	class="xs:grid-cols-2 mb-10 grid grid-cols-1 gap-5 md:grid-cols-3"
>
	{#each filtered_sheets as sheet}
		<li
			class="all-prose border-primary rounded-2xl border p-5 text-xl font-medium shadow-xl"
		>
			<a class="link" href={`/${sheet.slug}`}>
				{sheet.title}
			</a>
		</li>
	{/each}
</ul>
