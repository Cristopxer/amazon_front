import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCG22sUmDtTgqwQLsU2UXU7ncWyRWbBsYM",
  authDomain: "clone-1b96d.firebaseapp.com",
  projectId: "clone-1b96d",
  storageBucket: "clone-1b96d.appspot.com",
  messagingSenderId: "542078029560",
  appId: "1:542078029560:web:bb9288b2bea2374e39750d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

export { auth };
