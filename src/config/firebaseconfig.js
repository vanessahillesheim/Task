// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi24sZkjFt9HqH4Hv_unVGx6EcgFIOChg",
  authDomain: "task-928e7.firebaseapp.com",
  projectId: "task-928e7",
  storageBucket: "task-928e7.appspot.com",
  messagingSenderId: "464088729938",
  appId: "1:464088729938:web:c08c328242a1925e78d28b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const database = getFirestore(app);

export default database;
