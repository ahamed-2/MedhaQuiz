// js/firebase-config.js

// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, 
         createUserWithEmailAndPassword, 
         signInWithEmailAndPassword, 
         signOut, 
         onAuthStateChanged,
         sendPasswordResetEmail // নতুন যুক্ত করা হয়েছে
       } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore, 
         doc, 
         getDoc, 
         setDoc, 
         collection, 
         query, 
         where, 
         getDocs, 
         updateDoc, 
         deleteDoc,
         serverTimestamp 
       } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZSHP1RMR4A0z7CmhEAxyd1Hwzx9y6sk",
  authDomain: "medhaquiz-bdd63.firebaseapp.com",
  projectId: "medhaquiz-bdd63",
  storageBucket: "medhaquiz-bdd63.firebasestorage.app",
  messagingSenderId: "275249977414",
  appId: "1:275249977414:web:9bd9416f80bb6cf7295247"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app); 

export { 
  app, 
  auth, 
  db, 
  analytics,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail, // নতুন এক্সপোর্ট
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
  serverTimestamp 
};
