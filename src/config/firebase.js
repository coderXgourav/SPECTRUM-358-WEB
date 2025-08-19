// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGeLzXJ46Lcuu23j8X6VWapYkaSkkhklk",
  authDomain: "spectrum358-b18c5.firebaseapp.com",
  projectId: "spectrum358-b18c5",
  storageBucket: "spectrum358-b18c5.appspot.com",
  messagingSenderId: "311252039544",
  appId: "1:311252039544:web:39d62a5966eecaeec37a8d",
  measurementId: "G-0SRWM45ZV4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export Firebase services
export { auth, db, storage, analytics };
export default app;
