import { PUBLIC_SITE_URL } from '$env/static/public';

// Get Queries from Sanity
import { client } from '$lib/sanity';
import { getSitemap } from '$lib/queries';

// Types
/** @type {import('@sveltejs/kit').RequestHandler} */

// Get all Data for Sitemap
export async function GET({ req }) {
	const sitemapData = await client.fetch(getSitemap);

	// Populate Body
	const body = sitemap(sitemapData);

	// Return Response
	return new Response(body, {
		headers: {
			'Cache-Control': `max-age=0, s-maxage=${604800}`,
			'Content-Type': 'application/xml'
		}
	});
}

// Create Sitemap
const sitemap = (siteMap) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
	xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
	xmlns:xhtml="https://www.w3.org/1999/xhtml"
	xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
	xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
	xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
	<url>
		<loc>${PUBLIC_SITE_URL}</loc>
		<lastmod>${siteMap && siteMap.siteChangeDate ? siteMap.siteChangeDate.split('T')[0] : ''}</lastmod>
	</url>
	${
		siteMap.sitePages
			? siteMap.sitePages
					.map(
						(sitemapEntry) => `
			<url>
				<loc>${PUBLIC_SITE_URL}${sitemapEntry.href}</loc>
				<lastmod>${sitemapEntry.updatedAt.split('T')[0]}</lastmod>
			</url>
		`
					)
					.join('')
			: ''
	}
</urlset>`;
