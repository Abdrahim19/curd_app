// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKvRsmhBW8eMTr91PVr2XmVT7sYOTfHio",
  authDomain: "quora-clone-61276.firebaseapp.com",
  projectId: "quora-clone-61276",
  storageBucket: "quora-clone-61276.appspot.com",
  messagingSenderId: "292787801010",
  appId: "1:292787801010:web:0d5d3fd1fe5265b85572ab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

