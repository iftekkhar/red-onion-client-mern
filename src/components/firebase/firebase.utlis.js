import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuwqJM2mpxLsAskHawH-00h95wRldgOhI",
  authDomain: "red-onion-ecommerce-ia.firebaseapp.com",
  databaseURL: "https://red-onion-ecommerce-ia.firebaseio.com",
  projectId: "red-onion-ecommerce-ia",
  storageBucket: "red-onion-ecommerce-ia.appspot.com",
  messagingSenderId: "884123577513",
  appId: "1:884123577513:web:dee4a8ff287f061e8b4db8",
  measurementId: "G-BKT3N0WFLK"
};
firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({ prompt: 'Select a Account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;