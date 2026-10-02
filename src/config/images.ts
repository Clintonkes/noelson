// Every photo on the site comes from Pexels' CDN, which resizes on request.
// Each size below is one exact URL, so a photo fetched once is reused from
// the browser cache wherever that size appears again.
//
// This file must stay free of "@/…" imports: vite.config.ts imports it to
// build the preload script in index.html.

const pexels = (id: number, params: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&${params}`;

/** Full-screen images: the home hero and the gallery lightbox. */
export const hero = (id: number) => pexels(id, 'w=1600');
/** Wide, short strips (page headers, call-to-action bands), cropped to fit. */
export const banner = (id: number) => pexels(id, 'w=1600&h=640&fit=crop');
/** Large half-width images beside a block of text. */
export const feature = (id: number) => pexels(id, 'w=1200');
/** Cards in a grid. */
export const thumb = (id: number) => pexels(id, 'w=800');

export const pageImages = {
  home: { hero: hero(8143668), about: feature(9029162), cta: banner(816198) },
  about: { header: banner(6794794), team: feature(38936338), area: banner(8143677) },
  services: { header: banner(38936351) },
  gallery: { header: banner(26599272) },
  faq: { header: banner(37720375) },
  quote: { header: banner(4162016) },
  contact: { header: banner(38936338) },
};

/** The first image each route paints. index.html preloads the one matching
 *  the URL being opened, so it downloads alongside the JS bundle. */
export const entryImages: Record<string, string> = {
  '/': pageImages.home.hero,
  '/about': pageImages.about.header,
  '/services': pageImages.services.header,
  '/gallery': pageImages.gallery.header,
  '/faq': pageImages.faq.header,
  '/quote': pageImages.quote.header,
  '/contact': pageImages.contact.header,
};
