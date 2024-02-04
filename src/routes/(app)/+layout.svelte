<!-- /src/routes/+layout.svelte -->
<script lang="ts">
	import '../../app.css';
	import '../../splash.css';

	import Navbar from '$lib/components/Navbar.svelte';

	import { Section, Stat, Checkbox, Carousel, Diff } from '$lib/components';

	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
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

	if (browser) {
		const hydratedAt = new Date();
		const intervalId = setInterval(() => {
			const splashedAt = document.documentElement.getAttribute('data-splashed-at');
			if (splashedAt) {
				clearInterval(intervalId);
				if (hydratedAt > new Date(splashedAt)) {
					// hydration completes after splash screen
					// indicating that the network is slow:
					// display appropriate notification
				}
			}
		}, 250);
	}
</script>

<div class="container">
	<Navbar />
	<Section class="py-0 lg:py-0 ">
		<Diff
			beforeImage="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg"
			afterImage="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.jpg"
		/>
	</Section>
	<Section class="bg-base-200">
		<Stat />
	</Section>
	<Section>
		<Carousel />
	</Section>
	<slot />
</div>
