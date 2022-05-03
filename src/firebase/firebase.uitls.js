import firebase from 'firebase/compat/app';
import "firebase/compat/firestore"
// import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBMASVGekTM_jnvM1tqzPHdMTHXzwzB32I",
  authDomain: "e-commerce-f2259.firebaseapp.com",
  projectId: "e-commerce-f2259",
  storageBucket: "e-commerce-f2259.appspot.com",
  messagingSenderId: "174187542002",
  appId: "1:174187542002:web:d01aee0d6f6e73337c276b",
  measurementId: "G-6XZPY9BQ45"
}; 

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore=firebase.firestore()




const provider = new GoogleAuthProvider();


export const auths = auth

export const googleAuth = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

export const createUserProfileDocument = async (userAuth, AdditionnalData) => {
  if (!userAuth) return 

  //get user document 
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  //get user doc state
  const snapshot = await userRef.get()
  
  //create user doc if doesn't exist
  if (!snapshot.exists){
    const { displayName, email } = userAuth
    const creationDate=new Date()
    try {
      userRef.set({
        displayName,
        email,
        creationDate,
        ...AdditionnalData
      })
     

    }
    catch (error) {
      console.log(error.message)
    }
  }
  
  return userRef
}  
  







