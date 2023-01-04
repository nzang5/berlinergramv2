// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp( {
  apiKey: "AIzaSyAob_Zimh4J_RXl3_dxM_ONJ9ZTGNJseag",
  authDomain: "berlinergramv2.firebaseapp.com",
  projectId: "berlinergramv2",
  storageBucket: "berlinergramv2.appspot.com",
  messagingSenderId: "1038875585509",
  appId: "1:1038875585509:web:33418e5032773a51b21d0c",
  measurementId: "G-B48254P3RY"
});



// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase database
export const db = app.firestore();

export default app;
