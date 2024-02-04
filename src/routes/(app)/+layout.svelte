<!-- /src/routes/+layout.svelte -->
<script lang="ts">
	import '../../app.css';

	import Navbar from '$lib/components/Navbar.svelte';

	import { Stat, Checkbox, Carousel, Diff, ThemeController } from '$lib/components';

	import { onMount } from 'svelte';
	import { enableOverlays } from '@sanity/overlays';
	import { useLiveMode } from '@sanity/svelte-loader';
	import { client } from '$lib/sanity';
	import { PUBLIC_SANITY_STUDIO_URL } from '$env/static/public';

	onMount(() => enableOverlays());

	onMount(() =>
		useLiveMode({
			// If `stega.studioUrl` was not provided to the client instance in `sanity.ts`, a studioUrl should be provided here
			studioUrl: PUBLIC_SANITY_STUDIO_URL,
			// ...or alternatively provide the stega client directly
			client: client.withConfig({
				stega: { ...client.config().stega, enabled: true }
			})
		})
	);
</script>

<Navbar />
<ThemeController />
<div class="container">
	<Diff
		beforeImage="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg"
		afterImage="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.jpg"
	/>

	<Stat class="" />
	<Carousel />
	<Checkbox />
	<slot />
</div>
