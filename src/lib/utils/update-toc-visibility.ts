export const update_toc_visibility = (
	end_of_copy: HTMLElement | null,
	offset: number = -700
): boolean => {
	if (
		window.scrollY >=
		(end_of_copy?.offsetTop ?? -Infinity) + offset
	) {
		return false
	} else {
		return true
	}
}
