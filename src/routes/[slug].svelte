<script context="module">
  export async function load(ctx) {
    try {
      const Post = await import(
        `../../sheets/${ctx.page.params.slug}.md`
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

<h1 class="font-medium text-5xl">
  {metadata.title}
</h1>
<div class="my-3 mb-11 opacity-75">
  <p class="font-semibold text-xs">Created: {created}</p>
  <p class="font-semibold text-xs">Updated: {updated}</p>
  <a
    class="font-semibold text-xs underline hover:no-underline"
    href={`https://github.com/spences10/cheat-sheets/edit/production/sheets/${metadata.slug}.md`}
    >Edit this page on GitHub</a
  >
</div>

<article class="mb-16 prose md:prose-lg lg:prose-xl">
  <svelte:component this={Post} />
</article>
