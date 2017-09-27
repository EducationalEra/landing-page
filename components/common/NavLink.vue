<template>
  <nuxt-link class="nav-link" :to="to">{{text}}</nuxt-link>
</template>

<style scoped lang="scss">
  .nav-link {
    color: orange;
    &::after {
      content: " ";
    }
  }
</style>

<script>
  export default {
    props: ['to', 'text']
  }
</script>
