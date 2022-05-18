// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDf04jMM8jzW_c2ZEB1XeBD0MUGxwHv60o",
    authDomain: "jersea-inv-man.firebaseapp.com",
    projectId: "jersea-inv-man",
    storageBucket: "jersea-inv-man.appspot.com",
    messagingSenderId: "673177007649",
    appId: "1:673177007649:web:99466d8f0ac9a9c3ebd560"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;