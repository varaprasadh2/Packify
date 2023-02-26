// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    documentId,
} from "firebase/firestore";

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

export const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
                avatar: user.photoURL
            });
        }
        return user;
    } catch (err) {
        console.error(err);
        // show toaster
    }
};

export const logout = () => {
    signOut(auth);
};

export const saveReportToHistory = async ({ name, report }) => {
    try {
        if (name.trim() == '') throw new Error("Name can't be empty");
        const userId = auth.currentUser.uid;
        const docResult = await addDoc(collection(db, "loadPlans"), {
            userId: userId,
            name: name,
            report: JSON.parse(JSON.stringify(report)),
        });
        return docResult;
    } catch (error) {
        console.error(error);
        // show toaster
        return null;
    }
}

export const getSaveLoadPlans = async () => {
    const userId = auth.currentUser.uid;
    const q = query(collection(db, "loadPlans"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
}

export const getLoadPlanInfo = async (id) => {
    const q = query(collection(db, "loadPlans"), where(documentId(), "==", id));
    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
    if (results.length == 0) return null;
    return results[0];
}

export default app;
