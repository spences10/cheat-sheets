<script lang="ts">
	import { browser } from '$app/environment';
	import { Moon, Sun } from '$lib/icons';

	let theme = $state(
		browser ? localStorage.getItem('theme') || 'dark' : 'dark',
	);

	const toggle_theme = () => {
		if (!browser) return;
		theme = theme === 'light' ? 'dark' : 'light';
	};

	// Sync theme changes with localStorage
	$effect(() => {
		if (!browser) return;
		localStorage.setItem('theme', theme);
	});
</script>

<label class="swap swap-rotate btn btn-ghost btn-circle">
	<input
		type="checkbox"
		class="theme-controller"
		data-toggle-theme="dark,light"
		data-act-class="ACTIVECLASS"
		checked={theme === 'dark'}
		onchange={toggle_theme}
	/>

	<!-- sun icon (light theme) -->
	<Sun size={20} class="swap-on" />

	<!-- moon icon (dark theme) -->
	<Moon size={20} class="swap-off" />
</label>
