import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$prod: resolve('./dist')
		}
	},
	server: {
		fs: {
			allow: 'dist'
		}
	}
};

export default config;
