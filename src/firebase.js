import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVuH6IY-Z0n6P9oXFCG1IWkm3UeECI8vs",
  authDomain: "chitchat-e72b5.firebaseapp.com",
  projectId: "chitchat-e72b5",
  storageBucket: "chitchat-e72b5.appspot.com",
  messagingSenderId: "612241538556",
  appId: "1:612241538556:web:b6d77c52aad0269d400679",
  measurementId: "G-HQXNTGFQL0"
};
  const app = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = app.firestore();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
export {auth,googleProvider};
  export default db;
