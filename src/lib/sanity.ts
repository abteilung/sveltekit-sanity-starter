// src/lib/sanity.ts
import { createClient } from '@sanity/client/stega';
import createImageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

import {
	PUBLIC_SANITY_API_VERSION,
	PUBLIC_SANITY_DATASET,
	PUBLIC_SANITY_PROJECT_ID,
	PUBLIC_SANITY_STUDIO_URL
} from '$env/static/public';

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	apiVersion: PUBLIC_SANITY_API_VERSION,
	useCdn: true,
	// Optionally provide stega configuration
	stega: {
		studioUrl: PUBLIC_SANITY_STUDIO_URL
	}
});

// Create an image URL builder with the sanity configuration
export const imageBuilder = createImageUrlBuilder(client);

// Function to generate URL for an image with optional height parameter
export const urlForImage = (source: SanityImageSource, width: number, height?: number) => {
	if (!source || !source.asset) {
		console.error('Invalid image source:', source);
		return ''; // or a default image URL
	}

	let builder = imageBuilder.image(source).width(width).auto('format').fit('crop');

	if (height !== undefined) {
		builder = builder.height(height);
	}

	return builder.url();
};
