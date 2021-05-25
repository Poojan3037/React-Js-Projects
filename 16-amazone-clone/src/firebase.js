import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCucQbxlUjECub8JOyIhjz96EM-aJo18B0",
    authDomain: "clone-52d09.firebaseapp.com",
    projectId: "clone-52d09",
    storageBucket: "clone-52d09.appspot.com",
    messagingSenderId: "1064883882919",
    appId: "1:1064883882919:web:d0268e2e2113a1b3720482"
  };


  firebase.initializeApp(firebaseConfig);

  export default firebase;