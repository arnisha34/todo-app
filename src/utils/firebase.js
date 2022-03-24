// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcB-KIyU8xVYjGWm-DQ3fGGlOmMkyLcc4",
  authDomain: "todo-app-firebase-874f1.firebaseapp.com",
  projectId: "todo-app-firebase-874f1",
  storageBucket: "todo-app-firebase-874f1.appspot.com",
  messagingSenderId: "922805975423",
  appId: "1:922805975423:web:6b4e12091503ff74e3c24a",
  measurementId: "G-W43371DZ3D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();