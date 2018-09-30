<template>
  <div>
    admin
    <input @keyup="updateSearchTerm" type="text" placeholder="search" v-model="searchTerm">
    <h1>{{$t('products.titles.courses')}}</h1>
    <div v-for="item in filteredCourses" :key="item.name">{{item.name}}</div>
    <h1>{{$t('products.titles.books')}}</h1>
    <div v-for="item in filteredBooks" :key="item.name">{{item.name}}</div>
    <h1>{{$t('products.titles.projects')}}</h1>
    <div v-for="item in filteredProjects" :key="item.name">{{item.name}}</div>
    <h1>{{$t('products.titles.articles')}}</h1>
    <div v-for="item in filteredArticles" :key="item.name">{{item.name}}</div>
  </div>
</template>
<script>
  import firebaseApp from '~/firebaseApp'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data () {
      return {
        searchTerm: ''
      }
    },
    computed: {
      ...mapGetters(['filteredCourses', 'filteredBooks', 'filteredProjects', 'filteredArticles'])
    },
    methods: {
      ...mapActions(['bindFirebaseReferences', 'setSearchTerm', 'setTags']),
      updateSearchTerm () {
        this.setSearchTerm(this.searchTerm)
      }
    },
    created () {
      if (!firebaseApp.auth().currentUser) {
        this.$nuxt.$router.replace({ path: '/login' })
      }
    }
  }
</script>
