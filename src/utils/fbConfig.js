import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3CNX-bkOGtjkWbMyiuzu1zqgp-s1mzJU",
  authDomain: "halfsemtelemedecine.firebaseapp.com",
  projectId: "halfsemtelemedecine",
  storageBucket: "halfsemtelemedecine.appspot.com",
  messagingSenderId: "894837473511",
  appId: "1:894837473511:web:298fd6002702544dace242",
  measurementId: "G-P5HDC7VQ67",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
