// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvE3ucTWTuGmg7B03NJX-W_xey7Ic_Mk0",
  authDomain: "thejkproducts-7db04.firebaseapp.com",
  projectId: "thejkproducts-7db04",
  storageBucket: "thejkproducts-7db04.appspot.com",
  messagingSenderId: "337146054414",
  appId: "1:337146054414:web:3f39a46b1b54ea697bb95f",
  measurementId: "G-FS1DPD44L1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// const analytics = getAnalytics(app);
