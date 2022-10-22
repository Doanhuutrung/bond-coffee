// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqwBtJiB1Rp9dxI_GcrArU50hFnamyh7Y",
  authDomain: "db-coffee-1be72.firebaseapp.com",
  projectId: "db-coffee-1be72",
  storageBucket: "db-coffee-1be72.appspot.com",
  messagingSenderId: "156096224227",
  appId: "1:156096224227:web:e0c94463e9e097d7c71ed6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage (app);
export default app;