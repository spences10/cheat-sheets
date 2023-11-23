<script lang="ts">
	import { fade } from 'svelte/transition'
	export let headings: { label: string; href: string }[] = []
</script>

{#if headings.length}
	<aside
		transition:fade
		class="bg-base-100 rounded-md shadow-lg w-64 table-of-contents lg:block hidden"
	>
		<div class="">
			<h3
				class="!font-extrabold !text-lg !mt-2 !mb-0"
				id="table-of-contents"
			>
				Table of Contents
			</h3>
			<ul class="max-h-72 overflow-auto !mb-0">
				{#each headings as heading (heading.href)}
					<li class="mr-4 mb-2">
						<a
							class="transition hover:text-primary"
							href={heading.href}
						>
							{heading.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</aside>
{/if}
