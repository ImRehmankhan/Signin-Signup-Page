import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBZXzshGiMmU0VV9BRQ-xJNeX6reKsshLk",
  authDomain: "todo-82a6a.firebaseapp.com",
  projectId: "todo-82a6a",
  storageBucket: "todo-82a6a.appspot.com",
  messagingSenderId: "849108318200",
  appId: "1:849108318200:web:d0eb18ad93f3b1c4dd880d"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

 

