import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFBS40KjT4zBIc6bS2YD-gQOavWlz2aRk",
  authDomain: "easycare-bd7a4.firebaseapp.com",
  projectId: "easycare-bd7a4",
  storageBucket: "easycare-bd7a4.appspot.com",
  messagingSenderId: "485695445000",
  appId: "1:485695445000:web:16ec065a6997973275d9bd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
