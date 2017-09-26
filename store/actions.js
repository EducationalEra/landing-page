import firebaseApp from '~/firebaseApp'

export default {
  authenticate ({state}, {email, password}) {
    console.log(email, password)
    firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(error => {
      console.log(error)
    })
  }
}
