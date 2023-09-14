import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCINdoltlPeQkykMZ6pKCMeKyTs1282POg",
  authDomain: "deorigen-plantshop.firebaseapp.com",
  projectId: "deorigen-plantshop",
  storageBucket: "deorigen-plantshop.appspot.com",
  messagingSenderId: "553788609239",
  appId: "1:553788609239:web:ae5a0f75e7242921c61692",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//FIRESTORE
export const db = getFirestore(app);

//AUTH
const auth = getAuth(app)

//login with email & password
export const onSignIn = async ({email, password}) =>{

    try{
        const res = await signInWithEmailAndPassword(auth, email, password)
        return res
    }catch(error){
        console.log(error)
    }
   
}

//logout
export const logout = ()=>{
    signOut(auth)
    console.log("logout")
}

//login woth google
let googleProvider = new GoogleAuthProvider()

export const loginGoogle = async ()=>{
    try {
        const res = await signInWithPopup(auth, googleProvider);
        return res; 
    } catch (error) {
        console.log(error)
    }  
}

//register
export const register = async({email, password})=>{
    try {
        let res = await createUserWithEmailAndPassword(auth, email, password);
        return res;
    } catch (error) {
        console.log(error)
    }
}

//forgot password
export const forgotPassword =async(email)=>{
    let res = sendPasswordResetEmail(auth, email)
    return res
}
