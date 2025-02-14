<script lang="ts">
	import { fade } from 'svelte/transition';

	interface Props {
		headings?: { label: string; href: string }[];
	}

	let { headings = [] }: Props = $props();
</script>

{#if headings.length}
	<aside
		transition:fade
		class="table-of-contents bg-base-100 hidden w-64 rounded-md shadow-lg lg:block"
	>
		<div class="">
			<h3
				class="!mt-2 !mb-0 !text-lg !font-extrabold"
				id="table-of-contents"
			>
				Table of Contents
			</h3>
			<ul class="!mb-0 max-h-72 overflow-auto">
				{#each headings as heading (heading.href)}
					<li class="mr-4 mb-2">
						<a
							class="hover:text-primary transition"
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
