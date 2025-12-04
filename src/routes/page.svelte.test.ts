import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	test('should render h1', () => {
		render(Page, {
			props: {
				data: {
					sheets: [],
				},
			},
		});
		expect(
			screen.getByRole('heading', { level: 1 }),
		).toBeInTheDocument();
	});
});
