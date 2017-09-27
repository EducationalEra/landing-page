import {genericSearch} from '~/utils'

export default {
  allProducts (state) {

  },
  filteredProducts: (state, getters) => (filters) => {

  },
  allCourses (state) {
    return state.courses
  },
  filteredCourses: state => {
    return genericSearch(state.courses, state.searchTerm, state.tags)
  },
  allBooks (state) {
    return state.books
  },
  filteredBooks (state) {

  },
  allProjects (state) {
    return state.projects
  },
  filteredProjects (state) {

  },
  searchProducts: (state, getters) => (searchTerm, filters) => {
    return {
      courses: getters.genericSearch(state.courses, searchTerm, filters)
    }
  }
}
