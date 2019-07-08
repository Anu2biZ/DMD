import VueRouter from 'vue-router'
import Home from './pages/Home'
import User from './pages/User'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/user/:id',
      component: User
    }
  ],
  mode: 'history'
})