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
  import { format } from 'date-fns'

  export let Post, metadata
  let created = format(new Date(metadata.createdDate), 'yyy MMM do')
  let updated = format(new Date(metadata.updatedDate), 'yyy MMM do')
</script>

<h1 class="text-4xl font-medium">
  {metadata.title}
</h1>
<div class="my-3 opacity-75">
  <p class="text-xs font-semibold">Created: {created}</p>
  <p class="text-xs font-semibold">Updated: {updated}</p>
  <a
    class="text-xs font-semibold underline hover:no-underline hover:text-purple-600"
    href={`https://github.com/spences10/cheat-sheets/edit/production/sheets/${metadata.slug}.md`}
    >Edit this page on GitHub</a
  >
</div>

<article class="prose mb-16">
  <Post />
</article>
