<script context="module">
  export async function load(ctx) {
    try {
      const Post = await import(
        `../sheets/${ctx.page.params.slug}.md`
      )

      return {
        props: {
          Post: Post.default,
          metadata: Post.metadata,
        },
      }
    } catch (e) {
      return {
        status: 404,
        error: 'Post not found',
      }
    }
  }
</script>

<script>
  export let Post, metadata
</script>

<h1 class="text-4xl">
  {metadata.title}
</h1>
<p>{metadata.createdDate}</p>
<p>{metadata.updatedDate}</p>
<a
  href={`https://github.com/spences10/cheat-sheets/edit/production/sheets/${metadata.slug}.md`}
  >Edit this page on GitHub</a
>
<Post />
