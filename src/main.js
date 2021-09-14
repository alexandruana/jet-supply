import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'

import '@/styles/tailwind.css'
import 'tailwindcss/tailwind.css'

Vue.config.productionTip = false

new Vue({
  store,
  axios,
  render: h => h(App),
}).$mount('#app')
