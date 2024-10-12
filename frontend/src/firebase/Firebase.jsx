// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyARxZDRY2bEgjQ18q3uqEAUktgHmqpSRqg",
    authDomain: "shiftsmart-ai.firebaseapp.com",
    databaseURL: "https://shiftsmart-ai-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "shiftsmart-ai",
    storageBucket: "shiftsmart-ai.appspot.com",
    messagingSenderId: "511024670725",
    appId: "1:511024670725:web:762e6a245372e79e07546c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app); // Pass app to getAuth to ensure proper initialization
export const db = getFirestore(app); // Firestore database instance
export default app;
