<!-- /src/routes/+layout.svelte -->
<script lang="ts">
	import '../../app.css';

	import Navbar from '$lib/components/Navbar.svelte';

	import { Stat, Checkbox, Carousel, Diff } from '$lib/components';

	import { onMount } from 'svelte';
	import { enableOverlays } from '@sanity/overlays';
	import { useLiveMode } from '@sanity/svelte-loader';
	import { client } from '$lib/sanity';

	// Overlays to enable editing in live mode
	onMount(() => enableOverlays());

	onMount(() =>
		useLiveMode({
			client: client.withConfig({
				stega: { ...client.config().stega, enabled: true }
			})
		})
	);
</script>

<div class="container">
	<Navbar />
	<Diff
		beforeImage="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg"
		afterImage="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.jpg"
	/>

	<Stat class="" />
	<Carousel />
	<Checkbox />
	<slot />
</div>
