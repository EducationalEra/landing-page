import firebaseApp from '~/firebaseApp'
import { firebaseAction } from 'vuexfire'
import {SET_ARTICLES_REF, SET_BOOKS_REF, SET_COURSES_REF, SET_PROJECTS_REF, SET_SEARCH_TERM, SET_TAGS} from './mutations'

export default {
  authenticate ({state}, {email, password}) {
    console.log(email, password)
    firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(error => {
      console.log(error)
    })
  },
  bindFirebaseReferences ({state, commit, dispatch}) {
    let db = firebaseApp.database()
    let coursesRef = db.ref('/courses')
    let booksRef = db.ref('/books')
    let articlesRef = db.ref('/articles')
    let projectsRef = db.ref('/projects')

    dispatch('bindFirebaseReference', {reference: coursesRef, toBind: 'courses'}).then(() => {
      commit(SET_COURSES_REF, coursesRef)
    })
    dispatch('bindFirebaseReference', {reference: booksRef, toBind: 'books'}).then(() => {
      commit(SET_BOOKS_REF, booksRef)
    })
    dispatch('bindFirebaseReference', {reference: articlesRef, toBind: 'articles'}).then(() => {
      commit(SET_ARTICLES_REF, articlesRef)
    })
    dispatch('bindFirebaseReference', {reference: projectsRef, toBind: 'projects'}).then(() => {
      commit(SET_PROJECTS_REF, projectsRef)
    })
  },
  /**
   * Generic binder of the firebase reference to the given key of the store's state
   * Checks if the value already exists in the database, otherwise will set it with the default store's state before binding
   * @param {object} store
   */
  bindFirebaseReference: firebaseAction(({bindFirebaseRef, state}, {reference, toBind}) => {
    return reference.once('value').then(snapshot => {
      if (!snapshot.val()) {
        reference.set(state[toBind])
      }
      bindFirebaseRef(toBind, reference)
    })
  }),
  addCourse ({state}, value) {
    let newCourse = state.coursesRef.push()
    newCourse.set(value)
  },
  addProject ({state}, value) {
    let newProject = state.projectsRef.push()
    newProject.set(value)
  },
  addArticle ({state}, value) {
    let newArticle = state.articlesRef.push()
    newArticle.set(value)
  },
  addBook ({state}, value) {
    let newBook = state.booksRef.push()
    newBook.set(value)
  },
  setSearchTerm ({commit}, value) {
    commit(SET_SEARCH_TERM, value)
  },
  setTags ({commit}, value) {
    commit(SET_TAGS, value)
  }
}
