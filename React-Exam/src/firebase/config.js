import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDsn3lyq9t9HPaAS6te1UoGLXCjskD1eaI",
    authDomain: "react-exam-a280d.firebaseapp.com",
    projectId: "react-exam-a280d",
    storageBucket: "react-exam-a280d.firebasestorage.app",
    messagingSenderId: "568665868900",
    appId: "1:568665868900:web:43fd14503e003592492d71",
    measurementId: "G-Q1BNKDLB3R"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);