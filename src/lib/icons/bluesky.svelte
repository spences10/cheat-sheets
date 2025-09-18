<script lang="ts">
	interface Props {
		height?: string;
		width?: string;
		flutter?: boolean;
		class_props?: string;
		aria_label?: string;
	}

	let {
		height = '20px',
		width = '20px',
		flutter = false,
		class_props = '',
		aria_label,
	}: Props = $props();
</script>

<!-- 
https://flutterby.philhawksworth.dev

Thanks Phil!
-->

{#if flutter}
	<svg
		class="bluesky-flutter"
		{width}
		{height}
		viewBox="0 0 566 500"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden={aria_label ? undefined : 'true'}
		aria-label={aria_label}
		role={aria_label ? 'img' : undefined}
		focusable="false"
	>
		<defs>
			<path
				id="wing"
				fill="currentColor"
				d="M 123.244 35.008 C 188.248 83.809 283.836 176.879 283.836 235.857 C 283.836 316.899 283.879 235.845 283.836 376.038 C 283.889 375.995 282.67 376.544 280.212 383.758 C 266.806 423.111 214.487 576.685 94.841 453.913 C 31.843 389.269 61.013 324.625 175.682 305.108 C 110.08 316.274 36.332 297.827 16.093 225.504 C 10.271 204.699 0.343 76.56 0.343 59.246 C 0.343 -27.451 76.342 -0.206 123.244 35.008 Z"
			/>
		</defs>
		<use href="#wing" class="left" />
		<use href="#wing" class="right" />
	</svg>
{:else}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="text-primary hover:text-secondary block fill-current transition {class_props}"
		{width}
		{height}
		viewBox="0 0 256 226"
		aria-hidden={aria_label ? undefined : 'true'}
		aria-label={aria_label}
		role={aria_label ? 'img' : undefined}
		focusable="false"
	>
		<path
			fill="currentColor"
			d="M55.491 15.172c29.35 22.035 60.917 66.712 72.509 90.686c11.592-23.974 43.159-68.651 72.509-90.686C221.686-.727 256-13.028 256 26.116c0 7.818-4.482 65.674-7.111 75.068c-9.138 32.654-42.436 40.983-72.057 35.942c51.775 8.812 64.946 38 36.501 67.187c-54.021 55.433-77.644-13.908-83.696-31.676c-1.11-3.257-1.63-4.78-1.637-3.485c-.008-1.296-.527.228-1.637 3.485c-6.052 17.768-29.675 87.11-83.696 31.676c-28.445-29.187-15.274-58.375 36.5-67.187c-29.62 5.041-62.918-3.288-72.056-35.942C4.482 91.79 0 33.934 0 26.116C0-13.028 34.314-.727 55.491 15.172"
		/>
	</svg>
{/if}

<style>
	.bluesky-flutter {
		transition: 200ms;
		fill: currentColor;
		color: var(--color-primary-content);
	}

	/* Handle both direct hover and button hover */
	.bluesky-flutter:hover,
	:global(.btn:hover) .bluesky-flutter {
		transform: rotate(-5deg);
		transition: 500ms;
		color: var(--color-primary-content);
	}

	.left {
		transform-origin: center;
	}

	.right {
		transform-origin: center;
		transform: scale(-1, 1);
	}

	/* Handle both direct hover and button hover for animations */
	.bluesky-flutter:hover .left,
	:global(.btn:hover) .bluesky-flutter .left {
		animation: flutter 430ms ease-in-out;
		--flip: 1;
	}

	.bluesky-flutter:hover .right,
	:global(.btn:hover) .bluesky-flutter .right {
		animation: flutter 500ms ease-in-out;
		--flip: -1;
	}

	@media (prefers-reduced-motion) {
		.bluesky-flutter:hover .left,
		.bluesky-flutter:hover .right,
		:global(.btn:hover) .bluesky-flutter .left,
		:global(.btn:hover) .bluesky-flutter .right {
			animation: none;
		}
	}

	@keyframes flutter {
		10% {
			transform: scale(calc(var(--flip) * 1), 0.9);
		}
		20% {
			transform: scale(calc(var(--flip) * 0.5), 1);
		}
		40% {
			transform: scale(calc(var(--flip) * 0.9), 0.95);
		}
		60% {
			transform: scale(calc(var(--flip) * 0.3), 1);
		}
		80% {
			transform: scale(calc(var(--flip) * 0.9), 0.95);
		}
		100% {
			transform: scale(calc(var(--flip) * 1), 1);
		}
	}
</style>
