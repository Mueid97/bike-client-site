// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrVxdbbCdCGnPBeZ-E586zgaUxFmsSEfA",
  authDomain: "bikers-app-bd218.firebaseapp.com",
  projectId: "bikers-app-bd218",
  storageBucket: "bikers-app-bd218.appspot.com",
  messagingSenderId: "1063772480209",
  appId: "1:1063772480209:web:9ebcfb0244bc7d7c4a9bf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;