import { getSheets } from '$lib/get-sheets'

export async function load() {
  const [sheets] = await getSheets()

  return {
    sheets,
  }
}
