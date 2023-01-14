import { sveltekit } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

const config = {
	plugins: [sveltekit()],
	kit: {
		paths: {
			base: dev ? '' : '/static-artsy-site',
		},
		// If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
		// For example, instead of '_app', use 'app_', 'internal', etc.
	}
};

export default config;
