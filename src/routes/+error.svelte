<script>
  import { page } from '$app/stores'
  import { error } from '@sveltejs/kit'
</script>

<svelte:head>
  <title>{page.status}</title>
</svelte:head>

<h1>{page.status}: {error.message}</h1>
