<script lang="ts">
	interface Props {
		size?: number;
		class?: string;
		'aria-label'?: string;
	}

	let {
		size = 20,
		class: className = '',
		'aria-label': ariaLabel = 'Menu',
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
	<line x1="4" x2="20" y1="6" y2="6" />
	<line x1="4" x2="20" y1="12" y2="12" />
	<line x1="4" x2="20" y1="18" y2="18" />
</svg>
