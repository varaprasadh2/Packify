import { Navigate,Outlet } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../firebase';
import Loader from '../../components/Loader/Index'
import { useEffect, useState } from "react";

const AuthComponent = () =>{
    const [showLoader, setShowLoader] = useState(true);
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        console.log("debug", {loading});
        if (loading) return;
        const timer = setTimeout(() => setShowLoader(false), 3000);
        return () => clearTimeout(timer);
    }, [loading]);
    return showLoader ? <Loader /> : user ? <Outlet /> : <Navigate to="/" />;
};

export default AuthComponent;