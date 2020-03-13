import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCoreVideoPlayer from 'vue-core-video-player'

import App from './App.vue'

// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './style/custom.css'


Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Install vue-core-video-player
Vue.use(VueCoreVideoPlayer)


new Vue({
  render: h => h(App),
}).$mount('#app')
