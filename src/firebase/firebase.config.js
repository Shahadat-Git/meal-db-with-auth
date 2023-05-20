// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkIgn_GG-_tYD3vkgJAPMxdCy7XxYEEMU",
    authDomain: "meal-db-with-auth.firebaseapp.com",
    projectId: "meal-db-with-auth",
    storageBucket: "meal-db-with-auth.appspot.com",
    messagingSenderId: "719203580408",
    appId: "1:719203580408:web:4dcbb1b5d9f021982cbe0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;