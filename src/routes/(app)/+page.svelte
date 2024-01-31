<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import { getAllPostsQuery, type PostResult } from '$lib/queries';

	export let data: PageData;
	const { initial, params } = data;

	const query = useQuery<PostResult>(getAllPostsQuery, params, { initial });

	$: ({ data: page, loading, encodeDataAttribute } = $query);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each page as post}
	<div>
		<h2>
			<a href={post.slug.current}>{post.title}</a>
		</h2>
	</div>
{/each}
