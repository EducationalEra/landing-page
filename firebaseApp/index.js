// Initialize Firebase
import firebase from 'firebase'
import configProd from '~/config/firebase-prod'
import configStaging from '~/config/firebase-staging'

const env = process.env.NODE_ENV

let config = env === 'production' ? configProd : configStaging

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp
