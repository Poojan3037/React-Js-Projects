import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBYDcAy5S4P3RV6zJuhcPaYrtn9RIQ7slE",
    authDomain: "fir-redux-demo.firebaseapp.com",
    projectId: "fir-redux-demo",
    storageBucket: "fir-redux-demo.appspot.com",
    messagingSenderId: "804355154477",
    appId: "1:804355154477:web:f9614f67ced245cccacea4"
};


const appCofig = initializeApp(firebaseConfig);
export const db = getFirestore(appCofig);

export default appCofig;