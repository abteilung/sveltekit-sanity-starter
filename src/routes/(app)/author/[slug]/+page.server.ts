// /src/routes/[slug]/+page.server.ts
import { loadQuery } from '@sanity/svelte-loader';
import { authorQuery, type AuthorResult } from '$lib/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const initial = await loadQuery<AuthorResult>(authorQuery, { slug });
	return { initial, params: { slug } };
};
