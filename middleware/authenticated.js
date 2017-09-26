import firebaseApp from '~/firebaseApp'

export default function ({ store, redirect }) {
  let user = firebaseApp.auth().currentUser
  if (!user) {
    return redirect('/login')
  }
}
