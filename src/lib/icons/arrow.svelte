<script lang="ts">
	interface Props {
		size?: number;
		class?: string;
		'aria-label'?: string;
		direction?: 'up' | 'down' | 'left' | 'right';
	}

	let {
		size = 20,
		class: className = '',
		'aria-label': ariaLabel = 'Arrow',
		direction = 'right',
	}: Props = $props();

	const rotations = {
		up: '-rotate-90',
		down: 'rotate-90',
		left: 'rotate-180',
		right: 'rotate-0',
	};
</script>

<svg
	role="img"
	aria-label={ariaLabel}
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	width={size}
	height={size}
	class="fill-none stroke-current transition-transform {rotations[
		direction
	]} {className}"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<path d="M5 12h14" />
	<path d="m12 5 7 7-7 7" />
</svg>
