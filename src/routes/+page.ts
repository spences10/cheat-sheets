import { get_sheets } from '$lib/get-sheets'

export const load = async () => {
	const sheets = await get_sheets()

	return {
		sheets,
	}
}
