import dotenv from 'dotenv';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
dotenv.config();

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "parts-store-6b3fd.firebaseapp.com",
    databaseURL: "https://parts-store-6b3fd.firebaseio.com",
    projectId: "parts-store-6b3fd",
    storageBucket: "",
    messagingSenderId: "700832999667",
    appId: "1:700832999667:web:e8c8e7705e0a8e4d"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => auth.signInWithPopup(provider);

export {
    auth,
    firestore,
    signInWithGoogle,
    firebase
}