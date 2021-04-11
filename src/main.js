import Vue from 'vue'
import Vuex from 'vuex'
import {store} from '../vuex/store'
import App from './App.vue'
import './assets/styles/global.css'

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
