// import {initializeApp} from "firebase/app";

const {initializeApp} = require('firebase/app');

const firebaseConfig = {
    apiKey: "AIzaSyAwoV5z2HP_yQknwWAZmU1ZZSDKqizOnKc",
    authDomain: "voguegenie-asu.firebaseapp.com",
    projectId: "voguegenie-asu",
    storageBucket: "voguegenie-asu.appspot.com",
    messagingSenderId: "437616771983",
    appId: "1:437616771983:web:158ae5d14038c086a401fa",
    measurementId: "G-5CMTPW8ML1"
};

const app = initializeApp(firebaseConfig);
module.exports = app;