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
  home: { hero: hero(31732617), about: feature(9029162), cta: banner(816198) },
  about: { header: banner(31732617), team: feature(38936338), area: banner(8143677) },
  services: { header: banner(4162016) },
  gallery: { header: banner(8143668) },
  testimonials: { header: banner(18559625) },
  faq: { header: banner(3971211) },
  quote: { header: banner(37554739) },
  contact: { header: banner(4469146) },
};

/** Every image a route paints before the user can scroll. index.html
 *  preloads the ones matching the URL being opened, so they all download
 *  alongside the JS bundle instead of trickling in after React mounts. */
export const entryImages: Record<string, string[]> = {
  '/': [pageImages.home.hero, pageImages.home.about],
  '/about': [pageImages.about.header],
  '/services': [pageImages.services.header],
  '/gallery': [pageImages.gallery.header],
  '/testimonials': [pageImages.testimonials.header],
  '/faq': [pageImages.faq.header],
  '/quote': [pageImages.quote.header],
  '/contact': [pageImages.contact.header],
};
