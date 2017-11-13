import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import $ from 'jquery'
import store from './vuex/store'
import axios from './axios/http.js'

import './style.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


Vue.use(ElementUI)

Vue.prototype.axios = axios;

new Vue({
  el: '#app',
  axios,
  router,
  store,
  render: h => h(App)
})
