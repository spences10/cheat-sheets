<script lang="ts">
	import { browser } from '$app/environment';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import {
		PUBLIC_FATHOM_ID,
		PUBLIC_FATHOM_URL,
	} from '$env/static/public';
	import { Footer, Header } from '$lib/components';
	import * as Fathom from 'fathom-client';
	import 'prism-themes/themes/prism-night-owl.css';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import '../app.css';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	onMount(() => {
		themeChange(false);
		Fathom.load(PUBLIC_FATHOM_ID, {
			url: PUBLIC_FATHOM_URL,
			excludedDomains: ['localhost'],
		});
	});

	$effect(() => {
		page.url.pathname, browser && Fathom.trackPageview();
	});

	onNavigate((navigation) => {
		// sorry Firefox and Safari users
		if (!(document as any).startViewTransition) return;

		return new Promise((resolve) => {
			(document as any).startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="flex min-h-screen flex-col overflow-x-hidden">
	<Header />

	<main class="container mx-auto max-w-3xl flex-grow px-4">
		{@render children?.()}
	</main>

	<Footer />
</div>
