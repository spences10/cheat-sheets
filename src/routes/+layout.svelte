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
	<!-- Neu-brutalist navbar -->
	<header
		class="bg-base-100 sticky top-0 z-50 border-b-4 border-black"
	>
		<nav
			class="navbar brutal-card bg-primary !transform-none !border-0 !shadow-none"
		>
			<div class="navbar-start">
				<a
					href="/"
					class="brutal-btn btn btn-ghost text-primary-content hover:text-primary-content text-2xl font-black"
				>
					<span class="-skew-x-6 transform tracking-wider uppercase">
						⚡ Cheat Sheets
					</span>
				</a>
			</div>
			<div class="navbar-end">
				<div
					class="brutal-btn btn btn-secondary text-secondary-content hover:text-secondary-content font-bold"
				>
					<Header />
				</div>
			</div>
		</nav>
	</header>

	<!-- Main content with neu-brutalist styling -->
	<main class="bg-base-100 relative min-h-screen flex-grow">
		<!-- Background pattern -->
		<div class="absolute inset-0 opacity-5">
			<div
				class="h-full w-full"
				style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,0.1) 35px, rgba(0,0,0,0.1) 70px);"
			></div>
		</div>

		<div class="relative z-10 container mx-auto max-w-4xl p-6 lg:p-8">
			<div class="brutal-card bg-base-200 p-8 lg:p-12">
				{@render children?.()}
			</div>
		</div>
	</main>

	<Footer />
</div>
