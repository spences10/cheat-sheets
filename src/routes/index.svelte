<script context="module">
  export async function load() {
    const posts = import.meta.globEager('../../sheets/*.md')

    // for (const path in posts) {
    //   console.log(path)
    // }

    const postsList = Object.values(posts)
    const postsMeta = postsList.map(post => {
      return post.metadata
    })
    return {
      props: {
        posts: postsMeta,
      },
    }
  }
</script>

<script>
  import Fuse from 'fuse.js'
  export let posts

  let options = {
    keys: ['title'],
    includeScore: true,
    includeMatches: true,
    threshold: 0.2,
  }
  let fuse = new Fuse([...posts], options)
  let query = ''
  $: results = fuse.search(query)
</script>

<input type="text" bind:value={query} class="border" />

{#if results.length === 0}
  <ul>
    {#each posts as post}
      {#if post.published}
        <li
          class="text-4xl font-medium my-5 hover:underline hover:text-purple-600"
        >
          <a sveltekit:prefetch href={`/${post.slug}`}>{post.title}</a
          >
        </li>
      {/if}
    {/each}
  </ul>
{:else}
  {#each results as result}
    <ul>
      <li
        class="text-4xl font-medium my-5 hover:underline hover:text-purple-600"
      >
        <a sveltekit:prefetch href={result.item.slug}>
          {result.item.title}
        </a>
      </li>
    </ul>
  {/each}
{/if}
