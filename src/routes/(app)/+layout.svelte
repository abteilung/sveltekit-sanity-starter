<!-- /src/routes/+layout.svelte -->
<script lang="ts">
	import '../../app.css';
	import { themeChange } from 'theme-change';

	import Navbar from '$lib/components/Navbar.svelte';

	import { Stat, Checkbox, Carousel } from '$lib/components';

	import { onMount } from 'svelte';
	import { enableOverlays } from '@sanity/overlays';
	import { useLiveMode } from '@sanity/svelte-loader';
	import { client } from '$lib/sanity';
	import { PUBLIC_SANITY_STUDIO_URL } from '$env/static/public';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});

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
<button data-toggle-theme="dark,light" data-act-class="dark">Theme</button>

<div class="container">
	<Stat class="" />
	<Carousel />
	<Checkbox />
	<slot />
</div>
