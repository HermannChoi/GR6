// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDqkxaNLvaW7aFVm1WoSZ9zgUnzyI78SrY",
  authDomain: "shoppingmall-b57b3.firebaseapp.com",
  projectId: "shoppingmall-b57b3",
  storageBucket: "shoppingmall-b57b3.appspot.com",
  messagingSenderId: "11461069105",
  appId: "1:11461069105:web:7565934d8aea3012d54810",
  measurementId: "G-7TRJGGJYYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
}