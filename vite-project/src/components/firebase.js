// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_zRzEaej0lZUI2h-Vv9XvVWCrp_Oprhg",
  authDomain: "authentication-b8862.firebaseapp.com",
  projectId: "authentication-b8862",
  storageBucket: "authentication-b8862.appspot.com",
  messagingSenderId: "158524068885",
  appId: "1:158524068885:web:edf743d9b3ce08af58ea1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
