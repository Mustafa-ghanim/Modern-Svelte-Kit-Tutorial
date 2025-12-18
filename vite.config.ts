import { sentrySvelteKit } from "@sentry/sveltekit";
import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: "level-up-tutorials",
            project: "remote-blog"
        }
    }), sveltekit(), devtoolsJson()]
});