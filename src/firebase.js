// Import the functions you need from the SDKs you need
import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqmF_rYwCvVvzG1Jh3NWdVXi6BmLlCb0A",
  authDomain: "twitter-clone-d84fa.firebaseapp.com",
  projectId: "twitter-clone-d84fa",
  storageBucket: "twitter-clone-d84fa.appspot.com",
  messagingSenderId: "938969053866",
  appId: "1:938969053866:web:8c6a0e5bcc1b5bbbc1eed3",
  measurementId: "G-NKKQCL6DER",
};

// Initialize Firebase

const firebaseapp = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseapp);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export  {db , auth , provider, storage};