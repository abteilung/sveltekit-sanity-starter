import { loadQuery } from '@sanity/svelte-loader';
import { getAllPostsQuery, type PostResult } from '$lib/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const initial = await loadQuery<PostResult>(getAllPostsQuery);
	// console.log(initial);
	return { initial };
};
