import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vector-ide.firebaseapp.com",
  projectId: "vector-ide",
  storageBucket: "vector-ide.firebasestorage.app",
  messagingSenderId: "437522563705",
  appId: "1:437522563705:web:7df7a2bb48dccc406a0aa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()