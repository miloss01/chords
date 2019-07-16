import firebase from 'firebase'

// Your web app's Firebase configuration
const app = firebase.initializeApp ({
  apiKey: "AIzaSyAdoJMYLSMYr3kSYzitlV36QcZPI_fzBV4",
  authDomain: "chords-32001.firebaseapp.com",
  databaseURL: "https://chords-32001.firebaseio.com",
  projectId: "chords-32001",
  storageBucket: "chords-32001.appspot.com",
  messagingSenderId: "400008680758",
  appId: "1:400008680758:web:b1bab562aedc2612"
})

export const db = app.firestore()