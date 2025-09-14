// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "studio-6526509799-aafa9",
  appId: "1:90572664897:web:8a9fe10ebe176ce7ddd6c0",
  storageBucket: "studio-6526509799-aafa9.firebasestorage.app",
  apiKey: "AIzaSyD5Q77Wwu3g09Qn2ckxYAT-XR6d2O8n3Js",
  authDomain: "studio-6526509799-aafa9.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "90572664897"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
