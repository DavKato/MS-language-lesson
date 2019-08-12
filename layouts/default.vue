<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
</style>

<script>
export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    const pageDesc = this.$t('desc.default')
    const mainTitle = this.$t('title.default')
    // const url = "ADD_PRODUCTION_URL";
    return {
      titleTemplate: `%s | ${mainTitle}`,
      htmlAttrs: { ...i18nSeo.htmlAttrs },
      meta: [
        { hid: 'charset', charset: 'utf-8' },
        {
          name: 'viewport',
          hid: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        {
          name: 'format-detection',
          hid: 'format-detection',
          content: 'telephone=no, email=no, address=no'
        },
        {
          hid: 'description',
          name: 'description',
          content: pageDesc
        },
        // { hid: 'og:title', property: 'og:title', content: mainTitle },
        // { hid: 'og:type', property: 'og:type', content: 'website' },
        // { hid: 'og:site_name', property: 'og:site_name', content: mainTitle },
        // { hid: 'og:url', property: 'og:url', content: url },
        // {
        //   hid: 'og:description',
        //   property: 'og:description',
        //   content: pageDesc
        // },
        // {
        //   hid: 'og:image',
        //   property: 'og:image',
        //   content: url + 'img/top-thumbnail.jpg'
        // },
        // { name: 'twitter:card', content: 'summary_large_image' },
        ...i18nSeo.meta
      ],
      link: [...i18nSeo.link]
    }
  }
}
</script>

