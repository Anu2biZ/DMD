import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import router from './routes'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})


