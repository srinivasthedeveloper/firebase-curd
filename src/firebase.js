import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBIDsImfa-MSrf9bS30yBI0EsJ3fgye_b0",
  authDomain: "pollachivoters19.firebaseapp.com",
  databaseURL: "https://pollachivoters19-default-rtdb.firebaseio.com",
  projectId: "pollachivoters19",
  storageBucket: "pollachivoters19.appspot.com",
  messagingSenderId: "229838339319",
  appId: "1:229838339319:web:b980e8215b1098fd5a67f2",
  measurementId: "G-NT2R30GFK6"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}