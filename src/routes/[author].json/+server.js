export const GET = async req => {
  const { author } = req.params
  try {
    const res = await fetch(`https://api.github.com/users/${author}`)
    return {
      status: 200,
      body: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      body: { error: error.message },
    }
  }
}
