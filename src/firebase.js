// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy28-SKFms0n_1x6hh1GR95ngjkqWKJ5A",
  authDomain: "chat-6d117.firebaseapp.com",
  projectId: "chat-6d117",
  storageBucket: "chat-6d117.appspot.com",
  messagingSenderId: "885711375878",
  appId: "1:885711375878:web:9ae444c975de7cca43bd87"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()