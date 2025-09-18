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
		class="table-of-contents brutal-card bg-info text-info-content"
	>
		<div class="p-4">
			<h3
				class="!mt-0 !mb-4 text-xl font-black tracking-wide uppercase border-b-2 border-black pb-2"
				id="table-of-contents"
			>
				CONTENTS
			</h3>
			<ul class="!mb-0 max-h-72 space-y-1 overflow-auto">
				{#each headings as heading (heading.href)}
					<li>
						<a
							class="block border-l-4 border-black bg-base-100 text-base-content p-2 text-sm font-bold hover:bg-accent hover:text-accent-content"
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
