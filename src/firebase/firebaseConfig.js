import firebase from 'firebase/app';
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDxW5tI2iknKtlMcaV8NzMgJz4ZqQBXYms",
  authDomain: "bankingsystem-5a4e9.firebaseapp.com",
  databaseURL: "https://bankingsystem-5a4e9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bankingsystem-5a4e9",
  storageBucket: "bankingsystem-5a4e9.appspot.com",
  messagingSenderId: "506574103671",
  appId: "1:506574103671:web:e1c2725f88008237849272"
};

firebase.initializeApp(firebaseConfig);
/*const rtdb = firebase.database();
rtdb.ref().set({
  name: 'Vipin Maurya',
  email: 'vmaurya@es.iitr.ac.in',
  balance: 10000
});*/

const db = firebase.firestore();
export default db;