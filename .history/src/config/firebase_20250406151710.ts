import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, setConsent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAL9JbTZGhki0ABiz9cPTQLDkLZQCHuj3s",
  authDomain: "kazi-bookstore.firebaseapp.com",
  projectId: "kazi-bookstore",
  storageBucket: "kazi-bookstore.firebasestorage.app",
  messagingSenderId: "235704914239",
  appId: "1:235704914239:web:cb977d6ec415ed6fefc38a",
  measurementId: "G-2MEXKXFCCD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Analytics with consent
const analytics = getAnalytics(app);
setConsent({
  analytics_storage: "granted",
  ad_storage: "denied",
  functionality_storage: "granted",
  personalization_storage: "denied",
  security_storage: "granted",
});

export { analytics };