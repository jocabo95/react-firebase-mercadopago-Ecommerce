import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCINdoltlPeQkykMZ6pKCMeKyTs1282POg",
  authDomain: "deorigen-plantshop.firebaseapp.com",
  projectId: "deorigen-plantshop",
  storageBucket: "deorigen-plantshop.appspot.com",
  messagingSenderId: "553788609239",
  appId: "1:553788609239:web:ae5a0f75e7242921c61692"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//FIRESTORE
export const db = getFirestore(app)


// AUTH
