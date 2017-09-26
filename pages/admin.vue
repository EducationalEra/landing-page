<template>
  <div>
    admin
  </div>
</template>
<script>
  import firebaseApp from '~/firebaseApp'

  export default {
    created () {
      if (!firebaseApp.auth().currentUser) {
        this.$nuxt.$router.replace({ path: '/login' })
      }
    }
  }
</script>
