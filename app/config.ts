// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDL8Tn-PmgucEv1g5CX7CGY9rm3UkEXjIs",
  authDomain: "cyber-world-test.firebaseapp.com",
  projectId: "cyber-world-test",
  storageBucket: "cyber-world-test.appspot.com",
  messagingSenderId: "230573064534",
  appId: "1:230573064534:web:70bf2796012ef039c1d6f7",
  measurementId: "G-ER9J3LRG3J"
};

const app = initializeApp(firebaseConfig);
 export {app}