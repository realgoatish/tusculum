import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
  resolve: {
    alias: {
      $lib: resolve('./src/lib'),
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
