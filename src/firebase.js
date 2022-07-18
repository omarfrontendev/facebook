import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD8lzcPiauFjovtWmCJ1Te-ERN1ZRg-70s",
  authDomain: "facebookauth-98a65.firebaseapp.com",
  projectId: "facebookauth-98a65",
  storageBucket: "facebookauth-98a65.appspot.com",
  messagingSenderId: "250764459371",
  appId: "1:250764459371:web:b009fc0a18aaf84b85e02e",
  measurementId: "G-PFY6D1800V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
