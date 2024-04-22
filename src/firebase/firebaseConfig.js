import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBzNIqNRmpOaKQfa9_gtVrAWwaWAinx_xI",
  authDomain: "my-kitchen-c8f03.firebaseapp.com",
  projectId: "my-kitchen-c8f03",
  storageBucket: "my-kitchen-c8f03.appspot.com",
  messagingSenderId: "376378300266",
  appId: "1:376378300266:web:6233cb056772601aaaf713",
  measurementId: "G-2SQSEEESX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth();

export const db =getFirestore(app)