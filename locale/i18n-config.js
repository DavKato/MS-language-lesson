export default {
  baseUrl: "https://marinasoranzo.com",
  locales: [
    {
      code: "en",
      iso: "en-GB",
      file: "en-GB.js"
    },
    {
      code: "ja",
      iso: "ja-JP",
      file: "ja-JP.js"
    },
    {
      code: "it",
      iso: "it-IT",
      file: "it-IT.js"
    },
    {
      code: "de",
      iso: "de-DE",
      file: "de-DE.js"
    }
  ],
  defaultLocale: "ja",
  strategy: "prefix_and_default",
  detectBrowserLanguage: {
    alwaysRedirect: true,
    cookieKey: "lang",
    fallbackLocale: "ja"
  },
  lazy: true,
  langDir: "locale/"
};
