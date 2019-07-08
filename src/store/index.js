import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'

Vue.use(Vuex)

Vue.filter('returnTrueDOB', function (value) {
  if (!value) return ''
  value = value.toString()
  value = value.split('T')
  value = value[0].split('-').reverse().join('-')
  return value
})

export default new Vuex.Store({
  modules: {
    users
  }
})
