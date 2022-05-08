
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSsshABPJnWfeGAh7DFf-BoJyS7rV9POw",
  authDomain: "asighnment-11-projects.firebaseapp.com",
  projectId: "asighnment-11-projects",
  storageBucket: "asighnment-11-projects.appspot.com",
  messagingSenderId: "227739145146",
  appId: "1:227739145146:web:a33d04b7bdcb434f3e4383"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;