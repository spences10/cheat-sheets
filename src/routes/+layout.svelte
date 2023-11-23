<script lang="ts">
	import { browser } from '$app/environment'
	import { onNavigate } from '$app/navigation'
	import { page } from '$app/stores'
	import {
		PUBLIC_FATHOM_ID,
		PUBLIC_FATHOM_URL,
	} from '$env/static/public'
	import { Footer, Header } from '$lib/components'
	import * as Fathom from 'fathom-client'
	import 'prism-themes/themes/prism-night-owl.css'
	import { onMount } from 'svelte'
	import { themeChange } from 'theme-change'
	import '../app.postcss'

	onMount(() => {
		themeChange(false)
		Fathom.load(PUBLIC_FATHOM_ID, {
			url: PUBLIC_FATHOM_URL,
			excludedDomains: ['localhost'],
		})
	})

	$: $page.url.pathname, browser && Fathom.trackPageview()

	onNavigate(navigation => {
		// sorry Firefox and Safari users
		if (!(document as any).startViewTransition) return

		return new Promise(resolve => {
			;(document as any).startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})
</script>

<div
	class="flex flex-col min-h-screen overflow-x-hidden"
>
	<Header />
	
	<main class="container max-w-3xl mx-auto px-4 flex-grow">
		<slot />
	</main>

	<Footer />
</div>

