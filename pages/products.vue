<template>
  <div>
    <input @keyup="updateSearchTerm" type="text" placeholder="search" v-model="searchTerm">
    <div v-for="course in filteredCourses" :key="course.name">{{course.name}}</div>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        searchTerm: ''
      }
    },
    computed: {
      ...mapGetters(['allCourses', 'filteredCourses'])
    },
    methods: {
      ...mapActions(['bindFirebaseReferences', 'setSearchTerm', 'setTags']),
      updateSearchTerm () {
        this.setSearchTerm(this.searchTerm)
      }
    }
  }
</script>
