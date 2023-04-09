import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDaichXXIiobR9zV2QfcQCegxsfTPHvalM",
    authDomain: "nwitter-94a85.firebaseapp.com",
    projectId: "nwitter-94a85",
    storageBucket: "nwitter-94a85.appspot.com",
    messagingSenderId: "590745384409",
    appId: "1:590745384409:web:cc0dd3364f58960e4e95c8"
  };
  
// const app = initializeApp(firebaseConfig);

export default firebase.initializeApp(firebaseConfig)