export default {
  locales: [
    {
      code: 'en',
      iso: 'en-GB',
      file: 'en-GB.js'
    },
    {
      code: 'ja',
      iso: 'ja-JP',
      file: 'ja-JP.js'
    }
  ],
  defaultLocale: 'en',
  strategy: 'prefix_and_default',
  detectBrowserLanguage: {
    fallbackLocale: 'en'
  },
  seo: false,
  lazy: true,
  langDir: 'locale/'
};
