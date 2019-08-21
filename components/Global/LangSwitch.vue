<template>
  <div>
    <nuxt-link :to="switchLocalePath('en')" tabindex="0" class="link">
      <img
        src="~/assets/img/1x/english.png"
        srcset="~/assets/img/2x/english.png 2x, ~/assets/img/3x/english.png 3x"
        alt="Switch language to English"
        title="Switch language to English"
      />
    </nuxt-link>
    <nuxt-link :to="switchLocalePath('ja')" tabindex="0" class="link">
      <img
        src="~/assets/img/1x/japanese.png"
        srcset="~/assets/img/2x/japanese.png 2x, ~/assets/img/3x/japanese.png 3x"
        alt="Switch language to English"
        title="Switch language to English"
      />
    </nuxt-link>
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
}

.nuxt-link-exact-active img {
  border-bottom: 2px solid red;
}
</style>
