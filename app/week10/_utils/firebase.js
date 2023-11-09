
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3de9d_q9p6MkhvhMaeQH8-1aAqGaBOiw",
  authDomain: "cprg306-assignment-2b2cb.firebaseapp.com",
  projectId: "cprg306-assignment-2b2cb",
  storageBucket: "cprg306-assignment-2b2cb.appspot.com",
  messagingSenderId: "383001135552",
  appId: "1:383001135552:web:085b2c0aa6db77bf752025"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Add this line to initialize Firestore

export { auth, db }; // Export the Firestore database instance along with auth

