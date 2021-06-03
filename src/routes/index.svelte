<script context="module">
  export async function load() {
    const posts = import.meta.globEager('../sheets/*.md')

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
  export let posts
</script>

<ul>
  {#each posts as post}
    {#if post.published}
      <li
        class="text-4xl font-medium my-5 hover:underline hover:text-purple-600"
      >
        <a sveltekit:prefetch href={`/${post.slug}`}>{post.title}</a>
      </li>
    {/if}
  {/each}
</ul>
