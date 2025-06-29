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
		(page.url.pathname, browser && Fathom.trackPageview());
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

<div class="flex min-h-screen flex-col">
	<!-- Simple navbar without mobile menu -->
	<div class="navbar bg-base-100 sticky top-0 z-50 shadow-lg">
		<div class="navbar-start">
			<a href="/" class="btn btn-ghost text-xl font-bold">
				<span
					class="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent"
				>
					Cheat Sheets
				</span>
			</a>
		</div>
		<div class="navbar-end">
			<Header />
		</div>
	</div>

	<!-- Main content -->
	<main class="bg-base-200 min-h-screen flex-grow">
		<div class="container mx-auto max-w-3xl p-4 lg:p-6">
			{@render children?.()}
		</div>
	</main>

	<Footer />
</div>
