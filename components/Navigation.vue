<template>
  <div>
    <nav-link v-for="link in links" :key="link.text" :to="link.path" :text="link.text"/>
  </div>
</template>
<script>
  import NavLink from '~/components/common/NavLink'

  export default {
    data () {
      return {
        links: [{
          path: '/',
          text: this.$t('links.home')
        }, {
          path: '/products',
          text: this.$t('links.products')
        }, {
          path: '/courses',
          text: this.$t('links.courses')
        }, {
          path: '/books',
          text: this.$t('links.books')
        }
        ]
      }
    },
    components: {
      NavLink
    }
  }
</script>
