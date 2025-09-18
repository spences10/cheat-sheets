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

<!-- Neu-brutalist Hero Section -->
<div
	class="brutal-card bg-warning relative mb-8 overflow-hidden p-8 lg:p-12"
>
	<!-- Background shapes -->
	<div
		class="bg-error absolute top-4 right-4 h-16 w-16 rotate-45 transform"
	></div>
	<div
		class="bg-success absolute bottom-4 left-4 h-12 w-12 -rotate-12 transform"
	></div>

	<div class="relative z-10 text-center">
		<h1
			class="text-warning-content mb-4 -skew-x-3 transform text-6xl font-black tracking-wider uppercase lg:text-8xl"
		>
			⚡ CHEAT
		</h1>
		<h1
			class="text-warning-content mb-6 skew-x-3 transform text-6xl font-black tracking-wider uppercase lg:text-8xl"
		>
			SHEETS ⚡
		</h1>
		<p
			class="text-warning-content text-2xl font-bold tracking-wide uppercase lg:text-3xl"
		>
			&gt;&gt; Quick Dev References &lt;&lt;
		</p>
	</div>
</div>

<!-- Neu-brutalist Search Section -->
<div class="brutal-card bg-secondary mb-8 p-6">
	<h2
		class="text-secondary-content mb-4 -skew-x-2 transform text-3xl font-black uppercase"
	>
		<Search size={32} class="mr-2 inline" />
		&gt;&gt; FIND TECH &lt;&lt;
	</h2>
	<div class="form-control">
		<input
			id="search"
			type="text"
			bind:value={query}
			placeholder="TYPE TO SEARCH..."
			class="brutal-btn input input-lg bg-base-100 text-base-content placeholder:text-base-content/50 w-full !transform-none border-4 border-black font-bold uppercase"
		/>
	</div>
</div>

<!-- Neu-brutalist Results Section -->
<div class="mb-8">
	<div class="mb-6 flex items-center justify-between">
		<h2
			class="-skew-x-2 transform text-4xl font-black tracking-wide uppercase"
		>
			CHEAT SHEETS
		</h2>
		<div
			class="brutal-btn bg-info text-info-content !transform-none px-4 py-2 font-black"
		>
			{filtered_sheets.length} SHEET{filtered_sheets.length !== 1
				? 'S'
				: ''}
		</div>
	</div>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each filtered_sheets as sheet (sheet.slug)}
			<a
				href={`/${sheet.slug}`}
				class="brutal-card bg-accent hover:bg-accent/90 group cursor-pointer transition-all duration-300"
			>
				<div class="p-6">
					<h3
						class="text-accent-content transform text-2xl font-black tracking-wide uppercase group-hover:skew-x-1"
					>
						{sheet.title}
					</h3>
				</div>
			</a>
		{/each}
	</div>
</div>
