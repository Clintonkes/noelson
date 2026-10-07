import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { entryImages } from './src/config/images';

const PLACEHOLDER = '<!--entry-image-preload-->';

// This app renders entirely client-side, so the browser cannot discover a
// page's top image until the JS bundle has downloaded and React has mounted.
// This adds a tiny inline script to index.html that preloads the image for
// the route being opened, so it downloads in parallel with the bundle.
function preloadEntryImage(): Plugin {
  let base = '/';
  return {
    name: 'preload-entry-image',
    configResolved(config) {
      base = config.base;
    },
    transformIndexHtml(html) {
      if (!html.includes(PLACEHOLDER)) {
        throw new Error(`index.html is missing the ${PLACEHOLDER} placeholder`);
      }
      const script =
        `(function(){var m=${JSON.stringify(entryImages)},b=${JSON.stringify(base)},p=location.pathname;` +
        `if(p.indexOf(b)===0)p='/'+p.slice(b.length);p=p.replace(/\\/+$/,'')||'/';` +
        `var u=m[p];if(!u)return;var l=document.createElement('link');` +
        `l.rel='preload';l.as='image';l.href=u;l.setAttribute('fetchpriority','high');` +
        `document.head.appendChild(l);})();`;
      return html.replace(PLACEHOLDER, `<script>${script}</script>`);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), preloadEntryImage()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});