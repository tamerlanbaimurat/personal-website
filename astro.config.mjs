// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	site: 'https://tamerlanbaimurat.github.io',
	base: '/personal-website',
	trailingSlash: 'never',
	output: 'static',
	vite: {
		build: {
			assetsInlineLimit: 0,
		},
	},
	build: {
		assets: '_assets',
	},
})
