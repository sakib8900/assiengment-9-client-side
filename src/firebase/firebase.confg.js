// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIhYCjuk1kUMb70L2wlQlbsM5C9INtN48",
  authDomain: "assiegnment-9.firebaseapp.com",
  projectId: "assiegnment-9",
  storageBucket: "assiegnment-9.firebasestorage.app",
  messagingSenderId: "795167027269",
  appId: "1:795167027269:web:d58ee2fe4159df6c2cb32c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)