// Get Queries from Sanity
import { getSanityServerClient } from '$lib/sanity/client';
import { getLayoutData } from '$lib/sanity/queries';
import { urlForImage } from '$lib/sanity';

// Types
/** @type {import('@sveltejs/kit').RequestHandler} */

// Get all Data for Sitemap
export async function GET({ req }) {
	const layoutStuff = await getSanityServerClient(false).fetch(getLayoutData);

	// Populate Body
	const body = sitemap(layoutStuff.siteConfig);

	// Return Response
	return new Response(body, {
		headers: {
			'Cache-Control': `max-age=0, s-maxage=${604800}`,
			'Content-Type': 'application/json'
		}
	});
}

// Create Sitemap
const sitemap = (siteConfig) => `{
  "name": "${siteConfig.title}",
  "short_name": "${siteConfig.title}",
  "icons": [
      {
          "src": "${urlForImage(siteConfig.favicon).width(192).height(192).format('png')}",
          "sizes": "192x192",
          "type": "image/png"
      },
      {
        "src": "${urlForImage(siteConfig.favicon).width(512).height(512).format('png')}",
          "sizes": "512x512",
          "type": "image/png"
      }
  ],
  "theme_color": "${siteConfig.themeColor ? siteConfig.themeColor : '#ffffff'}",
  "background_color": "${siteConfig.backgroundColor ? siteConfig.backgroundColor : '#ffffff'}",
  "display": "${siteConfig.display ? siteConfig.display : 'standalone'}"
}
`;
