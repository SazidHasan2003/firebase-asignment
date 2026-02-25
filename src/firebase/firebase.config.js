import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjmdsCeDLWSPWjaRaKt6SiOqZSQa2HsGQ",
  authDomain: "fir-auth-system-732d0.firebaseapp.com",
  projectId: "fir-auth-system-732d0",
  storageBucket: "fir-auth-system-732d0.firebasestorage.app",
  messagingSenderId: "863828990864",
  appId: "1:863828990864:web:45828574a09c34280ff115",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);
