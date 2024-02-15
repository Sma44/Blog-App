// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTLKwwH6ucvs6QWUrR29KnvrIFW7-mRmQ",
  authDomain: "blogapp-b2a1a.firebaseapp.com",
  projectId: "blogapp-b2a1a",
  storageBucket: "blogapp-b2a1a.appspot.com",
  messagingSenderId: "913426185746",
  appId: "1:913426185746:web:92feec175d3a80015162cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);