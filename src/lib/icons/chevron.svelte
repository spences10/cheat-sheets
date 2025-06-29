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
		'aria-label': ariaLabel = 'Chevron',
		direction = 'down',
	}: Props = $props();

	const rotations = {
		up: 'rotate-180',
		down: 'rotate-0',
		left: 'rotate-90',
		right: '-rotate-90',
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
	<path d="m6 9 6 6 6-6" />
</svg>
