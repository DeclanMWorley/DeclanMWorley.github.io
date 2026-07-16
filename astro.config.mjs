// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Deployed as the GitHub user site (repo: DeclanMWorley.github.io) — served from the domain root.
	site: 'https://declanmworley.github.io',
	markdown: {
		shikiConfig: {
			theme: 'gruvbox-dark-hard',
		},
	},
});
