<template>
  <nuxt />
</template>

<script>
export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo();
    const pageDesc = this.$t("desc");
    const mainTitle = this.$t("title");
    const url = "https://priceless-nightingale-6489da.netlify.com";
    return {
      titleTemplate: mainTitle,
      htmlAttrs: { ...i18nSeo.htmlAttrs },
      meta: [
        { hid: "charset", charset: "utf-8" },
        {
          name: "viewport",
          hid: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        { "http-equiv": "x-ua-compatible", content: "ie=edge" },
        {
          name: "format-detection",
          hid: "format-detection",
          content: "telephone=no, email=no, address=no"
        },
        {
          hid: "description",
          name: "description",
          content: pageDesc
        },
        { hid: "og:title", property: "og:title", content: mainTitle },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:site_name", property: "og:site_name", content: mainTitle },
        { hid: "og:url", property: "og:url", content: url },
        {
          hid: "og:description",
          property: "og:description",
          content: pageDesc
        },
        {
          hid: "og:image",
          property: "og:image",
          content: url + "img/thumbnail.jpg"
        },
        { name: "twitter:card", content: "summary_large_image" },
        ...i18nSeo.meta
      ],
      link: [...i18nSeo.link]
    };
  }
};
</script>

