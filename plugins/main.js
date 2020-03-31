import Vue from 'vue'
import util from '~/assets/js/util'
Vue.mixin({
  methods: {
    vueResponsive() {
      util.vueSDK()
    }
  }
})
