import type { APIRoute } from 'astro';

// ponytail: one public page, so the list is hand-written. Switch to @astrojs/sitemap if routes grow.
const paths = ['/'];

export const GET: APIRoute = ({ site }) =>
	new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
			.map((path) => `\t<url><loc>${new URL(path, site)}</loc></url>`)
			.join('\n')}\n</urlset>\n`,
		{ headers: { 'Content-Type': 'application/xml' } },
	);
