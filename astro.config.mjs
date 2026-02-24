// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ActivityPub Hub',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/fedi-libs/activitypub-hub' }],
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Resources',
					autogenerate: { directory: 'resources' },
				},
			],
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en'
        },
        'ja': {
          label: '日本語',
          lang: 'ja',
        },
      },
		}),
	],
});
