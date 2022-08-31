import { viteBundler } from '@vuepress/bundler-vite';
import { containerPlugin } from '@vuepress/plugin-container';
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { path } from '@vuepress/utils';
import { resolve } from 'path';
import { defaultTheme, defineUserConfig } from 'vuepress';

const isProd = process.env.NODE_ENV === 'production';
export default defineUserConfig({
   title: 'riasuh Docs',

   head: [
      ['link', { rel: 'icon', href: '/icon_32x32.png' }],
      ['meta', { name: 'theme-color', content: '#fa002a' }],
   ],

   locales: {
      '/': {
         lang: 'en-US',
         title: 'riasuh Docs',
      },
      //   '/nl/': {
      //      lang: 'nl-NL',
      //      title: 'ScoreSaber Wiki',
      //   },
   },

   theme: defaultTheme({
      repo: 'riasuh/webproject',
      docsDir: 'docs',
      docsBranch: 'master',
      editLink: true,
      contributors: true,

      locales: {
         '/': {
            selectLanguageText: '🌐 English',
            selectLanguageName: 'English',
            selectLanguageAriaLabel: 'Languages',
            editLinkText: 'Help improve this page!',
            lastUpdatedText: 'Last Updated',
            navbar: [
               { text: 'Home', link: '/' },
               { text: 'riasuh Discord', link: 'https://discord.com/invite/6PRt4Ph' },
            ],
         },
      },
   }),
   plugins: [

      mediumZoomPlugin({
         zoomOptions: {
            margin: 16,
         },
      }),
      containerPlugin({
         type: 'feature',
         before: (info) => `<div class="feature"><h2 style="pointer-events: none;">${info}</h2>`,
         after: () => '</div>',
      }),
      containerPlugin({
         type: 'align',
         before: (align) => `<div align="${align}">`,
         after: () => '</div>',
      }),
   ],
   bundler: viteBundler({
      viteOptions: {
         resolve: {
            alias: {
               '@images': resolve(__dirname, '../.assets/images'),
            },
         },
      },
   }),
});
