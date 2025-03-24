// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDqdQX9HHXoD-8nJuf3buTC0zyDp3RZ360",
  authDomain: "swiggy-3382.firebaseapp.com",
  projectId: "swiggy-3382",
  storageBucket: "swiggy-3382.firebasestorage.app",
  messagingSenderId: "561947029048",
  appId: "1:561947029048:web:08268acb8c9523150bc0cd",
  measurementId: "G-G3C304WHTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ Make sure this line exists

const analytics = getAnalytics(app);

// Export `auth`
export { auth };
export default app;
