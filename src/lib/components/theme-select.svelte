<script lang="ts">
	import { browser } from '$app/environment';
	import { Moon, Sun } from '$lib/icons';

	let theme = $state(
		browser
			? localStorage.getItem('theme') || 'neu-brutalist-dark'
			: 'neu-brutalist-dark',
	);

	const toggle_theme = () => {
		if (!browser) return;
		theme =
			theme === 'neu-brutalist-light'
				? 'neu-brutalist-dark'
				: 'neu-brutalist-light';
	};

	// Sync theme changes with localStorage
	$effect(() => {
		if (!browser) return;
		localStorage.setItem('theme', theme);
	});
</script>

<label class="swap swap-rotate">
	<input
		type="checkbox"
		class="theme-controller"
		data-toggle-theme="neu-brutalist-dark,neu-brutalist-light"
		data-act-class="ACTIVECLASS"
		checked={theme === 'neu-brutalist-dark'}
		onchange={toggle_theme}
	/>

	<!-- sun icon (light theme) -->
	<Sun size={20} class="swap-on" />

	<!-- moon icon (dark theme) -->
	<Moon size={20} class="swap-off" />
</label>
