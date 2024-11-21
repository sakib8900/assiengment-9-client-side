// firebase.confg.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBait-0IyIYNxgOgu-1XiTxITquH3spbcM",
  authDomain: "assiengmetn09.firebaseapp.com",
  projectId: "assiengmetn09",
  storageBucket: "assiengmetn09.firebasestorage.app",
  messagingSenderId: "768265314521",
  appId: "1:768265314521:web:3e5531cf52c5f1c5b11ec8"
};

const app = initializeApp(firebaseConfig);

export { app };
