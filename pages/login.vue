<template>
  <div>
    <div class="login">
      <div class="inputs">
        <input v-model="email" type="email" placeholder="Username">
        <input v-model="password" type="password" placeholder="Password">
      </div>
      <button @click="onClick">Authenticate!</button>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import firebaseApp from '~/firebaseApp'

  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      ...mapActions(['authenticate']),
      onClick () {
        this.authenticate({email: this.email, password: this.password})
        this.$nuxt.$router.replace({ path: '/admin' })
      }
    },
    created () {
      firebaseApp.auth().onAuthStateChanged(user => {
        if (user) {
          this.$nuxt.$router.replace({ path: '/admin' })
        } else {
        }
      })
    }
  }
</script>
<style scoped lang="scss">
  .login {
    width: 60%;
    margin: auto;
    background: rgba(128, 128, 128, 0.11);
    display: flex;
    align-items: center;
    flex-direction: column;
    button {
      width: 80%;
      background: orange;
      color: white;
      font-size: 1em;
      height: 2em;
      border: none;
      cursor: pointer;
    }
    .inputs {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 80%;
      input {
        width: 50%;
        font-size: 1em;
        height: 3em;
      }
    }
  }
</style>
