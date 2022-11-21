import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth"

import {getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCGT79F-Ndc47RNIV84JyRT1M1wM3el6pE",
  authDomain: "outdoor-adventures-db-b6f43.firebaseapp.com",
  projectId: "outdoor-adventures-db-b6f43",
  storageBucket: "outdoor-adventures-db-b6f43.appspot.com",
  messagingSenderId: "261007135939",
  appId: "1:261007135939:web:31c5d1cb4f53f76decfe76",
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
const userDocRef = doc(db, 'users', userAuth.uid);
//doc takes 3 arguments the database, collections, some identifier (unique id)
//uid can be found inside the object of data that firebase provides.

console.log(userDocRef)
const userSnapshot = await getDoc(userDocRef);
console.log(userSnapshot)
console.log(userSnapshot.exists())

// if userData doesn't exist
//create / set the document with data from userAuth in my collection.

//if user data exists
//return userDocRef

}