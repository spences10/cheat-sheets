<script context="module">
  import { getSheets } from '$lib/get-sheets'
  import { author, description, name, website } from '$lib/info'
  import { ogImageUrl } from '$lib/og-image-url-build'
  import Fuse from 'fuse.js'
  import { Head } from 'svead'

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
    class="input input-primary input-bordered text-xl mb-10"
  />
</div>

<ul
  class="mb-10 grid gap-5 grid-cols-1 xs:grid-cols-2 md:grid-cols-3"
>
  {#if results.length === 0}
    {#each sheets as sheet}
      {#if sheet.published}
        <li
          class="font-medium text-3xl border border-primary rounded-2xl p-5"
        >
          <a class="link" sveltekit:prefetch href={`/${sheet.slug}`}
            >{sheet.title}</a
          >
        </li>
      {/if}
    {/each}
  {:else}
    {#each results as result}
      <li class="font-medium my-5 text-4xl">
        <a class="link" sveltekit:prefetch href={result.item.slug}>
          {result.item.title}
        </a>
      </li>
    {/each}
  {/if}
</ul>
