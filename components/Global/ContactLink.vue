<template functional>
  <img
    src="~/assets/img/2x/email.png"
    alt="scroll to contact section"
    title="scroll to contact section"
    v-scroll-to="{ el: '#contact', duration: 500, offset: -30 }"
    :class="[data.class, data.staticClass]"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  />
</template>