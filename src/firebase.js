import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrNvBW6HqGCo5Nzsr5dW-WU6uYxIryDEA",
    authDomain: "facebook-clone-23783.firebaseapp.com",
    databaseURL: "https://facebook-clone-23783.firebaseio.com",
    projectId: "facebook-clone-23783",
    storageBucket: "facebook-clone-23783.appspot.com",
    messagingSenderId: "144888797562",
    appId: "1:144888797562:web:2d15c4fe1eb9db01d31ec3",
    measurementId: "G-ZWDYY06T3C"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;