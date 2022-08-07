import firebase from "firebase/app";
import 'firebase/firestore'
import "firebase/database"



const firebaseConfig = {
    apiKey: "AIzaSyCawM2HsxjqxgIEM2PjNvcfzct1OdWqfeU",
    authDomain: "fyp-project-27e8c.firebaseapp.com",
    databaseURL: "https://fyp-project-27e8c-default-rtdb.firebaseio.com",
    projectId: "fyp-project-27e8c",
    storageBucket: "fyp-project-27e8c.appspot.com",
    messagingSenderId: "759549163634",
    appId: "1:759549163634:web:385d4d7790d638de726aeb",
    measurementId: "G-VT5RV0NN4P"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase;