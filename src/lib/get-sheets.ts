export const get_sheets = async () => {
	const sheets = await Promise.all(
		Object.entries(import.meta.glob('../../sheets/*.md')).map(
			async ([path, resolver]) => {
				const { metadata }: any = await resolver();
				const slug = path?.split('/').pop()?.slice(0, -3) ?? null;
				return { ...metadata, slug };
			},
		),
	);

	return sheets;
};
