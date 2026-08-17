import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, getDoc, setDoc, doc, deleteDoc, updateDoc, query, orderBy, where, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-functions.js";

const firebaseConfig = {
  projectId: "itl-bright-smile-web",
  appId: "1:292390947245:web:2b646fccba428e1d0d7924",
  storageBucket: "itl-bright-smile-web.firebasestorage.app",
  apiKey: "AIzaSyDeMOtw0xlcp4pEhO026ElZqZWNVXHuHXs",
  authDomain: "itl-bright-smile-web.firebaseapp.com",
  messagingSenderId: "292390947245",
  projectNumber: "292390947245"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions, signInWithEmailAndPassword, onAuthStateChanged, signOut, collection, addDoc, getDocs, getDoc, setDoc, doc, deleteDoc, updateDoc, query, orderBy, where, serverTimestamp, httpsCallable };
