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


/** @type {import('sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	const { url, request, locals } = event;

	// check for Referer header to know where the user is navigating from
	const referer = request.headers.get('Referer');
	if (referer) {
		const urlReferer = new URL(referer);
		if (urlReferer.origin === url.origin) {
			locals.internalReferer = urlReferer;
		}
	}

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			// Set %splash-skip% to true if in development mode
			const splashSkip = process.env.NODE_ENV === 'development' ? true : !!locals.internalReferer;
			console.log(splashSkip);
			return html.replace('%splash-skip%', String(splashSkip));
		}
	});
	return response || { status: 500, body: 'Internal server error' };
};
