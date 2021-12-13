import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyAlduT8AxMjSOYILJVZ3xLWjujQQigTMyI",
  authDomain: "react-chat-cd96f.firebaseapp.com",
  databaseURL:
    "https://react-chat-cd96f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-chat-cd96f",
  storageBucket: "react-chat-cd96f.appspot.com",
  messagingSenderId: "80964605085",
  appId: "1:80964605085:web:a489c3335812b92aa73074",
  measurementId: "${config.measurementId}",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.database();
