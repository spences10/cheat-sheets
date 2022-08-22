import { error } from '@sveltejs/kit'

export async function load({ params }) {
  try {
    const Post = await import(`../../../sheets/${params.slug}.md`)

    return {
      Post: Post.default,
      metadata: Post.metadata,
    }
  } catch (e) {
    throw error(404, 'Post not found')
  }
}
