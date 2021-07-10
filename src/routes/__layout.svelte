<script>
  import Header from '$lib/header.svelte'
  import 'prism-themes/themes/prism-night-owl.css'
  import '../styles.css'
</script>

<div class="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
  <Header />
  <main>
    <slot />
  </main>
</div>
