import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	paths: {
		base: '/static-artsy-site'
	}
};

export default config;
