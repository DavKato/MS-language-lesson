import Vue from 'vue';

const reactiveComponent = new Vue({
  data() {
    return {
      vssWidth: null,
      vssHeight: null
    };
  }
});

Vue.mixin({
  computed: {
    $vssWidth() {
      return reactiveComponent.vssWidth || this.getScreenWidth();
    },
    $vssHeight() {
      return reactiveComponent.vssHeight || this.getScreenHeight();
    }
  },
  methods: {
    getScreenWidth() {
      if (process.client) {
        return (
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
        );
      } else return 1400;
    },
    getScreenHeight() {
      if (process.client) {
        return (
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight
        );
      } else return 900;
    },
    handleResize() {
      reactiveComponent.vssWidth = this.getScreenWidth();
      reactiveComponent.vssHeight = this.getScreenHeight();
    }
  },
  mounted() {
    if (process.client) {
      window.addEventListener('resize', this.handleResize);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('resize', this.handleResize);
    }
  }
});
