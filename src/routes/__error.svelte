<script context="module">
  export function load({ error, status }) {
    return {
      props: { error, status },
    }
  }
</script>

<script>
  export let error, status
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<h1>{status}: {error.message}</h1>
