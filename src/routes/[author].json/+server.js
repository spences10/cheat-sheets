export const GET = async req => {
  const { author } = req.params
  try {
    const res = await fetch(`https://api.github.com/users/${author}`)
    return new Response(JSON.stringify(await res.json()))
  } catch (error) {
    return {
      status: 500,
      errors: { error: error.message },
    }
  }
}
