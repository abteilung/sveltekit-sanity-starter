<!-- /src/routes/[slug]/+page.svelte -->
<script lang="ts">
	import { Image } from '$lib/components';

	import type { PageData } from './$types';
	import { useQuery } from '@sanity/svelte-loader';
	import { authorQuery, type AuthorResult } from '$lib/queries';

	export let data: PageData;
	const { initial, params } = data;

	const query = useQuery<AuthorResult>(authorQuery, params, { initial });

	$: ({ data: page, loading, encodeDataAttribute } = $query);
</script>

{#if loading}
	<div>Loading...</div>
{:else}
	<h1 data-sanity={encodeDataAttribute(['title'])}>
		{page.title}
	</h1>
	<div data-sanity={encodeDataAttribute(['author', 'name'])}>
		{page.name}<br />
	</div>
	<Image
		image={page.image}
		alt={page.name}
		width="160"
		height="160"
		class="object-cover w-24 h-24 rounded-full"
	/>
{/if}
