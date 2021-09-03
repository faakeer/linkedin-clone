// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAhjWWj_bHPXoUmTKXp_C-LZRpBedirBxE",
    authDomain: "linkedin-clone-f88ec.firebaseapp.com",
    projectId: "linkedin-clone-f88ec",
    storageBucket: "linkedin-clone-f88ec.appspot.com",
    messagingSenderId: "513618641326",
    appId: "1:513618641326:web:41652f547a34e1be4b883f",
    measurementId: "G-WJ14MCS97K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };