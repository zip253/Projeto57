import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCg70rznMyrB4lXsP-1BbRZS00RtDKn_XI",
  authDomain: "projeto-c71-a5cf0.firebaseapp.com",
  projectId: "projeto-c71-a5cf0",
  storageBucket: "projeto-c71-a5cf0.appspot.com",
  messagingSenderId: "120958826523",
  appId: "1:120958826523:web:db8f1d5f75591aa28de0be"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
