<script>
  import { browser } from '$app/env'
  import { page } from '$app/stores'
  import Header from '$lib/header.svelte'
  import * as Fathom from 'fathom-client'
  import 'prism-themes/themes/prism-night-owl.css'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../styles.postcss'

  // https://mattjennings.io/blog/how-to-use-fathom-analytics-with-sveltekit
  onMount(() => {
    themeChange(false)
    Fathom.load(import.meta.env.VITE_FATHOM_ID, {
      url: import.meta.env.VITE_FATHOM_URL,
      excludedDomains: ['localhost'],
    })
  })
  $: $page.path, browser && Fathom.trackPageview()
</script>

<div class="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
  <Header />
  <main>
    <slot />
  </main>
</div>
