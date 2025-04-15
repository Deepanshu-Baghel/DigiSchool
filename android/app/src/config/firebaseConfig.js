import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgHywJb3IKrXKVCN3_kCJdaOQbnMstJ9k",
  authDomain: "school-management-system-696ec.firebaseapp.com",
  databaseURL: "https://school-management-system-696ec-default-rtdb.firebaseio.com",
  projectId: "school-management-system-696ec",
  storageBucket: "school-management-system-696ec.firebasestorage.app",
  messagingSenderId: "5706827922",
  appId: "1:5706827922:web:34e896781c025509973e4b",
  measurementId: "G-KVB8THYQ1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

