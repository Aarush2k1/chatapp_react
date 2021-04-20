import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyC0_k9_SKEYPwBnc6HOxyOhHJOB-0BggHg",
  authDomain: "chatapp-7b26c.firebaseapp.com",
  projectId: "chatapp-7b26c",
  storageBucket: "chatapp-7b26c.appspot.com",
  messagingSenderId: "578435569576",
  appId: "1:578435569576:web:917c5038b307df95412f9d",
});

const provider = new firebase.auth.GoogleAuthProvider();

export { provider };
export default firebaseConfig;
