import { initializeApp } from "firebase/app";
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

const app = initializeApp(firebaseConfig);
const auth= getAuth(app)

const provider = new GoogleAuthProvider();


export const auths=auth
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




// export const firestore = firebase.firestore()

