import i18n from './locale/i18n-config';

const imgDir = '/img/';

export default {
  mode: 'universal',

  head: {
    link: [
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: imgDir + 'favicon16.png'
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: imgDir + 'favicon32.png'
      },
      {
        rel: 'icon',
        sizes: '64x64',
        type: 'image/png',
        href: imgDir + 'favicon64.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        type: 'image/png',
        href: imgDir + 'apple-touch180.png'
      },
      //Chrome for Android
      {
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png',
        href: imgDir + 'favicon192.png'
      }
    ]
  },
  //  MANIFEST ICON 1024*1024 PNG
  icon: {
    iconFileName: 'img/icon-manifest.png'
  },

  loading: false,

  css: ['@assets/scss/main.scss'],

  manifest: {
    name: "Marina's Lesson",
    short_name: 'M-Lesson',
    theme_color: '#6180aa'
  },

  plugins: ['~/plugins/breakpoints.js', '~/plugins/vueScreenSize.js'],

  modules: [
    '@nuxtjs/style-resources',
    'vue-scrollto/nuxt',
    '@nuxtjs/pwa',
    // '@nuxtjs/google-analytics',
    ['nuxt-i18n', i18n]
    // '@nuxtjs/sitemap'
  ],

  // googleAnalytics: {
  //   id: 'ADD_ID_OR_UA'
  // },

  // sitemap: {
  //   path: '/sitemap.xml',
  //   hostname: 'ADD_PRODUCTION_URL',
  // },

  workbox: {
    runtimeCaching: [
      {
        urlPattern: '^https://fonts.(?:googleapis|gstatic).com/(.*)',
        handler: 'cacheFirst'
      },
      {
        urlPattern: '/.*',
        handler: 'staleWhileRevalidate',
        strategyOptions: {
          cacheName: 'my-cache',
          cacheExpiration: {
            maxAgeSeconds: 24 * 60 * 60 * 30
          }
        }
      }
    ]
  },

  styleResources: {
    scss: ['@assets/scss/_variables.scss', '@assets/scss/_mixins.scss']
  },

  build: {
    extend(config, ctx) {},
    postcss: {
      plugins: {
        'postcss-preset-env': {
          autoprefixer: { grid: false }
        }
      }
    }
  },

  generate: {
    routes: ['/ja'],
    subFolder: false
  },

  ssr: false
};
