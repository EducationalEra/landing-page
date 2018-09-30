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
    return genericSearch(state.books, state.searchTerm, state.tags)
  },
  allProjects (state) {
    return state.projects
  },
  filteredProjects (state) {
    return genericSearch(state.projects, state.searchTerm, state.tags)
  },
  filteredArticles (state) {
    return genericSearch(state.articles, state.searchTerm, state.tags)
  },
  searchProducts: (state, getters) => (searchTerm, filters) => {
    return {
      courses: getters.genericSearch(state.courses, searchTerm, filters)
    }
  }
}
