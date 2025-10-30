// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5RyAd2Q3y5xqjwKOMekWrrgoFNsDlzDc",
  authDomain: "gencorp-b75d0.firebaseapp.com",
  projectId: "gencorp-b75d0",
  storageBucket: "gencorp-b75d0.firebasestorage.app",
  messagingSenderId: "625317246505",
  appId: "1:625317246505:web:5e5bfb6b0b370dcf630e38",
  measurementId: "G-C79NHCQGFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);