// @ts-check
import { defineConfig } from 'astro/config';

// Static output. Cloudflare Pages publishes ./dist.
// The hostname assumes the Pages project is named chensong-portfolio.
// Pages project names cannot contain underscores.
export default defineConfig({
	site: 'https://chensong-portfolio.pages.dev',
	output: 'static',
});
