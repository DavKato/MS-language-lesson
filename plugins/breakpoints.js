import Vue from 'vue';

Vue.mixin({
  data() {
    return {
      $mobile: 460,
      $tab: 768,
      $pc: 900,
      $bigScr: 1800
    };
  }
});
