// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBctJ4Cz9I__h_2G-g5_LvDhzGVtj3863w",
  authDomain: "private-router-2020.firebaseapp.com",
  projectId: "private-router-2020",
  storageBucket: "private-router-2020.firebasestorage.app",
  messagingSenderId: "392763947139",
  appId: "1:392763947139:web:5dce589e77e9615714c3b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth