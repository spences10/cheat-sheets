<script>
  import { name, website,author } from '$lib/info'

  export let title
  export let description
  export let image
  export let url
</script>

<svelte:head>
  <link rel="canonical" href={url} />
  <!-- Meta Tags Generated via https://heymeta.com -->

  <!-- HTML Meta Tags -->
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="author" content={author} />

  <!-- Google / Search Engine Tags -->
  <meta itemprop="name" content={title} />
  <meta itemprop="description" content={description} />
  <meta itemprop="image" content={image} />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={website} />
  <meta property="twitter:url" content={url} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />

  <!-- Monetisation -->
  <meta name="monetization" content="$ilp.uphold.com/bzPBWkMBzLmN" />
</svelte:head>
