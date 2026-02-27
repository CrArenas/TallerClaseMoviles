// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8iowy02GEDW-X0llXvtpWgOumx4DmYhw",
  authDomain: "prueba-clase-3102b.firebaseapp.com",
  databaseURL: "https://prueba-clase-3102b-default-rtdb.firebaseio.com",
  projectId: "prueba-clase-3102b",
  storageBucket: "prueba-clase-3102b.firebasestorage.app",
  messagingSenderId: "42842412345",
  appId: "1:42842412345:web:306588d7d162ab4a9984e8",
  measurementId: "G-P22LSR8X8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);