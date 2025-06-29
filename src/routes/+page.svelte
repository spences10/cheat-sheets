<script lang="ts">
	import { Search } from '$lib/icons';
	import { author, description, name, website } from '$lib/info';
	import { ogImageUrl } from '$lib/og-image-url-build';
	import { Head } from 'svead';

	let { data } = $props();
	let { sheets } = data;

	let query = $state('');

	let filtered_sheets = $derived(
		sheets.filter((sheet) => {
			if (!sheet.published) return false;
			if (query === '') return true;
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

<!-- Hero Section -->
<div
	class="hero from-primary to-secondary text-primary-content mb-6 rounded-2xl bg-gradient-to-br shadow-2xl"
>
	<div class="hero-content py-12 text-center lg:py-16">
		<div class="max-w-lg">
			<h1 class="mb-4 text-3xl font-bold lg:text-5xl">
				Cheat Sheets
			</h1>
			<p class="text-lg opacity-80 lg:text-xl">
				Quick reference guides for developers
			</p>
		</div>
	</div>
</div>

<!-- Search Section -->
<div class="card bg-base-100 mb-6 shadow-xl">
	<div class="card-body">
		<h2 class="card-title mb-4 text-xl lg:text-2xl">
			<Search size={20} class="lg:h-6 lg:w-6" />
			Find a technology
		</h2>
		<div class="form-control">
			<input
				id="search"
				type="text"
				bind:value={query}
				placeholder="Search for a technology..."
				class="input input-bordered input-primary w-full"
			/>
		</div>
	</div>
</div>

<!-- Results Section -->
<div class="mb-8">
	<div class="mb-6 flex items-center justify-between">
		<h2 class="text-3xl font-bold">Cheat Sheets</h2>
		<div class="badge badge-secondary badge-lg">
			{filtered_sheets.length} sheet{filtered_sheets.length !== 1
				? 's'
				: ''}
		</div>
	</div>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each filtered_sheets as sheet}
			<a
				href={`/${sheet.slug}`}
				class="card bg-base-100 cursor-pointer shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
			>
				<div class="card-body">
					<h3 class="card-title text-xl">
						{sheet.title}
					</h3>
				</div>
			</a>
		{/each}
	</div>
</div>
