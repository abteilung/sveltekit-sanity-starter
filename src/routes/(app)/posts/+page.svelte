<script lang="ts">
	import { Card } from '$lib/components';

	import { useQuery } from '@sanity/svelte-loader';
	import { allPostsQuery, type PostResult } from '$lib/queries';

	export let data: PageData;
	const { initial, params } = data;

	const query = useQuery<PostResult>(allPostsQuery, params, { initial });

	$: ({ data: page, loading, encodeDataAttribute } = $query);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each page as post}
	<Card {...post} />
{/each}
