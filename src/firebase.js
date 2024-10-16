import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDiFVQ9mfmrDWPSTtspqyZrPrumPn6oCv0",
  authDomain: "priceoye-66ee0.firebaseapp.com",
  projectId: "priceoye-66ee0",
  storageBucket: "priceoye-66ee0.appspot.com",
  messagingSenderId: "429937219163",
  appId: "1:429937219163:web:7c19a173e1485c7a90d17e",
  measurementId: "G-5P1WE6LV5Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
