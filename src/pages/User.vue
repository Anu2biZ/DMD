<template>

  <div class="user-item">
    <img :src="userItem[0].picture.large" class="user-item-img" @click="zoomIn">
    <div>{{userItem[0].name.title}} {{userItem[0].name.first}} {{userItem[0].name.last}}</div>
    <div>{{userItem[0].phone}}</div>
    <div>{{userItem[0].email}}</div>

  <hr>

  <div :class="[{ modal: isModal }, 'zoom']">
    <button @click="zoomOut">Close</button>
    <img :src="userItem[0].picture.large" alt="">
  </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      user: this.$router.currentRoute.params['id'],
      usersData: '',
      userItem: [],
      isModal: false
    }
  },
  created ()  {
    this.$store.dispatch('getUsers')
    this.usersData = this.$store.state.users.users

    for (var i = 0; i < this.usersData.length; i++) {
      if (this.usersData[i].name.last === this.user)
      this.userItem.push(this.usersData[i])
    }
    console.log('user/id ' + this.user)
  },
  methods: {
    zoomIn: function () {
      this.isModal = true
    },
    zoomOut: function() {
      this.isModal = false
    }
  }
}
</script>

<style scoped>
  .user-item-img {
    cursor: pointer;
  }

  .zoom {
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0,0,0,0.5);
  }

  .zoom img {
   width: 300px;
  height: auto;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  }

  .modal {
    display: block;
  }
</style>