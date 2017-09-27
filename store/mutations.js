export const SET_LANG = 'SET_LANG'
export const SET_COURSES_REF = 'SET_COURSES_REF'
export const SET_BOOKS_REF = 'SET_BOOKS_REF'
export const SET_ARTICLES_REF = 'SET_ARTICLES_REF'
export const SET_PROJECTS_REF = 'SET_PROJECTS_REF'
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'
export const SET_TAGS = 'SET_TAGS'

export default {
  [SET_LANG] (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  [SET_COURSES_REF] (state, ref) {
    state.coursesRef = ref
  },
  [SET_BOOKS_REF] (state, ref) {
    state.booksRef = ref
  },
  [SET_ARTICLES_REF] (state, ref) {
    state.articlesRef = ref
  },
  [SET_PROJECTS_REF] (state, ref) {
    state.projectsRef = ref
  },
  [SET_SEARCH_TERM] (state, value) {
    state.searchTerm = value
  },
  [SET_TAGS] (state, tags) {
    state.tags = tags
  }
}
