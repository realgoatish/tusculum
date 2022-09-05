import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$prod: resolve('./tusculum')
		}
	},
	server: {
		fs: {
			allow: 'tusculum'
		}
	}
};

export default config;
