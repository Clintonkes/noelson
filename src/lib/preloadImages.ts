import { pageImages, thumb, feature } from '@/config/images';
import { services, galleryImages } from '@/config/site';

// Spreading this onto an <img> marks it as the most important image on the
// page. Lower-case because React 18 does not know the camelCase prop.
export const highPriority = { fetchpriority: 'high' } as Record<string, string>;

let started = false;

/** Downloads every image the other pages use, in the background, once the
 *  current page has finished loading — so navigating shows images at once
 *  instead of starting their downloads then. */
export function warmImageCache() {
  if (started) return;
  started = true;

  const connection = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  }).connection;
  // Respect data-saver and very slow connections: there the extra downloads
  // would cost more than they save.
  if (connection?.saveData || /2g/.test(connection?.effectiveType ?? '')) return;

  // Page headers first: they are what shows the moment a link is clicked.
  const headers = Object.values(pageImages).map((page) => Object.values(page)[0]);
  const rest = Object.values(pageImages).flatMap((page) => Object.values(page).slice(1));
  const queue = [...new Set([
    ...headers,
    ...rest,
    ...services.map((s) => thumb(s.imageId)),
    ...galleryImages.map((g) => thumb(g.id)),
    ...services.map((s) => feature(s.imageId)),
  ])];

  const next = () => {
    const url = queue.shift();
    if (!url) return;
    const img = new Image();
    img.decoding = 'async';
    // Low priority so these never delay an image the visitor is looking at.
    img.setAttribute('fetchpriority', 'low');
    img.onload = img.onerror = next;
    img.src = url;
  };
  const start = () => { for (let i = 0; i < 4; i++) next(); };

  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start, { once: true });
}
