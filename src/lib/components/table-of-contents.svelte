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
		class="table-of-contents brutal-card bg-base-200 text-base-content"
	>
		<div class="p-4">
			<h3
				class="!mt-0 !mb-4 border-b-2 border-black pb-2 text-xl font-black tracking-wide uppercase"
				id="table-of-contents"
			>
				CONTENTS
			</h3>
			<ul class="!mb-0 max-h-72 space-y-1 overflow-auto">
				{#each headings as heading (heading.href)}
					<li>
						<a
							class="bg-base-100 text-base-content hover:bg-accent hover:text-accent-content block border-l-4 border-black p-2 text-sm font-bold"
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
