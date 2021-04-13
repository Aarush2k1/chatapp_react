import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC0_k9_SKEYPwBnc6HOxyOhHJOB-0BggHg",
  authDomain: "chatapp-7b26c.firebaseapp.com",
  projectId: "chatapp-7b26c",
  storageBucket: "chatapp-7b26c.appspot.com",
  messagingSenderId: "578435569576",
  appId: "1:578435569576:web:917c5038b307df95412f9d",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
