import {initializeApp} from 'firebase/app'

import {getAuth} from "firebase/auth"

// const firebaseConfig = {
//     apiKey: "AIzaSyAwoV5z2HP_yQknwWAZmU1ZZSDKqizOnKc",
//     authDomain: "voguegenie-asu.firebaseapp.com",
//     projectId: "voguegenie-asu",
//     storageBucket: "voguegenie-asu.appspot.com",
//     messagingSenderId: "437616771983",
//     appId: "1:437616771983:web:158ae5d14038c086a401fa",
//     measurementId: "G-5CMTPW8ML1"
// };

const firebaseConfig = {
    apiKey: "AIzaSyAx0RlNjMpzlIDPLCTfqbUxZYxhV2E2QZI",
    authDomain: "sih-project-399420.firebaseapp.com",
    projectId: "sih-project-399420",
    storageBucket: "sih-project-399420.appspot.com",
    messagingSenderId: "2286151139",
    appId: "1:2286151139:web:198d92583a3d80df57acd6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

