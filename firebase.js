// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv7TR7vg4YgARl4hsMn91wi39gVI-wGL8",
  authDomain: "task-management-ca0ed.firebaseapp.com",
  projectId: "task-management-ca0ed",
  storageBucket: "task-management-ca0ed.appspot.com",
  messagingSenderId: "523686233039",
  appId: "1:523686233039:web:0b84d983e73dda305308ba",
  measurementId: "G-N200HJGQVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);