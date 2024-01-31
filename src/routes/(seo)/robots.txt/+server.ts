import { PUBLIC_SITE_URL } from '$env/static/public';

// Get Queries from Sanity
import { client } from '$lib/sanity';
import { getSitemap } from '$lib/queries';

// Types
/** @type {import('@sveltejs/kit').RequestHandler} */

// Get all Data for Sitemap
export async function GET({ req }) {
	const layoutStuff = await client.fetch(getSitemap);

	// Populate Body
	const body = robots(layoutStuff.siteConfig);

	// Return Response
	return new Response(body, {
		headers: {
			'Cache-Control': `max-age=0, s-maxage=${604800}`,
			// content-Type Text/Plain
			'Content-Type': 'text/plain'
		}
	});
}

// Create Robots.txt
const robots = (robots) => `# https://www.robotstxt.org/robotstxt.html
User-agent: *

# Stop JS and JSON from being crawled
Disallow: /*.js$
Disallow: /*.ts$
Disallow: /*.jsx$
Disallow: /*.tsx$
Disallow: /*.json
Disallow: /analytics.json
Disallow: /current-visitors.json

 Sitemap: ${PUBLIC_SITE_URL}/sitemap.xml
`;
