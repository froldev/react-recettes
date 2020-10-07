import Rebase from 're-base'
import firebase from '@firebase/app'
import '@firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBA-IMmLhyyvozrB6uaS-OG7kdvxqaFmiI",
  authDomain: "react-recettes-4a67d.firebaseapp.com",
  databaseURL: "https://react-recettes-4a67d.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
