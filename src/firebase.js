// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCvaTDKqEiAilegD7SkFEIguLKh7nlkwgQ",
  authDomain: "userauth-38a4f.firebaseapp.com",
  projectId: "userauth-38a4f",
  storageBucket: "userauth-38a4f.appspot.com",
  messagingSenderId: "803189604390",
  appId: "1:803189604390:web:1140236a627d4df59466e7",
  measurementId: "G-4BHT56TFKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};