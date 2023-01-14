import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	paths: {
		base: '/'
	}
};

export default config;
