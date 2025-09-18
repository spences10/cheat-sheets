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
		class="table-of-contents brutal-card bg-neutral text-neutral-content hidden w-64 lg:block"
	>
		<div class="p-4">
			<h3
				class="!mt-0 !mb-4 !text-lg !font-black tracking-wide uppercase"
				id="table-of-contents"
			>
				&gt;&gt; CONTENTS &lt;&lt;
			</h3>
			<ul class="!mb-0 max-h-72 space-y-2 overflow-auto">
				{#each headings as heading (heading.href)}
					<li>
						<a
							class="bg-base-100 text-base-content hover:bg-primary hover:text-primary-content block border-2 border-black p-2 text-sm font-bold uppercase transition-all duration-200 hover:translate-x-1 hover:transform"
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
