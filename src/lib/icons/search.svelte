<script lang="ts">
	interface Props {
		size?: number;
		class?: string;
		'aria-label'?: string;
	}

	let {
		size = 20,
		class: className = '',
		'aria-label': ariaLabel = 'Search',
	}: Props = $props();
</script>

<svg
	role="img"
	aria-label={ariaLabel}
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	width={size}
	height={size}
	class="fill-none stroke-current {className}"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<circle cx="11" cy="11" r="8" />
	<path d="m21 21-4.35-4.35" />
</svg>
