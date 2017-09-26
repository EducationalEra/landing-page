<template>
  <nuxt-link class="nav-link" :to="to">{{text}}</nuxt-link>
</template>

<style scoped lang="scss">
  .nav-link {
    color: orange;
  }
</style>

<script>
  export default {
    props: ['to', 'text']
  }
</script>
