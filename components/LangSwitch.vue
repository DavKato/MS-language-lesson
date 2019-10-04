<template>
  <div>
    <div
      @click="changeLocale('en')"
      tabindex="0"
      class="link"
      :class="{'link-active': locale === 'en'}"
    >
      <img
        src="~/assets/img/1x/english.png"
        srcset="~/assets/img/2x/english.png 2x, ~/assets/img/3x/english.png 3x"
        alt="Switch language to English"
        title="Switch language to English"
      />
    </div>
    <div
      @click="changeLocale('ja')"
      tabindex="0"
      class="link"
      :class="{'link-active': locale === 'ja'}"
    >
      <img
        src="~/assets/img/1x/japanese.png"
        srcset="~/assets/img/2x/japanese.png 2x, ~/assets/img/3x/japanese.png 3x"
        alt="Switch language to Japanese"
        title="Switch language to Japanese"
      />
    </div>
    <div
      @click="changeLocale('de')"
      tabindex="0"
      class="link"
      :class="{'link-active': locale === 'de'}"
    >
      <img
        src="~/assets/img/1x/german.png"
        srcset="~/assets/img/2x/german.png 2x, ~/assets/img/3x/german.png 3x"
        alt="Switch language to German"
        title="Switch language to German"
      />
    </div>
    <div
      @click="changeLocale('it')"
      tabindex="0"
      class="link"
      :class="{'link-active': locale === 'it'}"
    >
      <img
        src="~/assets/img/1x/italian.png"
        srcset="~/assets/img/2x/italian.png 2x, ~/assets/img/3x/italian.png 3x"
        alt="Switch language to Italian"
        title="Switch language to Italian"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  height: 100%;
}
.link {
  outline: none;
  transition: transform 0.2s, filter 0.2s;
  width: 6rem;
  height: 3.5rem;
  display: inline-block;
  cursor: pointer;

  @include respond("tab") {
    height: 4rem;
  }

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
  &:hover,
  &:focus {
    @include iconHover;
  }

  &:active {
    @include iconActive;
  }
}

.link-active img {
  border-bottom: 2px solid red;
}
</style>

<script>
export default {
  data() {
    return {
      locale: "en"
    };
  },
  methods: {
    changeLocale(to) {
      this.$i18n.setLocale(to);
    }
  },
  mounted() {
    this.locale = this.$i18n.locale;
  }
};
</script>
