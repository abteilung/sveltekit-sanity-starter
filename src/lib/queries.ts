const visibilityChecker = `
  (!defined(store.status) || store.status != 'draft') 
  && (!defined(pub.isHidden) || pub.isHidden == false)
  && (!defined(pub.publishedAt) || pub.publishedAt < now())
  && (!defined(pub.unpublishedAt) || pub.unpublishedAt > now())
`;

// Define URLs for all our link types
const linkTypes = `
  "href": slug.current,
  _type,
  _type == "author" => {
    "href": "/author/" + slug.current,
  },
  _type == "post" => {
    "href": "/posts/" + slug.current,
  },
  _type == "casestudy" => {
    "href": "/case/" + slug.current,
  },
  _type == "service" => {
    "href": "/dienstleistungen/" + slug.current,
  },
  _type == "adesProduct" => {
    "href": "/produktepalette/" + categoryAdesProduct.slug.current + '/' + slug.current,
  },
  _type == "page" => {
    "href": "/" + slug.current,
  },
  _type == "categoryAdesProduct" => {
    "href": "/produktepalette/" + slug.current,
  },
  _type == "categorySolution" => {
    "href": "/etikettier-loesungen/" + slug.current,
  },
  _type == "solutionDetail" => {
    "href": "/etikettier-loesung/" + slug.current,
  },
  _type == "solution" => {
    "href": "/etikettier-loesungen/loesung/" + slug.current,
  },
  _type == "meta" => {
    "href": "/meta/" + slug.current,
  },
  _type == "brand" => {
    "href": url,
  },
  _type == "landingPage" => {
    "href": "/landing/" + slug.current,
  }
`;

export const imageMeta = `
  "alt": coalesce(image.alt, image->altText),
  "image": coalesce(image, mainImage) {
    asset-> {
      _id,
      url,
      metadata {
        lqip,
        "bgColor": palette.dominant.background
      },
    },
      hotspot,
      crop
  },
  "customRatio": image.customRatio
`;

// src/lib/queries.ts
export const postQuery = `*[_type == "post" && slug.current == $slug][0]{
    title,
    author->{name, "imageUrl": image.asset->url, "image": image {
        asset-> {
          _id,
          url,
          metadata {
            lqip,
            "bgColor": palette.dominant.background
          },
        },
          hotspot,
          crop
      },
    },
}`;

export const getAllPostsQuery = `*[_type == "post"]{
    ...,
    ${imageMeta},
    ${linkTypes}
}`;

export interface PostResult {
	title: string;
	slug: string;
	author: {
		name: string;
	};
	mainImage: {
		asset: {
			url: string;
		};
	};
	// ...etc
}

export const getSitemap = `
{
    "siteChangeDate": *[(_type == 'page' && _id == 'frontPage') && ${visibilityChecker}]{"updatedAt": _updatedAt}[0].updatedAt,
    "sitePages": *[defined(slug) && slug.current != '/' && ${visibilityChecker}] | order(_updatedAt desc) {
        "updatedAt": _updatedAt,
        ${linkTypes}
    }
}
`;
