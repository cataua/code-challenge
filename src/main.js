import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './utils/aFrameComponents' // Quando criar os componentes do aframe

import App from './App.vue'

Vue.config.productionTip = false

Vue.config.ignoredElements = [
  'a-scene',
  'a-entity',
  'a-camera',
  'a-box',
  'a-assets',
  'a-asset-item',
  'a-sky',
  'a-sphere',
  'a-cylinder',
  'a-plane',
  'a-light',
];
Vue.mixin({
  data: () => {
    return {
      publicPath: process.env.BASE_URL,
    }
  }
})
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
