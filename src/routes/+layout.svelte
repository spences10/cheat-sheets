<script lang="ts">
	import { browser } from '$app/environment'
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
</script>

<div
	class="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 flex-grow"
>
	<Header />
	<main>
		<slot />
	</main>
</div>

<Footer />
