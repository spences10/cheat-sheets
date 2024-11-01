<script lang="ts">
	import { fade } from 'svelte/transition'

	interface Props {
		headings?: { label: string; href: string }[]
	}

	let { headings = [] }: Props = $props()
</script>

{#if headings.length}
	<aside
		transition:fade
		class="table-of-contents hidden w-64 rounded-md bg-base-100 shadow-lg lg:block"
	>
		<div class="">
			<h3
				class="!mb-0 !mt-2 !text-lg !font-extrabold"
				id="table-of-contents"
			>
				Table of Contents
			</h3>
			<ul class="!mb-0 max-h-72 overflow-auto">
				{#each headings as heading (heading.href)}
					<li class="mb-2 mr-4">
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
