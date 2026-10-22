import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL / BASE_PATH được set khi deploy (GitHub Pages preview dùng /<repo>, tên miền thật dùng /)
const site = process.env.SITE_URL || 'https://nusevastudio.com';
const base = process.env.BASE_PATH || '/';
const to = (p) => base.replace(/\/$/, '') + p;

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap()],
  image: { responsiveStyles: false },
  redirects: {
    '/lop11': to('/lop-hoc/pilates-may'),
    '/lop12': to('/lop-hoc/pilates-may'),
    '/lop-1': to('/lop-hoc/pilates-may'),
    '/lop-12': to('/lop-hoc/pilates-may'),
    '/barrelophoc': to('/lop-hoc/barre'),
    '/barre': to('/lop-hoc/barre'),
  },
});
