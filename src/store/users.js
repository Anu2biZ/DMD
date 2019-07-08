import axios from 'axios'

export default {
  state: {
    users: Array
  },
  actions: {
    getUsers ({
      commit
    }) {
      axios.get('https://randomuser.me/api/?results=5&inc=picture,name,dob,email,phone&nat=us').then((response) => {
        // console.log(response.data, this)
        commit('setUsers', response.data.results)
      })
    }
  },
  mutations: {
    setUsers (state, users) {
      state.users = users
    }
  }
}
