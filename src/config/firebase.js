import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/analytics'
import 'firebase/performance'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACiAwvSdRqf0DiKJuo0Ru_pxri2s5bqZQ",
  authDomain: "personality-cms.firebaseapp.com",
  databaseURL: "https://personality-cms.firebaseio.com",
  projectId: "personality-cms",
  storageBucket: "personality-cms.appspot.com",
  messagingSenderId: "156465917168",
  appId: "1:156465917168:web:918adea0da81b575876635",
  measurementId: "G-S8QHWM6BTW"
};

try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

export const fire = firebase
