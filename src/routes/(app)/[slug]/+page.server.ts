// /src/routes/[slug]/+page.server.ts
import { loadQuery } from '@sanity/svelte-loader';
import { postQuery, type PostResult } from '$lib/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const initial = await loadQuery<PostResult>(postQuery, { slug });
	// console.log(initial);
	return { initial, params: { slug } };
};
