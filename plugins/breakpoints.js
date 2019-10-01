import Vue from 'vue';

Vue.mixin({
  data() {
    return {
      $mobile: 460,
      $tab: 768,
      $pc: 980,
      $bigScr: 1800
    };
  }
});
