<template>
  <nuxt />
</template>

<script>
import gsap from "gsap";

export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo();
    const pageDesc = this.$t("desc");
    const mainTitle = this.$t("title");
    const url = "https://marinasoranzo.com";
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
  },
  methods: {
    intro() {
      const body = document.body;
      body.style.overflow = "hidden";
      const tl = gsap.timeline();
      tl.from(".hero", { duration: 0.5, translateX: -1800, delay: 0.6 })
        .from(".hero-title", {
          duration: 0.4,
          translateY: -1200,
          ease: "back.out(1.4)"
        })
        .from(
          ".hero-sub",
          { duration: 0.5, translateX: 4000, ease: "power2.out" },
          "-=0.3"
        )
        .from(
          ".header-bg-top",
          { duration: 2, opacity: 0, ease: "power2.in" },
          "-=0.5"
        )
        .from(".nav", { duration: 0.2, scaleY: 0 }, "-=1")
        .add(() => (body.style.overflow = "visible"))
        .from(".branch1", { duration: 2.6, translateX: -1000 }, "-=1")
        .from(".main", { duration: 1, autoAlpha: 0 }, "-=3");
    }
  },
  mounted() {
    const ua = window.navigator.userAgent;
    const isIE = /MSIE|Trident/.test(ua);
    if (process.client) {
      if (isIE) {
        this.ie = true;
      }

      this.so = require("scroll-out")({
        threshold: 0.2,
        scope: this.$el,
        once: true
      });
    }
    this.intro();
  },
  destroyed() {
    this.so.teardown();
  }
};
</script>
