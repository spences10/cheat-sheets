<script>
  export let title
  export let description
  export let image
</script>

<svelte:head>
  <!-- Meta Tags Generated via http://heymeta.com -->

  <title>{title}</title>
  <meta name="description" content={description} />

  <!-- HTML Meta Tags -->
  <title>{title}</title>
  <meta name="description" content={description} />

  <!-- Google / Search Engine Tags -->
  <meta itemprop="name" content={title} />
  <meta itemprop="description" content={description} />
  <meta itemprop="image" content={image} />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://cheatsheets.xyz" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
</svelte:head>
