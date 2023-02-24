// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1e_YphJnDtnGfxiJ6Jrzf99N-OHCg3xA",
    authDomain: "thatserver.firebaseapp.com",
    projectId: "thatserver",
    storageBucket: "thatserver.appspot.com",
    messagingSenderId: "484732996848",
    appId: "1:484732996848:web:7aba301b28bdcdf4f4c635"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
