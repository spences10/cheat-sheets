<script context="module">
  import { getSheets } from '$lib/get-sheets'
  import Head from '$lib/head.svelte'
  import { author,description,name,website } from '$lib/info'
  import { ogImageUrl } from '$lib/og-image-url-build'
  import Fuse from 'fuse.js'

  export async function load() {
    const sheets = await getSheets()

    return {
      props: {
        sheets,
      },
    }
  }
</script>

<script>
  export let sheets

  let options = {
    keys: ['title'],
    includeScore: true,
    includeMatches: true,
    threshold: 0.2,
  }
  let fuse = new Fuse([...sheets], options)
  let query = ''
  $: results = fuse.search(query)
</script>

<Head
  title={`Home · ${name}`}
  {description}
  image={ogImageUrl(author, 'cheatsheets.xyz', 'Cheat Sheets')}
  url={website}
/>

<div class="form-control">
  <label for="search" class="label">
    <span id="search" class="label-text-alt"
      >Search for a technology...</span
    >
  </label>
  <input
    type="text"
    bind:value={query}
    placeholder="Search"
    class="input input-primary input-bordered text-xl"
  />
</div>

{#if results.length === 0}
  <ul>
    {#each sheets as sheet}
      {#if sheet.published}
        <li class="font-medium my-5 text-4xl">
          <a class="link" sveltekit:prefetch href={`/${sheet.slug}`}
            >{sheet.title}</a
          >
        </li>
      {/if}
    {/each}
  </ul>
{:else}
  {#each results as result}
    <ul>
      <li class="font-medium my-5 text-4xl">
        <a class="link" sveltekit:prefetch href={result.item.slug}>
          {result.item.title}
        </a>
      </li>
    </ul>
  {/each}
{/if}
