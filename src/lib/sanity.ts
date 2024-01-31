// src/lib/sanity.ts
import { createClient } from '@sanity/client/stega';
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
