<template>
  <div>
    <!-- <h1>Users:</h1>

  <div>{{$store.state.users.users}}</div>
    <hr> -->

    <!-- <div>{{$store.state.users.users.name}}</div> -->
   <!-- <ul>
    <li v-for="user of filterLast"> {{user.name.last}}</li>
  </ul>
  - -->
    <div class="users">
      <div class="user-item" v-for="user of filterLast">
        <img :src="user.picture.large" class="user-item-img">
        <router-link 
          class="user-item-name" 
          :to="'/user/' + user.name.last" 
          :key="user.name.last">
         <b>{{user.name.title}}</b> {{user.name.first}} {{user.name.last}}
         </router-link>
        <div class="user-item-dob"> {{user.dob.date | returnTrueDOB}} </div>
      </div>
    </div>

    <input type="text" v-model="search" placeholder="Search by Lastname">
    <hr>
    <button @click="sortByName">Sort by name</button>
    <hr>
    <button @click="sortByDOB">Sort By DOB</button>
    <hr>
    <input type="date" v-model="userDate">
    <div>{{userDate | returnTrueDOB}}</div>
  </div>
</template>


<script>

export default {
  data () {
    return {
      search: '',
      userDate: ''
    }
  },
  created () {
    this.$store.dispatch('getUsers')
  },
  computed: {
    filterLast () {
      return this.$store.state.users.users
      .filter(user => {
        return user.name.last.indexOf(this.search) !== -1
      })
      .filter(user => {
        return this.$options.filters.returnTrueDOB(user.dob.date).indexOf(this.$options.filters.returnTrueDOB(this.userDate)) !== -1
        console.log(this.userDate)
      })
      
    }
  },
  methods: {
    sortByName: function() {
      this.$store.state.users.users.sort((a,b) => {
        if ( a.name.last < b.name.last ) return -1;
        if ( a.name.last < b.name.last ) return 1;
      })
      console.log(this.$store.state.users.users)
    },
    sortByDOB: function () {
      this.$store.state.users.users.sort((a,b) => {
        if ( a.dob.date < b.dob.date ) return -1;
        if ( a.dob.date < b.dob.date ) return 1;
      })
      console.log(this.$store.state.users.users)
    }
  }
}
</script>

<style scoped>
  .users {
    display: flex;
    width: 90%;
    margin: 30px auto;
    justify-content: space-around;
  }

  .user-item {
    display: flex;
    flex-direction: column;
  }
</style>
