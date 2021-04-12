import Vue from 'vue'
import Vuex from 'vuex'
import {store} from '../vuex/store'
import App from './App.vue'
import './assets/styles/global.css'
import router from './router'

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
