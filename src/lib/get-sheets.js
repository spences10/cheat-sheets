export async function getSheets() {
  const posts = await Object.entries(
    import.meta.globEager('/sheets/*.md')
  )
    // get sheet metadata
    .map(([, post]) => post.metadata)
    // sort by date
    .sort((b, a) => {
      const da = new Date(a.date).getTime()
      const db = new Date(b.date).getTime()
      if (da < db) return -1
      if (da === db) return 0
      if (da > db) return 1
    })

  return posts
}
