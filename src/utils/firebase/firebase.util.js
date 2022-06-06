
   
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBP-W2cJ6nv7OgZ2hpsfezNNOJPkjaVwxo",
  authDomain: "crwn-clothing-cb792.firebaseapp.com",
  projectId: "crwn-clothing-cb792",
  storageBucket: "crwn-clothing-cb792.appspot.com",
  messagingSenderId: "369879003551",
  appId: "1:369879003551:web:f9936ff3995e9d1fd3cdaa",
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInwithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFormAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef)
  console.log(userSnapShot);

  if(!userSnapShot.exists()) {
    const {displayName, email } = userAuth;
    const createdAt = new Date()

    try {
      await setDoc(userDocRef , {
        displayName,
        email,
        createdAt
      });
    } catch(error) {
      console.log('error',error.message);
    }
  }
  return userDocRef;
};
