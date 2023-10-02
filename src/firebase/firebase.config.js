// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey:process.env.REACT_APP_apiKey,
//     authDomain:process.env.REACT_APP_authDomain,
//     projectId:process.env.REACT_APP_projectId,
//     storageBucket:process.env.REACT_APP_storageBucket,
//     messagingSenderId:process.env.REACT_APP_messagingSenderId,
//     appId:process.env.REACT_APP_appId,
// };
const firebaseConfig = {
    apiKey: "AIzaSyA9cb13T2eTiJT5XeLGOd4DIURq3-o7T_E",
    authDomain: "car-service-79cf2.firebaseapp.com",
    projectId: "car-service-79cf2",
    storageBucket: "car-service-79cf2.appspot.com",
    messagingSenderId: "68052619753",
    appId: "1:68052619753:web:f3c435f96fa2eda75dbb78"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);