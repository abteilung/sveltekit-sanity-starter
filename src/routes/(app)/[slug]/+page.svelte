<!-- /src/routes/[slug]/+page.svelte -->
<script lang="ts">
	import Image from '$lib/components/ui/Image.svelte';

	import type { PageData } from './$types';
	import { useQuery } from '@sanity/svelte-loader';
	import { postQuery, type PostResult } from '$lib/queries';

	export let data: PageData;
	const { initial, params } = data;

	const query = useQuery<PostResult>(postQuery, params, { initial });

	$: ({ data: page, loading, encodeDataAttribute } = $query);
</script>

{#if loading}
	<div>Loading...</div>
{:else}
	<h1 data-sanity={encodeDataAttribute(['title'])}>
		{page.title}
	</h1>
	<div data-sanity={encodeDataAttribute(['author', 'name'])}>
		{page.author.name}<br />
	</div>
	<Image image={page.author.image} alt={page.author.name} class="w-24 h-24 rounded-full" />
{/if}
