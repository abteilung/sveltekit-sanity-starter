// src/hooks.server.ts
import { client } from '$lib/sanity';
import { setServerClient } from '@sanity/svelte-loader';
import { SANITY_API_READ_TOKEN } from '$env/static/private';

setServerClient(
	client.withConfig({
		token: SANITY_API_READ_TOKEN,
		useCdn: false,
		perspective: 'previewDrafts'
	})
);
