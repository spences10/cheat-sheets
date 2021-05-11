<script>
  import Nav from '$lib/nav.svelte'
  import '../app.postcss'
</script>

<Nav />

<main>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <slot />
    </div>
  </div>
</main>
