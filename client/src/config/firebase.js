import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "full-stack-task-main.firebaseapp.com",
  projectId: "full-stack-task-main",
  storageBucket: "full-stack-task-main.appspot.com",
  messagingSenderId: "878159858856",
  appId: "1:878159858856:web:c551b1144e741b9c3e469d",
  measurementId: "G-T0SLP9JQC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);

export {app,auth,provider}