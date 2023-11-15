 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "{API KEY}",
  authDomain: "todo-app-be01e.firebaseapp.com",
  projectId: "todo-app-be01e",
  storageBucket: "todo-app-be01e.appspot.com",
  messagingSenderId: "115481996314",
  appId: "{APP ID}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
