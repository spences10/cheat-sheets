const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/[slug].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/[slug].svelte
	[/^\/([^/]+?)\/?$/, [c[0], c[3]], [c[1]], (m) => ({ slug: d(m[1])})]
];

export const fallback = [c[0](), c[1]()];